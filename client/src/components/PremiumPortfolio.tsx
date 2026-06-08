import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: 'Urban Streetwear',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/hero-3d-tshirt-NDqMNRGW3J3wVTZXo3SsDC.webp',
    tags: ['Design', 'POD', 'Branding'],
    description: 'Bold geometric designs for modern urban fashion',
  },
  {
    id: 2,
    title: 'Minimalist Collection',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/design-studio-hero-NDqMNRGW3J3wVTZXo3SsDC.webp',
    tags: ['Design', 'Branding', 'Shopify'],
    description: 'Clean, sophisticated designs for lifestyle brands',
  },
  {
    id: 3,
    title: 'Tech Forward',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/clothing-collection-3d-NDqMNRGW3J3wVTZXo3SsDC.webp',
    tags: ['Design', 'POD', 'Printify'],
    description: 'Futuristic designs blending art and technology',
  },
  {
    id: 4,
    title: 'Heritage Craft',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/pod-process-visual-NDqMNRGW3J3wVTZXo3SsDC.webp',
    tags: ['Branding', 'Design', 'PrintFull'],
    description: 'Traditional patterns reimagined for contemporary wear',
  },
  {
    id: 5,
    title: 'Eco Conscious',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/branding-services-hero-NDqMNRGW3J3wVTZXo3SsDC.webp',
    tags: ['Design', 'Sustainable', 'POD'],
    description: 'Environmentally-friendly designs with impact',
  },
  {
    id: 6,
    title: 'Premium Luxury',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663058883780/h2Vt2wBDPqpqPAdn3zfdVQ/hero-3d-tshirt-NDqMNRGW3J3wVTZXo3SsDC.webp',
    tags: ['Branding', 'Luxury', 'Design'],
    description: 'Exclusive limited edition collections',
  },
];

export default function PremiumPortfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            THE WORK
            <br />
            EVERYONE LOVES
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Explore our latest collections and design innovations
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-96 md:h-[500px] overflow-hidden bg-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Hover Content */}
                <div
                  className="absolute inset-0 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: hoveredId === item.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                  }}
                >
                  <div />

                  <div>
                    <p className="text-white/80 text-sm mb-4">{item.description}</p>
                    <button className="flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all">
                      CHECKOUT
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-white/80 transition-colors">
                  {item.title}
                </h3>

                {/* Tags */}
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

        {/* View All Button */}
        <div className="mt-20 text-center">
          <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
            SEE ALL COLLECTIONS
          </button>
        </div>
      </div>
    </section>
  );
}
