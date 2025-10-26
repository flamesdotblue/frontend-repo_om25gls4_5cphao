import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodCourtGrid from "./components/FoodCourtGrid";
import StallDrawer from "./components/StallDrawer";
import StallPage from "./components/StallPage";

const SAMPLE_DATA = [
  {
    id: "fc1",
    name: "City Central Food Court",
    location: "Downtown",
    rating: 4.6,
    description: "A curated mix of local favorites and global flavors with spacious seating.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    stalls: [
      {
        name: "Sakura Ramen",
        cuisine: "Japanese",
        rating: 4.7,
        waitTime: 12,
        topItems: ["Tonkotsu Ramen", "Gyoza", "Matcha Ice Cream"],
      },
      {
        name: "Bombay Bites",
        cuisine: "Indian",
        rating: 4.5,
        waitTime: 10,
        topItems: ["Paneer Tikka", "Chicken Biryani", "Masala Dosa"],
      },
      {
        name: "La Parrilla",
        cuisine: "Mexican",
        rating: 4.4,
        waitTime: 14,
        topItems: ["Al Pastor Tacos", "Quesadilla", "Churros"],
      },
    ],
  },
  {
    id: "fc2",
    name: "Harbor View Court",
    location: "Seaside",
    rating: 4.5,
    description: "Coastal bites and fresh seafood with a view of the marina.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1974&auto=format&fit=crop",
    stalls: [
      {
        name: "Marina Poke",
        cuisine: "Hawaiian",
        rating: 4.6,
        waitTime: 8,
        topItems: ["Ahi Poke Bowl", "Spicy Salmon", "Seaweed Salad"],
      },
      {
        name: "Fisherman's Grill",
        cuisine: "Seafood",
        rating: 4.3,
        waitTime: 16,
        topItems: ["Grilled Shrimp", "Fish & Chips", "Lobster Roll"],
      },
    ],
  },
  {
    id: "fc3",
    name: "Tech Park Eats",
    location: "Innovation District",
    rating: 4.7,
    description: "Modern stalls with fast service perfect for lunch breaks.",
    image:
      "https://images.unsplash.com/photo-1533777324565-a040eb52fac1?q=80&w=1964&auto=format&fit=crop",
    stalls: [
      {
        name: "Green Bowl Co.",
        cuisine: "Healthy",
        rating: 4.8,
        waitTime: 7,
        topItems: ["Protein Bowl", "Avocado Toast", "Cold Pressed Juice"],
      },
      {
        name: "Byte Burgers",
        cuisine: "American",
        rating: 4.5,
        waitTime: 11,
        topItems: ["Smash Burger", "Truffle Fries", "Milkshake"],
      },
      {
        name: "Spice Route",
        cuisine: "Pan-Asian",
        rating: 4.6,
        waitTime: 9,
        topItems: ["Pad Thai", "Korean Fried Chicken", "Bao"],
      },
    ],
  },
  {
    id: "fc4",
    name: "Garden Terrace Market",
    location: "Uptown",
    rating: 4.4,
    description: "Open-air vibes with artisanal desserts and coffee roasters.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop",
    stalls: [
      {
        name: "Flour & Fire",
        cuisine: "Italian",
        rating: 4.5,
        waitTime: 13,
        topItems: ["Margherita Pizza", "Pesto Pasta", "Tiramisu"],
      },
      {
        name: "Bean Theory",
        cuisine: "Cafe",
        rating: 4.4,
        waitTime: 5,
        topItems: ["Flat White", "Croissant", "Affogato"],
      },
    ],
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedStall, setSelectedStall] = useState(null);
  const [view, setView] = useState("home");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SAMPLE_DATA;
    return SAMPLE_DATA.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.stalls.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.cuisine.toLowerCase().includes(q) ||
            (s.topItems && s.topItems.join(" ").toLowerCase().includes(q))
        )
    );
  }, [query]);

  const openDrawer = (court) => {
    setSelectedCourt(court);
    setDrawerOpen(true);
  };

  const closeDrawer = () => setDrawerOpen(false);

  const handleViewStall = (stall, court) => {
    setSelectedStall(stall);
    setSelectedCourt(court);
    setDrawerOpen(false);
    setView("stall");
  };

  const backToHome = () => {
    setView("home");
    setSelectedStall(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      {view === "home" ? (
        <>
          <Hero query={query} setQuery={setQuery} />
          <FoodCourtGrid courts={filtered} onSelect={openDrawer} />
          <StallDrawer
            open={drawerOpen}
            onClose={closeDrawer}
            court={selectedCourt}
            onViewStall={handleViewStall}
          />
        </>
      ) : (
        <StallPage stall={selectedStall} court={selectedCourt} onBack={backToHome} />
      )}
      <footer className="py-10 text-center text-sm text-gray-500">
        Built for modern food courts • Seamless browsing and ordering
      </footer>
    </div>
  );
}
