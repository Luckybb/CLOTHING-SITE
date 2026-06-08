import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Download, RotateCcw, Maximize2 } from 'lucide-react';

const SHIRT_COLORS = [
  { name: 'Deep Black', value: '#0f0f1e' },
  { name: 'Midnight Blue', value: '#1a1a3e' },
  { name: 'Dark Navy', value: '#0a1929' },
  { name: 'Charcoal', value: '#2a2a3e' },
  { name: 'Dark Gray', value: '#1f1f2e' },
  { name: 'Black', value: '#000000' },
];

export default function ProductCustomizerEnhanced() {
  const [designImage, setDesignImage] = useState<string>('');
  const [shirtColor, setShirtColor] = useState<string>('#1a1a2e');
  const [fileName, setFileName] = useState<string>('');
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!previewRef.current) return;
    const rect = previewRef.current.getBoundingClientRect();
    setMouseX((e.clientX - rect.left) / rect.width);
    setMouseY((e.clientY - rect.top) / rect.height);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setDesignImage(result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setDesignImage('');
    setShirtColor('#1a1a2e');
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDownload = () => {
    alert('Download feature coming soon! Your custom design will be ready for order.');
  };

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-3 gap-8">
        {/* 3D Shirt Preview with Parallax */}
        <div 
          ref={previewRef}
          className="md:col-span-2 relative rounded-2xl neon-border bg-gradient-to-br from-card/50 to-card/20 overflow-hidden h-96 md:h-full min-h-96 flex items-center justify-center cursor-move"
          onMouseMove={handleMouseMove}
          style={{
            perspective: '1200px',
          }}
        >
          {/* Background Parallax Layers */}
          <div className="absolute inset-0 opacity-10 grid-bg" />
          
          {/* Parallax Layer 1 - Far Background */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(0, 240, 255, 0.1), transparent 60%)',
              transform: `translate(${mouseX * 20}px, ${mouseY * 20}px) translateY(${scrollY * 0.3}px)`,
            }}
          />

          {/* Parallax Layer 2 - Mid Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 70% 70%, rgba(255, 0, 110, 0.08), transparent 60%)',
              transform: `translate(${mouseX * 40}px, ${mouseY * 40}px) translateY(${scrollY * 0.5}px)`,
            }}
          />

          {/* Parallax Layer 3 - Foreground */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15), transparent 70%)',
              transform: `translate(${mouseX * 60}px, ${mouseY * 60}px) translateY(${scrollY * 0.7}px)`,
            }}
          />

          {/* 3D Shirt Container */}
          <div 
            className="relative z-10 w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${(mouseY - 0.5) * 20}deg) rotateY(${(mouseX - 0.5) * 20}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <svg
              viewBox="0 0 400 500"
              className="w-full h-full max-w-md"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0, 240, 255, 0.3))',
              }}
            >
              <defs>
                {/* Shirt Gradient */}
                <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={shirtColor} />
                  <stop offset="100%" stopColor="#0f0f1e" />
                </linearGradient>

                {/* Shine Effect */}
                <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0)" />
                  <stop offset="100%" stopColor="rgba(0, 0, 0, 0.2)" />
                </linearGradient>

                {/* Shadow Filter */}
                <filter id="shadow3d">
                  <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.4" />
                </filter>

                {/* Glow Filter */}
                <filter id="glow3d">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Shirt Body - Front */}
              <path
                d="M 80 100 L 60 180 L 50 480 L 350 480 L 340 180 L 320 100 Z"
                fill="url(#shirtGradient)"
                stroke="#00f0ff"
                strokeWidth="2"
                filter="url(#shadow3d)"
                className="transition-all duration-300"
                style={{
                  filter: 'url(#glow3d)',
                }}
              />

              {/* Shirt Shine/Highlight */}
              <path
                d="M 80 100 L 60 180 L 50 480 L 350 480 L 340 180 L 320 100 Z"
                fill="url(#shineGradient)"
                opacity="0.3"
              />

              {/* Collar */}
              <ellipse cx="200" cy="100" rx="45" ry="30" fill={shirtColor} stroke="#00f0ff" strokeWidth="1.5" />

              {/* Sleeve Left */}
              <path
                d="M 80 120 Q 30 140 20 220"
                stroke={shirtColor}
                strokeWidth="50"
                fill="none"
                strokeLinecap="round"
                filter="url(#shadow3d)"
              />

              {/* Sleeve Right */}
              <path
                d="M 320 120 Q 370 140 380 220"
                stroke={shirtColor}
                strokeWidth="50"
                fill="none"
                strokeLinecap="round"
                filter="url(#shadow3d)"
              />

              {/* Design Area - Clipped */}
              <defs>
                <clipPath id="designClip">
                  <rect x="120" y="150" width="160" height="200" rx="10" />
                </clipPath>
              </defs>

              {/* Design Image */}
              {designImage && (
                <image
                  x="120"
                  y="150"
                  width="160"
                  height="200"
                  href={designImage}
                  clipPath="url(#designClip)"
                  className="animate-pulse"
                  style={{
                    opacity: 0.95,
                    animation: 'design-fade 2s ease-in-out infinite',
                  }}
                />
              )}

              {/* Design Placeholder */}
              {!designImage && (
                <>
                  <rect
                    x="120"
                    y="150"
                    width="160"
                    height="200"
                    rx="10"
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                  <text
                    x="200"
                    y="260"
                    textAnchor="middle"
                    fill="#8a8a95"
                    fontSize="14"
                    fontFamily="monospace"
                  >
                    Upload Design
                  </text>
                </>
              )}

              {/* Seam Details */}
              <line x1="200" y1="100" x2="200" y2="480" stroke="#000000" strokeWidth="1" opacity="0.3" />
              <line x1="100" y1="150" x2="100" y2="400" stroke="#000000" strokeWidth="0.5" opacity="0.2" />
              <line x1="300" y1="150" x2="300" y2="400" stroke="#000000" strokeWidth="0.5" opacity="0.2" />
            </svg>
          </div>

          {/* Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                background: i % 2 === 0 ? '#00f0ff' : '#ff006e',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${3 + i}s ease-in-out infinite`,
                filter: 'blur(1px)',
              }}
            />
          ))}

          <style>{`
            @keyframes float-particle {
              0%, 100% {
                transform: translateY(0px) translateX(0px);
              }
              50% {
                transform: translateY(-30px) translateX(20px);
              }
            }

            @keyframes design-fade {
              0%, 100% {
                opacity: 0.9;
              }
              50% {
                opacity: 1;
              }
            }
          `}</style>
        </div>

        {/* Customizer Controls */}
        <div className="space-y-6">
          {/* Design Upload Section */}
          <div className="p-6 rounded-xl neon-border bg-card/50 space-y-4">
            <h3 className="text-lg font-bold font-mono text-cyan-400">Upload Design</h3>
            
            <div 
              className="relative border-2 border-dashed neon-border rounded-lg p-6 text-center cursor-pointer hover:bg-card/50 transition-all hover:border-cyan-400"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Upload className="mx-auto mb-3 text-cyan-400" size={32} />
              <p className="text-sm font-mono text-muted-foreground">
                {fileName ? (
                  <span className="text-cyan-400">✓ {fileName}</span>
                ) : (
                  <>Click to upload<br />or drag & drop</>
                )}
              </p>
              <p className="text-xs text-muted-foreground mt-2">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          {/* Shirt Color Section */}
          <div className="p-6 rounded-xl neon-border bg-card/50 space-y-4">
            <h3 className="text-lg font-bold font-mono text-magenta-400">Shirt Color</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {SHIRT_COLORS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setShirtColor(color.value)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    shirtColor === color.value
                      ? 'neon-border-magenta bg-magenta-500/10'
                      : 'border-border hover:border-cyan-400'
                  }`}
                  title={color.name}
                >
                  <div
                    className="w-full h-8 rounded mb-2 shadow-lg"
                    style={{ backgroundColor: color.value }}
                  />
                  <p className="text-xs font-mono text-muted-foreground">{color.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Design Stats */}
          <div className="p-6 rounded-xl neon-border-magenta bg-card/50 space-y-3">
            <h3 className="text-lg font-bold font-mono text-magenta-400">Design Info</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className={fileName ? 'text-cyan-400 font-mono' : 'text-muted-foreground'}>
                  {fileName ? '✓ Ready' : 'No design'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shirt:</span>
                <span className="text-cyan-400 font-mono">
                  {SHIRT_COLORS.find(c => c.value === shirtColor)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quality:</span>
                <span className="text-cyan-400 font-mono">Premium 300 DPI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">3D Preview:</span>
                <span className="text-magenta-400 font-mono">Active</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleDownload}
              disabled={!fileName}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-background font-mono gap-2 shadow-lg"
            >
              <Download size={16} />
              Add to Cart
            </Button>
            
            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full border-magenta-500 text-magenta-400 hover:bg-magenta-500/10 font-mono gap-2"
            >
              <RotateCcw size={16} />
              Reset Design
            </Button>
          </div>

          {/* Tips */}
          <div className="p-4 rounded-lg bg-card/30 border border-border">
            <p className="text-xs text-muted-foreground">
              <span className="text-cyan-400 font-mono">💡 Tip:</span> Move your mouse over the shirt to rotate it in 3D. Scroll to see parallax effects!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
