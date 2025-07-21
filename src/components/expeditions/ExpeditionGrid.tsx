import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Star, Clock, MapPin } from "lucide-react";
import { expeditions } from "@/data/expeditions";

export default function ExpeditionGrid() {
  return (
    <section id="expeditions" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-ocean bg-clip-text text-transparent mb-6">
            Featured Expeditions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our expertly curated expeditions to the world's most extraordinary destinations. 
            Each journey is carefully designed to provide unforgettable experiences and deep cultural immersion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expeditions.map((expedition) => (
            <Card key={expedition.id} className="group overflow-hidden bg-background/50 backdrop-blur-sm border-accent/30 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
              <div className="relative">
                <img
                  src={expedition.image}
                  alt={expedition.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
                    {expedition.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className={`${
                    expedition.difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
                    expedition.difficulty === 'Moderate' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  } border-0`}>
                    {expedition.difficulty}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{expedition.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{expedition.destination}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{expedition.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-secondary">{expedition.price}</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {expedition.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 p-3 bg-accent/10 rounded-lg">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{expedition.maxGuests} guests</p>
                      <p className="text-xs text-muted-foreground">Max capacity</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-3 bg-accent/10 rounded-lg">
                    <Calendar className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{expedition.dates.length} dates</p>
                      <p className="text-xs text-muted-foreground">Available</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Expedition Highlights</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {expedition.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <Button variant="expedition" className="flex-1">
                      Book Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-accent/30">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Next departure: {expedition.dates[0]}</span>
                    <span>{expedition.reviews} reviews</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Expeditions
          </Button>
        </div>
      </div>
    </section>
  );
}