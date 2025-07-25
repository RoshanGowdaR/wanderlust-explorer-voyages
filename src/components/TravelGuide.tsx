import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Star, Clock, Users } from "lucide-react";

const guides = [
  {
    title: "Complete Antarctica Guide",
    description: "Everything you need to know about traveling to the White Continent, from what to pack to wildlife viewing tips.",
    duration: "15 min read",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    badge: "Popular"
  },
  {
    title: "Arctic Photography Tips",
    description: "Professional techniques for capturing stunning wildlife and landscape photos in extreme conditions.",
    duration: "12 min read", 
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd",
    badge: "Expert"
  },
  {
    title: "Packing for Polar Expeditions",
    description: "Essential gear checklist and clothing recommendations for polar adventures.",
    duration: "8 min read",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0",
    badge: "Essential"
  }
];

export default function TravelGuide() {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            Expert Travel Guides
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive guides written by expedition experts to help you prepare for your adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-gradient-card backdrop-blur-sm border-accent/30">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 left-3 bg-primary text-primary-foreground"
                >
                  {guide.badge}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {guide.title}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{guide.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span>{guide.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {guide.description}
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="expedition" size="lg">
            View All Guides
          </Button>
        </div>
      </div>
    </section>
  );
}