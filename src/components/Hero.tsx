import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-expedition.jpg";
import AuthDialog from "@/components/auth/AuthDialog";

export default function Hero() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="h-5 w-5 text-gold fill-current" />
              <span className="text-accent font-medium">Premium Expedition Cruises</span>
              <Star className="h-5 w-5 text-gold fill-current" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Explore the World's Most
              <span className="block bg-gradient-sunset bg-clip-text text-transparent">
                Extraordinary Places
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-accent mb-8 max-w-2xl mx-auto leading-relaxed">
              Embark on luxury expedition voyages to remote destinations. Experience untouched wilderness, 
              remarkable wildlife, and authentic cultures with expert guides and premium amenities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                onClick={() => setIsAuthOpen(true)}
                variant="hero"
                size="lg"
                className="text-lg px-8 py-6 animate-glow"
              >
                Start Your Journey
              </Button>
              
              <Button
                variant="glass"
                size="lg"
                className="text-lg px-8 py-6 group"
              >
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Expeditions
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-accent">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">250+</div>
                <div className="text-sm">Destinations</div>
              </div>
              <div className="h-8 w-px bg-accent/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">50+</div>
                <div className="text-sm">Countries</div>
              </div>
              <div className="h-8 w-px bg-accent/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">15</div>
                <div className="text-sm">Luxury Ships</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="h-8 w-8 text-accent animate-bounce" />
        </div>
      </section>

      <AuthDialog open={isAuthOpen} onOpenChange={setIsAuthOpen} />
    </>
  );
}