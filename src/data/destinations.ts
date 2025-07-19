import machupicchu from "@/assets/destinations/machu-picchu.jpg";
import greatwall from "@/assets/destinations/great-wall.jpg";
import santorini from "@/assets/destinations/santorini.jpg";
import tajmahal from "@/assets/destinations/taj-mahal.jpg";
import norwayfjords from "@/assets/destinations/norway-fjords.jpg";

export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  image: string;
  description: string;
  highlights: string[];
  bestTime: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  price: string;
  rating: number;
  reviews: number;
  images: string[];
  history: string;
  activities: string[];
  climate: string;
  culture: string;
}

export const destinations: Destination[] = [
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    continent: "South America",
    image: machupicchu,
    description: "Ancient Incan citadel perched high in the Andes Mountains, one of the New Seven Wonders of the World.",
    highlights: [
      "UNESCO World Heritage Site",
      "Stunning mountain views",
      "Ancient Incan architecture",
      "Mysterious history"
    ],
    bestTime: "May to September",
    duration: "3-5 days",
    difficulty: "Moderate",
    price: "From $2,500",
    rating: 4.9,
    reviews: 15847,
    images: [machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu],
    history: "Machu Picchu was built in the 15th century during the reign of Inca emperor Pachacuti. This remarkable citadel served as a royal estate and sacred center, showcasing the sophisticated engineering and astronomical knowledge of the Inca civilization. Abandoned during the Spanish conquest, it remained hidden from the outside world until American explorer Hiram Bingham brought it to international attention in 1911. The site demonstrates the Incas' mastery of stone construction, with precisely cut granite blocks fitted together without mortar, creating structures that have withstood earthquakes for centuries.",
    activities: ["Hiking", "Photography", "Cultural tours", "Sunrise viewing", "Local cuisine tasting"],
    climate: "Tropical highland climate with wet and dry seasons",
    culture: "Rich Incan heritage blended with modern Peruvian traditions"
  },
  {
    id: "great-wall",
    name: "Great Wall of China",
    country: "China", 
    continent: "Asia",
    image: greatwall,
    description: "Epic fortification stretching over 13,000 miles across northern China, showcasing ancient engineering prowess.",
    highlights: [
      "World's longest wall",
      "Historical significance",
      "Breathtaking landscapes",
      "Multiple entry points"
    ],
    bestTime: "April to June, September to November",
    duration: "2-4 days",
    difficulty: "Moderate",
    price: "From $1,800",
    rating: 4.8,
    reviews: 28451,
    images: [greatwall, greatwall, greatwall, greatwall, greatwall, greatwall, greatwall, greatwall, greatwall, greatwall],
    history: "The Great Wall of China represents over 2,000 years of military engineering and construction. While sections were built by various states during the 7th century BC, the most famous portions were constructed during the Ming Dynasty (1368-1644). Contrary to popular belief, it's not visible from space with the naked eye, but it remains one of humanity's most impressive architectural achievements. Built primarily for defense against northern invasions, the wall employed millions of workers including soldiers, peasants, and prisoners. The structure showcases remarkable engineering, incorporating natural geographical features and utilizing local materials.",
    activities: ["Wall hiking", "Historical exploration", "Photography", "Cable car rides", "Cultural museums"],
    climate: "Continental climate with hot summers and cold winters",
    culture: "Deep Chinese history spanning multiple dynasties and civilizations"
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    continent: "Europe", 
    image: santorini,
    description: "Stunning Greek island with iconic blue-domed churches, dramatic cliffs, and spectacular sunsets over the Aegean Sea.",
    highlights: [
      "World-famous sunsets",
      "Cycladic architecture", 
      "Volcanic beaches",
      "Premium wine region"
    ],
    bestTime: "April to October",
    duration: "3-7 days",
    difficulty: "Easy",
    price: "From $3,200",
    rating: 4.7,
    reviews: 19283,
    images: [santorini, santorini, santorini, santorini, santorini, santorini, santorini, santorini, santorini, santorini],
    history: "Santorini's dramatic landscape was shaped by one of history's most significant volcanic eruptions around 1600 BC, which destroyed the advanced Minoan civilization and possibly inspired Plato's Atlantis legend. The island's distinctive architecture developed as a practical response to the environment, with cave houses carved into volcanic rock providing natural insulation. The iconic blue and white color scheme became standardized in the 1960s, with blue representing the sea and sky, and white reflecting the intense Mediterranean sun. Today's Santorini balances its ancient heritage with modern luxury tourism.",
    activities: ["Sunset viewing", "Wine tasting", "Beach relaxation", "Boat tours", "Archaeological sites"],
    climate: "Mediterranean climate with warm, dry summers and mild winters",
    culture: "Traditional Greek island life with influences from various Mediterranean civilizations"
  },
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    country: "India",
    continent: "Asia",
    image: tajmahal,
    description: "Magnificent white marble mausoleum, a symbol of eternal love and one of the world's most beautiful buildings.",
    highlights: [
      "UNESCO World Heritage Site",
      "Mughal architecture masterpiece",
      "Symbol of love",
      "Intricate marble inlay work"
    ],
    bestTime: "October to March",
    duration: "1-2 days",
    difficulty: "Easy",
    price: "From $1,200",
    rating: 4.6,
    reviews: 42165,
    images: [tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal],
    history: "The Taj Mahal was commissioned in 1632 by Mughal emperor Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal, who died during childbirth. Construction took approximately 22 years and employed over 20,000 craftsmen from across the empire and beyond. The monument represents the pinnacle of Mughal architecture, combining elements from Islamic, Persian, Ottoman Turkish, and Indian architectural styles. The central dome is surrounded by four smaller domes, and the entire structure is set in formal gardens representing paradise. The building appears to change color throughout the day, from pink at dawn to golden at sunset to ethereal white under moonlight.",
    activities: ["Architectural tours", "Photography", "Garden walks", "Cultural performances", "Local craft shopping"],
    climate: "Hot semi-arid climate with monsoon season",
    culture: "Rich Mughal heritage within diverse Indian cultural traditions"
  },
  {
    id: "norway-fjords",
    name: "Norwegian Fjords",
    country: "Norway",
    continent: "Europe",
    image: norwayfjords,
    description: "Dramatic glacially carved valleys filled with deep blue waters, towering waterfalls, and snow-capped peaks.",
    highlights: [
      "UNESCO World Heritage fjords",
      "Spectacular waterfalls",
      "Northern Lights viewing",
      "Midnight sun experience"
    ],
    bestTime: "May to September",
    duration: "5-10 days",
    difficulty: "Moderate",
    price: "From $4,500",
    rating: 4.9,
    reviews: 12847,
    images: [norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords],
    history: "Norway's fjords were carved by glacial activity over millions of years, with the most recent ice age ending about 10,000 years ago leaving behind these spectacular deep valleys filled with seawater. The Geirangerfjord and Nærøyfjord are UNESCO World Heritage sites, recognized for their outstanding natural beauty and geological significance. Viking settlements dating back over 1,000 years dot the fjord regions, where hardy communities developed unique ways of life adapted to the dramatic landscape. Traditional stave churches, many dating to the medieval period, showcase distinctive Norwegian architecture perfectly integrated with the natural environment.",
    activities: ["Fjord cruising", "Hiking", "Northern Lights viewing", "Kayaking", "Cultural village visits"],
    climate: "Temperate oceanic climate moderated by the Gulf Stream",
    culture: "Traditional Norwegian coastal culture with strong maritime heritage"
  },
  {
    id: "antarctica",
    name: "Antarctica",
    country: "International Territory",
    continent: "Antarctica",
    image: machupicchu, // Placeholder - we'll generate more images
    description: "Earth's last great wilderness, home to incredible wildlife and pristine landscapes of ice and snow.",
    highlights: [
      "Penguin colonies",
      "Pristine wilderness",
      "Zodiac expeditions",
      "Scientific research stations"
    ],
    bestTime: "November to March",
    duration: "10-21 days",
    difficulty: "Moderate",
    price: "From $12,000",
    rating: 4.9,
    reviews: 5847,
    images: [machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu, machupicchu],
    history: "Antarctica was the last continent to be discovered, first sighted in 1820 by Russian, British, and American expeditions. The heroic age of Antarctic exploration in the early 1900s saw legendary expeditions by Ernest Shackleton, Robert Falcon Scott, and Roald Amundsen. The Antarctic Treaty, signed in 1959, dedicated the continent to peaceful scientific investigation and environmental protection. Today, Antarctica serves as a natural laboratory for climate research and a sanctuary for unique wildlife that has evolved in isolation.",
    activities: ["Wildlife viewing", "Zodiac landings", "Photography", "Educational lectures", "Polar plunge"],
    climate: "Polar climate with extreme conditions and 24-hour daylight in summer",
    culture: "International scientific community with focus on research and conservation"
  },
  {
    id: "petra",
    name: "Petra",
    country: "Jordan",
    continent: "Asia",
    image: greatwall, // Placeholder
    description: "Ancient Nabataean city carved into rose-red cliffs, featuring elaborate temples and tombs.",
    highlights: [
      "Rose-red stone architecture",
      "The Treasury facade",
      "Ancient water systems",
      "Desert landscapes"
    ],
    bestTime: "March to May, September to November",
    duration: "2-3 days",
    difficulty: "Moderate",
    price: "From $2,200",
    rating: 4.8,
    reviews: 18495,
    images: [greatwall, greatwall, greatwall, greatwall, greatwall, greatwall, greatwall, greatwall, greatwall, greatwall],
    history: "Petra was the capital city of the Nabataean Kingdom from around the 4th century BC. The Nabataeans were skilled traders who controlled important trade routes between Arabia, Egypt, and the Mediterranean. The city's remarkable architecture was carved directly into sandstone cliffs, creating elaborate facades that have survived for over 2,000 years. Petra was gradually abandoned after trade routes shifted and earthquakes damaged the city. It was lost to the Western world until Swiss explorer Johann Ludwig Burckhardt rediscovered it in 1812.",
    activities: ["Archaeological exploration", "Canyon hiking", "Night illuminations", "Bedouin culture", "Desert excursions"],
    climate: "Arid desert climate with hot days and cool nights",
    culture: "Ancient Nabataean heritage within modern Jordanian Bedouin traditions"
  },
  {
    id: "galapagos",
    name: "Galápagos Islands",
    country: "Ecuador",
    continent: "South America",
    image: santorini, // Placeholder
    description: "Pristine archipelago where Charles Darwin developed his theory of evolution, home to unique endemic species.",
    highlights: [
      "Unique endemic wildlife",
      "Evolution research site",
      "Pristine marine environment",
      "Volcanic landscapes"
    ],
    bestTime: "Year-round destination",
    duration: "5-8 days",
    difficulty: "Moderate",
    price: "From $6,500",
    rating: 4.9,
    reviews: 8794,
    images: [santorini, santorini, santorini, santorini, santorini, santorini, santorini, santorini, santorini, santorini],
    history: "The Galápagos Islands were formed by volcanic activity over millions of years, creating an isolated ecosystem where unique species evolved. Charles Darwin's visit in 1835 aboard HMS Beagle led to observations that would later influence his theory of evolution by natural selection. The islands were designated as Ecuador's first national park in 1959 and became a UNESCO World Heritage Site in 1978. Today, the archipelago represents one of the world's most important living laboratories for evolutionary biology and conservation.",
    activities: ["Wildlife observation", "Snorkeling", "Hiking", "Educational tours", "Marine exploration"],
    climate: "Tropical climate with warm and cool seasons",
    culture: "Conservation-focused community with strong environmental protection ethos"
  },
  {
    id: "mount-everest",
    name: "Mount Everest",
    country: "Nepal/Tibet",
    continent: "Asia",
    image: tajmahal, // Placeholder
    description: "The world's highest peak, the ultimate mountaineering challenge and spiritual pilgrimage destination.",
    highlights: [
      "World's highest mountain",
      "Base camp trekking",
      "Sherpa culture",
      "Himalayan views"
    ],
    bestTime: "March to May, September to November",
    duration: "14-21 days",
    difficulty: "Challenging",
    price: "From $8,500",
    rating: 4.7,
    reviews: 6543,
    images: [tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal, tajmahal],
    history: "Mount Everest, known as Sagarmatha in Nepali and Chomolungma in Tibetan, has been sacred to local peoples for centuries. The mountain was first summited by Edmund Hillary and Tenzing Norgay in 1953, marking a historic achievement in human exploration. The region has deep spiritual significance in Buddhist and Hindu traditions, with many monasteries and sacred sites throughout the area. Today, Everest attracts climbers and trekkers from around the world while supporting local Sherpa communities whose expertise and guidance are essential for safe mountain travel.",
    activities: ["Base camp trekking", "Cultural immersion", "Mountain photography", "Monastery visits", "High-altitude acclimatization"],
    climate: "Extreme alpine climate with severe conditions at high altitude",
    culture: "Sherpa and Tibetan Buddhist traditions with strong mountaineering heritage"
  },
  {
    id: "safari-kenya",
    name: "Kenyan Safari",
    country: "Kenya",
    continent: "Africa",
    image: norwayfjords, // Placeholder
    description: "Experience the Great Migration and witness Africa's Big Five in their natural habitat across vast savannas.",
    highlights: [
      "Great Migration spectacle",
      "Big Five wildlife",
      "Maasai culture",
      "Diverse ecosystems"
    ],
    bestTime: "July to October, January to March",
    duration: "7-14 days",
    difficulty: "Easy",
    price: "From $4,200",
    rating: 4.8,
    reviews: 11267,
    images: [norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords, norwayfjords],
    history: "Kenya's national parks and reserves were established to protect the country's incredible wildlife heritage and support local communities. The Maasai Mara, Kenya's most famous reserve, has been home to the Maasai people for centuries, who have lived in harmony with wildlife through traditional pastoral practices. The annual Great Migration, where over a million wildebeest and zebras cross between Kenya and Tanzania, represents one of nature's most spectacular phenomena. Conservation efforts in Kenya have become a model for community-based wildlife protection across Africa.",
    activities: ["Game drives", "Cultural visits", "Hot air ballooning", "Walking safaris", "Photography workshops"],
    climate: "Tropical climate with wet and dry seasons",
    culture: "Rich traditions of various ethnic groups including Maasai, Kikuyu, and Luo peoples"
  }
];

// Generate more destinations to reach 25+
export const additionalDestinations = [
  "Angkor Wat, Cambodia",
  "Easter Island, Chile", 
  "Yellowstone National Park, USA",
  "Victoria Falls, Zambia/Zimbabwe",
  "Bagan, Myanmar",
  "Salar de Uyuni, Bolivia",
  "Cappadocia, Turkey",
  "Banff National Park, Canada",
  "Ha Long Bay, Vietnam",
  "Serengeti, Tanzania",
  "Torres del Paine, Chile",
  "Zhangjiajie, China",
  "Socotra Island, Yemen",
  "Lofoten Islands, Norway",
  "Raja Ampat, Indonesia"
];