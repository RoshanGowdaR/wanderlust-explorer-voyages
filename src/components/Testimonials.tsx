import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Seattle, WA",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "The Antarctica expedition exceeded all my expectations. The crew was incredibly knowledgeable, and seeing penguins in their natural habitat was a life-changing experience. Every detail was perfectly planned.",
    expedition: "Antarctica Wildlife Expedition"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Our Galápagos adventure was absolutely magical. The naturalist guides were exceptional, and the small ship experience made it feel intimate and exclusive. Swimming with sea lions was unforgettable!",
    expedition: "Galápagos Discovery"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "The Arctic expedition to witness polar bears was a dream come true. The expedition team's expertise in finding wildlife was remarkable, and the ship's amenities made the journey comfortable and luxurious.",
    expedition: "Arctic Polar Bear Quest"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "London, UK",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Exploring remote islands in Raja Ampat was like entering another world. The marine biodiversity was incredible, and the expedition photography workshops helped me capture memories that will last forever.",
    expedition: "Raja Ampat Marine Expedition"
  },
  {
    id: 5,
    name: "Lisa Park",
    location: "Sydney, Australia",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "The Norwegian fjords expedition was breathtaking. Every day brought new spectacular scenery, and the cultural experiences in remote villages added a wonderful human element to the natural beauty.",
    expedition: "Norwegian Fjords Explorer"
  },
  {
    id: 6,
    name: "Robert Wilson",
    location: "San Francisco, CA",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Our family expedition to see the Northern Lights was perfectly organized. The kids were engaged throughout, and the expedition team made sure everyone felt included. It was an adventure we'll never forget.",
    expedition: "Arctic Aurora Experience"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Expedition Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from fellow adventurers who've experienced the magic of our expeditions. 
              Their stories inspire our next journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="text-sm font-medium text-primary">
                    {testimonial.expedition}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional testimonials in a scrollable row */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(4).map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{testimonial.location}</p>
                      <blockquote className="text-sm text-muted-foreground italic mb-2">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="text-xs font-medium text-primary">
                        {testimonial.expedition}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Join thousands of satisfied adventurers who've trusted us with their dream expeditions.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-muted-foreground">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-muted-foreground">Expeditions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;