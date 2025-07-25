import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, X, Star, Users, Calendar, Map } from "lucide-react";
import { ships } from "@/data/ships";

export default function ComparisonTool() {
  const [ship1, setShip1] = useState<string>("");
  const [ship2, setShip2] = useState<string>("");

  const selectedShip1 = ships.find(s => s.id === ship1);
  const selectedShip2 = ships.find(s => s.id === ship2);

  const features = [
    "All suites with private balconies",
    "Glass-domed observation lounge", 
    "Zodiac landing craft fleet",
    "Spa and wellness center",
    "Helicopter landing platform",
    "Advanced stabilization system",
    "Medical facility with doctor"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            Compare Expedition Ships
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare features, amenities, and specifications to find the perfect ship for your expedition
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Ship Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select First Ship</label>
              <Select value={ship1} onValueChange={setShip1}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a ship..." />
                </SelectTrigger>
                <SelectContent>
                  {ships.map((ship) => (
                    <SelectItem key={ship.id} value={ship.id}>
                      {ship.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Second Ship</label>
              <Select value={ship2} onValueChange={setShip2}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a ship..." />
                </SelectTrigger>
                <SelectContent>
                  {ships.map((ship) => (
                    <SelectItem key={ship.id} value={ship.id}>
                      {ship.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Comparison Table */}
          {selectedShip1 && selectedShip2 && (
            <Card className="bg-gradient-card backdrop-blur-md border-accent/30">
              <CardHeader>
                <CardTitle className="text-center">Ship Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {/* Headers */}
                  <div className="font-medium text-center">Feature</div>
                  <div className="text-center">
                    <img
                      src={selectedShip1.image}
                      alt={selectedShip1.name}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-bold">{selectedShip1.name}</h3>
                    <div className="flex items-center justify-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{selectedShip1.rating}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <img
                      src={selectedShip2.image}
                      alt={selectedShip2.name}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-bold">{selectedShip2.name}</h3>
                    <div className="flex items-center justify-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{selectedShip2.rating}</span>
                    </div>
                  </div>

                  {/* Capacity */}
                  <div className="flex items-center space-x-2 py-3 border-t">
                    <Users className="h-4 w-4" />
                    <span>Capacity</span>
                  </div>
                  <div className="text-center py-3 border-t">{selectedShip1.capacity} guests</div>
                  <div className="text-center py-3 border-t">{selectedShip2.capacity} guests</div>

                  {/* Year Built */}
                  <div className="flex items-center space-x-2 py-3 border-t">
                    <Calendar className="h-4 w-4" />
                    <span>Year Built</span>
                  </div>
                  <div className="text-center py-3 border-t">{selectedShip1.specifications.yearBuilt}</div>
                  <div className="text-center py-3 border-t">{selectedShip2.specifications.yearBuilt}</div>

                  {/* Price Range */}
                  <div className="flex items-center space-x-2 py-3 border-t">
                    <span>💰</span>
                    <span>Price Range</span>
                  </div>
                  <div className="text-center py-3 border-t">{selectedShip1.priceRange}</div>
                  <div className="text-center py-3 border-t">{selectedShip2.priceRange}</div>

                  {/* Features Comparison */}
                  {features.map((feature, index) => (
                    <>
                      <div key={`feature-${index}`} className="py-2 border-t text-sm">
                        {feature}
                      </div>
                      <div className="text-center py-2 border-t">
                        {selectedShip1.features.includes(feature) ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </div>
                      <div className="text-center py-2 border-t">
                        {selectedShip2.features.includes(feature) ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </div>
                    </>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}