import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const categories = ['All', 'Signature Rice', 'Fast Food', 'Northern Delicacies', 'Grills'];

const menuItems = [
  {
    id: 1,
    name: 'Smokey Party Jollof Rice',
    category: 'Signature Rice',
    price: '₦4,500',
    description: 'Smokey long-grain rice infused with rich tomato-pepper base, served with sweet fried plantain (Dodo) and succulent peppered beef.',
    image: '/assets/jollof_rice.png',
    badge: "Chef's Special",
    spicy: true,
  },
  {
    id: 2,
    name: 'Double Sausage Chicken Shawarma',
    category: 'Fast Food',
    price: '₦3,800',
    description: 'Double sausage, grilled spiced chicken strips, signature creamy cabbage mix, and sweet-spicy tahini glaze rolled in toasted flatbread.',
    image: '/assets/chicken_shawarma.png',
    badge: 'Popular',
    spicy: false,
  },
  {
    id: 3,
    name: 'Flame Grilled Quarter Chicken',
    category: 'Grills',
    price: '₦5,500',
    description: 'Tender quarter chicken flame-grilled to perfection, basted with our secret house spicy barbecue sauce, served with stir-fry vegetables.',
    image: '/assets/grilled_chicken.png',
    badge: 'Signature',
    spicy: true,
  },
  {
    id: 4,
    name: 'CK Special Beef Burger & Fries',
    category: 'Fast Food',
    price: '₦4,800',
    description: 'Gourmet double-patty beef burger with melting cheddar, fresh crunch veggies, house secret dressing, served with golden crispy french fries.',
    image: '/assets/burger_fries.png',
    badge: 'Crispy & Juicy',
    spicy: false,
  },
  {
    id: 5,
    name: 'Fluffy Golden Northern Masa',
    category: 'Northern Delicacies',
    price: '₦3,000',
    description: 'Fluffy Hausa rice cakes pan-fried to golden perfection. Crispy on the outer crust and soft inside, served with hot spicy suya yaji and wild honey.',
    image: '/assets/masa.png',
    badge: 'Local Favourite',
    spicy: true,
  },
  {
    id: 6,
    name: 'Tuwo Shinkafa & Miyan Taushe',
    category: 'Northern Delicacies',
    price: '₦4,000',
    description: 'Perfectly mashed fluffy white rice balls served with aromatic pumpkin-groundnut stew (Miyan Taushe), tender beef cubes, and yaji.',
    image: '/assets/tuwo_shinkafa.png',
    badge: 'Royal Delight',
    spicy: false,
  },
];

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const getWhatsAppLink = (itemName, itemPrice) => {
    const phone = '2348034364691';
    const text = encodeURIComponent(`Hello CK Restaurant & Fast Food, I would like to order: ${itemName} (${itemPrice}). Please confirm availability and delivery.`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <section id="menu" className="relative py-24 bg-[#080303] overflow-hidden">
      {/* Decorative side glow */}
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-64 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Handcrafted Delicacies
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Signature Menu
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto mb-6" />
          <p className="text-gray-400 font-light">
            Savor our premium choice recipes, combining classic Nigerian tastes, local Northern specialties, and elite fast-food favorites in Jos.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20 scale-105'
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative rounded-2xl overflow-hidden glass-panel flex flex-col h-full hover:border-brand-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-red/5 hover:-translate-y-1.5"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-brand-red text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
                      {item.badge}
                    </span>
                    {item.spicy && (
                      <span className="w-fit px-3.5 py-1 rounded-full bg-orange-600 text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
                        🌶️ Extra Spicy
                      </span>
                    )}
                  </div>

                  {/* Floating Price */}
                  <span className="absolute bottom-4 right-4 text-2xl font-serif font-bold text-white bg-black/55 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/5">
                    {item.price}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-[10px] uppercase tracking-widest text-brand-accent font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  {/* CTA button */}
                  <a
                    href={getWhatsAppLink(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto py-3.5 rounded-xl bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red text-white hover:text-white font-bold tracking-wider uppercase text-[10px] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Order via WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Entire Menu note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Looking for something else? We serve a wide array of side meals, snacks, soft drinks, and custom orders.{' '}
            <a 
              href="https://wa.me/2348034364691?text=Hello%20CK%20Restaurant,%20please%20send%20me%20your%20full%20digital%20menu%20catalog." 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent font-semibold inline-flex items-center gap-1 hover:underline ml-1"
            >
              Request Full Digital Menu
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
