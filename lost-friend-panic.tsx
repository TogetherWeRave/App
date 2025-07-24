import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  AlertTriangle, 
  MapPin, 
  Camera, 
  Users, 
  Phone, 
  CheckCircle,
  Clock,
  Navigation,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

export function LostFriendPanic() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showPanicDialog, setShowPanicDialog] = useState(false);
  const [nearestLandmark, setNearestLandmark] = useState('');
  const [message, setMessage] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [panicButtonAnimation, setPanicButtonAnimation] = useState(false);

  // Get user's active alerts
  const { data: myAlerts } = useQuery({
    queryKey: ['/api/lost-friend/alerts/user'],
  });

  // Get all active alerts (for crew members)
  const { data: activeAlerts } = useQuery({
    queryKey: ['/api/lost-friend/alerts', { status: 'active' }],
  });

  const activeAlert = myAlerts?.find((alert: any) => alert.status === 'active');

  // Create alert mutation
  const createAlertMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch('/api/lost-friend/alert', {
        method: 'POST',
        body: data,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
        },
      });
      if (!response.ok) throw new Error('Failed to create alert');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/lost-friend/alerts'] });
      toast({
        title: "Alert Sent!",
        description: "Your crew has been notified. Stay where you are if possible.",
      });
      setShowPanicDialog(false);
      resetForm();
    },
  });

  // Mark as found mutation
  const markFoundMutation = useMutation({
    mutationFn: (alertId: number) => 
      apiRequest(`/api/lost-friend/alerts/${alertId}/found`, { method: 'POST' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/lost-friend/alerts'] });
      toast({
        title: "Great!",
        description: "We're glad you're safe. Your crew has been notified.",
      });
    },
  });

  const resetForm = () => {
    setNearestLandmark('');
    setMessage('');
    setPhotoFile(null);
    setLocation(null);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Location error:', error);
          toast({
            title: "Location Access",
            description: "Location is optional but helps your crew find you faster.",
            variant: "default",
          });
        }
      );
    }
  };

  const handlePanicClick = () => {
    setPanicButtonAnimation(true);
    setTimeout(() => setPanicButtonAnimation(false), 1000);
    setShowPanicDialog(true);
    getCurrentLocation();
  };

  const handleCreateAlert = () => {
    const formData = new FormData();
    formData.append('nearestLandmark', nearestLandmark);
    formData.append('message', message);
    if (location) {
      formData.append('location', `POINT(${location.lng} ${location.lat})`);
    }
    if (photoFile) {
      formData.append('photo', photoFile);
    }

    createAlertMutation.mutate(formData);
  };

  const handlePhotoCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  return (
    <>
      {/* Main Panic Button */}
      {!activeAlert && (
        <div className="fixed bottom-20 sm:bottom-24 right-3 sm:right-4 z-50">
          <Button
            onClick={handlePanicClick}
            size="lg"
            className={`
              h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-red-600 hover:bg-red-700 
              shadow-[0_0_40px_rgba(239,68,68,0.5)] hover:shadow-[0_0_60px_rgba(239,68,68,0.7)]
              transform transition-all duration-300
              ${panicButtonAnimation ? 'scale-110 animate-pulse' : ''}
            `}
          >
            <div className="flex flex-col items-center">
              <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-[10px] sm:text-xs font-bold">I'M LOST</span>
            </div>
          </Button>
        </div>
      )}

      {/* Active Alert Status */}
      {activeAlert && (
        <Card className="fixed bottom-20 sm:bottom-24 right-3 sm:right-4 left-3 sm:left-auto z-50 sm:w-80 bg-gray-900/95 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-red-400">
              <AlertTriangle className="h-5 w-5 animate-pulse" />
              Alert Active
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm">Your crew has been notified. Stay visible and check your phone.</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="h-4 w-4" />
              <span>{new Date(activeAlert.createdAt).toLocaleTimeString()}</span>
            </div>
            <Button 
              onClick={() => markFoundMutation.mutate(activeAlert.id)}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={markFoundMutation.isPending}
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              I'm Safe Now!
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Panic Dialog */}
      <Dialog open={showPanicDialog} onOpenChange={setShowPanicDialog}>
        <DialogContent className="bg-gray-900 border-red-500/50">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-400">
              <AlertTriangle className="h-5 w-5" />
              Lost Friend Alert
            </DialogTitle>
            <DialogDescription>
              We'll notify your crew immediately. Provide details to help them find you.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Location Status */}
            <Alert className="bg-gray-800 border-gray-700">
              <MapPin className="h-4 w-4" />
              <AlertDescription>
                {location 
                  ? "Location captured! This will help your crew find you."
                  : "Getting your location... Stay still if possible."}
              </AlertDescription>
            </Alert>

            {/* Nearest Landmark */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Nearest Landmark/Stage
              </label>
              <Input
                placeholder="e.g. Main Stage, Food Court, Restrooms"
                value={nearestLandmark}
                onChange={(e) => setNearestLandmark(e.target.value)}
                className="bg-gray-800 border-gray-700"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Message to Crew (Optional)
              </label>
              <Textarea
                placeholder="What you're wearing, who you're looking for, etc."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-800 border-gray-700"
                rows={3}
              />
            </div>

            {/* Photo Capture */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Take a Photo (Optional)
              </label>
              <div className="flex items-center gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoCapture}
                  className="bg-gray-800 border-gray-700"
                />
                <Camera className="h-5 w-5 text-gray-400" />
              </div>
              {photoFile && (
                <p className="text-sm text-green-400 mt-1">Photo captured!</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowPanicDialog(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateAlert}
                disabled={createAlertMutation.isPending || !nearestLandmark}
                className="flex-1 bg-red-600 hover:bg-red-700"
              >
                {createAlertMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Phone className="h-4 w-4 mr-2" />
                    Send Alert
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Crew Alerts List (for helping others) */}
      {activeAlerts && activeAlerts.length > 0 && (
        <Card className="mt-4 bg-gray-900/90 border-orange-500/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-400">
              <Users className="h-5 w-5" />
              Active Lost Friend Alerts
            </CardTitle>
            <CardDescription>
              Help your crew members who need assistance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeAlerts.map((alert: any) => (
              <div 
                key={alert.id}
                className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="destructive" className="animate-pulse">
                    NEEDS HELP
                  </Badge>
                  <span className="text-xs text-gray-400">
                    {new Date(alert.createdAt).toLocaleTimeString()}
                  </span>
                </div>
                
                {alert.nearestLandmark && (
                  <div className="flex items-center gap-2 text-sm">
                    <Navigation className="h-4 w-4 text-gray-400" />
                    <span>Near: {alert.nearestLandmark}</span>
                  </div>
                )}
                
                {alert.message && (
                  <div className="flex items-start gap-2 text-sm">
                    <MessageSquare className="h-4 w-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-300">{alert.message}</span>
                  </div>
                )}
                
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  View Location & Help
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </>
  );
}