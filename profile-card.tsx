import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import type { User } from "@shared/schema";

interface ProfileCardProps {
  user: User;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <Card className="glassmorphism border-none">
      <CardContent className="p-0">
        {/* Profile Image */}
        <div className="relative h-64 rounded-t-lg overflow-hidden">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage 
              src={user.profileImageUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
              className="object-cover"
            />
            <AvatarFallback className="w-full h-full rounded-none text-6xl">
              {user.firstName?.[0] || user.email?.[0] || '?'}
            </AvatarFallback>
          </Avatar>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Profile Info */}
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            {user.username ? (
              <>
                @{user.username}
                {user.age && <span className="text-neon-blue">, {user.age}</span>}
                {(user.firstName || user.lastName) && (
                  <div className="text-lg font-normal text-gray-300 mt-1">
                    {user.firstName} {user.lastName}
                  </div>
                )}
              </>
            ) : (
              <>
                {user.firstName} {user.lastName}
                {user.age && <span className="text-neon-blue">, {user.age}</span>}
              </>
            )}
          </h3>
          
          {user.location && (
            <p className="text-neon-blue mb-3 flex items-center justify-center">
              <MapPin className="w-4 h-4 mr-1" />
              {user.location}
            </p>
          )}
          
          {/* Music Preferences */}
          {user.musicPreferences && user.musicPreferences.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {user.musicPreferences.slice(0, 3).map((genre: string) => (
                <Badge
                  key={genre}
                  variant="outline"
                  className="border-neon-purple/50 text-neon-purple text-xs"
                >
                  {genre}
                </Badge>
              ))}
              {user.musicPreferences.length > 3 && (
                <Badge
                  variant="outline"
                  className="border-neon-pink/50 text-neon-pink text-xs"
                >
                  +{user.musicPreferences.length - 3}
                </Badge>
              )}
            </div>
          )}
          
          {/* Bio */}
          {user.bio && (
            <p className="text-gray-300 text-sm line-clamp-3">
              "{user.bio}"
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
