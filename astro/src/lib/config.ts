export const siteConfig = {
  name: "BookMyMoment.in",
  tagline: "India's Premium Private Celebration Platform",
  description: "Book private romantic celebrations — candlelight dinners, birthday surprises, proposals & anniversary setups in Vadodara, Surat & more cities across India.",
  phone: "+91 7487888730",
  whatsapp: "917487888730",
  email: "hello@bookmymoment.in",
  website: "https://bookmymoment.in",
  themeColor: "#e11d48",
  // GSC: verified via public/google449567c9b7854ff6.html (file-based verification)
};

export interface Package {
  slug: string;
  name: string;
  price: number;
  description: string;
  emoji: string;
  features: string[];
}

export interface City {
  slug: string;
  name: string;
  state: string;
  venue: string;
  venueSlug: string;
  website: string;
  phone: string;
  whatsapp: string;
  address: string;
  rating: string;
  reviewCount: string;
  couplesServed: string;
  tagline: string;
  emoji: string;
  highlights: string[];
  packages: Package[];
  services: string[];
  timeSlots: string[];
  minPrice: number;
}

export const cities: City[] = [
  {
    slug: "vadodara",
    name: "Vadodara",
    state: "Gujarat",
    venue: "Friends Factory Cafe",
    venueSlug: "friends-factory-cafe",
    website: "https://friendsfactorycafe.com",
    phone: "+91 7487888730",
    whatsapp: "917487888730",
    address: "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Gotri, Vadodara, Gujarat 391101",
    rating: "4.9",
    reviewCount: "1,256+",
    couplesServed: "3,000+",
    tagline: "Where Every Occasion Turns Into a Forever Memory Under the Stars",
    emoji: "🌃",
    highlights: ["100% Private", "Rooftop + Glass House", "8 Unique Setups", "4.9★ on Google"],
    services: ["Birthday Surprise", "Anniversary Celebration", "Proposal", "Candlelight Dinner", "Surprise Date", "Pre-Wedding Shoot", "Baby Moments", "Valentine's Week"],
    timeSlots: ["Lunch (12–3 PM)", "Evening (4–7 PM)", "Dinner (7–10 PM)", "Late Night (10 PM–1 AM)"],
    minPrice: 4700,
    packages: [
      { slug: "forever-us-loveframe-rooftop", name: "Forever Us LoveFrame Rooftop", price: 6900, emoji: "🌅", description: "Celebrate love framed against the stunning rooftop skyline", features: ["3-Hour Private Booking", "Rooftop Setup", "Celebration Cake", "Romantic Music", "Welcome Drink"] },
      { slug: "eternal-love-rooftop-celebration", name: "Eternal Love Rooftop Celebration", price: 6500, emoji: "🌠", description: "Moments that shine as brightly as the city lights below", features: ["3-Hour Private Booking", "Rooftop Setup", "Celebration Cake", "Romantic Music", "Welcome Drink"] },
      { slug: "golden-promise-glass-house", name: "Golden Promise Glass House", price: 6000, emoji: "✨", description: "A radiant glass house where every moment glows with love", features: ["3-Hour Private Booking", "Glass House Setup", "Celebration Cake", "Romantic Music", "Welcome Drink"] },
      { slug: "timeless-bond-glass-house", name: "Timeless Bond Glass House", price: 5700, emoji: "💍", description: "Elegant glass house where love feels calm and everlasting", features: ["3-Hour Private Booking", "Glass House Setup", "Romantic Music", "Photo-Ready Décor"] },
      { slug: "sweet-together-glass-house", name: "Sweet Together Glass House", price: 5500, emoji: "🍰", description: "A charming space where love feels cozy and every moment sweeter", features: ["3-Hour Private Booking", "Glass House Setup", "Romantic Music", "Photo-Ready Décor"] },
      { slug: "moonlit-romance-experience", name: "Moonlit Romance Experience", price: 5100, emoji: "🌙", description: "A serene night where love unfolds beneath a glowing moon", features: ["3-Hour Private Booking", "Night Setup", "Celebration Cake", "Romantic Music"] },
      { slug: "the-promise-creative-area", name: "The Promise Creative Area", price: 4700, emoji: "🎨", description: "Ignite joy under the stars in a magical rooftop creative space", features: ["3-Hour Private Booking", "Creative Area Setup", "Romantic Music", "Welcome Drink"] },
      { slug: "pure-love-glass-house", name: "Pure Love Glass House", price: 4700, emoji: "🤍", description: "Where emotions are honest, moments gentle, and love beautifully pure", features: ["3-Hour Private Booking", "Glass House Setup", "Romantic Music", "Photo-Ready Décor"] },
    ],
  },
  {
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    venue: "HIVY — Place for Celebrations",
    venueSlug: "hivy",
    website: "https://hivy.co.in",
    phone: "+91 9727027278",
    whatsapp: "919727027278",
    address: "252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road, Adajan, Pal Gam, Surat, Gujarat 394510",
    rating: "4.9",
    reviewCount: "150+",
    couplesServed: "3,000+",
    tagline: "Where Every Occasion Turns Into a Forever Memory",
    emoji: "🌸",
    highlights: ["100% Private", "Themed Indoor Setups", "5 Curated Packages", "4.9★ on Google"],
    services: ["Birthday Surprise", "Anniversary Celebration", "Proposal", "Candlelight Dinner", "Surprise Date", "Pre-Wedding Shoot", "Baby Moments", "Valentine's Week"],
    timeSlots: ["Lunch (12–3 PM)", "Evening (4–7 PM)", "Dinner (7–10 PM)", "Late Night (10 PM–1 AM)"],
    minPrice: 5100,
    packages: [
      { slug: "swing-of-love", name: "Swing of Love", price: 5100, emoji: "🪷", description: "Float in love on a dreamy swing setup where romance meets playfulness", features: ["3-Hour Private Booking", "Swing Setup", "Celebration Cake", "Non-Alcoholic Champagne", "Romantic Music"] },
      { slug: "the-elite-group-setup", name: "Elite Group Setup", price: 5400, emoji: "👑", description: "A one-of-a-kind proposal experience tailored just for your love story", features: ["3-Hour Private Booking", "Elite Setup", "Celebration Cake", "Non-Alcoholic Champagne", "Romantic Music"] },
      { slug: "boho-chic", name: "BoHo Chic", price: 5700, emoji: "🌿", description: "Free-spirited romance in a bohemian paradise filled with warmth", features: ["3-Hour Private Booking", "Bohemian Setup", "Celebration Cake", "Non-Alcoholic Champagne", "Romantic Music"] },
      { slug: "fairy-tale-proposals", name: "Fairy Tale Proposals", price: 6300, emoji: "🧚", description: "Step into a magical fairytale where dreams come true", features: ["3-Hour Private Booking", "Fairy Tale Setup", "Celebration Cake", "Non-Alcoholic Champagne", "Romantic Music"] },
      { slug: "tent-of-romance", name: "Tent of Romance", price: 6500, emoji: "⛺", description: "Cozy romantic tent where love blooms under soft lights", features: ["3-Hour Private Booking", "Tent Setup", "Celebration Cake", "Non-Alcoholic Champagne", "Romantic Music"] },
    ],
  },
];

export const services = [
  { name: "Birthday Surprise", icon: "🎂", desc: "Magical birthday celebrations with beautiful decorations & cakes." },
  { name: "Anniversary Celebration", icon: "💑", desc: "Elegant anniversary dinners with special decorations & intimacy." },
  { name: "Proposal Setup", icon: "💍", desc: "Stunning proposal setups for that life-changing question." },
  { name: "Candlelight Dinner", icon: "🕯️", desc: "Romantic private dining with candlelight and gourmet cuisine." },
  { name: "Surprise Date", icon: "🎁", desc: "Transform ordinary dates into extraordinary memories." },
  { name: "Pre-Wedding Shoot", icon: "📸", desc: "Capture your love story in beautiful private settings." },
  { name: "Baby Moments", icon: "👶", desc: "Baby shower & pregnancy announcement celebrations." },
  { name: "Valentine's Week", icon: "💝", desc: "Romantic experiences from Rose Day to Valentine's Day." },
];
