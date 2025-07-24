import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Music, MessageCircle, Users, Zap } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface VibeCompatibilityScore {
  overallScore: number;
  breakdown: {
    vibeAlignment: number;
    relationshipCompatibility: number;
    plurValues: number;
    musicTaste: number;
    communicationStyle: number;
  };
  explanation: string;
  connectionPotential: 'high' | 'medium' | 'low';
  recommendedApproach: string;
}

interface VibeCompatibilityProps {
  userId: string;
  userName: string;
  onClose?: () => void;
}

export default function VibeCompatibility({ userId, userName, onClose }: VibeCompatibilityProps) {
  const [compatibility, setCompatibility] = useState<VibeCompatibilityScore | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompatibility = async () => {
      try {
        setLoading(true);
        const response = await apiRequest('GET', `/api/vibe-compatibility/${userId}`);
        const compatibilityData = await response.json();
        setCompatibility(compatibilityData);
        setError(null);
      } catch (err) {
        console.error('Error fetching vibe compatibility:', err);
        setError('Failed to calculate compatibility. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCompatibility();
  }, [userId]);

  if (loading) {
    return (
      <Card className="glassmorphism border-neon-blue/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="w-6 h-6 text-neon-blue animate-spin" />
            <span className="text-white">Analyzing vibe compatibility...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !compatibility) {
    return (
      <Card className="glassmorphism border-red-500/20">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-red-400 mb-4">{error || 'Unable to calculate compatibility'}</p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
            >
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-400";
    if (score >= 50) return "text-yellow-400";
    return "text-orange-400";
  };

  const getProgressColor = (score: number) => {
    if (score >= 70) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const getPotentialIcon = (potential: string) => {
    switch (potential) {
      case 'high': return <Heart className="w-5 h-5 text-red-400" />;
      case 'medium': return <Zap className="w-5 h-5 text-yellow-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <Card className="glassmorphism border-neon-purple/30 max-w-2xl mx-auto">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Sparkles className="w-6 h-6 text-neon-purple" />
          <CardTitle className="text-2xl font-bold text-white">
            Vibe Compatibility
          </CardTitle>
        </div>
        <p className="text-gray-300">with {userName}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Overall Score */}
        <div className="text-center">
          <div className={`text-4xl font-bold mb-2 ${getScoreColor(compatibility.overallScore)}`}>
            {compatibility.overallScore}%
          </div>
          <div className="flex items-center justify-center space-x-2 mb-3">
            {getPotentialIcon(compatibility.connectionPotential)}
            <Badge 
              variant="outline" 
              className={`capitalize ${
                compatibility.connectionPotential === 'high' 
                  ? 'border-green-500 text-green-400' 
                  : compatibility.connectionPotential === 'medium'
                  ? 'border-yellow-500 text-yellow-400'
                  : 'border-blue-500 text-blue-400'
              }`}
            >
              {compatibility.connectionPotential} potential
            </Badge>
          </div>
          <Progress 
            value={compatibility.overallScore} 
            className="h-3 mb-4"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
          />
        </div>

        {/* Explanation */}
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <p className="text-gray-200 text-center leading-relaxed">
            {compatibility.explanation}
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
            <Zap className="w-5 h-5 text-neon-blue" />
            <span>Compatibility Breakdown</span>
          </h3>
          
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-neon-pink" />
                <span className="text-gray-300">Vibe Alignment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={compatibility.breakdown.vibeAlignment} className="w-20 h-2" />
                <span className={`text-sm font-medium ${getScoreColor(compatibility.breakdown.vibeAlignment)}`}>
                  {compatibility.breakdown.vibeAlignment}%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-neon-purple" />
                <span className="text-gray-300">Relationship Style</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={compatibility.breakdown.relationshipCompatibility} className="w-20 h-2" />
                <span className={`text-sm font-medium ${getScoreColor(compatibility.breakdown.relationshipCompatibility)}`}>
                  {compatibility.breakdown.relationshipCompatibility}%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-neon-blue" />
                <span className="text-gray-300">PLUR Values</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={compatibility.breakdown.plurValues} className="w-20 h-2" />
                <span className={`text-sm font-medium ${getScoreColor(compatibility.breakdown.plurValues)}`}>
                  {compatibility.breakdown.plurValues}%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Music className="w-4 h-4 text-electric-blue" />
                <span className="text-gray-300">Music Taste</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={compatibility.breakdown.musicTaste} className="w-20 h-2" />
                <span className={`text-sm font-medium ${getScoreColor(compatibility.breakdown.musicTaste)}`}>
                  {compatibility.breakdown.musicTaste}%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-neon-green" />
                <span className="text-gray-300">Communication</span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={compatibility.breakdown.communicationStyle} className="w-20 h-2" />
                <span className={`text-sm font-medium ${getScoreColor(compatibility.breakdown.communicationStyle)}`}>
                  {compatibility.breakdown.communicationStyle}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Approach */}
        <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-lg p-4 border border-neon-blue/20">
          <h4 className="font-semibold text-white mb-2 flex items-center space-x-2">
            <MessageCircle className="w-4 h-4 text-neon-blue" />
            <span>How to Connect</span>
          </h4>
          <p className="text-gray-200 text-sm leading-relaxed">
            {compatibility.recommendedApproach}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <Button 
            className="flex-1 bg-gradient-to-r from-neon-blue to-electric-blue hover:shadow-lg hover:shadow-neon-blue/50"
            onClick={() => {
              // This would trigger liking the user
              console.log('Like user clicked');
            }}
          >
            <Heart className="w-4 h-4 mr-2" />
            Connect
          </Button>
          {onClose && (
            <Button 
              variant="outline" 
              onClick={onClose}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Close
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}