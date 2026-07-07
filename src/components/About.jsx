import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#051020] overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-brand-orange text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              The CK Experience
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Crafting Unforgettable <br className="hidden sm:block" />
              Taste Memories In Jos
            </h2>
            <div className="w-12 h-1 bg-brand-orange mb-8" />

            <div className="space-y-6 text-gray-300 font-light leading-relaxed mb-8">
              <p>
                Founded in the heart of Jos, Plateau State, <span className="text-white font-medium">CK Restaurant & Fast Food</span> has grown to become the benchmark for premium dining. We believe that food is not just sustenance—it is a sensory memory that binds people together.
              </p>
              <p>
                Taking advantage of Jos’s unique, cool temperate climate, we source our vegetables and fresh ingredients daily from local farms on the Plateau. From our smoky signature Jollof rice to our expertly toasted shawarmas and rich Northern traditional delicacies like Tuwon Shinkafa, every recipe is crafted to trigger a flavor memory you will always return to.
              </p>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-orange">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Elite Hygiene</h4>
                <p className="text-xs text-gray-400 font-light leading-snug">Strict kitchen cleanliness and quality standards.</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-orange">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Plateau Proud</h4>
                <p className="text-xs text-gray-400 font-light leading-snug">100% locally sourced fresh farm-to-table produce.</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-orange">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Modern Comfort</h4>
                <p className="text-xs text-gray-400 font-light leading-snug">Luxury silver & navy ambiance and relaxing spaces.</p>
              </div>
            </div>
          </div>

          {/* Right Image Layout */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-center items-center">
            {/* Ambient orange glow behind images */}
            <div className="absolute w-72 h-72 rounded-full bg-brand-orange/10 blur-[80px] pointer-events-none" />
            
            {/* Image Box Grid */}
            <div className="relative w-full max-w-lg grid grid-cols-12 gap-4">
              
              {/* Primary Image: Chef Plating */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="col-span-8 rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl"
              >
                <img 
                  src="/assets/chef_plating.png" 
                  alt="Professional chef plating food" 
                  className="w-full h-80 object-cover rounded-xl"
                />
              </motion.div>

              {/* Secondary Overlapping Image: Interior */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="col-span-6 col-start-7 -translate-y-24 rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl border-brand-orange/20"
              >
                <img 
                  src="/assets/restaurant_interior.png" 
                  alt="CK Restaurant luxury interior seating" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </motion.div>

              {/* Floating Stat Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-6 left-6 md:-left-6 px-6 py-4 rounded-xl glass-panel text-left flex flex-col shadow-lg border border-brand-orange/30"
              >
                <span className="font-serif text-3xl font-bold text-white tracking-tight">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-orange mt-0.5">
                  Unforgettable Taste
                </span>
                <span className="text-[9px] text-gray-400 font-light mt-1">
                  Established in Jos
                </span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
