import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, MapPin, Search } from "lucide-react";
import { format } from "date-fns";

export default function BookingEngine() {
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [destination, setDestination] = useState("");

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-card backdrop-blur-md border-accent/30 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center bg-gradient-ocean bg-clip-text text-transparent">
          Find Your Perfect Expedition
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Destination */}
          <div className="space-y-2">
            <Label htmlFor="destination" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Destination</span>
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger>
                <SelectValue placeholder="Where to?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="antarctica">Antarctica</SelectItem>
                <SelectItem value="arctic">Arctic</SelectItem>
                <SelectItem value="norway">Norwegian Fjords</SelectItem>
                <SelectItem value="galapagos">Galápagos</SelectItem>
                <SelectItem value="any">Any Destination</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4" />
              <span>Departure Date</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <Label htmlFor="guests" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Guests</span>
            </Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5+">5+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="space-y-2">
            <Label className="invisible">Search</Label>
            <Button variant="expedition" className="w-full h-10">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}