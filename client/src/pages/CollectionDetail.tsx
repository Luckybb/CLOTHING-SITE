import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowLeft } from 'lucide-react';
import { useRoute } from 'wouter';

// Protected Image Wrapper Component
function ProtectedImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Disable right-click on image
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable touch hold (long press)
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    img.addEventListener('contextmenu', handleContextMenu);
    img.addEventListener('dragstart', handleDragStart);
    img.addEventListener('touchstart', handleTouchStart as any);

    return () => {
      img.removeEventListener('contextmenu', handleContextMenu);
      img.removeEventListener('dragstart', handleDragStart);
      img.removeEventListener('touchstart', handleTouchStart as any);
    };
  }, []);

  return (
    <div className={`select-none pointer-events-auto ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-auto object-cover user-select-none"
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
        }}
        draggable={false}
      />
    </div>
  );
}

export default function CollectionDetail() {
  const [, params] = useRoute('/collection/:id');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Collection data - in a real app, this would come from props or API
  const collectionId = params?.id;

  const collectionsData: Record<string, any> = {
    'urban-geometric': {
      title: 'Urban Geometric',
      category: 'Design',
      year: '2026',
      description: 'Bold geometric patterns inspired by urban architecture and contemporary design.',
      images: [
        '/manus-storage/UrbanGeometric_42e523be.webp',
        '/manus-storage/UrbanGeometric_42e523be.webp',
      ],
    },
    'vintage-retro': {
      title: 'Vintage Retro',
      category: 'Design',
      year: '2026',
      description: 'Nostalgic designs bringing back the charm of classic eras.',
      images: [
        '/manus-storage/vintageretro_d219dae7.png',
        '/manus-storage/vintageretro_d219dae7.png',
      ],
    },
    'abstract-art': {
      title: 'Abstract Art',
      category: 'Design',
      year: '2026',
      description: 'Contemporary abstract compositions with liquid marble aesthetics.',
      images: [
        '/manus-storage/AbstractArt_422dea11.png',
        '/manus-storage/AbstractArt_422dea11.png',
      ],
    },
    'streetwear-bold': {
      title: 'Streetwear Bold',
      category: 'Branding',
      year: '2026',
      description: 'Street-inspired designs with bold typography and attitude.',
      images: [
        '/manus-storage/streetwearBold_8c7a493e.webp',
        '/manus-storage/streetwearBold_8c7a493e.webp',
      ],
    },
    'minimalist-clean': {
      title: 'Minimalist Clean',
      category: 'Design',
      year: '2026',
      description: 'Elegant geometric hexagon design with minimalist principles.',
      images: [
        '/manus-storage/minimalClean_d1308b05.webp',
        '/manus-storage/minimalClean_d1308b05.webp',
      ],
    },
    'nature-inspired': {
      title: 'Nature Inspired',
      category: 'Sustainable',
      year: '2026',
      description: 'Organic textures and natural elements featuring moss-covered landscapes.',
      images: [
        '/manus-storage/naturetshirt_b74ad07c.webp',
        '/manus-storage/naturetshirt_b74ad07c.webp',
      ],
    },
    'tech-futuristic': {
      title: 'Tech Futuristic',
      category: 'Design',
      year: '2026',
      description: 'Forward-thinking designs blending technology and aesthetics.',
      images: [
        '/manus-storage/TechFuturistic_d592be62.png',
        '/manus-storage/TechFuturistic_d592be62.png',
      ],
    },
    'cultural-heritage': {
      title: 'Cultural Heritage',
      category: 'Design',
      year: '2026',
      description: 'Celebrating diverse cultures through artistic expression.',
      images: [
        '/manus-storage/CulturalHeritage_086c1cf1.png',
        '/manus-storage/CulturalHeritage_086c1cf1.png',
      ],
    },
  };

  const collection = collectionId ? collectionsData[collectionId] : null;

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

  // Disable zoom
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+Plus, Ctrl+Minus, Ctrl+0
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!collection) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Collection Not Found</h1>
          <a href="/" className="text-gray-400 hover:text-white transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen overflow-x-hidden" style={{ userSelect: 'none' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter hover:text-gray-300 transition-colors">
            <ArrowLeft size={24} />
            <span>BNC</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            <a href="/collections" className="text-sm font-light hover:text-gray-300 transition-colors duration-300">
              Collections
            </a>
            <a href="/about" className="text-sm font-light hover:text-gray-300 transition-colors duration-300">
              About
            </a>
            <a href="/contact" className="text-sm font-light hover:text-gray-300 transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            <a href="/collections" className="text-sm font-light hover:text-gray-300 transition-colors">
              Collections
            </a>
            <a href="/about" className="text-sm font-light hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="/contact" className="text-sm font-light hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-gray-500 text-sm tracking-widest uppercase">{collection.category}</span>
            <h1 className="text-6xl md:text-7xl font-light mt-4 mb-6 tracking-tight">{collection.title}</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">{collection.description}</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <span>© BNC Designs</span>
              <span>•</span>
              <span>{collection.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collection.images.map((image: string, index: number) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-square bg-gray-900"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`,
                }}
              >
                <ProtectedImage
                  src={image}
                  alt={`${collection.title} - Design ${index + 1}`}
                  className="w-full h-full"
                />

                {/* Overlay with protected message on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center">
                    <p className="text-white text-sm font-light tracking-wider">© Protected Design</p>
                    <p className="text-gray-300 text-xs mt-2">Right-click disabled • No zoom • No save</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-light tracking-widest uppercase mb-4">BNC Designs</h3>
              <p className="text-gray-500 text-sm">Premium clothing designs and POD services.</p>
            </div>
            <div>
              <h4 className="text-sm font-light tracking-widest uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/collections" className="text-gray-500 hover:text-white text-sm transition-colors">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-500 hover:text-white text-sm transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-500 hover:text-white text-sm transition-colors">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light tracking-widest uppercase mb-4">Contact</h4>
              <p className="text-gray-500 text-sm">info@bncproductionz.com</p>
              <p className="text-gray-500 text-sm">+1 (747) 336-4515</p>
            </div>
            <div>
              <h4 className="text-sm font-light tracking-widest uppercase mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 BNC Designs. All designs are protected and copyrighted.</p>
          </div>
        </div>
      </footer>

      {/* Global Styles for Protection */}
      <style>{`
        body {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        img {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          pointer-events: none;
        }

        /* Disable text selection on page */
        * {
          -webkit-touch-callout: none;
        }

        /* Disable image context menu */
        img {
          -webkit-user-drag: none;
        }
      `}</style>
    </div>
  );
}
