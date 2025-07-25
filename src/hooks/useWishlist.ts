import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface WishlistItem {
  id: string;
  type: 'destination' | 'ship' | 'expedition';
  name: string;
  image: string;
  price?: string;
  addedDate: Date;
}

export function useWishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const { toast } = useToast();

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wanderlust-wishlist');
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load wishlist:', error);
      }
    }
  }, []);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('wanderlust-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item: any, type: 'destination' | 'ship' | 'expedition') => {
    const wishlistItem: WishlistItem = {
      id: item.id,
      type,
      name: item.name,
      image: item.image,
      price: item.price,
      addedDate: new Date(),
    };

    const exists = wishlist.find(w => w.id === item.id && w.type === type);
    
    if (exists) {
      toast({
        title: "Already in Wishlist",
        description: `${item.name} is already in your wishlist.`,
      });
      return;
    }

    setWishlist(prev => [...prev, wishlistItem]);
    toast({
      title: "Added to Wishlist",
      description: `${item.name} has been added to your wishlist.`,
    });
  };

  const removeFromWishlist = (id: string, type: string) => {
    setWishlist(prev => prev.filter(item => !(item.id === id && item.type === type)));
    toast({
      title: "Removed from Wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const isInWishlist = (id: string, type: string) => {
    return wishlist.some(item => item.id === id && item.type === type);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
}