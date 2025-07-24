import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload, Check, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EventPhotoSyncProps {
  eventId: number;
  eventTitle: string;
}

export default function EventPhotoSync({ eventId, eventTitle }: EventPhotoSyncProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid File Type",
          description: "Please select an image file (JPG, PNG, GIF, etc.)",
          variant: "destructive",
        });
        return;
      }

      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handlePhotoSync = async () => {
    if (!selectedFile) {
      toast({
        title: "Photo Required",
        description: "Please select a photo to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      // Convert file to base64
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(selectedFile);
      });

      const response = await fetch(`/api/events/${eventId}/photos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          photoData: base64,
          fileName: selectedFile.name,
          caption: caption.trim() || null,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setUploadSuccess(true);
        setSelectedFile(null);
        setPreviewUrl(null);
        setCaption("");
        
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        
        toast({
          title: "Photo Uploaded Successfully",
          description: "Your photo has been synced to this event!",
        });

        // Reset success state after 3 seconds
        setTimeout(() => setUploadSuccess(false), 3000);
      } else {
        throw new Error('Failed to upload photo');
      }
    } catch (error) {
      console.error('Error uploading photo:', error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload photo to event. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="glassmorphism border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Camera className="w-5 h-5 text-neon-purple" />
          Sync Photo to Event
        </CardTitle>
        <p className="text-gray-300 text-sm">
          Share your photos from "{eventTitle}"
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Upload Photo
          </label>
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="bg-gray-800 border-gray-600 text-white file:bg-neon-purple file:text-white file:border-none file:rounded-md file:px-3 file:py-1 file:mr-3"
          />
          {selectedFile && (
            <p className="text-sm text-gray-400 mt-1">
              Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          )}
        </div>

        {previewUrl && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 block">
              Preview
            </label>
            <div className="relative w-full h-32 bg-gray-800 rounded-lg overflow-hidden border border-gray-600">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <div>
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Caption (Optional)
          </label>
          <Textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Add a caption for your photo..."
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
            rows={3}
          />
        </div>

        <Button
          onClick={handlePhotoSync}
          disabled={isUploading || uploadSuccess}
          className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:shadow-lg hover:shadow-neon-purple/30 transition-all duration-300"
        >
          {uploadSuccess ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Photo Synced!
            </>
          ) : isUploading ? (
            <>
              <Upload className="w-4 h-4 mr-2 animate-spin" />
              Syncing...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 mr-2" />
              Sync Photo to Event
            </>
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          Photos are synced to help others discover and connect through shared experiences
        </p>
      </CardContent>
    </Card>
  );
}