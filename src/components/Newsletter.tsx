import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, Calendar, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate subscription
    setTimeout(() => {
      toast({
        title: "Welcome aboard!",
        description: "You're now subscribed to our expedition updates.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  const benefits = [
    {
      icon: Calendar,
      text: "Early access to new expeditions"
    },
    {
      icon: Gift,
      text: "Exclusive subscriber discounts"
    },
    {
      icon: Camera,
      text: "Behind-the-scenes expedition content"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Join Our Explorer's Circle</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Be the first to discover new expeditions, get exclusive insights from our expedition leaders, 
                  and access special offers available only to our community.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isSubscribing || !email}>
                    {isSubscribing ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  No spam, ever. Unsubscribe at any time. We respect your privacy.
                </p>
              </form>

              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  Join <span className="font-semibold text-foreground">5,000+</span> adventure enthusiasts 
                  already in our community
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;