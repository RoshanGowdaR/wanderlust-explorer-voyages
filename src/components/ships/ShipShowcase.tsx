import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ship, Anchor, Users, Gauge, Star, ChevronRight, Wifi, Utensils, Waves } from "lucide-react";
import { ships, shipFeatures } from "@/data/ships";

export default function ShipShowcase() {
  const [selectedShip, setSelectedShip] = useState(ships[0]);

  return (
    <section id="ships" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Expedition Fleet
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
            Luxury Expedition Vessels
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our fleet of ice-strengthened ships combines luxury comfort with expedition capability,
            designed to take you safely to the world's most remote destinations.
          </p>
        </div>

        <Tabs defaultValue="fleet" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="fleet">Our Fleet</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="details">Ship Details</TabsTrigger>
          </TabsList>

          <TabsContent value="fleet" className="space-y-8">
            {/* Featured Ship */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="relative">
                <img
                  src={selectedShip.image}
                  alt={selectedShip.name}
                  className="w-full h-80 object-cover rounded-lg shadow-elegant"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured Ship
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{selectedShip.name}</h3>
                  <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{selectedShip.capacity} guests</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Ship className="h-4 w-4" />
                      <span>{selectedShip.suites} suites</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span>{selectedShip.rating}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedShip.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedShip.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-secondary font-semibold">
                  <span>Starting from</span>
                  <span className="text-xl">{selectedShip.priceRange}</span>
                </div>

                <Button variant="hero" className="w-full">
                  Explore {selectedShip.name}
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Ship Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ships.slice(0, 6).map((ship) => (
                <Card
                  key={ship.id}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 ${
                    selectedShip.id === ship.id ? 'ring-2 ring-primary/50 bg-accent/10' : 'bg-gradient-card'
                  }`}
                  onClick={() => setSelectedShip(ship)}
                >
                  <CardHeader className="pb-3">
                    <div className="relative">
                      <img
                        src={ship.image}
                        alt={ship.name}
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-xs">
                          {ship.specifications.iceClass}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {ship.name}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span>{ship.capacity} guests</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-current text-yellow-400" />
                          <span>{ship.rating}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {ship.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-secondary">
                        From {ship.priceRange.split(' - ')[0]}
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shipFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Ship className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-relaxed">{feature}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Anchor className="h-5 w-5" />
                    <span>Technical Specifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Length</div>
                      <div className="font-medium">{selectedShip.specifications.length}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Beam</div>
                      <div className="font-medium">{selectedShip.specifications.beam}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Max Speed</div>
                      <div className="font-medium">{selectedShip.specifications.speed}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Ice Class</div>
                      <div className="font-medium">{selectedShip.specifications.iceClass}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Registry</div>
                      <div className="font-medium">{selectedShip.specifications.registry}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Year Built</div>
                      <div className="font-medium">{selectedShip.specifications.yearBuilt}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Utensils className="h-5 w-5" />
                    <span>Amenities & Services</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedShip.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Waves className="h-5 w-5" />
                  <span>Expedition Areas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {selectedShip.expeditionAreas.map((area, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View Complete Fleet
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}