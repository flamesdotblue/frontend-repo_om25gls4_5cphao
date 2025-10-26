import { X, Star, Clock } from "lucide-react";

export default function StallDrawer({ open, onClose, court }) {
  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[28rem] bg-white shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {court && (
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={court.image} alt={court.name} className="h-10 w-10 rounded-lg object-cover" />
                <div>
                  <h3 className="font-semibold text-gray-900">{court.name}</h3>
                  <p className="text-sm text-gray-500">{court.location}</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-50">
                <X size={18} />
              </button>
            </div>

            <div className="p-4 overflow-y-auto">
              <h4 className="text-sm font-semibold text-gray-900">Stalls</h4>
              <div className="mt-3 space-y-3">
                {court.stalls.map((stall, idx) => (
                  <div key={idx} className="p-3 border border-gray-100 rounded-xl hover:shadow-sm transition">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-medium text-gray-900">{stall.name}</div>
                        <div className="text-sm text-gray-500">{stall.cuisine}</div>
                        {stall.topItems && (
                          <div className="mt-1 text-xs text-gray-500">Top picks: {stall.topItems.join(", ")}</div>
                        )}
                        <div className="mt-2 flex items-center gap-3 text-xs text-gray-600">
                          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">
                            <Star size={12} className="text-amber-500" fill="#F59E0B" /> {stall.rating.toFixed(1)}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-gray-50 text-gray-700 px-2 py-0.5 rounded-md">
                            <Clock size={12} /> {stall.waitTime} min
                          </span>
                        </div>
                      </div>
                      <button className="self-start px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800">Order</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
