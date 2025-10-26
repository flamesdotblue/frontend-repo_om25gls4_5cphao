import { ArrowLeft, Star, Clock, Leaf, Flame } from "lucide-react";

const sampleMenu = [
  {
    category: "Recommended",
    items: [
      { name: "Signature Bowl", desc: "Hearty base with chef's toppings.", price: 12.5, tags: ["Popular"] },
      { name: "Crispy Chicken Bao", desc: "Gochujang glaze, pickles, sesame.", price: 8.0, tags: ["New"] },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Tonkotsu Ramen", desc: "Slow-cooked pork broth, noodles, egg.", price: 13.0, spicy: true },
      { name: "Protein Power Bowl", desc: "Quinoa, greens, avocado, tahini.", price: 11.0, veg: true },
      { name: "Smash Burger", desc: "Double patty, cheddar, house sauce.", price: 10.5 },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Truffle Fries", desc: "Parmesan, herbs.", price: 5.5 },
      { name: "Seaweed Salad", desc: "Sesame, yuzu.", price: 4.0, veg: true },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Matcha Latte", desc: "Creamy, lightly sweet.", price: 4.5, veg: true },
      { name: "Cold Pressed Juice", desc: "Seasonal blend.", price: 5.0, veg: true },
    ],
  },
];

function Tag({ children }) {
  return (
    <span className="inline-flex items-center text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
      {children}
    </span>
  );
}

export default function StallPage({ stall, court, onBack }) {
  if (!stall || !court) return null;

  return (
    <main className="min-h-[calc(100vh-64px)]">
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 h-72 w-72 bg-gradient-to-tr from-rose-400/30 to-orange-300/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-gradient-to-tr from-orange-300/30 to-rose-400/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft size={16} /> Back to courts
          </button>

          <div className="mt-4 bg-white/80 backdrop-blur border border-gray-100 rounded-2xl overflow-hidden">
            <div className="aspect-[21/7] w-full bg-center bg-cover" style={{ backgroundImage: `url(${court.image})` }} />
            <div className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900">{stall.name}</h1>
                  <p className="text-gray-600">{stall.cuisine} • {court.name}</p>
                  <div className="mt-2 flex items-center gap-3 text-sm text-gray-700">
                    <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">
                      <Star size={14} className="text-amber-500" fill="#F59E0B" /> {stall.rating.toFixed(1)}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gray-50 text-gray-700 px-2 py-0.5 rounded-md">
                      <Clock size={14} /> ~{stall.waitTime} min wait
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {stall.topItems?.slice(0,3).map((t, i) => (
                    <Tag key={i}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {sampleMenu.map((section) => (
                <div key={section.category} className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900">{section.category}</h3>
                  <div className="mt-3 divide-y divide-gray-100">
                    {section.items.map((item) => (
                      <div key={item.name} className="py-3 flex items-start justify-between gap-4">
                        <div>
                          <div className="font-medium text-gray-900 flex items-center gap-2">
                            {item.name}
                            {item.spicy && <span className="inline-flex items-center gap-1 text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded"><Flame size={12}/>Spicy</span>}
                            {item.veg && <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded"><Leaf size={12}/>Veg</span>}
                            {item.tags?.map((t) => (
                              <span key={t} className="inline-flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2 py-0.5 rounded">{t}</span>
                            ))}
                          </div>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-semibold">${item.price.toFixed(2)}</div>
                          <button className="mt-2 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800">Add</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 h-max sticky top-24">
              <h3 className="font-semibold text-gray-900">Your order</h3>
              <p className="text-sm text-gray-500 mt-1">Add items from the menu to start an order.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Schedule</button>
                <button className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Promo code</button>
              </div>
              <button className="mt-4 w-full px-4 py-2.5 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 disabled:opacity-50" disabled>
                Checkout
              </button>
              <p className="text-[11px] text-gray-500 mt-2">Estimated wait ~{stall.waitTime} min</p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
