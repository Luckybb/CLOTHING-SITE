import { AnimatedCounter } from './Advanced3DEffects';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, Urban Threads',
    text: 'BNC Designs transformed our brand identity. The designs are stunning and the POD integration seamless.',
    image: '👩‍💼',
  },
  {
    name: 'Marcus Johnson',
    role: 'CEO, Heritage Apparel',
    text: 'Working with BNC was a game-changer. Their attention to detail and creative vision exceeded expectations.',
    image: '👨‍💼',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Creative Director, Eco Fashion',
    text: 'The team at BNC understands sustainable fashion. Our eco-conscious collection launched with 200% ROI.',
    image: '👩‍🎨',
  },
];

const stats = [
  { label: 'Collections Created', value: 150 },
  { label: 'Happy Clients', value: 1200 },
  { label: 'Designs Delivered', value: 5600 },
  { label: 'Revenue Generated', value: 2400 },
];

export default function TestimonialsStats() {
  return (
    <>
      <section className="bg-black py-20 md:py-32 border-t border-white/10">
        <div className="container">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-16 tracking-tighter">BY THE NUMBERS</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-white mb-2">
                  <AnimatedCounter target={stat.value} />
                  {stat.label.includes('Revenue') && <span>K</span>}
                </div>
                <p className="text-white/60 font-bold tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-32 border-t border-white/10">
        <div className="container">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-16 tracking-tighter">WHAT CLIENTS SAY</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-500 group"
              >
                <div className="text-5xl mb-4">{testimonial.image}</div>
                <p className="text-white/80 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-black">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
