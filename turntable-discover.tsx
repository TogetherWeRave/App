import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, X, MapPin, Music } from "lucide-react";
import type { User } from "@shared/schema";

interface TurntableDiscoverProps {
  user: User;
  onLike: () => void;
  onReject: () => void;
  onViewProfile: () => void;
}

export default function TurntableDiscover({ user, onLike, onReject, onViewProfile }: TurntableDiscoverProps) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showFeedback, setShowFeedback] = useState<'like' | 'nope' | null>(null);
  const turntableRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startAngle = useRef(0);
  const currentAngle = useRef(0);
  const centerX = useRef(0);
  const centerY = useRef(0);

  useEffect(() => {
    if (turntableRef.current) {
      const rect = turntableRef.current.getBoundingClientRect();
      centerX.current = rect.left + rect.width / 2;
      centerY.current = rect.top + rect.height / 2;
    }
  }, []);

  const calculateAngle = (clientX: number, clientY: number) => {
    const dx = clientX - centerX.current;
    const dy = clientY - centerY.current;
    return Math.atan2(dy, dx) * (180 / Math.PI);
  };

  const handleStart = (clientX: number, clientY: number) => {
    if (isSpinning) return;
    isDragging.current = true;
    startAngle.current = calculateAngle(clientX, clientY) - currentAngle.current;
    
    if (turntableRef.current) {
      const rect = turntableRef.current.getBoundingClientRect();
      centerX.current = rect.left + rect.width / 2;
      centerY.current = rect.top + rect.height / 2;
    }
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging.current || isSpinning) return;
    
    const angle = calculateAngle(clientX, clientY);
    const newRotation = angle - startAngle.current;
    currentAngle.current = newRotation;
    setRotation(newRotation);

    // Show feedback based on rotation
    if (newRotation > 30) {
      setShowFeedback('like');
    } else if (newRotation < -30) {
      setShowFeedback('nope');
    } else {
      setShowFeedback(null);
    }
  };

  const handleEnd = () => {
    if (!isDragging.current || isSpinning) return;
    isDragging.current = false;

    // Determine action based on rotation
    if (currentAngle.current > 45) {
      // Spin right - Like
      setIsSpinning(true);
      const targetRotation = currentAngle.current + 360;
      setRotation(targetRotation);
      
      setTimeout(() => {
        onLike();
        setIsSpinning(false);
        setRotation(0);
        currentAngle.current = 0;
        setShowFeedback(null);
      }, 800);
    } else if (currentAngle.current < -45) {
      // Spin left - Reject
      setIsSpinning(true);
      const targetRotation = currentAngle.current - 360;
      setRotation(targetRotation);
      
      setTimeout(() => {
        onReject();
        setIsSpinning(false);
        setRotation(0);
        currentAngle.current = 0;
        setShowFeedback(null);
      }, 800);
    } else {
      // Return to center
      setRotation(0);
      currentAngle.current = 0;
      setShowFeedback(null);
    }
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Global mouse events
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        handleMove(e.clientX, e.clientY);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging.current) {
        handleEnd();
      }
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="relative max-w-md mx-auto">
      {/* User Info Card */}
      <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 mb-4">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">
              {user.username ? `@${user.username}` : `${user.firstName} ${user.lastName}`}
              {user.age && <span className="text-purple-400 font-normal">, {user.age}</span>}
            </h3>
            <div className="text-2xl font-bold text-green-400">
              90% match
            </div>
          </div>
          
          {user.location && (
            <p className="text-gray-300 text-sm flex items-center mb-2">
              <MapPin className="w-3 h-3 mr-1" />
              {user.location}
            </p>
          )}
          
          {user.bio && (
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {user.bio}
            </p>
          )}
          
          {/* Music Preferences */}
          {user.musicPreferences && user.musicPreferences.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {user.musicPreferences.slice(0, 3).map((genre: string) => (
                <Badge
                  key={genre}
                  variant="outline"
                  className="border-purple-500/50 text-purple-300 text-xs bg-purple-500/10"
                >
                  <Music className="w-3 h-3 mr-1" />
                  {genre}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Turntable */}
      <div className="relative">
        {/* Feedback indicators */}
        <div className={`absolute -top-8 left-1/2 -translate-x-1/2 transition-opacity duration-200 ${showFeedback === 'like' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold shadow-lg">
            Like
          </div>
        </div>
        <div className={`absolute -top-8 left-1/2 -translate-x-1/2 transition-opacity duration-200 ${showFeedback === 'nope' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-red-500 text-white px-6 py-2 rounded-full font-bold shadow-lg">
            Nope
          </div>
        </div>

        {/* Turntable Container */}
        <div className="relative w-80 h-80 mx-auto">
          {/* Turntable Base */}
          <div className="absolute inset-0 bg-gray-900 rounded-full shadow-2xl" />
          
          {/* Spinning Platter */}
          <div
            ref={turntableRef}
            className={`absolute inset-2 bg-gray-800 rounded-full cursor-grab active:cursor-grabbing ${isSpinning ? 'transition-transform duration-700 ease-out' : ''}`}
            style={{ transform: `rotate(${rotation}deg)` }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Vinyl Record Grooves */}
            <div className="absolute inset-4 rounded-full border border-gray-700" />
            <div className="absolute inset-8 rounded-full border border-gray-700" />
            <div className="absolute inset-12 rounded-full border border-gray-700" />
            
            {/* Center Label with User Photo */}
            <div className="absolute inset-16 bg-gray-900 rounded-full overflow-hidden shadow-inner">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src={user.profileImageUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl bg-gray-700">
                  {user.firstName?.[0] || user.email?.[0] || '?'}
                </AvatarFallback>
              </Avatar>
              
              {/* Center Spindle */}
              <div className="absolute inset-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-gray-900 rounded-full shadow-lg" />
            </div>
            
            {/* Record Shine Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Tone Arm */}
          <div className="absolute top-4 right-4 w-32 h-1 bg-gray-600 origin-left transform rotate-12 pointer-events-none">
            <div className="absolute right-0 w-6 h-6 -mt-2.5 bg-gray-500 rounded-full shadow-lg" />
            <div className="absolute right-1 w-4 h-4 -mt-1.5 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-8 mt-8">
        <Button
          onClick={onReject}
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full border-2 border-red-500 hover:bg-red-500/20 hover:border-red-400 transition-all"
          disabled={isSpinning}
        >
          <X className="w-6 h-6 text-red-500" />
        </Button>
        
        <Button
          onClick={onViewProfile}
          variant="outline"
          className="px-6 py-3 border-gray-600 hover:bg-gray-800 text-gray-300"
          disabled={isSpinning}
        >
          View profile
        </Button>
        
        <Button
          onClick={onLike}
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full border-2 border-green-500 hover:bg-green-500/20 hover:border-green-400 transition-all"
          disabled={isSpinning}
        >
          <Heart className="w-6 h-6 text-green-500" />
        </Button>
      </div>

      {/* Instructions */}
      <p className="text-center text-gray-500 text-sm mt-4">
        Turn the record right to like, left to pass
      </p>
    </div>
  );
}