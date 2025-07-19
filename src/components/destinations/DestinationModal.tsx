import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Clock, Users, Calendar, Camera, Heart } from "lucide-react";
import { Destination } from "@/data/destinations";

interface DestinationModalProps {
  destination: Destination | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DestinationModal({ destination, open, onOpenChange }: DestinationModalProps) {
  if (!destination) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card backdrop-blur-md border-accent/30">
        <DialogHeader>
          <div className="relative">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
            <div className="absolute bottom-4 left-4 right-4">
              <DialogTitle className="text-3xl font-bold text-white mb-2">
                {destination.name}
              </DialogTitle>
              <div className="flex items-center space-x-4 text-white">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{destination.country}, {destination.continent}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current text-yellow-400" />
                  <span>{destination.rating}</span>
                  <span className="text-white/70">({destination.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">{destination.duration}</div>
              <div className="text-xs text-muted-foreground">Duration</div>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <Users className="h-5 w-5 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">{destination.difficulty}</div>
              <div className="text-xs text-muted-foreground">Difficulty</div>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <Calendar className="h-5 w-5 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">{destination.bestTime}</div>
              <div className="text-xs text-muted-foreground">Best Time</div>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <div className="text-lg font-bold text-secondary mx-auto mb-1">{destination.price}</div>
              <div className="text-xs text-muted-foreground">Starting Price</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About This Destination</h3>
            <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
          </div>

          {/* History */}
          <div>
            <h3 className="text-xl font-semibold mb-3">History & Culture</h3>
            <p className="text-muted-foreground leading-relaxed">{destination.history}</p>
          </div>

          <Separator />

          {/* Highlights */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {destination.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Activities & Experiences</h3>
            <div className="flex flex-wrap gap-2">
              {destination.activities.map((activity, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {activity}
                </Badge>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
              <Camera className="h-5 w-5" />
              <span>Photo Gallery</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {destination.images.slice(0, 10).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${destination.name} ${index + 1}`}
                  className="w-full h-20 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Climate & Culture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Climate</h4>
              <p className="text-sm text-muted-foreground">{destination.climate}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Culture</h4>
              <p className="text-sm text-muted-foreground">{destination.culture}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
            <Button variant="hero" className="flex-1">
              Book This Expedition
            </Button>
            <Button variant="outline" className="flex-1">
              <Heart className="h-4 w-4 mr-2" />
              Add to Wishlist
            </Button>
            <Button variant="ghost">
              Share Destination
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}