import { Utensils, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-rose-500 to-orange-500 text-white flex items-center justify-center shadow-sm">
            <Utensils size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">CourtBite</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} className="text-rose-500" />
          <span>Explore food courts near you</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50">Sign in</button>
          <button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800">Get the app</button>
        </div>
      </div>
    </header>
  );
}
