import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/assets/restaurant_interior.png',
    alt: 'Luxury Candlelight Dining Ambiance',
    tag: 'Ambiance',
    size: 'col-span-12 md:col-span-8 h-80',
  },
  {
    id: 2,
    src: '/assets/grilled_chicken.png',
    alt: 'Flame Grilled BBQ Quarter Chicken',
    tag: 'Signature Grill',
    size: 'col-span-12 md:col-span-4 h-80',
  },
  {
    id: 3,
    src: '/assets/chef_plating.png',
    alt: 'Our Chef Hand-Plating Culinary Art',
    tag: 'Kitchen Art',
    size: 'col-span-12 md:col-span-4 h-80',
  },
  {
    id: 4,
    src: '/assets/customer_dining.png',
    alt: 'Happy Customers Sharing Memories',
    tag: 'Dining Experience',
    size: 'col-span-12 md:col-span-8 h-80',
  },
  {
    id: 5,
    src: '/assets/jollof_rice.png',
    alt: 'Smokey Party Jollof Rice platter',
    tag: 'Signature Rice',
    size: 'col-span-12 md:col-span-4 h-80',
  },
  {
    id: 6,
    src: '/assets/burger_fries.png',
    alt: 'CK Double Decker Cheese Burger',
    tag: 'Fast Food',
    size: 'col-span-12 md:col-span-4 h-80',
  },
  {
    id: 7,
    src: '/assets/storefront.png',
    alt: 'CK Restaurant Storefront Facade',
    tag: 'Storefront',
    size: 'col-span-12 md:col-span-4 h-80',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="relative py-24 bg-[#051020] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-orange text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            The Restaurant Experience
          </h2>
          <div className="w-12 h-1 bg-brand-orange mx-auto mb-6" />
          <p className="text-gray-400 font-light">
            Take a visual tour through our luxury dining environment, professional kitchen preparation, and the gorgeous meals we serve to our guests.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group glass-panel p-1.5 shadow-xl ${image.size}`}
            >
              {/* Inner wrapper */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  
                  {/* Top: Tag */}
                  <span className="self-start px-3 py-1 rounded-full bg-brand-orange text-[9px] font-bold text-white uppercase tracking-wider">
                    {image.tag}
                  </span>

                  {/* Bottom: Caption & Icon */}
                  <div className="flex justify-between items-end">
                    <div className="text-left">
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">CK Experience</p>
                      <h4 className="font-serif text-lg font-bold text-white leading-tight">{image.alt}</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Social CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel hover:bg-white/5 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-brand-orange/30 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.885.056 1 .046 1.672.213 2.128.39.598.232 1.061.54 1.516.995.455.455.763.918.995 1.516.177.456.344 1.128.39 2.128.048 1.101.056 1.455.056 3.885 0 2.43-.008 2.784-.056 3.885-.046 1-.213 1.672-.39 2.128-.232.598-.54 1.061-.995 1.516-.455.455-.918.763-1.516.995-.456.177-1.128.344-2.128.39-1.101.048-1.455.056-3.885.056-2.43 0-2.784-.008-3.885-.056-1-.046-1.672-.213-2.128-.39a3.864 3.864 0 01-1.516-.995 3.864 3.864 0 01-.995-1.516c-.177-.456-.344-1.128-.39-2.128C2.008 14.784 2 14.43 2 12c0-2.43.008-2.784.056-3.885.046-1 .213-1.672.39-2.128c.232-.598.54-1.061.995-1.516a3.864 3.864 0 011.516-.995c.456-.177 1.128-.344 2.128-.39C9.216 2.008 9.57 2 12 2zm0 1.8c-2.43 0-2.717.01-3.664.053-.94.043-1.4.2-1.74.333-.45.175-.77.384-1.11.725-.34.34-.55.66-.725 1.11-.133.34-.29 1-.333 1.74-.043.947-.053 1.234-.053 3.664s.01 2.717.053 3.664c.043.94.2 1.4.333 1.74.175.45.384.77.725 1.11.34.34.66.55 1.11.725.34.133 1 .29 1.74.333.947.043 1.234.053 3.664.053s2.717-.01 3.664-.053c.94-.043 1.4-.2 1.74-.333.45-.175.77-.384 1.11-.725.34-.34.55-.66.725-1.11.133-.34.29-1 .333-1.74.043-.947.053-1.234.053-3.664s-.01-2.717-.053-3.664c-.043-.94-.2-1.4-.333-1.74a3.056 3.056 0 00-.725-1.11 3.056 3.056 0 00-1.11-.725c-.34-.133-1-.29-1.74-.333-.947-.043-1.234-.053-3.664-.053zm0 3.6c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 7.2c-1.49 0-2.7-1.21-2.7-2.7s1.21-2.7 2.7-2.7 2.7 1.21 2.7 2.7-1.21 2.7-2.7 2.7zm5.55-7.875c0 .54-.438.975-.975.975s-.975-.438-.975-.975.438-.975.975-.975.975.438.975.975z" clipRule="evenodd" />
            </svg>
            Share Your Experience #CKJos
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:border-brand-orange hover:bg-brand-orange text-white transition-all z-50"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center bg-[#051020]/80 p-3 rounded-2xl border border-white/10 shadow-2xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[70vh] md:max-h-[75vh] w-full object-contain rounded-xl"
              />
              <div className="w-full text-center mt-6 px-4 pb-4">
                <span className="text-brand-orange text-[10px] uppercase font-bold tracking-widest block mb-1">
                  {selectedImage.tag}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
                  {selectedImage.alt}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
