'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "Great work, delivered exactly what we needed. Smooth process from start to finish.",
      name: "Jaxson Drew",
      title: "Influencer"
    },
    {
      quote: "Creative, detailed and exactly what we were looking for. Professional and stress-free.",
      name: "CEO, Paragon",
      title: ""
    },
    {
      quote: "Amazing all across the board!",
      name: "CEO, Stanstrong",
      title: ""
    },
    {
      quote: "Perfect job. Could not have asked for more.",
      name: "CEO, Travly",
      title: ""
    },
    {
      quote: "Good work and delivered on time. Exactly what we needed for our brand.",
      name: "Darrien Jackson",
      title: "CEO, Slash32"
    },
    {
      quote: "Transformed our brand identity completely. The store and design speak for themselves.",
      name: "CEO, Hamrah",
      title: ""
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-32 px-6 border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter text-center">What Our Clients Say</h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Trusted by clothing brands and POD store owners worldwide</p>
        
        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="min-h-80 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-12 text-center backdrop-blur-sm hover:border-white/20 transition-colors">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light leading-relaxed italic">"{testimonial.quote}"</p>
                  
                  {/* Client Info */}
                  <div>
                    <p className="text-lg font-bold text-white">{testimonial.name}</p>
                    {testimonial.title && <p className="text-sm text-gray-400 mt-1">{testimonial.title}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DynamicSubtitle() {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const keywords = [
    'Clothing Brand',
    'Print on Demand',
    'Shopify Store',
    'Streetwear Design',
    'T-Shirt Design',
    'Custom Branding',
    'POD Setup'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight text-gray-400 relative h-24 md:h-32 flex items-center justify-center" style={{
      textShadow: `0 10px 20px rgba(0,0,0,0.5)`,
    }}>
      <span
        key={currentKeyword}
        style={{
          animation: 'fadeInOut 3s ease-in-out',
          position: 'absolute',
        }}
      >
        {keywords[currentKeyword]}
      </span>
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(20px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>
    </h2>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const collections = [
    {
      id: 'urban-geometric',
      title: 'Urban Geometric',
      image: '/manus-storage/UrbanGeometric_42e523be.webp',
      year: '2026',
      category: 'Design',
    },
    {
      id: 'vintage-retro',
      title: 'Vintage Retro',
      image: '/manus-storage/vintageretro_d219dae7.png',
      year: '2026',
      category: 'Design',
    },
    {
      id: 'abstract-art',
      title: 'Abstract Art',
      image: '/manus-storage/AbstractArt_422dea11.png',
      year: '2026',
      category: 'Design',
    },
    {
      id: 'streetwear-bold',
      title: 'Streetwear Bold',
      image: '/manus-storage/streetwearBold_8c7a493e.webp',
      year: '2026',
      category: 'Branding',
    },
    {
      id: 'minimalist-clean',
      title: 'Minimalist Clean',
      image: '/manus-storage/minimalClean_d1308b05.webp',
      year: '2026',
      category: 'Design',
    },
    {
      id: 'nature-inspired',
      title: 'Nature Inspired',
      image: '/manus-storage/naturetshirt_b74ad07c.webp',
      year: '2026',
      category: 'Sustainable',
    },
    {
      id: 'tech-futuristic',
      title: 'Tech Futuristic',
      image: '/manus-storage/TechFuturistic_d592be62.png',
      year: '2026',
      category: 'Design',
    },
    {
      id: 'cultural-heritage',
      title: 'Cultural Heritage',
      image: '/manus-storage/CulturalHeritage_086c1cf1.png',
      year: '2026',
      category: 'Design',
    },
  ];

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter">BNC</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            <a href="/collections" className="text-sm font-light hover:text-gray-300 transition-colors duration-300">Collections</a>
            <a href="/about" className="text-sm font-light hover:text-gray-300 transition-colors duration-300">About</a>
            <a href="/contact" className="text-sm font-light hover:text-gray-300 transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black">
            <div className="px-6 py-4 space-y-4">
              <a href="/collections" className="block text-sm font-light">Collections</a>
              <a href="/about" className="block text-sm font-light">About</a>
              <a href="/contact" className="block text-sm font-light">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Premium 3D Effects */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mouse-Tracking Gradient */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08) 0%, transparent 50%)`,
              transition: 'background 0.1s ease-out',
            }}
          ></div>

          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          ></div>



          {/* Floating Tiny Apparel Particles - Like Stars */}
          <div className="absolute inset-0 pointer-events-none">
            {/* T-Shirts */}
            {[0, 1, 2, 3, 4].map((i) => {
              const time = Date.now() / 1000;
              const px = Math.sin(time * 0.08 + i * 1.2) * 450 + 50;
              const py = Math.cos(time * 0.06 + i * 1.8) * 450 + 50;
              const scale = 0.25 + Math.sin(time * 0.4 + i) * 0.15;
              const rotation = (time * 25 + i * 72) % 360;
              return (
                <div
                  key={`tshirt-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
                    opacity: 0.35 + Math.sin(time * 0.25 + i) * 0.25,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
                    <path d="M6 3h12v6l3 2v10H3v-10l3-2V3z" />
                  </svg>
                </div>
              );
            })}
            
            {/* Pants/Trousers */}
            {[0, 1, 2, 3, 4].map((i) => {
              const time = Date.now() / 1000;
              const px = Math.sin(time * 0.09 + i * 1.1 + 2) * 420 + 50;
              const py = Math.cos(time * 0.07 + i * 1.7 + 2) * 420 + 50;
              const scale = 0.22 + Math.sin(time * 0.45 + i + 1) * 0.14;
              const rotation = (time * 28 + i * 72 + 45) % 360;
              return (
                <div
                  key={`pants-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
                    opacity: 0.3 + Math.sin(time * 0.3 + i) * 0.25,
                  }}
                >
                  <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                    <path d="M8 3v8h-2v10h4v-10h2v10h4v-10h-2V3z" />
                  </svg>
                </div>
              );
            })}
            
            {/* Hats/Caps */}
            {[0, 1, 2, 3, 4].map((i) => {
              const time = Date.now() / 1000;
              const px = Math.sin(time * 0.07 + i * 1.3 + 4) * 480 + 50;
              const py = Math.cos(time * 0.05 + i * 1.9 + 4) * 480 + 50;
              const scale = 0.2 + Math.sin(time * 0.35 + i + 2) * 0.13;
              const rotation = (time * 32 + i * 72 + 90) % 360;
              return (
                <div
                  key={`hat-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
                    opacity: 0.32 + Math.sin(time * 0.28 + i) * 0.24,
                  }}
                >
                  <svg width="12" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5">
                    <path d="M4 12h16l-2-6H6l-2 6z" />
                  </svg>
                </div>
              );
            })}
            
            {/* Shoes */}
            {[0, 1, 2, 3, 4].map((i) => {
              const time = Date.now() / 1000;
              const px = Math.sin(time * 0.11 + i * 0.9 + 6) * 400 + 50;
              const py = Math.cos(time * 0.09 + i * 1.6 + 6) * 400 + 50;
              const scale = 0.18 + Math.sin(time * 0.5 + i + 3) * 0.12;
              const rotation = (time * 35 + i * 72 + 135) % 360;
              return (
                <div
                  key={`shoe-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
                    opacity: 0.28 + Math.sin(time * 0.32 + i) * 0.22,
                  }}
                >
                  <svg width="13" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                    <path d="M3 14h8v4H3z M13 14h8v4h-8z" />
                  </svg>
                </div>
              );
            })}
          </div>

          {/* Glowing Light Particles */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const time = Date.now() / 1000;
            const px = Math.sin(time * 0.25 + i) * 250 + 50;
            const py = Math.cos(time * 0.2 + i * 1.1) * 250 + 50;
            const scale = 0.5 + Math.sin(time * 0.4 + i) * 0.4;
            return (
              <div
                key={`glow-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${px}%`,
                  top: `${py}%`,
                  width: '8px',
                  height: '8px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0.1))',
                  opacity: 0.4 + Math.sin(time * 0.3 + i) * 0.3,
                  boxShadow: `0 0 ${20 + Math.sin(time + i) * 10}px rgba(255,255,255,0.6)`,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                }}
              />
            );
          })}

          {/* Subtle Rotating Rings */}
          {[0, 1, 2].map((i) => {
            const time = Date.now() / 1000;
            const rotation = (time * (15 - i * 3) * (i % 2 === 0 ? 1 : -1)) % 360;
            const size = 200 + i * 100;
            return (
              <div
                key={`ring-${i}`}
                className="absolute rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${size}px`,
                  height: `${size}px`,
                  marginLeft: `-${size / 2}px`,
                  marginTop: `-${size / 2}px`,
                  border: `1px solid rgba(255,255,255,${0.1 - i * 0.02})`,
                  transform: `rotateY(${rotation}deg)`,
                  opacity: 0.6 - i * 0.15,
                }}
              />
            );
          })}



          {/* Tiny 3D Apparel Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {/* 3D T-Shirt Particles */}
            {[0, 1, 2, 3].map((i) => {
              const time = Date.now() / 1000;
              const px = 20 + i * 20;
              const py = 15 + Math.sin(time * 0.15 + i) * 30;
              const rotX = (time * 45 + i * 90) % 360;
              const rotY = (time * 60 + i * 90) % 360;
              const rotZ = (time * 30 + i * 90) % 360;
              return (
                <div
                  key={`3d-tshirt-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: `translate(-50%, -50%) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${0.6 + Math.sin(time * 0.3 + i) * 0.2})`,
                    opacity: 0.7 + Math.sin(time * 0.4 + i) * 0.3,
                    perspective: '1000px',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1.5" style={{
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))',
                  }}>
                    <path d="M6 3h12v6l3 2v10H3v-10l3-2V3z" />
                  </svg>
                </div>
              );
            })}
            
            {/* 3D Pants Particles */}
            {[0, 1, 2, 3].map((i) => {
              const time = Date.now() / 1000;
              const px = 75 + i * 8;
              const py = 20 + Math.cos(time * 0.12 + i) * 35;
              const rotX = (time * 50 + i * 90) % 360;
              const rotY = (time * 55 + i * 90) % 360;
              const rotZ = (time * 35 + i * 90) % 360;
              return (
                <div
                  key={`3d-pants-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: `translate(-50%, -50%) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${0.55 + Math.sin(time * 0.35 + i) * 0.18})`,
                    opacity: 0.65 + Math.cos(time * 0.45 + i) * 0.3,
                    perspective: '1000px',
                  }}
                >
                  <svg width="20" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1.5" style={{
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.7))',
                  }}>
                    <path d="M8 3v8h-2v10h4v-10h2v10h4v-10h-2V3z" />
                  </svg>
                </div>
              );
            })}
            
            {/* 3D Hat Particles */}
            {[0, 1, 2, 3].map((i) => {
              const time = Date.now() / 1000;
              const px = 15 + Math.sin(time * 0.18 + i) * 25;
              const py = 65 + i * 12;
              const rotX = (time * 55 + i * 90) % 360;
              const rotY = (time * 65 + i * 90) % 360;
              const rotZ = (time * 40 + i * 90) % 360;
              return (
                <div
                  key={`3d-hat-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: `translate(-50%, -50%) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${0.5 + Math.cos(time * 0.4 + i) * 0.2})`,
                    opacity: 0.68 + Math.sin(time * 0.38 + i) * 0.28,
                    perspective: '1000px',
                  }}
                >
                  <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1.5" style={{
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))',
                  }}>
                    <path d="M4 12h16l-2-6H6l-2 6z" />
                  </svg>
                </div>
              );
            })}
            
            {/* 3D Shoe Particles */}
            {[0, 1, 2, 3].map((i) => {
              const time = Date.now() / 1000;
              const px = 80 + Math.cos(time * 0.14 + i) * 20;
              const py = 70 + i * 10;
              const rotX = (time * 48 + i * 90) % 360;
              const rotY = (time * 70 + i * 90) % 360;
              const rotZ = (time * 38 + i * 90) % 360;
              return (
                <div
                  key={`3d-shoe-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: `translate(-50%, -50%) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${0.52 + Math.sin(time * 0.42 + i) * 0.19})`,
                    opacity: 0.66 + Math.cos(time * 0.42 + i) * 0.29,
                    perspective: '1000px',
                  }}
                >
                  <svg width="22" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1.5" style={{
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.65))',
                  }}>
                    <path d="M3 14h8v4H3z M13 14h8v4h-8z" />
                  </svg>
                </div>
              );
            })}

            {/* Additional 3D Floating Rings */}
            {[0, 1, 2].map((i) => {
              const time = Date.now() / 1000;
              const size = 150 + i * 100;
              return (
                <div
                  key={`3d-ring-${i}`}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: `${size}px`,
                    height: `${size}px`,
                    border: `1px solid rgba(255,255,255,${0.15 - i * 0.05})`,
                    borderRadius: '50%',
                    transform: `translate(-50%, -50%) rotateX(${(time * 20 + i * 60) % 360}deg) rotateY(${(time * 30 + i * 60) % 360}deg) rotateZ(${(time * 15 + i * 60) % 360}deg)`,
                    perspective: '1000px',
                  }}
                />
              );
            })}

            {/* 3D Glowing Orbs */}
            {[0, 1, 2, 3].map((i) => {
              const time = Date.now() / 1000;
              const angle = (time * 30 + i * 90) * (Math.PI / 180);
              const radius = 200;
              const px = 50 + (Math.cos(angle) * radius) / 10;
              const py = 50 + (Math.sin(angle) * radius) / 10;
              return (
                <div
                  key={`3d-orb-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${px}%`,
                    top: `${py}%`,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: `rgba(255,255,255,${0.6 + Math.sin(time * 0.5 + i) * 0.3})`,
                    boxShadow: `0 0 20px rgba(255,255,255,${0.8 + Math.sin(time * 0.4 + i) * 0.2})`,
                    transform: `translate(-50%, -50%) scale(${0.8 + Math.sin(time * 0.3 + i) * 0.4})`,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          <div
            style={{
              transform: `translateY(${scrollY * 0.15}px) scale(${Math.max(0.8, 1 - scrollY / 1000)})`,
              opacity: Math.max(0.2, 1 - scrollY / 600),
              transition: 'transform 0.1s ease-out',
            }}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-none" style={{
              textShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.1)`,
            }}>
              PREMIUM
            </h1>
            <DynamicSubtitle />
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto font-light">
              From the first design to a fully live store, I help clothing brands look premium and sell more
            </p>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            style={{
              opacity: Math.max(0, 1 - scrollY / 300),
            }}
          >
            <ChevronDown size={32} className="text-gray-600" />
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">Portfolio — Selected Work</h2>
          <p className="text-lg text-gray-400 mb-16 font-light">A few recent projects, each one built from scratch for a real clothing brand</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onMouseEnter={() => setHoveredId(collection.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transform: `translateY(${getParallaxOffset(index)}px) perspective(1000px) rotateX(${getCardRotation(index) * 0.5}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <div className="aspect-square overflow-hidden bg-gray-900 relative">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                    <div>
                    </div>
                    
                    <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                      <h3 className="text-3xl font-black mb-4">{collection.title}</h3>
                      <a href={`/collection/${collection.id}`} className="px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 text-sm inline-block">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-32 px-6 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black mb-20 tracking-tighter">Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Custom T-Shirt & Apparel Design', desc: 'Bold graphics, typography and artwork built around your brand identity' },
              { title: 'Full Brand Identity', desc: 'Logo, colour system, typography and brand guidelines from scratch' },
              { title: 'POD Setup & Integration', desc: 'Printful, Printify & Gelato, fully set up and synced to your store' },
              { title: 'Shopify / Wix / WordPress Store Design', desc: 'Stores built to convert — fast, mobile-first and on-brand' },
              { title: 'Store SEO & Speed Optimisation', desc: 'Get found on Google and stop losing customers to slow load times' },
              { title: 'Facebook & Instagram Ad Creatives', desc: 'Scroll-stopping ad designs built to drive traffic to your store' },
            ].map((service, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all duration-300 group">
                <h3 className="text-2xl font-black mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                <p className="text-gray-400 font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section - Free Audit */}
      <section className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-light mb-6 border border-white/20">
              ✨ LIMITED TIME OFFER
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
            Free Site & Business Audit
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 font-light max-w-2xl mx-auto">
            Get a detailed report on your current site performance, business strategy, and growth opportunities. I will personally analyze your brand, competition, and market positioning.
          </p>
          
          <div className="mb-12 p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6">What's Included:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <span className="text-white mr-3 font-bold">✓</span>
                <div>
                  <p className="font-semibold mb-1">Site Performance Analysis</p>
                  <p className="text-sm text-gray-400">Speed, UX, conversion optimization</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-white mr-3 font-bold">✓</span>
                <div>
                  <p className="font-semibold mb-1">Business Strategy Review</p>
                  <p className="text-sm text-gray-400">Market positioning & growth plan</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-white mr-3 font-bold">✓</span>
                <div>
                  <p className="font-semibold mb-1">Detailed Report</p>
                  <p className="text-sm text-gray-400">Actionable recommendations</p>
                </div>
              </div>
            </div>
          </div>
          
          <a 
            href="https://calendly.com/burhannazir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all duration-300 rounded-lg hover:scale-105 transform"
          >
            Book a Call Now
          </a>
          
          <p className="text-sm text-gray-500 mt-6 font-light">
            No credit card required • 30-minute consultation • Limited spots available
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-black text-lg mb-4">BNC Designs</h3>
              <p className="text-gray-500 text-sm font-light">Clothing brand design, POD setup & Shopify branding — all in one place</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-light">
                <li><a href="/services" className="hover:text-white transition-colors">T-Shirt Design</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Brand Identity</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">POD Integration</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Shopify Store Design</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Store SEO</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Ad Creatives</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">AI Automation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Platforms</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Shopify</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Printful</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Printify</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gelato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fourthwall</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Amazon Merch</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-600 font-light">
            <p>© 2026 BNC Designs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );

  function getParallaxOffset(index: number) {
    return scrollY * 0.05 * (index % 2 === 0 ? 1 : -1);
  }

  function getCardRotation(index: number) {
    const baseRotation = (index % 2 === 0 ? -1 : 1);
    return baseRotation + (scrollY * 0.01);
  }
}
