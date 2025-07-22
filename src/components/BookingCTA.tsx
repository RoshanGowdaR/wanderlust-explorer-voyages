import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Shield, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingCTA = () => {
  const { toast } = useToast();

  const handleBooking = () => {
    toast({
      title: "Booking System Coming Soon!",
      description: "We're preparing an amazing booking experience. Contact us directly for now.",
    });
  };

  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Booking",
      description: "Easy rescheduling up to 30 days before departure"
    },
    {
      icon: Shield,
      title: "Travel Protection",
      description: "Comprehensive insurance and emergency support included"
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Maximum 12 guests per expedition for personalized experience"
    },
    {
      icon: Sparkles,
      title: "All-Inclusive",
      description: "Meals, accommodation, guides, and equipment included"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Limited Availability
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us on an unforgettable expedition to some of the world's most remote and beautiful destinations. 
              Book now to secure your spot on these exclusive journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 bg-background/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-background border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Book Your Expedition Today</CardTitle>
              <CardDescription className="text-base">
                Early booking discount: Save up to $500 when you book 90 days in advance
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleBooking} className="text-lg px-8">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Users className="h-5 w-5 mr-2" />
                  Request Group Quote
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  No booking fees
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Free cancellation 60 days prior
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Best price guarantee
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Questions about booking? Call our expedition specialists at{" "}
              <span className="font-semibold text-foreground">+1 (555) 123-4567</span> or{" "}
              <button className="text-primary hover:underline font-semibold">
                schedule a consultation
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;