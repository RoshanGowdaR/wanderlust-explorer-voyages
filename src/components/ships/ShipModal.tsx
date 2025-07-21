import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Calendar, MapPin, Star, X, Camera } from "lucide-react";
import { Ship } from "@/data/ships";

interface ShipModalProps {
  ship: Ship | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ShipModal({ ship, open, onOpenChange }: ShipModalProps) {
  if (!ship) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-card backdrop-blur-md border-accent/30">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-muted-foreground hover:text-foreground"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-3xl font-bold bg-gradient-ocean bg-clip-text text-transparent pr-8">
            {ship.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={ship.image}
              alt={ship.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
                {ship.rating}
              </Badge>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-background/50 border-accent/30">
              <CardContent className="p-4 flex items-center space-x-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Capacity</p>
                  <p className="font-semibold">{ship.capacity} guests</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background/50 border-accent/30">
              <CardContent className="p-4 flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Built</p>
                  <p className="font-semibold">{ship.specifications.yearBuilt}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background/50 border-accent/30">
              <CardContent className="p-4 flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Length</p>
                  <p className="font-semibold">{ship.specifications.length}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About {ship.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{ship.description}</p>
          </div>

          {/* Features */}
          {ship.features && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ship Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {ship.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="justify-center p-2">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Specifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ship Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="bg-background/50 border-accent/30">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Length</p>
                  <p className="font-semibold">{ship.specifications.length}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-accent/30">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Beam</p>
                  <p className="font-semibold">{ship.specifications.beam}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-accent/30">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Speed</p>
                  <p className="font-semibold">{ship.specifications.speed}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-accent/30">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Ice Class</p>
                  <p className="font-semibold">{ship.specifications.iceClass}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-accent/30">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Registry</p>
                  <p className="font-semibold">{ship.specifications.registry}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-accent/30">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Year Built</p>
                  <p className="font-semibold">{ship.specifications.yearBuilt}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Photo Gallery */}
          {ship.images && ship.images.length > 0 && (
            <>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Ship Gallery</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {ship.images.slice(0, 10).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${ship.name} ${index + 1}`}
                      className="w-full h-20 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button variant="expedition" className="flex-1">
              Book This Expedition
            </Button>
            <Button variant="outline" className="flex-1">
              View Itineraries
            </Button>
            <Button variant="outline" className="flex-1">
              Download Brochure
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}