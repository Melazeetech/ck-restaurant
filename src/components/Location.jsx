import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, UtensilsCrossed, ExternalLink } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="relative py-24 bg-[#051020] overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-orange text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Find Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Hours & Location
          </h2>
          <div className="w-12 h-1 bg-brand-orange mx-auto mb-6" />
          <p className="text-gray-400 font-light">
            Locate us at our modern restaurant branch in Jos, Plateau State, or consult our weekly opening hours.
          </p>
        </div>

        {/* 2-Column Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Details & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            
            {/* Address Block */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">Our Address</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  No 29/4 Bauchi Road,<br />
                  Yan Taya Junction, Jos North,<br />
                  Plateau State, Nigeria.
                </p>
              </div>
            </div>

            {/* Opening Hours Block */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h4 className="font-serif text-lg font-bold text-white mb-2">Opening Hours</h4>
                <div className="space-y-2 text-sm text-gray-400 font-light">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Monday - Saturday</span>
                    <span className="text-white font-medium">9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Sunday</span>
                    <span className="text-white font-medium">12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dining Options Block */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">Services</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Enjoy cozy <span className="text-white">Dine-in</span> at our luxury salon, grab a fast <span className="text-white">Takeaway</span>, or request home <span className="text-white">Delivery</span> anywhere in Jos.
                </p>
              </div>
            </div>

            {/* Contact Phones */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">Call to Reserve / Order</h4>
                <div className="flex flex-col gap-1 text-sm font-semibold text-white">
                  <a href="tel:+2348034364691" className="hover:text-brand-orange transition-colors">+234 803 436 4691</a>
                  <a href="tel:+2349025536790" className="hover:text-brand-orange transition-colors">+234 902 553 6790</a>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Full-screen-like Map Preview */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel p-2.5 relative flex flex-col justify-between shadow-2xl">
            
            {/* Map Frame wrapper */}
            <div className="relative w-full h-full min-h-[350px] lg:min-h-0 rounded-2xl overflow-hidden">
              <img
                src="/assets/jos_map.png"
                alt="CK Restaurant physical location map on Bauchi Road"
                className="w-full h-full object-cover scale-105"
              />
              
              {/* Dark overlay & Pin styling */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              
              {/* Map Floating HUD */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-auto">
                <span className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  Live Location Active
                </span>
                
                <a
                  href="https://maps.google.com/?q=No.+29/4+Bauchi+Road,+Yan+Taya+Junction,+Jos+Plateau+State,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-xs font-bold text-white flex items-center gap-1.5 shadow-lg shadow-brand-orange/35 transition-all active:scale-95"
                >
                  Open in Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Central glowing indicator overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 rounded-full bg-brand-orange/20 blur-xl animate-pulse" />
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
