import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, MapPin, DollarSign, Heart, Sparkles, Camera, Smartphone } from "lucide-react";
import { Link } from "wouter";
import type { Event } from "@shared/schema";
import EventPhotoSync from "./event-photo-sync";
import { EventSafetyScore } from "./safety-score";

interface EventCardProps {
  event: Event;
  onAttend: (eventId: number, status: string) => void;
}

export default function EventCard({ event, onAttend }: EventCardProps) {
  const [isInterested, setIsInterested] = useState(false);

  const handleInterest = () => {
    const newStatus = isInterested ? 'interested' : 'attending';
    onAttend(event.id, newStatus);
    setIsInterested(!isInterested);
  };

  const handleViewDetails = () => {
    if (event.externalUrl) {
      window.open(event.externalUrl, '_blank');
    } else {
      // For local events, redirect to internal event details
      window.location.href = `/events/${event.id}`;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  const { date, time } = formatDate(typeof event.date === 'string' ? event.date : event.date.toISOString());

  return (
    <Card className="glassmorphism overflow-hidden hover:scale-105 transition-all duration-300 border-gray-700 hover:border-neon-purple/50">
      {/* Event Image */}
      <div className="h-48 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 relative">
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-bold text-white/20">🎵</div>
          </div>
        )}
        
        {/* Safety Score Badge */}
        <div className="absolute top-2 right-2">
          <EventSafetyScore eventId={event.id} targetId={event.externalUrl ? String(event.id) : undefined} />
        </div>

      </div>

      <CardContent className="p-6">
        {/* Event Title */}
        <h3 className="text-xl font-semibold mb-3">{event.title}</h3>

        {/* Date & Time */}
        <div className="flex items-center text-gray-300 mb-2">
          <Calendar className="w-4 h-4 mr-2 text-neon-blue" />
          <span>{date} • {time}</span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-300 mb-3">
          <MapPin className="w-4 h-4 mr-2 text-neon-pink" />
          <span>{event.location}</span>
        </div>

        {/* Genres */}
        {event.genres && event.genres.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {event.genres.map((genre: string) => (
              <Badge
                key={genre}
                variant="outline"
                className="border-neon-purple/50 text-neon-purple text-xs"
              >
                {genre}
              </Badge>
            ))}
          </div>
        )}

        {/* Description */}
        {event.description && (
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {event.description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            onClick={event.ticketPrice === 'See Details' ? handleViewDetails : handleInterest}
            className="flex-1 bg-gradient-to-r from-neon-blue to-electric-blue hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
          >
            {event.ticketPrice === 'See Details'
              ? 'View Event Details' 
              : 'I\'m Interested'
            }
          </Button>
          
          <Link href={`/events/${event.id}/outfit-recommendations`}>
            <Button
              variant="outline"
              size="icon"
              className="border-neon-purple/50 hover:bg-neon-purple/20 text-neon-purple/70 hover:text-neon-purple transition-colors"
            >
              <Sparkles className="w-4 h-4" />
            </Button>
          </Link>

          <Link href={`/events/${event.id}/ar-festival-map`}>
            <Button
              variant="outline"
              size="icon"
              className="border-green-500/50 hover:bg-green-500/20 text-green-500/70 hover:text-green-500 transition-colors"
              title="AR Festival Map"
            >
              <Smartphone className="w-4 h-4" />
            </Button>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-neon-blue/50 hover:bg-neon-blue/20 text-neon-blue/70 hover:text-neon-blue transition-colors"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="glassmorphism border-gray-700 max-w-md">
              <DialogTitle className="sr-only">Upload Photo to Event</DialogTitle>
              <DialogDescription className="sr-only">
                Upload and sync your photos to {event.title}
              </DialogDescription>
              <EventPhotoSync eventId={event.id} eventTitle={event.title} />
            </DialogContent>
          </Dialog>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleInterest}
            className={`border-neon-pink/50 hover:bg-neon-pink/20 transition-colors ${
              isInterested ? 'bg-neon-pink/20 text-neon-pink' : 'text-neon-pink/70'
            }`}
          >
            <Heart className={`w-4 h-4 ${isInterested ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
