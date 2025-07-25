import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Users, MapPin, Clock, CreditCard } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: any;
}

export default function BookingDialog({ open, onOpenChange, item }: BookingDialogProps) {
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate booking process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Booking Confirmed!",
        description: `Your expedition to ${item?.name} has been booked successfully. Check your email for confirmation details.`,
      });
      
      onOpenChange(false);
      
      // Reset form
      setDate(undefined);
      setGuests("2");
      
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-card backdrop-blur-md border-accent/30" aria-describedby="booking-description">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
            Book Your Expedition
          </DialogTitle>
          <p id="booking-description" className="text-muted-foreground">
            Complete your booking details for an unforgettable expedition experience.
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Selected Item Summary */}
          <div className="flex items-center space-x-4 p-4 bg-accent/10 rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.country || item.type}</p>
              {item.price && (
                <p className="text-sm font-medium text-primary">{item.price}</p>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Personal Information</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
              </div>
            </div>

            {/* Trip Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Trip Details</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Preferred Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label htmlFor="guests">Number of Guests *</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Special Requests</span>
              </h4>
              
              <div>
                <Label htmlFor="requests">Special Dietary Requirements or Accessibility Needs</Label>
                <Textarea 
                  id="requests"
                  name="requests"
                  placeholder="Please let us know about any dietary restrictions, accessibility needs, or other special requests..."
                  className="min-h-[80px]"
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Payment Information</span>
              </h4>
              
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  A deposit of 20% is required to secure your booking. The remaining balance will be due 60 days before departure.
                  Our booking team will contact you within 24 hours to finalize payment details.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => onOpenChange(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="hero"
                className="flex-1"
                disabled={isLoading || !date}
              >
                {isLoading ? "Processing..." : "Confirm Booking"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}