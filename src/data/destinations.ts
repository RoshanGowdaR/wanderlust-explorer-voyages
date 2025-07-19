import machupicchu from "@/assets/destinations/machu-picchu.jpg";
import greatwall from "@/assets/destinations/great-wall.jpg";
import santorini from "@/assets/destinations/santorini.jpg";
import tajmahal from "@/assets/destinations/taj-mahal.jpg";
import norwayfjords from "@/assets/destinations/norway-fjords.jpg";
import antarctica from "@/assets/destinations/antarctica.jpg";
import petra from "@/assets/destinations/petra.jpg";
import galapagos from "@/assets/destinations/galapagos.jpg";
import everest from "@/assets/destinations/everest.jpg";
import safari from "@/assets/destinations/safari.jpg";
import angkorWat from "@/assets/destinations/angkor-wat.jpg";
import easterIsland from "@/assets/destinations/easter-island.jpg";
import yellowstone from "@/assets/destinations/yellowstone.jpg";
import victoriaFalls from "@/assets/destinations/victoria-falls.jpg";
import bagan from "@/assets/destinations/bagan.jpg";
import salarUyuni from "@/assets/destinations/salar-uyuni.jpg";
import cappadocia from "@/assets/destinations/cappadocia.jpg";
import banff from "@/assets/destinations/banff.jpg";
import halongBay from "@/assets/destinations/halong-bay.jpg";
import serengeti from "@/assets/destinations/serengeti.jpg";
import torresDelPaine from "@/assets/destinations/torres-del-paine.jpg";
import zhangjiajie from "@/assets/destinations/zhangjiajie.jpg";
import socotra from "@/assets/destinations/socotra.jpg";
import lofoten from "@/assets/destinations/lofoten.jpg";
import rajaAmpat from "@/assets/destinations/raja-ampat.jpg";

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
    history: "Machu Picchu was built in the 15th century during the reign of Inca emperor Pachacuti. This remarkable citadel served as a royal estate and sacred center, showcasing the sophisticated engineering and astronomical knowledge of the Inca civilization. Abandoned during the Spanish conquest, it remained hidden from the outside world until American explorer Hiram Bingham brought it to international attention in 1911.",
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
    history: "The Great Wall of China represents over 2,000 years of military engineering and construction. While sections were built by various states during the 7th century BC, the most famous portions were constructed during the Ming Dynasty (1368-1644). Built primarily for defense against northern invasions, the wall employed millions of workers including soldiers, peasants, and prisoners.",
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
    history: "Santorini's dramatic landscape was shaped by one of history's most significant volcanic eruptions around 1600 BC, which destroyed the advanced Minoan civilization and possibly inspired Plato's Atlantis legend. The island's distinctive architecture developed as a practical response to the environment, with cave houses carved into volcanic rock providing natural insulation.",
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
    history: "The Taj Mahal was commissioned in 1632 by Mughal emperor Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal, who died during childbirth. Construction took approximately 22 years and employed over 20,000 craftsmen from across the empire and beyond. The monument represents the pinnacle of Mughal architecture.",
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
    history: "Norway's fjords were carved by glacial activity over millions of years, with the most recent ice age ending about 10,000 years ago leaving behind these spectacular deep valleys filled with seawater. The Geirangerfjord and Nærøyfjord are UNESCO World Heritage sites.",
    activities: ["Fjord cruising", "Hiking", "Northern Lights viewing", "Kayaking", "Cultural village visits"],
    climate: "Temperate oceanic climate moderated by the Gulf Stream",
    culture: "Traditional Norwegian coastal culture with strong maritime heritage"
  },
  {
    id: "antarctica",
    name: "Antarctica",
    country: "International Territory",
    continent: "Antarctica",
    image: antarctica,
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
    images: [antarctica, antarctica, antarctica, antarctica, antarctica, antarctica, antarctica, antarctica, antarctica, antarctica],
    history: "Antarctica was the last continent to be discovered, first sighted in 1820 by Russian, British, and American expeditions. The heroic age of Antarctic exploration in the early 1900s saw legendary expeditions by Ernest Shackleton, Robert Falcon Scott, and Roald Amundsen.",
    activities: ["Wildlife viewing", "Zodiac landings", "Photography", "Educational lectures", "Polar plunge"],
    climate: "Polar climate with extreme conditions and 24-hour daylight in summer",
    culture: "International scientific community with focus on research and conservation"
  },
  {
    id: "petra",
    name: "Petra",
    country: "Jordan",
    continent: "Asia",
    image: petra,
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
    images: [petra, petra, petra, petra, petra, petra, petra, petra, petra, petra],
    history: "Petra was the capital city of the Nabataean Kingdom from around the 4th century BC. The Nabataeans were skilled traders who controlled important trade routes between Arabia, Egypt, and the Mediterranean. The city's remarkable architecture was carved directly into sandstone cliffs.",
    activities: ["Archaeological exploration", "Canyon hiking", "Night illuminations", "Bedouin culture", "Desert excursions"],
    climate: "Arid desert climate with hot days and cool nights",
    culture: "Ancient Nabataean heritage within modern Jordanian Bedouin traditions"
  },
  {
    id: "galapagos",
    name: "Galápagos Islands",
    country: "Ecuador",
    continent: "South America",
    image: galapagos,
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
    images: [galapagos, galapagos, galapagos, galapagos, galapagos, galapagos, galapagos, galapagos, galapagos, galapagos],
    history: "The Galápagos Islands were formed by volcanic activity over millions of years, creating an isolated ecosystem where unique species evolved. Charles Darwin's visit in 1835 aboard HMS Beagle led to observations that would later influence his theory of evolution by natural selection.",
    activities: ["Wildlife observation", "Snorkeling", "Hiking", "Educational tours", "Marine exploration"],
    climate: "Tropical climate with warm and cool seasons",
    culture: "Conservation-focused community with strong environmental protection ethos"
  },
  {
    id: "mount-everest",
    name: "Mount Everest",
    country: "Nepal/Tibet",
    continent: "Asia",
    image: everest,
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
    images: [everest, everest, everest, everest, everest, everest, everest, everest, everest, everest],
    history: "Mount Everest, known as Sagarmatha in Nepali and Chomolungma in Tibetan, has been sacred to local peoples for centuries. The mountain was first summited by Edmund Hillary and Tenzing Norgay in 1953, marking a historic achievement in human exploration.",
    activities: ["Base camp trekking", "Cultural immersion", "Mountain photography", "Monastery visits", "High-altitude acclimatization"],
    climate: "Extreme alpine climate with severe conditions at high altitude",
    culture: "Sherpa and Tibetan Buddhist traditions with strong mountaineering heritage"
  },
  {
    id: "safari-kenya",
    name: "Kenyan Safari",
    country: "Kenya",
    continent: "Africa",
    image: safari,
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
    images: [safari, safari, safari, safari, safari, safari, safari, safari, safari, safari],
    history: "Kenya's national parks and reserves were established to protect the country's incredible wildlife heritage and support local communities. The Maasai Mara, Kenya's most famous reserve, has been home to the Maasai people for centuries, who have lived in harmony with wildlife through traditional pastoral practices.",
    activities: ["Game drives", "Cultural visits", "Hot air ballooning", "Walking safaris", "Photography workshops"],
    climate: "Tropical climate with wet and dry seasons",
    culture: "Rich traditions of various ethnic groups including Maasai, Kikuyu, and Luo peoples"
  },
  {
    id: "angkor-wat",
    name: "Angkor Wat",
    country: "Cambodia",
    continent: "Asia",
    image: angkorWat,
    description: "Magnificent temple complex and largest religious monument in the world, showcasing ancient Khmer architecture.",
    highlights: [
      "Largest temple complex worldwide",
      "Ancient Khmer architecture",
      "Sunrise temple tours",
      "UNESCO World Heritage Site"
    ],
    bestTime: "November to March",
    duration: "3-5 days",
    difficulty: "Easy",
    price: "From $1,400",
    rating: 4.8,
    reviews: 24567,
    images: [angkorWat, angkorWat, angkorWat, angkorWat, angkorWat, angkorWat, angkorWat, angkorWat, angkorWat, angkorWat],
    history: "Angkor Wat was built in the early 12th century by King Suryavarman VII as a Hindu temple dedicated to Vishnu. Later transformed into a Buddhist temple, it represents the pinnacle of Khmer architecture and the height of the Angkor civilization.",
    activities: ["Temple exploration", "Sunrise photography", "Cultural tours", "Bicycle tours", "Local cuisine"],
    climate: "Tropical monsoon climate with wet and dry seasons",
    culture: "Ancient Khmer civilization with strong Buddhist influences"
  },
  {
    id: "easter-island",
    name: "Easter Island",
    country: "Chile",
    continent: "South America",
    image: easterIsland,
    description: "Remote Polynesian island famous for its nearly 1,000 monumental statues called moai created by the Rapa Nui people.",
    highlights: [
      "Mysterious moai statues",
      "Polynesian culture",
      "Remote island isolation",
      "Archaeological wonders"
    ],
    bestTime: "December to March, September to November",
    duration: "3-5 days",
    difficulty: "Easy",
    price: "From $3,800",
    rating: 4.6,
    reviews: 7329,
    images: [easterIsland, easterIsland, easterIsland, easterIsland, easterIsland, easterIsland, easterIsland, easterIsland, easterIsland, easterIsland],
    history: "Easter Island was settled by Polynesians between 700-1100 CE. The famous moai statues were carved between 1250-1500 CE by the Rapa Nui people. The island's isolation in the Pacific Ocean, over 2,000 miles from the nearest populated land, makes it one of the most remote inhabited islands in the world.",
    activities: ["Moai statue tours", "Cultural performances", "Hiking", "Stargazing", "Archaeological sites"],
    climate: "Subtropical oceanic climate with mild temperatures year-round",
    culture: "Rapa Nui Polynesian culture with unique traditions and language"
  },
  {
    id: "yellowstone",
    name: "Yellowstone National Park",
    country: "USA",
    continent: "North America",
    image: yellowstone,
    description: "America's first national park featuring geothermal wonders, diverse wildlife, and pristine wilderness.",
    highlights: [
      "Geothermal features",
      "Old Faithful geyser",
      "Wildlife viewing",
      "Pristine wilderness"
    ],
    bestTime: "April to October",
    duration: "4-7 days",
    difficulty: "Easy",
    price: "From $2,200",
    rating: 4.7,
    reviews: 18945,
    images: [yellowstone, yellowstone, yellowstone, yellowstone, yellowstone, yellowstone, yellowstone, yellowstone, yellowstone, yellowstone],
    history: "Established in 1872, Yellowstone was the world's first national park. It sits atop a volcanic caldera and contains half of the world's geothermal features. The park has been shaped by volcanic activity, glaciers, and natural processes over millions of years.",
    activities: ["Geyser watching", "Wildlife photography", "Hiking", "Camping", "Educational programs"],
    climate: "Continental climate with cold winters and mild summers",
    culture: "Native American heritage with modern conservation ethics"
  },
  {
    id: "victoria-falls",
    name: "Victoria Falls",
    country: "Zambia/Zimbabwe",
    continent: "Africa",
    image: victoriaFalls,
    description: "One of the world's largest waterfalls, known locally as 'the smoke that thunders' for its spectacular mist and sound.",
    highlights: [
      "World's largest waterfall",
      "Rainbow formations",
      "Adventure activities",
      "Wildlife viewing"
    ],
    bestTime: "April to October",
    duration: "2-4 days",
    difficulty: "Easy",
    price: "From $2,800",
    rating: 4.8,
    reviews: 14562,
    images: [victoriaFalls, victoriaFalls, victoriaFalls, victoriaFalls, victoriaFalls, victoriaFalls, victoriaFalls, victoriaFalls, victoriaFalls, victoriaFalls],
    history: "Victoria Falls was named by David Livingstone in 1855 after Queen Victoria, though it has been known to local peoples for centuries as Mosi-oa-Tunya, meaning 'the smoke that thunders.' The falls are formed by the Zambezi River cascading into a narrow gorge.",
    activities: ["Waterfall viewing", "River cruises", "Bungee jumping", "White water rafting", "Safari tours"],
    climate: "Tropical climate with wet and dry seasons",
    culture: "Local tribal traditions with colonial and modern influences"
  },
  {
    id: "bagan",
    name: "Bagan",
    country: "Myanmar",
    continent: "Asia",
    image: bagan,
    description: "Ancient city with over 2,000 Buddhist temples and pagodas scattered across a vast plain, offering magical sunrise views.",
    highlights: [
      "Thousands of ancient temples",
      "Hot air balloon rides",
      "Buddhist heritage",
      "Sunrise/sunset views"
    ],
    bestTime: "October to March",
    duration: "3-5 days",
    difficulty: "Easy",
    price: "From $1,800",
    rating: 4.7,
    reviews: 9876,
    images: [bagan, bagan, bagan, bagan, bagan, bagan, bagan, bagan, bagan, bagan],
    history: "Bagan was the capital of the Kingdom of Pagan from the 9th to 13th centuries. During its golden age, over 10,000 Buddhist temples, pagodas, and monasteries were built. Today, over 2,000 structures remain, making it one of the richest archaeological sites in Asia.",
    activities: ["Temple exploration", "Hot air ballooning", "Cultural tours", "Photography", "Local crafts"],
    climate: "Tropical savanna climate with hot, wet, and cool seasons",
    culture: "Traditional Burmese Buddhism with rich artistic heritage"
  },
  {
    id: "salar-de-uyuni",
    name: "Salar de Uyuni",
    country: "Bolivia",
    continent: "South America",
    image: salarUyuni,
    description: "World's largest salt flat creating a mirror effect during rainy season and offering otherworldly landscapes.",
    highlights: [
      "World's largest salt flat",
      "Mirror effect",
      "Flamingo colonies",
      "Stargazing opportunities"
    ],
    bestTime: "April to October",
    duration: "2-4 days",
    difficulty: "Easy",
    price: "From $1,600",
    rating: 4.9,
    reviews: 11234,
    images: [salarUyuni, salarUyuni, salarUyuni, salarUyuni, salarUyuni, salarUyuni, salarUyuni, salarUyuni, salarUyuni, salarUyuni],
    history: "Salar de Uyuni was formed as a result of transformations between several prehistoric lakes. It is covered by a few meters of salt crust which serves as a source of salt and is exceptionally flat, making it ideal for measuring satellite altitudes.",
    activities: ["Salt flat tours", "Flamingo watching", "Photography", "Stargazing", "Local culture"],
    climate: "High-altitude desert climate with cold nights and mild days",
    culture: "Indigenous Quechua and Aymara cultures with traditional salt harvesting"
  },
  {
    id: "cappadocia",
    name: "Cappadocia",
    country: "Turkey",
    continent: "Asia",
    image: cappadocia,
    description: "Surreal landscape of fairy chimneys, underground cities, and cave churches, famous for hot air balloon rides.",
    highlights: [
      "Fairy chimney rock formations",
      "Hot air balloon rides",
      "Underground cities",
      "Cave churches"
    ],
    bestTime: "April to June, September to November",
    duration: "3-5 days",
    difficulty: "Easy",
    price: "From $2,400",
    rating: 4.8,
    reviews: 16789,
    images: [cappadocia, cappadocia, cappadocia, cappadocia, cappadocia, cappadocia, cappadocia, cappadocia, cappadocia, cappadocia],
    history: "Cappadocia's unique landscape was formed by volcanic eruptions and erosion over millions of years. Early Christians carved churches and homes into the soft rock, creating a unique underground civilization. The region served as a refuge during times of persecution.",
    activities: ["Hot air ballooning", "Underground city tours", "Cave church visits", "Hiking", "Pottery workshops"],
    climate: "Continental climate with hot summers and cold winters",
    culture: "Ancient Christian heritage blended with Turkish traditions"
  },
  {
    id: "banff",
    name: "Banff National Park",
    country: "Canada",
    continent: "North America",
    image: banff,
    description: "Canada's oldest national park featuring pristine mountain lakes, glaciers, and abundant wildlife in the Canadian Rockies.",
    highlights: [
      "Pristine mountain lakes",
      "Glacier-fed waters",
      "Wildlife viewing",
      "Outdoor adventures"
    ],
    bestTime: "June to September",
    duration: "4-7 days",
    difficulty: "Moderate",
    price: "From $2,800",
    rating: 4.8,
    reviews: 22456,
    images: [banff, banff, banff, banff, banff, banff, banff, banff, banff, banff],
    history: "Established in 1885, Banff was Canada's first national park and the world's third national park. The area was originally inhabited by Indigenous peoples for over 10,000 years. The park was created after the discovery of hot springs, leading to its development as a tourist destination.",
    activities: ["Hiking", "Canoeing", "Wildlife photography", "Skiing", "Hot springs"],
    climate: "Mountain climate with cool summers and cold winters",
    culture: "Indigenous heritage with outdoor recreation and conservation focus"
  },
  {
    id: "ha-long-bay",
    name: "Ha Long Bay",
    country: "Vietnam",
    continent: "Asia",
    image: halongBay,
    description: "Emerald waters studded with thousands of limestone karsts and isles, creating a mystical seascape.",
    highlights: [
      "Limestone karst formations",
      "Emerald waters",
      "Cave exploration",
      "Traditional junk boats"
    ],
    bestTime: "October to April",
    duration: "2-3 days",
    difficulty: "Easy",
    price: "From $1,500",
    rating: 4.6,
    reviews: 19876,
    images: [halongBay, halongBay, halongBay, halongBay, halongBay, halongBay, halongBay, halongBay, halongBay, halongBay],
    history: "Ha Long Bay's limestone karsts and isles were formed over 20 million years through geological processes. The bay has been inhabited for thousands of years, with archaeological evidence of human presence dating back 25,000 years. It became a UNESCO World Heritage Site in 1994.",
    activities: ["Boat cruises", "Cave exploration", "Kayaking", "Swimming", "Fishing village visits"],
    climate: "Tropical monsoon climate with hot, humid summers",
    culture: "Vietnamese maritime culture with traditional fishing communities"
  },
  {
    id: "serengeti",
    name: "Serengeti National Park",
    country: "Tanzania",
    continent: "Africa",
    image: serengeti,
    description: "Vast ecosystem famous for the annual Great Migration of wildebeest and home to abundant African wildlife.",
    highlights: [
      "Great Migration",
      "Big Five wildlife",
      "Endless plains",
      "Predator interactions"
    ],
    bestTime: "June to October",
    duration: "5-8 days",
    difficulty: "Easy",
    price: "From $4,800",
    rating: 4.9,
    reviews: 15432,
    images: [serengeti, serengeti, serengeti, serengeti, serengeti, serengeti, serengeti, serengeti, serengeti, serengeti],
    history: "The Serengeti ecosystem has existed for millions of years, with the annual migration pattern established over 1.5 million years. The area was first protected in 1929 and became a national park in 1951. The name 'Serengeti' comes from the Maasai word 'siringet,' meaning endless plains.",
    activities: ["Game drives", "Migration viewing", "Cultural visits", "Hot air ballooning", "Photography"],
    climate: "Tropical savanna climate with wet and dry seasons",
    culture: "Maasai and other indigenous cultures with traditional pastoralism"
  }
];