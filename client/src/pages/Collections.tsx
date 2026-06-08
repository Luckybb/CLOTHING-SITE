'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import behanceDesigns from '../data/behance-designs.json';

export default function Collections() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<any>(null);
  const [protectionActive, setProtectionActive] = useState(true);

  const collections = [
    {
      id: 'urban-geometric',
      image: '/manus-storage/UrbanGeometric_42e523be.webp',
    },
    {
      id: 'vintage-retro',
      image: '/manus-storage/vintageretro_d219dae7.png',
    },
    {
      id: 'abstract-art',
      image: '/manus-storage/AbstractArt_422dea11.png',
    },
    {
      id: 'streetwear-bold',
      image: '/manus-storage/StreetWearBold_7f8c2b9d.webp',
    },
    {
      id: 'minimalist-clean',
      image: '/manus-storage/MinimalistClean_5a3e1f2c.png',
    },
    {
      id: 'nature-inspired',
      image: '/manus-storage/NatureInspired_8b4d6e9f.png',
    },
    {
      id: 'tech-futuristic',
      image: '/manus-storage/TechFuturistic_3c7a9b1e.png',
    },
    {
      id: 'cultural-heritage',
      image: '/manus-storage/CulturalHeritage_6f2d8a4c.png',
    },
  ];

  // Combine BNC collections with Behance designs (remove all titles)
  const allDesigns = [
    ...collections.map(c => ({ ...c, category: 'design' })),
    ...behanceDesigns.slice(0, 40).map(d => ({ id: d.id, image: d.image, category: 'design' }))
  ];

  // Comprehensive protection handlers
  const handleContextMenu = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Disable all mouse interactions on images
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // Disable touch interactions on images
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    // Disable screenshot shortcuts
    if (
      (e.ctrlKey && e.key === 's') || // Ctrl+S
      (e.ctrlKey && e.key === 'p') || // Ctrl+P (Print)
      (e.key === 'PrintScreen') || // Print Screen
      (e.ctrlKey && e.shiftKey && e.key === 's') || // Ctrl+Shift+S
      (e.metaKey && e.key === 's') || // Cmd+S (Mac)
      (e.metaKey && e.key === 'p') // Cmd+P (Mac)
    ) {
      e.preventDefault();
      return false;
    }
  };

  // Apply global protection on mount
  useEffect(() => {
    if (!protectionActive) return;

    // Disable keyboard shortcuts
    window.addEventListener('keydown', handleKeyDown);
    
    // Disable printing
    const printStyle = document.createElement('style');
    printStyle.textContent = '@media print { body { display: none; } }';
    document.head.appendChild(printStyle);

    // Disable developer tools shortcuts
    document.addEventListener('keydown', (e) => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === 'i') || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === 'j') || // Ctrl+Shift+J
        (e.ctrlKey && e.shiftKey && e.key === 'c') || // Ctrl+Shift+C
        (e.key === 'F12') || // F12
        (e.metaKey && e.altKey && e.key === 'i') // Cmd+Alt+I (Mac)
      ) {
        e.preventDefault();
      }
    });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.head.removeChild(printStyle);
    };
  }, [protectionActive]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" 
      onContextMenu={handleContextMenu}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">BNC</div>
          <div className="hidden md:flex gap-8">
            <a href="/" className="hover:text-gray-400 transition">Home</a>
            <a href="/collections" className="text-gray-400">Collections</a>
            <a href="/about" className="hover:text-gray-400 transition">About</a>
            <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 p-4 space-y-4">
            <a href="/" className="block hover:text-gray-400">Home</a>
            <a href="/collections" className="block text-gray-400">Collections</a>
            <a href="/about" className="block hover:text-gray-400">About</a>
            <a href="/contact" className="block hover:text-gray-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-black mb-4">COLLECTIONS</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Premium designs. All images are protected.
        </p>
      </div>

      {/* Collections Grid - Masonry Layout with NO NAMES */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max">
          {allDesigns.map((design) => (
            <div
              key={design.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-300"
              onClick={() => setSelectedDesign(design)}
              style={{ cursor: 'pointer' }}
            >
              {/* Image Container - NO TITLE */}
              <div className="relative w-full overflow-hidden bg-gray-800 aspect-square">
                <img
                  src={design.image}
                  alt="Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  draggable={false}
                  style={{
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    pointerEvents: 'none',
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal - PROTECTED */}
      {selectedDesign && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedDesign(null)}
          onContextMenu={handleContextMenu}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={handleContextMenu}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDesign(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Image - FULLY PROTECTED */}
            <img
              src={selectedDesign.image}
              alt="Design"
              className="w-full h-auto max-h-[75vh] object-contain bg-black pointer-events-none"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              draggable={false}
              style={{
                userSelect: 'none',
                WebkitUserSelect: 'none',
                WebkitTouchCallout: 'none',
                pointerEvents: 'none',
              }}
            />

            {/* Info - NO DESIGN NAME */}
            <div className="p-6 border-t border-gray-800 bg-gray-900 text-center">
              <div className="mt-2 p-4 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700">
                <p className="font-semibold mb-2">🔒 PROTECTED DESIGN</p>
                <p className="text-xs">
                  This design is fully protected. Screenshots, saving, copying, and downloads are disabled. 
                  Unauthorized reproduction is prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">BNC DESIGNS</h4>
            <p className="text-gray-400 text-sm">Premium clothing design and POD solutions for 2026</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white">T-Shirt Design</a></li>
              <li><a href="/" className="hover:text-white">Shopify Integration</a></li>
              <li><a href="/" className="hover:text-white">Printify Setup</a></li>
              <li><a href="/" className="hover:text-white">Website Creation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">PLATFORMS</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Shopify</li>
              <li>Printify</li>
              <li>WordPress</li>
              <li>Webflow</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">CONTACT</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/contact" className="hover:text-white">Get in Touch</a></li>
              <li><a href="mailto:hello@bncdesigns.com" className="hover:text-white">hello@bncdesigns.com</a></li>
              <li>© 2026 BNC Designs</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>Crafted for brands that refuse to blend in | 2026</p>
        </div>
      </footer>

      {/* Global Protection Styles */}
      <style>{`
        * {
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
          -webkit-app-region: no-drag;
        }
        
        body {
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }
        
        img {
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
          pointer-events: none;
          -webkit-user-drag: none;
        }
        
        @media print {
          body {
            display: none !important;
          }
        }
        
        /* Disable text selection on entire page */
        html {
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }
        
        /* Prevent image context menu */
        img {
          pointer-events: none;
          -webkit-user-drag: none;
        }
        
        /* Disable pinch zoom on mobile */
        body {
          touch-action: manipulation;
        }
      `}</style>
    </div>
  );
}
