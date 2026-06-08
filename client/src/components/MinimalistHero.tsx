import { useEffect, useRef, useState } from 'react';

export default function MinimalistHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let time = 0;

    const drawLogo = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 150;

      // Draw rotating circles
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + time * 0.005;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(time * 0.01 + i) * 0.2})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(x, y, 40 + Math.sin(time * 0.01 + i) * 20, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw center circle
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      time++;
      animationId = requestAnimationFrame(drawLogo);
    };

    drawLogo();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-50"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div
          className="mb-8"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter leading-none">
            BNC
          </h1>
          <p className="text-2xl md:text-3xl text-white/70 font-light tracking-widest">
            PREMIUM CLOTHING DESIGNS
          </p>
        </div>

        <div
          className="mt-16"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Elevate your brand with cutting-edge clothing designs, seamless print-on-demand fulfillment, and integrated e-commerce solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-black font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105">
              EXPLORE COLLECTIONS
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-white/50 text-sm font-light tracking-widest mb-4">SCROLL</div>
        <div className="w-0.5 h-12 bg-white/30 mx-auto animate-pulse" />
      </div>
    </div>
  );
}
