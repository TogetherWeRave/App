import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Send, Circle, ArrowLeft } from "lucide-react";
import type { Match, Message, User } from "@shared/schema";

interface ChatInterfaceProps {
  match: Match;
  currentUser: User;
  websocket: WebSocket | null;
  onBack?: () => void;
}

export default function ChatInterface({ match, currentUser, websocket, onBack }: ChatInterfaceProps) {
  const [messageInput, setMessageInput] = useState("");
  const [newMessages, setNewMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: messages = [], isLoading } = useQuery({
    queryKey: ['/api/matches', match.id, 'messages'],
    enabled: !!match,
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (content: string) => {
      const response = await apiRequest('POST', `/api/matches/${match.id}/messages`, { content });
      return response.json();
    },
    onSuccess: (newMessage) => {
      setMessageInput("");
      setNewMessages(prev => [...prev, newMessage]);
      
      // Send via WebSocket for real-time delivery
      if (websocket && websocket.readyState === WebSocket.OPEN) {
        websocket.send(JSON.stringify({
          type: 'chat_message',
          data: {
            matchId: match.id,
            senderId: currentUser.id,
            content: newMessage.content,
            sentAt: newMessage.sentAt,
          }
        }));
      }
      
      queryClient.invalidateQueries({ queryKey: ['/api/matches', match.id, 'messages'] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    },
  });

  // WebSocket message handling
  useEffect(() => {
    if (!websocket) return;

    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'new_message' && data.matchId === match.id) {
          setNewMessages(prev => [...prev, data]);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    websocket.addEventListener('message', handleMessage);
    return () => websocket.removeEventListener('message', handleMessage);
  }, [websocket, match.id]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, newMessages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    sendMessageMutation.mutate(messageInput.trim());
  };

  const allMessages = [...messages, ...newMessages].sort(
    (a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime()
  );

  // Get the other user in the match
  const otherUserId = match.userId1 === currentUser.id ? match.userId2 : match.userId1;

  // Get the other user's details from the match
  const otherUser = match.userId1 === currentUser.id ? match.user2 : match.user1;

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border">
        {onBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="md:hidden"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <Avatar className="h-10 w-10">
          <AvatarImage src={otherUser?.profileImageUrl || undefined} />
          <AvatarFallback className="bg-primary/10">
            {otherUser?.username 
              ? otherUser.username.charAt(0).toUpperCase()
              : otherUser?.firstName?.charAt(0) || 'M'
            }
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-medium">
            {otherUser?.username ? `@${otherUser.username}` : 
              `${otherUser?.firstName || ''} ${otherUser?.lastName || ''}`.trim() || 'Match'
            }
          </h3>
          {otherUser?.location && (
            <p className="text-xs text-muted-foreground">{otherUser.location}</p>
          )}
        </div>
        {match.status === 'active' && (
          <div className="flex items-center gap-1.5 text-xs text-green-500">
            <Circle className="w-2 h-2 fill-current" />
            Active
          </div>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
          </div>
        ) : allMessages.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            <p className="text-sm">No messages yet</p>
            <p className="text-xs mt-1">Start the conversation!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {allMessages.map((message: Message, index: number) => {
              const isOwn = message.senderId === currentUser.id;
              return (
                <div
                  key={message.id || index}
                  className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] px-3 py-2 rounded-lg ${
                      isOwn
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm break-words">{message.content}</p>
                    <p className={`text-xs mt-1 ${isOwn ? 'opacity-80' : 'text-muted-foreground'}`}>
                      {new Date(message.sentAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
            disabled={sendMessageMutation.isPending}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!messageInput.trim() || sendMessageMutation.isPending}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
