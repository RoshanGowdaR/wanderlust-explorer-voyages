import shipInterior from "@/assets/ship-interior.jpg";

export interface Ship {
  id: string;
  name: string;
  capacity: number;
  suites: number;
  crew: number;
  image: string;
  description: string;
  features: string[];
  specifications: {
    length: string;
    beam: string;
    speed: string;
    iceClass: string;
    registry: string;
    yearBuilt: string;
  };
  amenities: string[];
  expeditionAreas: string[];
  priceRange: string;
  rating: number;
}

export const ships: Ship[] = [
  {
    id: "world-explorer",
    name: "World Explorer",
    capacity: 176,
    suites: 88,
    crew: 130,
    image: shipInterior,
    description: "Our flagship expedition vessel combining luxury comfort with ice-class capability for polar exploration.",
    features: [
      "All suites with private balconies",
      "Glass-domed observation lounge",
      "Zodiac landing craft fleet",
      "Spa and wellness center",
      "Fitness center with ocean views",
      "Expert naturalist guides",
      "Advanced stabilization system",
      "Polar-class ice rating",
      "Heated mudroom for gear",
      "Multiple dining venues",
      "Library and lecture theater",
      "Medical facility with doctor",
      "Satellite communication",
      "Environmental protection systems",
      "Photography equipment rental"
    ],
    specifications: {
      length: "126 meters",
      beam: "19 meters", 
      speed: "16 knots",
      iceClass: "1B",
      registry: "Portugal",
      yearBuilt: "2019"
    },
    amenities: [
      "Restaurant with panoramic views",
      "Observation lounge with bar",
      "Spa with sauna and treatment rooms",
      "Fitness center",
      "Library",
      "Gift shop",
      "Laundry service",
      "24-hour room service"
    ],
    expeditionAreas: ["Antarctica", "Arctic", "Patagonia", "Norwegian Fjords"],
    priceRange: "$15,000 - $45,000",
    rating: 4.9
  },
  {
    id: "ocean-adventurer",
    name: "Ocean Adventurer", 
    capacity: 132,
    suites: 66,
    crew: 90,
    image: shipInterior,
    description: "Intimate expedition ship perfect for reaching remote destinations with smaller group experiences.",
    features: [
      "Intimate expedition experience",
      "Ice-strengthened hull",
      "Zodiac fleet for landings",
      "Outdoor observation deck",
      "Spacious suites",
      "Expert expedition team",
      "Advanced navigation systems",
      "Environmental compliance",
      "Photography platform",
      "Dining room with views",
      "Lounge and bar areas",
      "Medical facilities",
      "Equipment storage",
      "Guest laundry",
      "Educational programs"
    ],
    specifications: {
      length: "101 meters",
      beam: "16 meters",
      speed: "14 knots", 
      iceClass: "1A",
      registry: "Bahamas",
      yearBuilt: "2017"
    },
    amenities: [
      "Main dining room",
      "Panoramic lounge",
      "Observation deck",
      "Library corner",
      "Boutique",
      "Wellness area",
      "Guest services",
      "Concierge"
    ],
    expeditionAreas: ["Arctic", "Greenland", "Svalbard", "Canadian Arctic"],
    priceRange: "$12,000 - $35,000",
    rating: 4.8
  },
  {
    id: "polar-pioneer",
    name: "Polar Pioneer",
    capacity: 54,
    suites: 27,
    crew: 38,
    image: shipInterior,
    description: "Boutique expedition vessel offering the most exclusive and personalized polar adventures.",
    features: [
      "Ultra-luxury boutique experience",
      "Highest ice-class rating",
      "Premium suite accommodations",
      "Personal expedition guides",
      "Helicopter landing platform",
      "Advanced ice navigation",
      "Gourmet dining program",
      "Exclusive shore excursions",
      "Premium equipment provided",
      "Personalized service",
      "Small group experiences",
      "Expert photography guides",
      "Wellness and spa services",
      "Fine wine and spirits",
      "Cultural immersion programs"
    ],
    specifications: {
      length: "89 meters",
      beam: "14 meters",
      speed: "15 knots",
      iceClass: "1A Super",
      registry: "Norway",
      yearBuilt: "2021"
    },
    amenities: [
      "Gourmet restaurant",
      "Premium lounge and bar",
      "Spa and wellness center", 
      "Fitness facility",
      "Helicopter deck",
      "Panoramic observatory",
      "Boutique library",
      "Exclusive shopping"
    ],
    expeditionAreas: ["Antarctica", "Arctic", "Remote Islands", "Exclusive Destinations"],
    priceRange: "$25,000 - $75,000",
    rating: 5.0
  },
  {
    id: "arctic-explorer",
    name: "Arctic Explorer",
    capacity: 200,
    suites: 100,
    crew: 140,
    image: shipInterior,
    description: "Large expedition ship offering comprehensive facilities while maintaining expedition authenticity.",
    features: [
      "Spacious expedition vessel",
      "Multiple suite categories",
      "Ice-class construction",
      "Large Zodiac fleet",
      "Comprehensive facilities",
      "Multiple dining options",
      "Entertainment venues",
      "Expedition equipment",
      "Photography services",
      "Educational programs",
      "Wellness facilities",
      "Shopping and services",
      "Communication systems",
      "Safety equipment",
      "Environmental systems"
    ],
    specifications: {
      length: "140 meters",
      beam: "21 meters",
      speed: "17 knots",
      iceClass: "1B",
      registry: "Marshall Islands",
      yearBuilt: "2018"
    },
    amenities: [
      "Multiple restaurants",
      "Several lounges and bars",
      "Theater and entertainment",
      "Spa and fitness complex",
      "Shopping arcade",
      "Medical center",
      "Communication center",
      "Business facilities"
    ],
    expeditionAreas: ["Arctic", "Antarctica", "Sub-Antarctic", "North Atlantic"],
    priceRange: "$13,000 - $40,000",
    rating: 4.7
  },
  {
    id: "expedition-classic",
    name: "Expedition Classic",
    capacity: 96,
    suites: 48,
    crew: 65,
    image: shipInterior,
    description: "Traditional expedition vessel combining classic exploration spirit with modern comfort and safety.",
    features: [
      "Classic expedition atmosphere",
      "Traditional ship design",
      "Ice-strengthened construction",
      "Zodiac landing capabilities",
      "Comfortable accommodations",
      "Expedition expertise",
      "Navigation technology",
      "Safety systems",
      "Guest equipment",
      "Dining facilities",
      "Social areas",
      "Educational resources",
      "Medical support",
      "Communication tools",
      "Environmental protection"
    ],
    specifications: {
      length: "95 meters",
      beam: "15 meters",
      speed: "13 knots",
      iceClass: "1A",
      registry: "Denmark",
      yearBuilt: "2015"
    },
    amenities: [
      "Traditional dining room",
      "Classic lounge",
      "Observation areas",
      "Small library",
      "Basic fitness area",
      "Guest services",
      "Simple boutique",
      "Relaxation spaces"
    ],
    expeditionAreas: ["Greenland", "Arctic Canada", "Svalbard", "Iceland"],
    priceRange: "$10,000 - $28,000",
    rating: 4.6
  },
  {
    id: "southern-explorer",
    name: "Southern Explorer", 
    capacity: 144,
    suites: 72,
    crew: 95,
    image: shipInterior,
    description: "Specialized for Southern Ocean expeditions with superior comfort and Antarctic expertise.",
    features: [
      "Antarctic specialization",
      "Superior stabilization",
      "Premium ice navigation",
      "Zodiac expedition fleet",
      "Educational facilities",
      "Research partnerships",
      "Wildlife observation",
      "Photography support",
      "Expedition gear",
      "Comfort amenities",
      "Safety equipment",
      "Medical facilities",
      "Communication systems",
      "Environmental compliance",
      "Guest services"
    ],
    specifications: {
      length: "118 meters",
      beam: "18 meters",
      speed: "15 knots",
      iceClass: "1A Super",
      registry: "Liberia",
      yearBuilt: "2020"
    },
    amenities: [
      "Panoramic restaurant",
      "Multiple lounges", 
      "Wellness center",
      "Fitness room",
      "Library and media",
      "Boutique shopping",
      "Guest services",
      "Relaxation areas"
    ],
    expeditionAreas: ["Antarctica", "Sub-Antarctic Islands", "Patagonia", "Chilean Fjords"],
    priceRange: "$14,000 - $42,000",
    rating: 4.8
  },
  {
    id: "adventure-seeker",
    name: "Adventure Seeker",
    capacity: 78,
    suites: 39,
    crew: 52,
    image: shipInterior,
    description: "Agile expedition vessel designed for accessing the most remote and challenging destinations.",
    features: [
      "Remote destination access",
      "Agile ship design",
      "Advanced ice capability",
      "Small group expeditions",
      "Flexible itineraries",
      "Expert guidance",
      "Adventure equipment",
      "Photography platform",
      "Research support",
      "Comfortable suites",
      "Dining excellence",
      "Social spaces",
      "Safety systems",
      "Medical care",
      "Environmental responsibility"
    ],
    specifications: {
      length: "85 meters",
      beam: "13 meters",
      speed: "14 knots",
      iceClass: "1A Super",
      registry: "Norway",
      yearBuilt: "2019"
    },
    amenities: [
      "Expedition dining",
      "Adventure lounge",
      "Observation deck",
      "Equipment room",
      "Small spa area",
      "Library nook",
      "Guest facilities",
      "Outdoor spaces"
    ],
    expeditionAreas: ["Remote Arctic", "Antarctic Peninsula", "Isolated Islands", "Unexplored Regions"],
    priceRange: "$16,000 - $48,000",
    rating: 4.9
  },
  {
    id: "luxury-voyager",
    name: "Luxury Voyager",
    capacity: 120,
    suites: 60,
    crew: 110,
    image: shipInterior,
    description: "Premium expedition yacht offering the finest accommodations and personalized service.",
    features: [
      "Ultra-luxury experience",
      "All-suite accommodations",
      "Personal butler service",
      "Gourmet cuisine program",
      "Premium expedition gear",
      "Expert naturalists",
      "Photography workshops",
      "Wellness programs",
      "Cultural experiences",
      "Private balconies",
      "Fine dining venues",
      "Premium amenities",
      "Concierge services",
      "Exclusive experiences",
      "Environmental leadership"
    ],
    specifications: {
      length: "110 meters",
      beam: "17 meters",
      speed: "16 knots",
      iceClass: "1B",
      registry: "Malta",
      yearBuilt: "2022"
    },
    amenities: [
      "Multiple gourmet restaurants",
      "Premium bars and lounges",
      "Full-service spa",
      "Fitness and wellness center",
      "Exclusive boutiques",
      "Private dining options",
      "Butler service",
      "Luxury transportation"
    ],
    expeditionAreas: ["Luxury Arctic", "Premium Antarctica", "Exclusive Destinations", "Private Charters"],
    priceRange: "$30,000 - $85,000",
    rating: 5.0
  },
  {
    id: "nordic-spirit",
    name: "Nordic Spirit",
    capacity: 162,
    suites: 81,
    crew: 105,
    image: shipInterior,
    description: "Scandinavian-designed expedition ship emphasizing sustainability and Nordic elegance.",
    features: [
      "Sustainable expedition design",
      "Nordic aesthetic",
      "Environmental technology",
      "Ice-class capability",
      "Cultural programming",
      "Educational focus",
      "Wildlife expertise",
      "Photography support",
      "Expedition equipment",
      "Comfort amenities",
      "Dining excellence",
      "Social spaces",
      "Wellness facilities",
      "Guest services",
      "Safety systems"
    ],
    specifications: {
      length: "125 meters",
      beam: "19 meters",
      speed: "15 knots",
      iceClass: "1A",
      registry: "Norway",
      yearBuilt: "2021"
    },
    amenities: [
      "Nordic-inspired restaurant",
      "Panoramic lounges",
      "Wellness and spa center",
      "Fitness facilities",
      "Cultural center",
      "Sustainable boutique",
      "Guest services",
      "Outdoor decks"
    ],
    expeditionAreas: ["Norwegian Fjords", "Greenland", "Arctic Norway", "Nordic Seas"],
    priceRange: "$13,500 - $38,000",
    rating: 4.8
  },
  {
    id: "discovery-quest",
    name: "Discovery Quest",
    capacity: 186,
    suites: 93,
    crew: 125,
    image: shipInterior,
    description: "Modern expedition ship combining cutting-edge technology with traditional exploration values.",
    features: [
      "Modern expedition technology",
      "Advanced navigation systems",
      "Ice-strengthened hull",
      "Research capabilities",
      "Educational programs",
      "Expert expedition team",
      "Photography services",
      "Wildlife observation",
      "Cultural experiences",
      "Comfort accommodations",
      "Dining variety",
      "Entertainment options",
      "Wellness amenities",
      "Guest services",
      "Safety excellence"
    ],
    specifications: {
      length: "132 meters",
      beam: "20 meters",
      speed: "16 knots",
      iceClass: "1B",
      registry: "Bahamas",
      yearBuilt: "2020"
    },
    amenities: [
      "Contemporary dining venues",
      "Modern lounges and bars",
      "Wellness and fitness center",
      "Theater and entertainment",
      "Shopping facilities",
      "Medical center",
      "Communication center",
      "Recreational areas"
    ],
    expeditionAreas: ["Antarctica", "Arctic", "Remote Destinations", "Research Expeditions"],
    priceRange: "$14,500 - $41,000",
    rating: 4.7
  },
  {
    id: "heritage-explorer",
    name: "Heritage Explorer",
    capacity: 108,
    suites: 54,
    crew: 75,
    image: shipInterior,
    description: "Classic expedition vessel honoring maritime heritage while providing modern expedition capabilities.",
    features: [
      "Maritime heritage design",
      "Classic expedition spirit",
      "Traditional craftsmanship",
      "Modern safety systems",
      "Cultural programming",
      "Historical education",
      "Expert guides",
      "Photography workshops",
      "Wildlife observation",
      "Comfortable suites",
      "Traditional dining",
      "Heritage library",
      "Social spaces",
      "Guest services",
      "Environmental care"
    ],
    specifications: {
      length: "102 meters",
      beam: "16 meters",
      speed: "14 knots",
      iceClass: "1A",
      registry: "United Kingdom",
      yearBuilt: "2016"
    },
    amenities: [
      "Heritage dining room",
      "Traditional lounges",
      "Maritime library",
      "Heritage museum",
      "Classic bar",
      "Observation areas",
      "Guest services",
      "Heritage boutique"
    ],
    expeditionAreas: ["Historic Routes", "Cultural Expeditions", "Arctic Heritage", "Maritime History"],
    priceRange: "$12,500 - $34,000",
    rating: 4.6
  },
  {
    id: "wilderness-pioneer",
    name: "Wilderness Pioneer",
    capacity: 68,
    suites: 34,
    crew: 45,
    image: shipInterior,
    description: "Small expedition vessel specializing in wilderness access and intimate nature experiences.",
    features: [
      "Wilderness specialization",
      "Small group experiences",
      "Natural history focus",
      "Expert naturalists",
      "Photography guidance",
      "Research participation",
      "Environmental education",
      "Wildlife expertise",
      "Expedition equipment",
      "Intimate atmosphere",
      "Personalized service",
      "Educational programs",
      "Safety systems",
      "Communication tools",
      "Sustainable practices"
    ],
    specifications: {
      length: "78 meters",
      beam: "12 meters",
      speed: "13 knots",
      iceClass: "1A",
      registry: "Canada",
      yearBuilt: "2018"
    },
    amenities: [
      "Natural foods dining",
      "Wilderness lounge",
      "Observation platform",
      "Nature library",
      "Equipment room",
      "Wellness area",
      "Guest facilities",
      "Outdoor spaces"
    ],
    expeditionAreas: ["Remote Wilderness", "Wildlife Sanctuaries", "Pristine Environments", "Research Areas"],
    priceRange: "$17,000 - $52,000",
    rating: 4.9
  },
  {
    id: "polar-luxury",
    name: "Polar Luxury",
    capacity: 156,
    suites: 78,
    crew: 118,
    image: shipInterior,
    description: "Premium polar expedition vessel offering sophisticated luxury in extreme environments.",
    features: [
      "Polar luxury experience",
      "Premium accommodations",
      "Advanced ice navigation",
      "Luxury amenities",
      "Gourmet dining",
      "Wellness programs",
      "Expert expedition guides",
      "Photography services",
      "Cultural enrichment",
      "Personal service",
      "Entertainment options",
      "Shopping facilities",
      "Medical care",
      "Communication systems",
      "Environmental leadership"
    ],
    specifications: {
      length: "122 meters",
      beam: "18 meters",
      speed: "15 knots",
      iceClass: "1A Super",
      registry: "Finland",
      yearBuilt: "2023"
    },
    amenities: [
      "Luxury restaurants",
      "Premium bars and lounges",
      "Full-service spa",
      "Fitness and wellness complex",
      "Luxury shopping",
      "Private dining",
      "Concierge services",
      "Premium entertainment"
    ],
    expeditionAreas: ["Luxury Polar", "Premium Arctic", "Exclusive Antarctica", "High-end Expeditions"],
    priceRange: "$28,000 - $78,000",
    rating: 4.9
  },
  {
    id: "expedition-master",
    name: "Expedition Master",
    capacity: 224,
    suites: 112,
    crew: 165,
    image: shipInterior,
    description: "Large expedition cruise ship providing comprehensive expedition experiences with resort-style amenities.",
    features: [
      "Comprehensive expedition platform",
      "Resort-style amenities",
      "Multiple expedition programs",
      "Educational facilities",
      "Entertainment venues",
      "Dining variety",
      "Wellness complex",
      "Shopping areas",
      "Cultural programming",
      "Photography workshops",
      "Wildlife observation",
      "Research partnerships",
      "Guest services",
      "Medical facilities",
      "Communication center"
    ],
    specifications: {
      length: "145 meters",
      beam: "22 meters",
      speed: "17 knots",
      iceClass: "1B",
      registry: "Panama",
      yearBuilt: "2019"
    },
    amenities: [
      "Multiple specialty restaurants",
      "Variety of bars and lounges",
      "Full spa and wellness center",
      "Fitness and sports facilities",
      "Theater and entertainment",
      "Shopping promenade",
      "Medical and dental center",
      "Business and communication center"
    ],
    expeditionAreas: ["Multiple Regions", "Comprehensive Expeditions", "Educational Tours", "Family Expeditions"],
    priceRange: "$11,000 - $35,000",
    rating: 4.5
  },
  {
    id: "ice-navigator",
    name: "Ice Navigator",
    capacity: 92,
    suites: 46,
    crew: 62,
    image: shipInterior,
    description: "Ice-class specialist vessel designed for challenging polar conditions and extreme environment access.",
    features: [
      "Extreme ice capability",
      "Polar specialization",
      "Advanced ice navigation",
      "Challenging conditions access",
      "Expert ice pilots",
      "Safety excellence",
      "Research capabilities",
      "Educational programs",
      "Photography platform",
      "Wildlife expertise",
      "Expedition equipment",
      "Comfort amenities",
      "Dining facilities",
      "Guest services",
      "Environmental protection"
    ],
    specifications: {
      length: "98 meters",
      beam: "15 meters",
      speed: "14 knots",
      iceClass: "1A Super",
      registry: "Sweden",
      yearBuilt: "2017"
    },
    amenities: [
      "Ice-view restaurant",
      "Polar observation lounge",
      "Expedition briefing room",
      "Ice library",
      "Wellness area",
      "Equipment storage",
      "Guest facilities",
      "Outdoor platforms"
    ],
    expeditionAreas: ["Extreme Polar", "Heavy Ice Regions", "Research Expeditions", "Challenging Destinations"],
    priceRange: "$18,000 - $55,000",
    rating: 4.8
  }
];

export const shipFeatures = [
  "Ice-strengthened hulls for polar navigation",
  "Zodiac landing craft for shore excursions", 
  "All outside-facing suites with ocean views",
  "Glass-domed observation lounges",
  "Advanced stabilization systems",
  "Expert naturalist and expedition guides",
  "Photography and videography equipment",
  "Spa and wellness facilities",
  "Multiple dining venues and bars",
  "24-hour medical facilities",
  "Environmental protection systems",
  "Satellite communication and WiFi",
  "Heated mudrooms for expedition gear",
  "Libraries and lecture theaters",
  "Fitness centers with ocean views",
  "Guest laundry and concierge services",
  "Helicopter landing platforms (select ships)",
  "Research and educational partnerships",
  "Cultural enrichment programs",
  "Premium expedition equipment included"
];