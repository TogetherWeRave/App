import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle2, Info, RefreshCw, Activity, Users, Heart, Brain, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PersonalSafetyScore {
  id: number;
  userId: string;
  overallScore: number;
  trustScore: number;
  preparednessScore: number;
  behaviorScore: number;
  communityScore: number;
  experienceScore: number;
  calculationVersion: number;
  lastCalculated: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface SafetyScoreFactor {
  id: number;
  userId: string;
  factorType: string;
  factorValue: number;
  weight: number;
  isPositive: boolean;
  expiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

function getScoreColor(score: number): string {
  if (score >= 80) return 'text-green-500 border-green-500';
  if (score >= 60) return 'text-yellow-500 border-yellow-500';
  if (score >= 40) return 'text-orange-500 border-orange-500';
  return 'text-red-500 border-red-500';
}

function getScoreIcon(score: number) {
  if (score >= 80) return <CheckCircle2 className="w-4 h-4" />;
  if (score >= 60) return <Info className="w-4 h-4" />;
  return <AlertTriangle className="w-4 h-4" />;
}

function getScoreLabel(score: number): string {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Fair';
  return 'Needs Improvement';
}

export function SafetyScoreBadge({ userId, compact = false }: { userId: string; compact?: boolean }) {
  const { data: safetyScore, isLoading } = useQuery<PersonalSafetyScore>({
    queryKey: ['/api/safety-score', userId],
    queryFn: async () => {
      const response = await fetch(`/api/safety-score/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch safety score');
      return response.json();
    }
  });

  if (isLoading) {
    return (
      <Badge variant="outline" className="gap-1">
        <Shield className="w-3 h-3" />
        <span>...</span>
      </Badge>
    );
  }

  if (!safetyScore) return null;

  const score = Math.round(safetyScore.overallScore);

  if (compact) {
    return (
      <Badge variant="outline" className={cn("gap-1", getScoreColor(score))}>
        <Shield className="w-3 h-3" />
        <span>{score}</span>
      </Badge>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Shield className={cn("w-4 h-4", getScoreColor(score))} />
      <span className="text-sm font-medium">Safety Score: {score}</span>
      {getScoreIcon(score)}
    </div>
  );
}

export function SafetyScoreDetails({ userId }: { userId: string }) {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [showDetails, setShowDetails] = useState(false);

  const { data: safetyScore, isLoading } = useQuery<PersonalSafetyScore>({
    queryKey: ['/api/safety-score', userId],
    queryFn: async () => {
      const response = await fetch(`/api/safety-score/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch safety score');
      return response.json();
    }
  });

  const { data: factors } = useQuery<SafetyScoreFactor[]>({
    queryKey: ['/api/safety-score/factors', userId],
    queryFn: async () => {
      const response = await fetch(`/api/safety-score/factors/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch safety factors');
      return response.json();
    }
  });

  const calculateMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/safety-score/calculate/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) throw new Error('Failed to calculate safety score');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/safety-score', userId] });
    }
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Safety Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!safetyScore) return null;

  const scoreCategories = [
    { name: 'Trust', score: safetyScore.trustScore, icon: <Heart className="w-4 h-4" />, description: 'Emergency contacts & buddy connections' },
    { name: 'Preparedness', score: safetyScore.preparednessScore, icon: <Activity className="w-4 h-4" />, description: 'Check-ins & safety items' },
    { name: 'Behavior', score: safetyScore.behaviorScore, icon: <Brain className="w-4 h-4" />, description: 'Incident history & conduct' },
    { name: 'Community', score: safetyScore.communityScore, icon: <Users className="w-4 h-4" />, description: 'Vouches & reports filed' },
    { name: 'Experience', score: safetyScore.experienceScore, icon: <Star className="w-4 h-4" />, description: 'Safety training & knowledge' }
  ];

  return (
    <>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowDetails(true)}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Safety Score
            </div>
            {user?.id === userId && (
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  calculateMutation.mutate();
                }}
                disabled={calculateMutation.isPending}
              >
                <RefreshCw className={cn("w-4 h-4", calculateMutation.isPending && "animate-spin")} />
              </Button>
            )}
          </CardTitle>
          <CardDescription>Your personalized safety assessment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className={cn("text-5xl font-bold", getScoreColor(safetyScore.overallScore))}>
              {Math.round(safetyScore.overallScore)}
            </div>
            <Badge variant="outline" className={cn("mt-2", getScoreColor(safetyScore.overallScore))}>
              {getScoreLabel(safetyScore.overallScore)}
            </Badge>
          </div>

          <div className="space-y-3">
            {scoreCategories.map((category) => (
              <div key={category.name} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <span className={cn("font-bold", getScoreColor(category.score))}>
                    {Math.round(category.score)}
                  </span>
                </div>
                <Progress value={category.score} className="h-2" />
              </div>
            ))}
          </div>

          {safetyScore.lastCalculated && (
            <p className="text-xs text-muted-foreground text-center">
              Last updated: {new Date(safetyScore.lastCalculated).toLocaleDateString()}
            </p>
          )}
        </CardContent>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Safety Score Breakdown</DialogTitle>
            <DialogDescription>
              Understanding your safety score components and how to improve them
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className={cn("text-6xl font-bold", getScoreColor(safetyScore.overallScore))}>
                {Math.round(safetyScore.overallScore)}
              </div>
              <Badge variant="outline" className={cn("mt-2", getScoreColor(safetyScore.overallScore))}>
                {getScoreLabel(safetyScore.overallScore)}
              </Badge>
            </div>

            {scoreCategories.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <h3 className="font-semibold">{category.name}</h3>
                  </div>
                  <span className={cn("text-2xl font-bold", getScoreColor(category.score))}>
                    {Math.round(category.score)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
                <Progress value={category.score} className="h-3" />
              </div>
            ))}

            {factors && factors.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold">Active Factors</h3>
                <div className="space-y-2">
                  {factors.map((factor) => (
                    <div key={factor.id} className="flex items-center justify-between p-2 bg-muted rounded">
                      <span className="text-sm">{factor.factorType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                      <Badge variant={factor.isPositive ? "default" : "destructive"}>
                        {factor.isPositive ? '+' : '-'}{factor.factorValue}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h3 className="font-semibold">How to Improve Your Score</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Add emergency contacts and connect with safety buddies</li>
                <li>• Check in regularly during events</li>
                <li>• Complete safety training modules</li>
                <li>• Get community vouches from trusted members</li>
                <li>• Report safety concerns to help others</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function EventSafetyScore({ eventId, targetId }: { eventId?: number; targetId?: string }) {
  const { data: riskAssessment } = useQuery({
    queryKey: ['/api/risk-assessment', 'event', targetId || eventId],
    queryFn: async () => {
      const response = await fetch(`/api/risk-assessment/event/${targetId || eventId}`);
      if (!response.ok) return null;
      return response.json();
    },
    enabled: !!(eventId || targetId)
  });

  if (!riskAssessment) return null;

  const riskScore = riskAssessment.calculatedRiskScore || 50;
  const safetyScore = 100 - riskScore;

  return (
    <Badge variant="outline" className={cn("gap-1", getScoreColor(safetyScore))}>
      <Shield className="w-3 h-3" />
      <span>{Math.round(safetyScore)}</span>
    </Badge>
  );
}