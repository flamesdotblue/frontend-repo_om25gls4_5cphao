import { MapPin, Star } from "lucide-react";

function FoodCourtCard({ court, onSelect }) {
  return (
    <button
      onClick={() => onSelect(court)}
      className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-all text-left"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={court.image}
          alt={court.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">{court.name}</h3>
            <div className="mt-1 flex items-center gap-1.5 text-gray-500 text-sm">
              <MapPin size={16} />
              <span>{court.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-md text-sm">
            <Star size={14} fill="#F59E0B" className="text-amber-500" />
            <span>{court.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-500 line-clamp-2">{court.description}</div>
      </div>
    </button>
  );
}

export default function FoodCourtGrid({ courts, onSelect }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Popular Food Courts</h2>
        <span className="text-sm text-gray-500">{courts.length} found</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courts.map((court) => (
          <FoodCourtCard key={court.id} court={court} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
