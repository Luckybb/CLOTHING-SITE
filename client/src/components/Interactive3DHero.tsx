import { useEffect, useRef, useState } from 'react';

export default function Interactive3DHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouseX((e.clientX - rect.left) / rect.width);
      setMouseY((e.clientY - rect.top) / rect.height);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background"
      style={{ perspective: '1200px' }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Parallax Layer 1 - Far Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 240, 255, 0.15), transparent 50%)',
          transform: `translate(${mouseX * 30}px, ${mouseY * 30}px) translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Parallax Layer 2 - Mid Background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: 'radial-gradient(circle at 80% 50%, rgba(255, 0, 110, 0.12), transparent 50%)',
          transform: `translate(${mouseX * 50}px, ${mouseY * 50}px) translateY(${scrollY * 0.4}px)`,
        }}
      />

      {/* Parallax Layer 3 - Foreground */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.1), transparent 60%)',
          transform: `translate(${mouseX * 80}px, ${mouseY * 80}px) translateY(${scrollY * 0.6}px)`,
        }}
      />

      {/* Animated 3D Boxes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Box 1 */}
        <div
          className="absolute w-32 h-32 rounded-2xl neon-border opacity-30"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(255, 0, 110, 0.05))',
            transform: `
              translateX(${mouseX * 100 - 50}px)
              translateY(${mouseY * 100 - 50}px)
              rotateX(${(mouseY - 0.5) * 30}deg)
              rotateY(${(mouseX - 0.5) * 30}deg)
              rotateZ(${scrollY * 0.1}deg)
              translateZ(100px)
            `,
            left: '10%',
            top: '20%',
          }}
        />

        {/* Box 2 */}
        <div
          className="absolute w-40 h-40 rounded-3xl border-2 neon-border-magenta opacity-25"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(0, 240, 255, 0.05))',
            transform: `
              translateX(${mouseX * 120 - 60}px)
              translateY(${mouseY * 120 - 60}px)
              rotateX(${(mouseY - 0.5) * 40}deg)
              rotateY(${(mouseX - 0.5) * 40}deg)
              rotateZ(${scrollY * 0.15}deg)
              translateZ(50px)
            `,
            right: '15%',
            bottom: '25%',
          }}
        />

        {/* Box 3 */}
        <div
          className="absolute w-24 h-24 rounded-xl border neon-border opacity-35"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(255, 0, 110, 0.08))',
            transform: `
              translateX(${mouseX * 90 - 45}px)
              translateY(${mouseY * 90 - 45}px)
              rotateX(${(mouseY - 0.5) * 25}deg)
              rotateY(${(mouseX - 0.5) * 25}deg)
              rotateZ(${scrollY * 0.2}deg)
              translateZ(150px)
            `,
            left: '60%',
            top: '15%',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="max-w-4xl px-4">
          <div className="mb-8 inline-block">
            <span className="text-cyan-400 text-sm font-mono tracking-widest bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/30 backdrop-blur-md">
              ✨ PREMIUM DESIGN EXPERIENCE
            </span>
          </div>

          <h1
            className="text-7xl md:text-8xl font-bold font-mono mb-8 leading-tight text-shadow-neon"
            style={{
              transform: `translateY(${mouseY * 20 - 10}px)`,
            }}
          >
            Elevate Your
            <br />
            <span className="gradient-neon">Brand Vision</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              transform: `translateY(${mouseY * 15 - 7.5}px)`,
            }}
          >
            Experience next-generation clothing design with immersive 3D visualization, real-time customization, and seamless integration with Shopify, Printify, and PrintFull.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            style={{
              transform: `translateY(${mouseY * 10 - 5}px)`,
            }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-background font-mono font-bold rounded-lg shadow-lg neon-glow-intense transition-all duration-300 hover:scale-105">
              Explore Studio
            </button>
            <button className="px-8 py-4 border-2 border-magenta-500 text-magenta-400 hover:bg-magenta-500/10 font-mono font-bold rounded-lg transition-all duration-300 hover:scale-105 cyber-border">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            background: i % 2 === 0 ? '#00f0ff' : '#ff006e',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-particle-hero ${4 + i * 0.5}s ease-in-out infinite`,
            filter: 'blur(2px)',
            transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
          }}
        />
      ))}

      <style>{`
        @keyframes float-particle-hero {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-40px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
