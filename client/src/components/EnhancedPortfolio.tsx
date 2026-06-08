import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Parallax3DCard } from './Advanced3DEffects';

const collections = [
  {
    id: 1,
    title: 'Urban Streetwear',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/collection-urban-streetwear-MhBXsURrRkpaPFWbjPfjoN.webp',
    tags: ['Design', 'POD', 'Branding'],
    description: 'Bold geometric designs for modern urban fashion',
    stats: { designs: 24, clients: 156, revenue: '$45K' },
  },
  {
    id: 2,
    title: 'Minimalist Collection',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/collection-minimalist-JmptZTkTwA9L7VTAXPjTBD.webp',
    tags: ['Design', 'Branding', 'Shopify'],
    description: 'Clean, sophisticated designs for lifestyle brands',
    stats: { designs: 18, clients: 203, revenue: '$52K' },
  },
  {
    id: 3,
    title: 'Tech Forward',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/collection-tech-forward-YqB32ah8hWw9oXe2KYZumV.webp',
    tags: ['Design', 'POD', 'Printify'],
    description: 'Futuristic designs blending art and technology',
    stats: { designs: 32, clients: 189, revenue: '$61K' },
  },
  {
    id: 4,
    title: 'Heritage Craft',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/collection-heritage-KpMqCv5FC5RjoNnpfke9pC.webp',
    tags: ['Branding', 'Design', 'PrintFull'],
    description: 'Traditional patterns reimagined for contemporary wear',
    stats: { designs: 28, clients: 174, revenue: '$48K' },
  },
  {
    id: 5,
    title: 'Eco Conscious',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/hero-clothing-showcase-fbutdUiBuqvMwwbVhdFncR.webp',
    tags: ['Design', 'Sustainable', 'POD'],
    description: 'Environmentally-friendly designs with impact',
    stats: { designs: 16, clients: 142, revenue: '$39K' },
  },
  {
    id: 6,
    title: 'Premium Luxury',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/collection-urban-streetwear-MhBXsURrRkpaPFWbjPfjoN.webp',
    tags: ['Branding', 'Luxury', 'Design'],
    description: 'Exclusive limited edition collections',
    stats: { designs: 12, clients: 98, revenue: '$67K' },
  },
];

export default function EnhancedPortfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredCollections = selectedFilter
    ? collections.filter((c) => c.tags.includes(selectedFilter))
    : collections;

  const allTags = Array.from(new Set(collections.flatMap((c) => c.tags)));

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="container">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
            THE WORK
            <br />
            EVERYONE LOVES
          </h2>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Explore our latest collections and design innovations that have transformed brands worldwide
          </p>
        </div>

        <div className="mb-16 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedFilter(null)}
            className={`px-4 py-2 font-bold text-sm transition-all ${
              selectedFilter === null
                ? 'bg-white text-black'
                : 'border border-white/30 text-white hover:border-white/60'
            }`}
          >
            ALL
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedFilter(tag)}
              className={`px-4 py-2 font-bold text-sm transition-all ${
                selectedFilter === tag
                  ? 'bg-white text-black'
                  : 'border border-white/30 text-white hover:border-white/60'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredCollections.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-96 md:h-[500px] overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black/60 transition-colors duration-500" />

                <div
                  className="absolute inset-0 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: hoveredId === item.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                  }}
                >
                  <div className="grid grid-cols-3 gap-4 text-xs font-bold text-white/80">
                    <div>
                      <div className="text-lg">{item.stats.designs}</div>
                      <div className="text-white/60">Designs</div>
                    </div>
                    <div>
                      <div className="text-lg">{item.stats.clients}</div>
                      <div className="text-white/60">Clients</div>
                    </div>
                    <div>
                      <div className="text-lg">{item.stats.revenue}</div>
                      <div className="text-white/60">Revenue</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <button className="flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all">
                      CHECKOUT
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-white/80 transition-colors">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-bold text-white/70 border border-white/20 group-hover:border-white/40 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95">
            SEE ALL COLLECTIONS
          </button>
        </div>
      </div>
    </section>
  );
}
