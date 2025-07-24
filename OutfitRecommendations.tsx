import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Heart, Star, ShoppingBag, AlertTriangle, Info } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";

interface OutfitRecommendation {
  category: string;
  items: string[];
  reasoning: string;
  marketplaceMatches: number[];
  totalEstimatedCost: number;
  vibeScore: number;
}

interface OutfitRecommendationResponse {
  eventAnalysis: {
    genre: string;
    vibe: string;
    weatherConsiderations: string;
    venueType: string;
  };
  recommendations: OutfitRecommendation[];
  styleNotes: string[];
  safetyTips: string[];
}

interface OutfitRecommendationsProps {
  eventId: number;
  eventTitle: string;
}

export default function OutfitRecommendations({ eventId, eventTitle }: OutfitRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<OutfitRecommendationResponse | null>(null);
  const { toast } = useToast();

  const generateRecommendationsMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest(`/api/events/${eventId}/outfit-recommendations`, "POST");
    },
    onSuccess: (data: OutfitRecommendationResponse) => {
      setRecommendations(data);
      toast({
        title: "Outfit recommendations generated!",
        description: "AI has analyzed the event and created personalized outfit suggestions.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Failed to generate recommendations",
        description: "There was an error creating your outfit suggestions. Please try again.",
        variant: "destructive",
      });
    },
  });

  const getVibeScoreColor = (score: number) => {
    if (score >= 8) return "bg-green-500";
    if (score >= 6) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getVibeScoreText = (score: number) => {
    if (score >= 8) return "Perfect Match";
    if (score >= 6) return "Good Fit";
    return "Needs Adjustment";
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-neon-blue mb-2">AI Outfit Recommendations</h3>
        <p className="text-gray-400 mb-4">
          Get personalized outfit suggestions based on the event vibe, genre, and available marketplace items
        </p>
        
        <Button
          onClick={() => generateRecommendationsMutation.mutate()}
          disabled={generateRecommendationsMutation.isPending}
          className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {generateRecommendationsMutation.isPending 
            ? "Generating Recommendations..." 
            : "Get AI Outfit Recommendations"
          }
        </Button>
      </div>

      {recommendations && (
        <div className="space-y-6 mt-8">
          {/* Event Analysis */}
          <Card className="bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle className="text-neon-blue flex items-center gap-2">
                <Info className="w-5 h-5" />
                Event Analysis for {eventTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-400">Genre/Vibe:</span>
                  <p className="text-white">{recommendations.eventAnalysis.genre} - {recommendations.eventAnalysis.vibe}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Venue Type:</span>
                  <p className="text-white">{recommendations.eventAnalysis.venueType}</p>
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-400">Weather Considerations:</span>
                <p className="text-white">{recommendations.eventAnalysis.weatherConsiderations}</p>
              </div>
            </CardContent>
          </Card>

          {/* Outfit Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {recommendations.recommendations.map((rec, index) => (
              <Card key={index} className="bg-black/20 border-white/10 hover:border-neon-blue/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-neon-purple">{rec.category}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getVibeScoreColor(rec.vibeScore)}`}></div>
                      <span className="text-xs text-gray-400">{getVibeScoreText(rec.vibeScore)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-300">Vibe Score: {rec.vibeScore}/10</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items List */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Recommended Items:</h4>
                    <ul className="space-y-1">
                      {rec.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-1 h-1 bg-neon-blue rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Marketplace Matches */}
                  {rec.marketplaceMatches.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        Available in Marketplace ({rec.marketplaceMatches.length} items)
                      </h4>
                      <Badge variant="outline" className="text-green-400 border-green-400">
                        ${rec.totalEstimatedCost} estimated cost
                      </Badge>
                    </div>
                  )}

                  <Separator className="bg-white/10" />

                  {/* Reasoning */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Why this works:</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{rec.reasoning}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Style Notes */}
          {recommendations.styleNotes.length > 0 && (
            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle className="text-neon-blue flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Style Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recommendations.styleNotes.map((note, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <div className="w-1 h-1 bg-neon-purple rounded-full mt-2"></div>
                      {note}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Safety Tips */}
          {recommendations.safetyTips.length > 0 && (
            <Card className="bg-black/20 border-yellow-500/20 border">
              <CardHeader>
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Safety Considerations
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Important safety tips for your outfit choices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recommendations.safetyTips.map((tip, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <div className="w-1 h-1 bg-yellow-500 rounded-full mt-2"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}