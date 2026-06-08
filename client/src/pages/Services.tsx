'use client';
import { useState } from 'react';
import { Menu, X, Check } from 'lucide-react';

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: 'T-Shirt Design',
      description: 'Custom designs tailored to your brand',
      price: 'Starting $99',
      features: [
        'Unlimited revisions',
        'Original artwork',
        'Print-ready files',
        'Commercial license'
      ]
    },
    {
      title: 'Shopify Store Setup',
      description: 'Complete e-commerce store configuration',
      price: 'Starting $599',
      features: [
        'Store design & setup',
        'Product catalog creation',
        'Payment gateway integration',
        'SEO optimization'
      ]
    },
    {
      title: 'Printify Integration',
      description: 'Seamless POD platform connection',
      price: 'Starting $399',
      features: [
        'Printify account setup',
        'Product sync automation',
        'Order fulfillment setup',
        'Inventory management'
      ]
    },
    {
      title: 'Website Creation',
      description: 'Full website on your platform of choice',
      price: 'Starting $799',
      features: [
        'Platform selection guidance',
        'Responsive design',
        'Mobile optimization',
        'Performance tuning'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Shopify',
      description: 'Best for: E-commerce focused brands',
      features: ['Built-in payment processing', 'App ecosystem', 'Hosted solution', 'Professional templates'],
    },
    {
      name: 'WordPress',
      description: 'Best for: Content-rich sites with e-commerce',
      features: ['Highly customizable', 'WooCommerce integration', 'SEO friendly', 'Full control']
    },
    {
      name: 'Webflow',
      description: 'Best for: Custom, high-performance design',
      features: ['Visual builder', 'Responsive design', 'CMS capabilities', 'Hosting included']
    },
    {
      name: 'Wix',
      description: 'Best for: Quick setup with minimal coding',
      features: ['Drag-and-drop builder', 'AI assistance', 'Built-in SEO', 'Mobile responsive']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">BNC</div>
          <div className="hidden md:flex gap-8">
            <a href="/" className="hover:text-gray-400 transition">Home</a>
            <a href="/collections" className="hover:text-gray-400 transition">Collections</a>
            <a href="/about" className="hover:text-gray-400 transition">About</a>
            <a href="/services" className="text-gray-400">Services</a>
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
            <a href="/collections" className="block hover:text-gray-400">Collections</a>
            <a href="/about" className="block hover:text-gray-400">About</a>
            <a href="/services" className="block text-gray-400">Services</a>
            <a href="/contact" className="block hover:text-gray-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-black mb-4">OUR SERVICES</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Complete solutions for clothing design and e-commerce
        </p>
      </div>

      {/* Core Services */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold mb-12">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="border border-gray-800 p-8 rounded-lg hover:border-gray-600 transition">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="text-2xl font-bold mb-6">{service.price}</div>
              <ul className="space-y-3">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center text-gray-300">
                    <Check size={20} className="mr-3 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="w-full mt-6 px-6 py-3 border border-white hover:bg-white hover:text-black transition font-semibold inline-block text-center">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Comparison */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold mb-12">Website Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform, idx) => (
            <div key={idx} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
              <p className="text-gray-400 mb-6">{platform.description}</p>
              <ul className="space-y-3">
                {platform.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-white mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* POD Integration */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold mb-12">Print-on-Demand Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Printify</h3>
            <p className="text-gray-400 mb-6">
              Connect with 100+ print partners for unlimited product options and competitive pricing
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <Check size={20} className="mr-3 text-white" />
                100+ print partners
              </li>
              <li className="flex items-center text-gray-300">
                <Check size={20} className="mr-3 text-white" />
                Real-time inventory sync
              </li>
              <li className="flex items-center text-gray-300">
                <Check size={20} className="mr-3 text-white" />
                Automated fulfillment
              </li>
              <li className="flex items-center text-gray-300">
                <Check size={20} className="mr-3 text-white" />
                Global shipping
              </li>
            </ul>
            <button className="w-full px-6 py-3 border border-white hover:bg-white hover:text-black transition font-semibold">
              Learn More
            </button>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Shopify Integration</h3>
            <p className="text-gray-400 mb-6">
              Complete Shopify store setup with product catalog, payment processing, and order management
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <Check size={20} className="mr-3 text-white" />
                Store design & setup
              </li>
              <li className="flex items-center text-gray-300">
                <Check size={20} className="mr-3 text-white" />
                Payment gateway setup
              </li>
              <li className="flex items-center text-gray-300">
                <Check size={20} className="mr-3 text-white" />
                Product management
              </li>
              <li className="flex items-center text-gray-300">
                <Check size={20} className="mr-3 text-white" />
                Analytics & reporting
              </li>
            </ul>
            <button className="w-full px-6 py-3 border border-white hover:bg-white hover:text-black transition font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discovery', desc: 'Understand your brand vision and goals' },
            { step: '02', title: 'Design', desc: 'Create custom designs tailored to your brand' },
            { step: '03', title: 'Setup', desc: 'Configure store and POD integration' },
            { step: '04', title: 'Launch', desc: 'Deploy and optimize for success' }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-black mb-4 text-gray-700">{item.step}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 border-t border-gray-800 py-16 px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Brand?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's create something amazing together
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">BNC DESIGNS</h4>
            <p className="text-gray-400 text-sm">Premium clothing design and POD solutions</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/services" className="hover:text-white">T-Shirt Design</a></li>
              <li><a href="/services" className="hover:text-white">Shopify Integration</a></li>
              <li><a href="/services" className="hover:text-white">Printify Setup</a></li>
              <li><a href="/services" className="hover:text-white">Website Creation</a></li>
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
          <p>Crafted for brands that refuse to blend in</p>
        </div>
      </footer>
    </div>
  );
}
