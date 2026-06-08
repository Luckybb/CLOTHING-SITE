'use client';
import { useState } from 'react';
import { Menu, X, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
            <a href="/services" className="hover:text-gray-400 transition">Services</a>
            <a href="/contact" className="text-gray-400">Contact</a>
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
            <a href="/services" className="block hover:text-gray-400">Services</a>
            <a href="/contact" className="block text-gray-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-black mb-4">GET IN TOUCH</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Message us and we'll get back to you within 24 hours
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-8">Contact Info</h2>
            
            <div className="mb-8">
              <div className="flex items-start mb-3">
                <Mail size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href="mailto:info@bncproductionz.com" className="text-gray-400 hover:text-white transition">
                    info@bncproductionz.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-start mb-3">
                <MessageCircle size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/17473364515" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold text-sm">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-start mb-3">
                <MapPin size={24} className="mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-gray-400">
                    Remote First<br />
                    Operating Globally
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 mt-8">
              <h3 className="font-bold mb-4">Response Time</h3>
              <p className="text-gray-400 text-sm">
                We typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:border-white focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:border-white focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:border-white focus:outline-none transition"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:border-white focus:outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-white text-black font-bold hover:bg-gray-200 transition"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {submitted && (
                <div className="bg-gray-900 border border-gray-800 p-4 rounded text-center">
                  <p className="text-green-400">Thank you! We'll be in touch soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Services Quick Links */}
      <div className="bg-gray-900 border-t border-gray-800 py-16 px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Can We Help With?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/services" className="border border-gray-800 p-6 rounded hover:border-white transition text-center">
              <h3 className="font-bold mb-2">T-Shirt & Apparel Design</h3>
              <p className="text-gray-400 text-sm">Custom graphics for your clothing brand</p>
            </a>
            <a href="/services" className="border border-gray-800 p-6 rounded hover:border-white transition text-center">
              <h3 className="font-bold mb-2">Brand Identity</h3>
              <p className="text-gray-400 text-sm">Logo, colours, typography & guidelines</p>
            </a>
            <a href="/services" className="border border-gray-800 p-6 rounded hover:border-white transition text-center">
              <h3 className="font-bold mb-2">POD Setup</h3>
              <p className="text-gray-400 text-sm">Printful, Printify, Gelato, Fourthwall & more</p>
            </a>
            <a href="/services" className="border border-gray-800 p-6 rounded hover:border-white transition text-center">
              <h3 className="font-bold mb-2">Shopify / Wix / WordPress Store</h3>
              <p className="text-gray-400 text-sm">Store design & branding</p>
            </a>
            <a href="/services" className="border border-gray-800 p-6 rounded hover:border-white transition text-center">
              <h3 className="font-bold mb-2">Store SEO & Speed</h3>
              <p className="text-gray-400 text-sm">Get found & convert faster</p>
            </a>
            <a href="/services" className="border border-gray-800 p-6 rounded hover:border-white transition text-center">
              <h3 className="font-bold mb-2">Ad Creatives</h3>
              <p className="text-gray-400 text-sm">Facebook & Instagram campaign designs</p>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">BNC DESIGNS</h4>
            <p className="text-gray-400 text-sm">Clothing brand design, POD setup & Shopify branding, all in one place</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/services" className="hover:text-white">T-Shirt Design</a></li>
              <li><a href="/services" className="hover:text-white">Brand Identity</a></li>
              <li><a href="/services" className="hover:text-white">POD Integration</a></li>
              <li><a href="/services" className="hover:text-white">Shopify Store Design</a></li>
              <li><a href="/services" className="hover:text-white">Store SEO</a></li>
              <li><a href="/services" className="hover:text-white">Ad Creatives</a></li>
              <li><a href="/services" className="hover:text-white">AI Automation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">PLATFORMS</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Shopify</li>
              <li>Printful</li>
              <li>Printify</li>
              <li>Gelato</li>
              <li>Fourthwall</li>
              <li>Amazon Merch</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">INTEGRATIONS</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/services" className="hover:text-white">Shopify</a></li>
              <li><a href="/services" className="hover:text-white">WordPress</a></li>
              <li><a href="/services" className="hover:text-white">Wix</a></li>
              <li><a href="/services" className="hover:text-white">Printify</a></li>
              <li><a href="/services" className="hover:text-white">Printful</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 BNC Designs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
