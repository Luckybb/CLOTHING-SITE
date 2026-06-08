import { Palette, Zap, Star, Truck, Package, Layers } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Bespoke designs crafted by award-winning designers. Unlimited revisions until perfect.',
  },
  {
    icon: Zap,
    title: 'Print-On-Demand',
    description: 'Zero inventory, zero risk. We handle production and shipping worldwide.',
  },
  {
    icon: Star,
    title: 'Brand Identity',
    description: 'Complete branding packages including logos, color systems, and guidelines.',
  },
  {
    icon: Truck,
    title: 'PrintFull Integration',
    description: 'White-label solutions with custom packaging and premium quality assurance.',
  },
  {
    icon: Package,
    title: 'Printify Network',
    description: '100+ print partners with competitive pricing and quality guarantee.',
  },
  {
    icon: Layers,
    title: 'Shopify Connected',
    description: 'Real-time inventory sync and automated order fulfillment.',
  },
];

export default function PremiumServices() {
  return (
    <section className="bg-black py-20 md:py-32 border-t border-white/10">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            OUR SERVICES
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Comprehensive solutions for your clothing brand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/5"
              >
                <Icon className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
