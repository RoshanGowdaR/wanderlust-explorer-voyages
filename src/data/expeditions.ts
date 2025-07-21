import antarctica from "@/assets/destinations/antarctica.jpg";
import norwayfjords from "@/assets/destinations/norway-fjords.jpg";
import galapagos from "@/assets/destinations/galapagos.jpg";
import everest from "@/assets/destinations/everest.jpg";

export interface Expedition {
  id: string;
  name: string;
  destination: string;
  duration: string;
  dates: string[];
  price: string;
  image: string;
  description: string;
  highlights: string[];
  included: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  shipName: string;
  maxGuests: number;
  rating: number;
  reviews: number;
}

export const expeditions: Expedition[] = [
  {
    id: "antarctica-explorer",
    name: "Antarctic Explorer",
    destination: "Antarctica",
    duration: "11 days",
    dates: ["Feb 15, 2025", "Mar 8, 2025", "Mar 25, 2025", "Nov 12, 2025"],
    price: "From $18,500",
    image: antarctica,
    description: "Embark on the ultimate polar adventure to the White Continent. Experience pristine wilderness, incredible wildlife including penguins, seals, and whales, and dramatic icy landscapes that will leave you breathless.",
    highlights: [
      "Emperor and Adelie penguin colonies",
      "Zodiac landings on pristine beaches", 
      "Massive icebergs and glacial formations",
      "Whale watching opportunities",
      "Expert naturalist guides",
      "Scientific research station visits"
    ],
    included: [
      "All meals and accommodations",
      "Zodiac expeditions and landings",
      "Professional photography workshops",
      "Expedition gear rental",
      "Educational lectures",
      "All port taxes and fees"
    ],
    difficulty: "Moderate",
    shipName: "World Explorer",
    maxGuests: 176,
    rating: 4.9,
    reviews: 542
  },
  {
    id: "norway-fjords-classic",
    name: "Norwegian Fjords Classic",
    destination: "Norwegian Fjords",
    duration: "8 days",
    dates: ["Jun 5, 2025", "Jun 18, 2025", "Jul 2, 2025", "Jul 16, 2025"],
    price: "From $12,800",
    image: norwayfjords,
    description: "Discover the breathtaking beauty of Norway's dramatic fjords, towering waterfalls, and picturesque coastal villages. Experience the midnight sun and immerse yourself in authentic Norwegian culture.",
    highlights: [
      "UNESCO World Heritage fjords",
      "Geirangerfjord and Nærøyfjord",
      "Spectacular waterfalls and glaciers",
      "Traditional Norwegian fishing villages",
      "Northern Lights viewing (seasonal)",
      "Cultural experiences and local cuisine"
    ],
    included: [
      "Luxury ship accommodations",
      "All gourmet meals and beverages",
      "Shore excursions and guided tours",
      "Cultural performances",
      "Scenic cruising through fjords",
      "Professional expedition team"
    ],
    difficulty: "Easy",
    shipName: "Nordic Spirit",
    maxGuests: 162,
    rating: 4.8,
    reviews: 387
  },
  {
    id: "galapagos-evolution",
    name: "Galápagos Evolution",
    destination: "Galápagos Islands",
    duration: "7 days",
    dates: ["Apr 10, 2025", "May 1, 2025", "Sep 15, 2025", "Oct 8, 2025"],
    price: "From $14,500",
    image: galapagos,
    description: "Follow in Darwin's footsteps through the enchanted Galápagos Islands. Encounter unique wildlife found nowhere else on Earth and witness evolution in action in this pristine natural laboratory.",
    highlights: [
      "Giant tortoises and marine iguanas",
      "Blue-footed boobies and flamingos",
      "Snorkeling with sea lions and rays",
      "Darwin Research Station visit",
      "Pristine volcanic landscapes",
      "Expert naturalist presentations"
    ],
    included: [
      "Boutique expedition vessel",
      "All meals and premium beverages", 
      "Daily zodiac excursions",
      "Snorkeling equipment provided",
      "National park fees",
      "Expert naturalist guides"
    ],
    difficulty: "Moderate",
    shipName: "Adventure Seeker",
    maxGuests: 78,
    rating: 4.9,
    reviews: 298
  },
  {
    id: "everest-base-camp",
    name: "Everest Base Camp Trek",
    destination: "Mount Everest, Nepal",
    duration: "16 days",
    dates: ["Oct 5, 2025", "Oct 20, 2025", "Mar 15, 2026", "Apr 2, 2026"],
    price: "From $8,500",
    image: everest,
    description: "Trek to the base of the world's highest mountain through the heart of the Himalayas. Experience Sherpa culture, ancient monasteries, and breathtaking mountain vistas on this bucket-list adventure.",
    highlights: [
      "Everest Base Camp at 17,600 feet",
      "Stunning Himalayan mountain views",
      "Sherpa culture and monasteries",
      "Namche Bazaar mountain market",
      "Tengboche Monastery visit",
      "Professional mountain guides"
    ],
    included: [
      "Expert mountain guides and porters",
      "All meals and mountain lodging",
      "Domestic flights in Nepal",
      "Permits and entrance fees",
      "Altitude acclimatization program",
      "Emergency evacuation insurance"
    ],
    difficulty: "Challenging",
    shipName: "Land-based expedition",
    maxGuests: 16,
    rating: 4.7,
    reviews: 156
  }
];