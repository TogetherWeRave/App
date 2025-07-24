import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Users, Sparkles, Shield, Music } from "lucide-react";

interface CommunityProfileSelectorProps {
  relationshipStyle: string;
  onRelationshipStyleChange: (style: string) => void;
  plurValues: string[];
  onPLURValuesChange: (values: string[]) => void;
  vibeProfile: {
    energyLevel: string;
    costumeStyle: string[];
    ravePhilosophy: string[];
    dancingStyle: string[];
    socialPreference: string;
  };
  onVibeProfileChange: (profile: any) => void;
  communicationStyle: string;
  onCommunicationStyleChange: (style: string) => void;
  boundariesAndConsent: string;
  onBoundariesChange: (text: string) => void;
  relationshipGoals: string[];
  onRelationshipGoalsChange: (goals: string[]) => void;
  crewName: string;
  onCrewNameChange: (name: string) => void;
  crewRole: string;
  onCrewRoleChange: (role: string) => void;
  openToNewCrew: boolean;
  onOpenToNewCrewChange: (open: boolean) => void;
}

const relationshipStyles = [
  { value: "community_first", label: "Community First", description: "Relationships grow from shared experiences and community bonds" },
  { value: "polyamorous", label: "Polyamorous", description: "Open to multiple loving relationships with consent" },
  { value: "open", label: "Open Relationship", description: "Committed relationship with agreed-upon openness" },
  { value: "festival_family", label: "Festival Family", description: "Deep chosen family bonds formed through rave culture" },
  { value: "crew_oriented", label: "Crew Oriented", description: "Relationships centered around crew/group dynamics" },
  { value: "monogamous", label: "Monogamous", description: "One-on-one exclusive romantic relationship" },
];

const plurValuesList = [
  { value: "peace", label: "Peace", icon: "🕊️" },
  { value: "love", label: "Love", icon: "❤️" },
  { value: "unity", label: "Unity", icon: "🤝" },
  { value: "respect", label: "Respect", icon: "🙏" },
  { value: "acceptance", label: "Acceptance", icon: "🌈" },
  { value: "inclusion", label: "Inclusion", icon: "🫂" },
];

const energyLevels = [
  { value: "chill", label: "Chill Vibes", description: "Prefer relaxed, intimate settings" },
  { value: "moderate", label: "Balanced Energy", description: "Adaptable to different energy levels" },
  { value: "high", label: "High Energy", description: "Love intense, high-energy experiences" },
  { value: "infinite", label: "Infinite Energy", description: "Non-stop party mode, limitless stamina" },
];

const costumeStyles = [
  "Cyberpunk", "Pastel Goth", "Kandi Kid", "Techno Minimal", "Festival Fashion",
  "LED/Light-up", "Furry/Rave Pup", "Vintage Rave", "Tribal/Spiritual", "DIY/Handmade", "Pashima"
];

const ravePhilosophies = [
  "Music is Medicine", "Dance is Prayer", "Community Over Competition", "Harm Reduction",
  "Radical Self-Expression", "Sacred Space Creation", "Mental Health Advocacy", "Environmental Consciousness"
];

const dancingStyles = [
  "Shuffling", "Liquid", "Gloving", "Poi/Flow Arts", "Headbanging", "Jumpstyle",
  "Cutting Shapes", "Tutting", "Waacking", "Free Form"
];

const communicationStyles = [
  { value: "direct", label: "Direct & Clear" },
  { value: "gentle", label: "Gentle & Compassionate" },
  { value: "playful", label: "Playful & Fun" },
  { value: "deep", label: "Deep & Philosophical" },
  { value: "spiritual", label: "Spiritual & Mindful" },
];

const relationshipGoalsList = [
  "friendship", "romance", "crew_member", "festival_buddy", "life_partner", 
  "play_partner", "mentor", "mentee", "dance_partner", "music_collaborator"
];

const crewRoles = [
  { value: "leader", label: "Crew Leader" },
  { value: "member", label: "Active Member" },
  { value: "floater", label: "Social Floater" },
  { value: "solo", label: "Flying Solo" },
];

export default function CommunityProfileSelector({
  relationshipStyle,
  onRelationshipStyleChange,
  plurValues,
  onPLURValuesChange,
  vibeProfile,
  onVibeProfileChange,
  communicationStyle,
  onCommunicationStyleChange,
  boundariesAndConsent,
  onBoundariesChange,
  relationshipGoals,
  onRelationshipGoalsChange,
  crewName,
  onCrewNameChange,
  crewRole,
  onCrewRoleChange,
  openToNewCrew,
  onOpenToNewCrewChange,
}: CommunityProfileSelectorProps) {
  const togglePLURValue = (value: string) => {
    if (plurValues.includes(value)) {
      onPLURValuesChange(plurValues.filter(v => v !== value));
    } else {
      onPLURValuesChange([...plurValues, value]);
    }
  };

  const toggleArrayValue = (array: string[], value: string, setter: (arr: string[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter(v => v !== value));
    } else {
      setter([...array, value]);
    }
  };

  const toggleRelationshipGoal = (goal: string) => {
    toggleArrayValue(relationshipGoals, goal, onRelationshipGoalsChange);
  };

  return (
    <div className="space-y-8">
      {/* Relationship Style - Anti-Possession */}
      <Card className="bg-gray-900/50 border-neon-purple/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-neon-purple">
            <Heart className="w-5 h-5" />
            Relationship Philosophy
          </CardTitle>
          <p className="text-sm text-gray-400">
            Choose how you approach relationships and connections
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relationshipStyles.map((style) => (
              <div
                key={style.value}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  relationshipStyle === style.value
                    ? "border-neon-purple bg-neon-purple/10"
                    : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                }`}
                onClick={() => onRelationshipStyleChange(style.value)}
              >
                <div className="font-medium text-white">{style.label}</div>
                <div className="text-xs text-gray-400 mt-1">{style.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* PLUR Values */}
      <Card className="bg-gray-900/50 border-neon-purple/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-neon-purple">
            <Sparkles className="w-5 h-5" />
            PLUR Values
          </CardTitle>
          <p className="text-sm text-gray-400">
            Select the core values that guide your rave experience
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {plurValuesList.map((value) => (
              <Button
                key={value.value}
                variant={plurValues.includes(value.value) ? "default" : "outline"}
                onClick={() => togglePLURValue(value.value)}
                className={`h-auto p-4 flex flex-col items-center gap-2 ${
                  plurValues.includes(value.value)
                    ? "bg-neon-purple hover:bg-purple-700"
                    : "border-gray-600 hover:border-neon-purple"
                }`}
              >
                <span className="text-2xl">{value.icon}</span>
                <span className="text-sm">{value.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vibe Profile */}
      <Card className="bg-gray-900/50 border-neon-purple/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-neon-purple">
            <Music className="w-5 h-5" />
            Your Vibe Profile
          </CardTitle>
          <p className="text-sm text-gray-400">
            Define your energy, style, and rave philosophy
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Energy Level */}
          <div>
            <Label className="text-white mb-3 block">Energy Level</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {energyLevels.map((level) => (
                <div
                  key={level.value}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    vibeProfile.energyLevel === level.value
                      ? "border-neon-pink bg-neon-pink/10"
                      : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                  }`}
                  onClick={() => onVibeProfileChange({ ...vibeProfile, energyLevel: level.value })}
                >
                  <div className="font-medium text-white">{level.label}</div>
                  <div className="text-xs text-gray-400">{level.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Costume Style */}
          <div>
            <Label className="text-white mb-3 block">Festival Fit</Label>
            <div className="flex flex-wrap gap-2">
              {costumeStyles.map((style) => (
                <Badge
                  key={style}
                  variant={vibeProfile.costumeStyle.includes(style) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    vibeProfile.costumeStyle.includes(style)
                      ? "bg-neon-purple hover:bg-purple-700"
                      : "border-gray-600 hover:border-neon-purple"
                  }`}
                  onClick={() => toggleArrayValue(
                    vibeProfile.costumeStyle, 
                    style, 
                    (arr) => onVibeProfileChange({ ...vibeProfile, costumeStyle: arr })
                  )}
                >
                  {style}
                </Badge>
              ))}
            </div>
          </div>

          {/* Rave Philosophy */}
          <div>
            <Label className="text-white mb-3 block">Rave Philosophy</Label>
            <div className="flex flex-wrap gap-2">
              {ravePhilosophies.map((philosophy) => (
                <Badge
                  key={philosophy}
                  variant={vibeProfile.ravePhilosophy.includes(philosophy) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    vibeProfile.ravePhilosophy.includes(philosophy)
                      ? "bg-neon-pink hover:bg-pink-700"
                      : "border-gray-600 hover:border-neon-pink"
                  }`}
                  onClick={() => toggleArrayValue(
                    vibeProfile.ravePhilosophy, 
                    philosophy, 
                    (arr) => onVibeProfileChange({ ...vibeProfile, ravePhilosophy: arr })
                  )}
                >
                  {philosophy}
                </Badge>
              ))}
            </div>
          </div>

          {/* Dancing Style */}
          <div>
            <Label className="text-white mb-3 block">Dancing Style</Label>
            <div className="flex flex-wrap gap-2">
              {dancingStyles.map((dance) => (
                <Badge
                  key={dance}
                  variant={vibeProfile.dancingStyle.includes(dance) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    vibeProfile.dancingStyle.includes(dance)
                      ? "bg-neon-purple hover:bg-purple-700"
                      : "border-gray-600 hover:border-neon-purple"
                  }`}
                  onClick={() => toggleArrayValue(
                    vibeProfile.dancingStyle, 
                    dance, 
                    (arr) => onVibeProfileChange({ ...vibeProfile, dancingStyle: arr })
                  )}
                >
                  {dance}
                </Badge>
              ))}
            </div>
          </div>

          {/* Social Preference */}
          <div>
            <Label className="text-white mb-3 block">Social Preference</Label>
            <Select
              value={vibeProfile.socialPreference}
              onValueChange={(value) => onVibeProfileChange({ ...vibeProfile, socialPreference: value })}
            >
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="How do you like to socialize?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="intimate_groups">Intimate Groups</SelectItem>
                <SelectItem value="large_crowds">Large Crowds</SelectItem>
                <SelectItem value="both">Both</SelectItem>
                <SelectItem value="varies">Varies by Mood</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Communication & Boundaries */}
      <Card className="bg-gray-900/50 border-neon-purple/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-neon-purple">
            <Shield className="w-5 h-5" />
            Communication & Boundaries
          </CardTitle>
          <p className="text-sm text-gray-400">
            Set clear expectations for healthy connections
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Communication Style */}
          <div>
            <Label className="text-white mb-3 block">Communication Style</Label>
            <Select value={communicationStyle} onValueChange={onCommunicationStyleChange}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="How do you communicate?" />
              </SelectTrigger>
              <SelectContent>
                {communicationStyles.map((style) => (
                  <SelectItem key={style.value} value={style.value}>
                    {style.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Boundaries & Consent */}
          <div>
            <Label className="text-white mb-3 block">Boundaries & Consent Preferences</Label>
            <Textarea
              value={boundariesAndConsent}
              onChange={(e) => onBoundariesChange(e.target.value)}
              placeholder="Share your boundaries, consent practices, and what makes you feel safe and respected..."
              className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
            />
          </div>

          {/* Relationship Goals */}
          <div>
            <Label className="text-white mb-3 block">What are you looking for?</Label>
            <div className="flex flex-wrap gap-2">
              {relationshipGoalsList.map((goal) => (
                <Badge
                  key={goal}
                  variant={relationshipGoals.includes(goal) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    relationshipGoals.includes(goal)
                      ? "bg-neon-pink hover:bg-pink-700"
                      : "border-gray-600 hover:border-neon-pink"
                  }`}
                  onClick={() => toggleRelationshipGoal(goal)}
                >
                  {goal.replace('_', ' ')}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crew Information */}
      <Card className="bg-gray-900/50 border-neon-purple/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-neon-purple">
            <Users className="w-5 h-5" />
            Crew & Community
          </CardTitle>
          <p className="text-sm text-gray-400">
            Connect with your crew or find a new festival family
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Crew Role */}
          <div>
            <Label className="text-white mb-3 block">Current Crew Status</Label>
            <Select value={crewRole} onValueChange={onCrewRoleChange}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="What's your crew situation?" />
              </SelectTrigger>
              <SelectContent>
                {crewRoles.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Crew Name */}
          {crewRole !== "solo" && (
            <div>
              <Label className="text-white mb-3 block">Crew Name (Optional)</Label>
              <input
                type="text"
                value={crewName}
                onChange={(e) => onCrewNameChange(e.target.value)}
                placeholder="Enter your crew name..."
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
              />
            </div>
          )}

          {/* Open to New Crew */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="openToNewCrew"
              checked={openToNewCrew}
              onCheckedChange={onOpenToNewCrewChange}
              className="border-gray-600"
            />
            <Label htmlFor="openToNewCrew" className="text-white">
              Open to joining new crews or expanding my festival family
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}