import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Urban Streetwear',
    category: 'Collection',
    description: 'Bold geometric designs for modern urban fashion',
    color: '#00f0ff',
    gradient: 'from-cyan-500/20 to-transparent',
  },
  {
    id: 2,
    title: 'Minimalist Vibes',
    category: 'Brand Identity',
    description: 'Clean, sophisticated designs for lifestyle brands',
    color: '#ff006e',
    gradient: 'from-magenta-500/20 to-transparent',
  },
  {
    id: 3,
    title: 'Tech Forward',
    category: 'Digital Fashion',
    description: 'Futuristic designs blending art and technology',
    color: '#00f0ff',
    gradient: 'from-cyan-500/20 to-transparent',
  },
  {
    id: 4,
    title: 'Heritage Craft',
    category: 'Cultural Design',
    description: 'Traditional patterns reimagined for contemporary wear',
    color: '#ff006e',
    gradient: 'from-magenta-500/20 to-transparent',
  },
  {
    id: 5,
    title: 'Eco Conscious',
    category: 'Sustainable',
    description: 'Environmentally-friendly designs with impact',
    color: '#00f0ff',
    gradient: 'from-cyan-500/20 to-transparent',
  },
  {
    id: 6,
    title: 'Premium Luxury',
    category: 'High Fashion',
    description: 'Exclusive limited edition collections',
    color: '#ff006e',
    gradient: 'from-magenta-500/20 to-transparent',
  },
];

export default function PortfolioShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />

      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.1), transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm font-mono tracking-widest bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/30 inline-block mb-6">
            FEATURED WORK
          </span>
          <h2 className="text-6xl md:text-7xl font-bold font-mono mb-6 text-shadow-neon">
            Portfolio <span className="gradient-neon">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest collections and design innovations
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `slide-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} neon-border`}
                style={{
                  backgroundColor: item.color + '15',
                  transform: `scale(${hoveredId === item.id ? 1.05 : 1})`,
                  transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              />

              {/* Shine Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 30%, ${item.color}20 50%, transparent 70%)`,
                  animation: 'shine 3s infinite',
                }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8">
                {/* Top */}
                <div>
                  <span
                    className="text-xs font-mono tracking-widest opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ color: item.color }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Bottom */}
                <div>
                  <h3
                    className="text-2xl font-bold font-mono mb-3 group-hover:text-shadow-neon transition-all duration-300"
                    style={{
                      transform: `translateY(${hoveredId === item.id ? -5 : 0}px)`,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      transform: `translateY(${hoveredId === item.id ? 0 : 10}px)`,
                    }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      transform: `translateY(${hoveredId === item.id ? 0 : 10}px)`,
                    }}
                  >
                    <span className="text-sm font-mono" style={{ color: item.color }}>
                      Explore
                    </span>
                    <ArrowRight size={16} style={{ color: item.color }} />
                  </div>
                </div>
              </div>

              {/* 3D Border Effect */}
              <div
                className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  borderColor: item.color,
                  boxShadow: `0 0 30px ${item.color}40, inset 0 0 30px ${item.color}20`,
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-background font-mono font-bold rounded-lg shadow-lg neon-glow-intense transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
            <Sparkles size={20} />
            View All Collections
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
