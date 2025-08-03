import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users, ChevronRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import DestinationModal from "./DestinationModal";
import SlidingAuthDialog from "@/components/auth/SlidingAuthDialog";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function DestinationGrid() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Listen for auth changes first
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === 'SIGNED_IN' && selectedDestination) {
        // Show destination modal after successful authentication
        setIsAuthOpen(false);
        setIsModalOpen(true);
      }
    });

    // Then get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    }).catch((error) => {
      console.error('Error getting session:', error);
      setUser(null);
    });

    return () => subscription.unsubscribe();
  }, [selectedDestination]);

  const handleDestinationClick = (destination: any) => {
    setSelectedDestination(destination);
    if (user) {
      // User is authenticated, show modal directly
      setIsModalOpen(true);
    } else {
      // User not authenticated, show auth dialog
      setIsAuthOpen(true);
    }
  };

  return (
    <>
      <section id="destinations" className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Most Popular Destinations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              Extraordinary Places Await
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the world's most breathtaking destinations through our carefully curated expeditions.
              Each location offers unique experiences and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className={`group cursor-pointer overflow-hidden border-0 bg-gradient-card backdrop-blur-sm transition-all duration-500 hover:shadow-elegant hover:scale-105 ${
                  hoveredId === destination.id ? 'ring-2 ring-primary/50' : ''
                }`}
                onMouseEnter={() => setHoveredId(destination.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleDestinationClick(destination)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="text-xs bg-background/90 text-foreground">
                        {destination.continent}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-white">
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <span>{destination.rating}</span>
                        <span className="text-white/70">({destination.reviews})</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover details */}
                  {hoveredId === destination.id && (
                    <div className="absolute inset-0 bg-gradient-hero animate-fade-in flex items-center justify-center p-4">
                      <div className="text-center text-white">
                        <h4 className="font-semibold mb-2">{destination.name}</h4>
                        <p className="text-sm mb-3 text-accent">{destination.description}</p>
                        <div className="flex items-center justify-center space-x-4 text-xs">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{destination.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{destination.difficulty}</span>
                          </div>
                        </div>
                        <div className="mt-3 text-sm font-semibold text-secondary">
                          {destination.price}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {destination.name}
                    </h3>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.country}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{destination.bestTime}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {destination.difficulty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              View All Destinations
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <SlidingAuthDialog 
        open={isAuthOpen} 
        onOpenChange={(open) => {
          setIsAuthOpen(open);
          if (!open) setSelectedDestination(null);
        }} 
      />

      <DestinationModal
        destination={selectedDestination}
        open={isModalOpen}
        onOpenChange={(open) => {
          setIsModalOpen(open);
          if (!open) setSelectedDestination(null);
        }}
      />
    </>
  );
}