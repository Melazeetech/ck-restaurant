import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#051020] pt-20">
      {/* Background Image with dark navy gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/storefront.png"
          alt="CK Restaurant Storefront Facade"
          className="w-full h-full object-cover object-center opacity-65 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051020] via-[#051020]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051020] via-transparent to-[#051020]/40" />
        {/* Decorative subtle orange radial glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Small premium pre-header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-light text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
          Low Cost • High Quality
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl"
        >
          A Taste You <br className="hidden md:block" />
          Can <span className="text-gradient-gold italic font-semibold">Remember</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-gray-300 text-base md:text-xl max-w-2xl mb-10 leading-relaxed font-light"
        >
          Welcome to <span className="text-white font-semibold">CK Restaurant & Fast Food</span>, where gourmet local Northern delicacies meet high-end modern fast food. Crafted with passion, served in luxury in the heart of Jos.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none"
        >
          <a
            href="#menu"
            className="group w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-2 border border-brand-orange shadow-lg shadow-brand-orange/35 transition-all duration-300 hover:scale-105 hover:shadow-brand-orange/50 active:scale-95"
          >
            Explore Our Menu
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/2348034364691?text=Hello%20CK%20Restaurant,%20I%20would%20like%20to%20place%20a%20food%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-white/5 text-white font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-green-500" />
            Order on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Luxury border indicator at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
