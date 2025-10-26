import { Search } from "lucide-react";

export default function Hero({ query, setQuery }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 bg-gradient-to-tr from-rose-400/30 to-orange-300/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-gradient-to-tr from-orange-300/30 to-rose-400/30 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Order from the best food courts around you
          </h1>
          <p className="mt-3 text-gray-600 max-w-xl">
            Discover popular food courts, browse stalls, and place quick orders all in one place.
          </p>
          <div className="mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by food court or location..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
