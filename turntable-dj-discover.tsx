import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  X, 
  Music, 
  MapPin, 
  Star, 
  User as UserIcon, 
  Headphones,
  Instagram,
  Twitter,
  Globe,
  Youtube,
  Play
} from "lucide-react";
import type { User } from "@shared/schema";

interface TurntableDjDiscoverProps {
  dj: User;
  onLike: () => void;
  onReject: () => void;
  onViewProfile: () => void;
}

export default function TurntableDjDiscover({ dj, onLike, onReject, onViewProfile }: TurntableDjDiscoverProps) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [dragState, setDragState] = useState({ isDragging: false, startX: 0, startRotation: 0 });
  const turntableRef = useRef<HTMLDivElement>(null);

  // Safety check - don't render if no DJ data
  if (!dj) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No DJ data available</p>
      </div>
    );
  }

  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setRotation(prev => prev + 1);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isSpinning]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragState({
      isDragging: true,
      startX: e.clientX,
      startRotation: rotation
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragState.isDragging) return;
    
    const deltaX = e.clientX - dragState.startX;
    const rotationChange = deltaX * 0.5; // Sensitivity
    const newRotation = dragState.startRotation + rotationChange;
    setRotation(newRotation);
  };

  const handleMouseUp = () => {
    if (!dragState.isDragging) return;
    
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    
    // Check direction based on rotation
    if (normalizedRotation > 30 && normalizedRotation < 180) {
      // Turned right significantly - Like
      handleLike();
    } else if (normalizedRotation > 180 && normalizedRotation < 330) {
      // Turned left significantly - Reject
      handleReject();
    } else {
      // Reset to center
      setRotation(0);
    }
    
    setDragState({ isDragging: false, startX: 0, startRotation: 0 });
  };

  const handleLike = () => {
    setRotation(90);
    setTimeout(() => {
      onLike();
      setRotation(0);
    }, 300);
  };

  const handleReject = () => {
    setRotation(-90);
    setTimeout(() => {
      onReject();
      setRotation(0);
    }, 300);
  };

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <div className="max-w-md mx-auto">
      {/* DJ Info Above Turntable */}
      <Card className="mb-6 bg-gray-800/95 backdrop-blur-sm border-gray-700">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              {dj.djName || `${dj.firstName} ${dj.lastName}`}
            </h3>
            {dj.username && (
              <p className="text-purple-400 text-lg mb-2">@{dj.username}</p>
            )}
            
            {dj.location && (
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-3">
                <MapPin className="w-4 h-4" />
                <span>{dj.location}</span>
              </div>
            )}
            
            {dj.djExperience && (
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500 mb-3">
                <Star className="w-3 h-3 mr-1" />
                {dj.djExperience.charAt(0).toUpperCase() + dj.djExperience.slice(1)}
              </Badge>
            )}
            
            {/* Genres */}
            {dj.djGenres && dj.djGenres.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {dj.djGenres.slice(0, 3).map((genre: string) => (
                  <Badge
                    key={genre}
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 text-xs bg-purple-500/10"
                  >
                    {genre}
                  </Badge>
                ))}
                {dj.djGenres.length > 3 && (
                  <Badge
                    variant="outline"
                    className="border-gray-500/50 text-gray-300 text-xs bg-gray-500/10"
                  >
                    +{dj.djGenres.length - 3}
                  </Badge>
                )}
              </div>
            )}
            
            {/* Bio */}
            {dj.djBio && (
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                {dj.djBio}
              </p>
            )}
            
            {/* Social Links */}
            {dj.djSocials && Object.keys(dj.djSocials).length > 0 && (
              <div className="flex justify-center gap-3">
                {dj.djSocials.instagram && (
                  <a href={`https://instagram.com/${dj.djSocials.instagram}`} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                  </a>
                )}
                {dj.djSocials.twitter && (
                  <a href={`https://twitter.com/${dj.djSocials.twitter}`} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                  </a>
                )}
                {dj.mixLinks?.soundcloud && (
                  <a href={dj.mixLinks.soundcloud} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                  </a>
                )}
                {dj.mixLinks?.youtube && (
                  <a href={dj.mixLinks.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                  </a>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Turntable */}
      <div className="relative mb-8">
        <div className="w-80 h-80 mx-auto relative">
          {/* Turntable Base */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-2xl border-4 border-gray-600">
            {/* Turntable Details */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 to-black shadow-inner">
              {/* Speed Controls */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-600 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-600 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Vinyl Record */}
          <div 
            ref={turntableRef}
            className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl cursor-grab active:cursor-grabbing transition-transform duration-300 ease-out border-2 border-gray-700"
            style={{ 
              transform: `rotate(${rotation}deg)`,
              background: `conic-gradient(from 0deg, #1a1a1a 0deg, #2a2a2a 60deg, #1a1a1a 120deg, #2a2a2a 180deg, #1a1a1a 240deg, #2a2a2a 300deg, #1a1a1a 360deg)`
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Vinyl Grooves */}
            <div className="absolute inset-0 rounded-full opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-gray-600 rounded-full"
                  style={{
                    top: `${10 + i * 10}%`,
                    left: `${10 + i * 10}%`,
                    right: `${10 + i * 10}%`,
                    bottom: `${10 + i * 10}%`
                  }}
                />
              ))}
            </div>
            
            {/* Center Label with DJ Photo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-xl flex items-center justify-center border-4 border-gray-300">
              <Avatar className="w-24 h-24">
                <AvatarImage src={dj.profileImageUrl} />
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white text-2xl">
                  {dj.djName?.[0] || dj.firstName?.[0] || '?'}
                </AvatarFallback>
              </Avatar>
            </div>
            
            {/* Center Spindle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-400 shadow-md"></div>
          </div>

          {/* Tonearm */}
          <div className="absolute top-8 right-2 w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-500 shadow-md transform rotate-12 origin-right rounded-full">
            <div className="absolute -left-1 top-0 w-2 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center space-x-6 mb-6">
        <Button
          onClick={handleReject}
          className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-200"
        >
          <X className="w-6 h-6" />
        </Button>
        
        <Button
          onClick={toggleSpin}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
        >
          {isSpinning ? <Music className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        
        <Button
          onClick={onViewProfile}
          className="w-14 h-14 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 rounded-full shadow-lg hover:shadow-gray-500/25 transition-all duration-200"
        >
          <UserIcon className="w-5 h-5" />
        </Button>
        
        <Button
          onClick={handleLike}
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-200"
        >
          <Heart className="w-6 h-6" />
        </Button>
      </div>

      {/* Instructions */}
      <div className="text-center">
        <p className="text-gray-500 text-sm mb-2">
          Turn the record right to like, left to reject
        </p>
        <p className="text-gray-600 text-xs">
          Or use the buttons below
        </p>
      </div>
    </div>
  );
}