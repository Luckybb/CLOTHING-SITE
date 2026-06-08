'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">BNC</div>
          <div className="hidden md:flex gap-8">
            <a href="/" className="hover:text-gray-400 transition">Home</a>
            <a href="/collections" className="hover:text-gray-400 transition">Collections</a>
            <a href="/about" className="text-gray-400">About</a>
            <a href="/services" className="hover:text-gray-400 transition">Services</a>
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
            <a href="/about" className="block text-gray-400">About</a>
            <a href="/services" className="block hover:text-gray-400">Services</a>
            <a href="/contact" className="block hover:text-gray-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-black mb-4">ABOUT BNC</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          6+ Years Helping Clothing Brands Look Premium & Sell More
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            BNC Designs exists for one reason: to help clothing brands stand out and sell more.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We specialise exclusively in clothing brand design, POD setup, and Shopify store branding. From the first logo to a fully live store, we handle the creative and technical side so you can focus on growing your brand.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We don't do generic. Every design, store, and campaign is built around your brand identity and the customers you're trying to reach.
          </p>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
              <h3 className="text-2xl font-bold mb-3">Custom T-Shirt & Apparel Design</h3>
              <p className="text-gray-400">Bold graphics, typography and artwork built around your brand identity</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
              <h3 className="text-2xl font-bold mb-3">Full Brand Identity</h3>
              <p className="text-gray-400">Logo, colour system, typography and brand guidelines from scratch</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
              <h3 className="text-2xl font-bold mb-3">POD Setup & Integration</h3>
              <p className="text-gray-400">Printful, Printify, Gelato, Fourthwall, Amazon Merch & Etsy, fully set up and synced</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
              <h3 className="text-2xl font-bold mb-3">Shopify / Wix / WordPress Store Design</h3>
              <p className="text-gray-400">Stores built to convert — fast, mobile-first and on-brand</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
              <h3 className="text-2xl font-bold mb-3">Store SEO & Speed Optimisation</h3>
              <p className="text-gray-400">Get found on Google and stop losing customers to slow load times</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
              <h3 className="text-2xl font-bold mb-3">Facebook & Instagram Ad Creatives</h3>
              <p className="text-gray-400">Scroll-stopping ad designs built to drive traffic to your store</p>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Platforms We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">E-Commerce</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Shopify - Complete store setup and optimisation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Wix - Drag-and-drop store creation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>WooCommerce - WordPress integration</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Etsy - Shop setup and listing design</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">POD Platforms</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Printful - White-label solutions</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Printify - 100+ print partners</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Gelato - Global POD network</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Fourthwall - Creator store setup</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Amazon Merch on Demand</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Redbubble & Teepublic</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg md:col-span-2">
              <h3 className="text-2xl font-bold mb-3">Design Tools</h3>
              <ul className="space-y-2 text-gray-300 grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Adobe Creative Suite</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Figma</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white mr-3"></span>Canva Pro</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-black mb-2">500+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">150+</div>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">6+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">100%</div>
              <p className="text-gray-400">Job Success Score</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 BNC Designs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
