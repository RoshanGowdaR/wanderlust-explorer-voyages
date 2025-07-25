import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface BookingData {
  id: string;
  type: 'destination' | 'ship' | 'expedition';
  name: string;
  price: string;
  bookingDate: Date;
}

export function useBooking() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const { toast } = useToast();

  const openBooking = (item: any, type: 'destination' | 'ship' | 'expedition') => {
    setSelectedItem({ ...item, type });
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedItem(null);
  };

  const handleBooking = async (bookingData: any) => {
    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Booking Confirmed!",
        description: `Your expedition to ${selectedItem?.name} has been booked successfully.`,
      });
      
      closeBooking();
      return true;
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  return {
    isBookingOpen,
    selectedItem,
    openBooking,
    closeBooking,
    handleBooking,
  };
}