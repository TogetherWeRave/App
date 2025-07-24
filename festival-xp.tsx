import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Zap, Shield, Users, PartyPopper, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function FestivalXP() {
  const { toast } = useToast();
  const [glowEffect, setGlowEffect] = useState(false);

  const { data: userXP } = useQuery({
    queryKey: ['/api/xp'],
  });

  const { data: achievements } = useQuery({
    queryKey: ['/api/achievements'],
  });

  const { data: userAchievements } = useQuery({
    queryKey: ['/api/achievements/user'],
  });

  const earnedAchievementIds = userAchievements?.map((ua: any) => ua.achievementId) || [];
  const xpToNextLevel = ((userXP?.level || 1) * 1000) - (userXP?.totalXP || 0);
  const levelProgress = ((userXP?.totalXP || 0) % 1000) / 10;

  // Festival titles with level requirements
  const getTitleColor = (title: string) => {
    switch (title) {
      case "Festival Guardian": return "text-purple-500 animate-pulse";
      case "Rave Veteran": return "text-orange-500";
      case "Crew Leader": return "text-blue-500";
      case "Festival Regular": return "text-green-500";
      case "Experienced Raver": return "text-pink-500";
      default: return "text-yellow-500";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "safety": return <Shield className="h-4 w-4" />;
      case "social": return <Heart className="h-4 w-4" />;
      case "festival": return <PartyPopper className="h-4 w-4" />;
      case "crew": return <Users className="h-4 w-4" />;
      default: return <Trophy className="h-4 w-4" />;
    }
  };

  useEffect(() => {
    // Add glow effect when component mounts
    setGlowEffect(true);
    const timer = setTimeout(() => setGlowEffect(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className={`bg-gray-900/90 border-purple-500/50 ${glowEffect ? 'shadow-[0_0_30px_rgba(168,85,247,0.5)]' : ''} transition-all duration-1000`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-yellow-400 animate-pulse" />
          Festival XP System
        </CardTitle>
        <CardDescription>
          Level up from Baby Raver to Festival Guardian!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* XP Overview */}
        <div className="text-center space-y-2">
          <h2 className={`text-3xl font-bold ${getTitleColor(userXP?.title || 'Baby Raver')}`}>
            {userXP?.title || 'Baby Raver'}
          </h2>
          <p className="text-xl">Level {userXP?.level || 1}</p>
          <div className="space-y-1">
            <div className="flex justify-between text-sm text-gray-400">
              <span>{userXP?.totalXP || 0} XP</span>
              <span>{xpToNextLevel} XP to next level</span>
            </div>
            <Progress value={levelProgress} className="h-3 bg-gray-700">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${levelProgress}%` }}
              />
            </Progress>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
            <Shield className="h-8 w-8 mx-auto text-green-400 mb-2" />
            <p className="text-2xl font-bold">{userXP?.safetyCheckIns || 0}</p>
            <p className="text-xs text-gray-400">Safety Check-ins</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
            <Heart className="h-8 w-8 mx-auto text-pink-400 mb-2" />
            <p className="text-2xl font-bold">{userXP?.newbiesHelped || 0}</p>
            <p className="text-xs text-gray-400">Newbies Helped</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
            <Zap className="h-8 w-8 mx-auto text-yellow-400 mb-2" />
            <p className="text-2xl font-bold">{userXP?.resourcesShared || 0}</p>
            <p className="text-xs text-gray-400">Resources Shared</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
            <PartyPopper className="h-8 w-8 mx-auto text-purple-400 mb-2" />
            <p className="text-2xl font-bold">{userXP?.eventsAttended || 0}</p>
            <p className="text-xs text-gray-400">Events Attended</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
            <Users className="h-8 w-8 mx-auto text-blue-400 mb-2" />
            <p className="text-2xl font-bold">{userXP?.crewsJoined || 0}</p>
            <p className="text-xs text-gray-400">Crews Joined</p>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-400" />
            Achievements
          </h3>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex w-full bg-gray-800 overflow-x-auto scrollbar-hide">
              <TabsTrigger value="all" className="min-w-fit">All</TabsTrigger>
              <TabsTrigger value="safety" className="min-w-fit">Safety</TabsTrigger>
              <TabsTrigger value="social" className="min-w-fit">Social</TabsTrigger>
              <TabsTrigger value="festival" className="min-w-fit">Festival</TabsTrigger>
              <TabsTrigger value="crew" className="min-w-fit">Crew</TabsTrigger>
            </TabsList>
            {['all', 'safety', 'social', 'festival', 'crew'].map((category) => (
              <TabsContent key={category} value={category} className="space-y-2 mt-4">
                {achievements
                  ?.filter((achievement: any) => category === 'all' || achievement.category === category)
                  .map((achievement: any) => {
                    const earned = earnedAchievementIds.includes(achievement.id);
                    return (
                      <div
                        key={achievement.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                          earned 
                            ? 'bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]' 
                            : 'bg-gray-800/30 border-gray-700 opacity-60'
                        }`}
                      >
                        <div className={`p-2 rounded-full ${earned ? 'bg-purple-600/30' : 'bg-gray-700/50'}`}>
                          {getCategoryIcon(achievement.category)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className={`font-medium ${earned ? 'text-white' : 'text-gray-400'}`}>
                              {achievement.name}
                            </p>
                            {earned && (
                              <Badge variant="outline" className="text-xs border-purple-500 text-purple-400">
                                Unlocked!
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-400">{achievement.description}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-medium ${earned ? 'text-yellow-400' : 'text-gray-500'}`}>
                            +{achievement.xpReward} XP
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Level Progression Path */}
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30">
          <h3 className="text-lg font-semibold mb-3">Your Festival Journey</h3>
          <div className="space-y-2 text-sm">
            <div className={`flex items-center gap-2 ${userXP?.level >= 1 ? 'text-yellow-400' : 'text-gray-500'}`}>
              <span className="font-mono">Lv 1-4:</span> Baby Raver 👶
            </div>
            <div className={`flex items-center gap-2 ${userXP?.level >= 5 ? 'text-pink-400' : 'text-gray-500'}`}>
              <span className="font-mono">Lv 5-9:</span> Experienced Raver 🎵
            </div>
            <div className={`flex items-center gap-2 ${userXP?.level >= 10 ? 'text-green-400' : 'text-gray-500'}`}>
              <span className="font-mono">Lv 10-19:</span> Festival Regular 🎉
            </div>
            <div className={`flex items-center gap-2 ${userXP?.level >= 20 ? 'text-blue-400' : 'text-gray-500'}`}>
              <span className="font-mono">Lv 20-29:</span> Crew Leader 👥
            </div>
            <div className={`flex items-center gap-2 ${userXP?.level >= 30 ? 'text-orange-400' : 'text-gray-500'}`}>
              <span className="font-mono">Lv 30-49:</span> Rave Veteran 🔥
            </div>
            <div className={`flex items-center gap-2 ${userXP?.level >= 50 ? 'text-purple-400 animate-pulse' : 'text-gray-500'}`}>
              <span className="font-mono">Lv 50+:</span> Festival Guardian 👑
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}