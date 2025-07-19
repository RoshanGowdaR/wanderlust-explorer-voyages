import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, User, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            About Our Founder
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
            Meet Roshan Gowda RM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate explorer and expedition leader dedicated to bringing you the world's most extraordinary destinations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card backdrop-blur-md border-accent/30 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <User className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">Roshan Gowda RM</h3>
                      <p className="text-muted-foreground">Expedition Leader & Founder</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:basavarajrm33@gmail.com" className="text-primary hover:underline">
                      basavarajrm33@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Global Expedition Specialist</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">15+ Years Experience</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Our Mission</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide extraordinary expedition experiences that connect travelers with the world's most remote and beautiful destinations. 
                    Through expert guidance and luxury accommodations, we create unforgettable journeys that inspire and transform.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">50+</div>
                      <div className="text-sm text-muted-foreground">Expeditions Led</div>
                    </div>
                    <div className="text-center p-4 bg-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">20</div>
                      <div className="text-sm text-muted-foreground">Destinations</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}