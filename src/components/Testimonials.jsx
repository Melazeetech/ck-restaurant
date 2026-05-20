import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Chinedu Okafor',
    role: 'Verified Local Guide',
    comment: "Their Smokey Party Jollof Rice is on another level. I have dined in several top restaurants in Lagos, but CK's Jollof has a distinct firewood aroma that stays in your memory. The quarter chicken was tender and juicy!",
    rating: 5,
    initials: 'CO',
    color: 'bg-red-900/50 text-red-200',
  },
  {
    id: 2,
    name: 'Hadiza Bello',
    role: 'Unijos Alumna & Banker',
    comment: 'I always order their Masa and Suya. It is clean, premium, and served with a touch of modern luxury. Yan Taya junction can get busy, but stepping into CK feels like entering an absolute oasis of calm and comfort.',
    rating: 5,
    initials: 'HB',
    color: 'bg-orange-950 text-orange-200',
  },
  {
    id: 3,
    name: 'Dung Pam',
    role: 'Plateau Tech Architect',
    comment: 'Excellent delivery service. I ordered the double-sausage chicken shawarma and fries from my office, and it arrived in under 35 minutes, steaming hot and fresh. Hands down the best fast-food in Jos Plateau!',
    rating: 5,
    initials: 'DP',
    color: 'bg-neutral-800 text-neutral-200',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#080303] overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Guest Diaries
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto mb-6" />
          <p className="text-gray-400 font-light">
            Read real feedback from our valuable guests in Jos who have enjoyed our fast food, local dishes, and dining experience.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={t.id}
              className="group relative glass-panel p-8 rounded-3xl flex flex-col justify-between border border-white/5 hover:border-brand-red/20 transition-all duration-300"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-brand-red/10 transition-colors duration-300 pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Review Comment */}
              <p className="text-gray-300 text-sm font-light leading-relaxed mb-8 text-left relative z-10">
                "{t.comment}"
              </p>

              {/* Customer Profile */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className={`w-12 h-12 rounded-full font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-inner ${t.color}`}>
                  {t.initials}
                </div>
                <div className="text-left">
                  <h4 className="font-serif font-bold text-white text-base leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent mt-1 block">
                    {t.role}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
