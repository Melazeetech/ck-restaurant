import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Sparkles, AlertCircle } from 'lucide-react';
import Logo from './Logo';

const categories = [
  'All',
  'Main Course',
  'Protein & Add-ons',
  'Sandwiches',
  'Swallow',
  'Soups',
  'Peppersoups',
  'Mocktails',
  'Milkshakes Smoothie & Juices',
  'Teas & Parfait'
];

const menuItems = [
  // 1. MAIN COURSE
  { id: 1, name: 'Jollof rice', category: 'Main Course', description: 'Smokey party-style long grain rice cooked in a rich, spiced tomato and pepper base.', image: '/assets/jollof_rice.png', featured: true, spicy: true, badge: 'Popular' },
  { id: 2, name: 'Fried rice', category: 'Main Course', description: 'Delicious stir-fried rice loaded with fresh vegetables, liver, and traditional seasoning.', image: '/assets/jollof_rice.png' },
  { id: 3, name: 'White rice & stew', category: 'Main Course', description: 'Fluffy white rice served with a rich, peppered tomato and red pepper stew.', image: '/assets/chef_plating.png' },
  { id: 4, name: 'C.K special fried rice', category: 'Main Course', description: 'Our chef special stir-fried rice loaded with proteins, shrimp, and premium herbs.', image: '/assets/jollof_rice.png', featured: true, badge: 'Chef Special' },
  { id: 5, name: 'Jollof spaghetti', category: 'Main Course', description: 'Aromatic spaghetti pasta cooked in a rich, smoky peppered tomato sauce.', image: '/assets/chef_plating.png' },
  { id: 6, name: 'CK special noodles', category: 'Main Course', description: 'Signature wok-fried noodles tossed with fresh veggies and seasoned chicken strips.', image: '/assets/burger_fries.png' },
  { id: 7, name: 'Moi-moi', category: 'Main Course', description: 'Steamed savory bean pudding enriched with eggs, fish, and authentic spices.', image: '/assets/tuwo_shinkafa.png' },
  { id: 8, name: 'Indomie & egg', category: 'Main Course', description: 'Quick-boiled noodles stir-fried with onions, fresh peppers, and served with a fried egg.', image: '/assets/burger_fries.png' },
  { id: 9, name: 'Danwake', category: 'Main Course', description: 'Traditional Hausa bean dumplings served with yaji spice, onions, and boiled egg.', image: '/assets/tuwo_shinkafa.png' },
  { id: 10, name: 'Chips & egg', category: 'Main Course', description: 'Crispy golden French fries served with a seasoned fried egg or omelette.', image: '/assets/burger_fries.png' },
  { id: 11, name: 'Chicken mandi', category: 'Main Course', description: 'Arabian-style spiced rice cooked under pressure, served with juicy roasted chicken.', image: '/assets/grilled_chicken.png', featured: true, badge: 'Signature' },
  { id: 12, name: 'Chicken biryani', category: 'Main Course', description: 'Fragrant basmati rice layered with highly spiced, tender chicken gravy.', image: '/assets/grilled_chicken.png' },

  // 2. PROTEIN & ADD-ONS
  { id: 13, name: 'Beef portion, sa/soka', category: 'Protein & Add-ons', description: 'Well-seasoned, tender fried beef portion.', image: '/assets/grilled_chicken.png' },
  { id: 14, name: 'Chicken in stew/kaza', category: 'Protein & Add-ons', description: 'Juicy chicken cooked in a savory peppered tomato sauce.', image: '/assets/grilled_chicken.png' },
  { id: 15, name: 'Fish portion/kifi', category: 'Protein & Add-ons', description: 'Crispy fried or peppered fish steak.', image: '/assets/grilled_chicken.png' },
  { id: 16, name: 'Assorted portion/kayan chiki', category: 'Protein & Add-ons', description: 'Delicious mixed cow offal in spicy pepper sauce.', image: '/assets/grilled_chicken.png' },
  { id: 17, name: 'Goat meat portion/Akuya', category: 'Protein & Add-ons', description: 'Succulent goat meat portion boiled and fried with local spices.', image: '/assets/grilled_chicken.png' },
  { id: 18, name: 'Plantains', category: 'Protein & Add-ons', description: 'Sweet, golden-fried ripe plantain slices (Dodo).', image: '/assets/tuwo_shinkafa.png' },
  { id: 19, name: 'Cole-slow salad', category: 'Protein & Add-ons', description: 'Creamy shredded cabbage, carrots, and sweet corn with premium mayo.', image: '/assets/tuwo_shinkafa.png' },
  { id: 20, name: 'Fried eggs/soyeyen kwoi', category: 'Protein & Add-ons', description: 'Two pan-fried eggs seasoned with fresh peppers.', image: '/assets/burger_fries.png' },
  { id: 21, name: 'Beans/wake', category: 'Protein & Add-ons', description: 'Soft-boiled local brown beans, cooked to perfection.', image: '/assets/tuwo_shinkafa.png' },
  { id: 22, name: 'Boiled egg/dafefen kwoi', category: 'Protein & Add-ons', description: 'Freshly hard-boiled egg.', image: '/assets/tuwo_shinkafa.png' },
  { id: 23, name: 'Chips', category: 'Protein & Add-ons', description: 'Portion of crispy golden french fries.', image: '/assets/burger_fries.png' },
  { id: 24, name: 'Crispy chicken & chips', category: 'Protein & Add-ons', description: 'Deep-fried golden crispy chicken served with french fries.', image: '/assets/burger_fries.png', featured: true, badge: 'Crispy & Juiciest' },

  // 3. SANDWICHES
  { id: 25, name: 'Beef shawarma', category: 'Sandwiches', description: 'Spiced beef strips wrapped with cabbage, sweet cream, and toasted flatbread.', image: '/assets/chicken_shawarma.png' },
  { id: 26, name: 'Chicken shawarma', category: 'Sandwiches', description: 'Flame-grilled chicken strips rolled in flatbread with creamy garlic sauce.', image: '/assets/chicken_shawarma.png', featured: true, badge: 'Popular' },
  { id: 27, name: 'Beef burger', category: 'Sandwiches', description: 'Juicy grilled beef patty with cheese, lettuce, tomatoes, and house burger sauce.', image: '/assets/burger_fries.png' },
  { id: 28, name: 'Chicken burger', category: 'Sandwiches', description: 'Crispy chicken breast fillet topped with melting cheese and fresh salad.', image: '/assets/burger_fries.png' },
  { id: 29, name: 'CK special U.S Burger', category: 'Sandwiches', description: 'Double beef patty, double cheese, caramelized onions, and secret chef dressing.', image: '/assets/burger_fries.png', featured: true, badge: 'House Special' },
  { id: 30, name: 'CK special shawarma', category: 'Sandwiches', description: 'Double sausage, extra chicken & beef, loaded with signature creamy coleslaw.', image: '/assets/chicken_shawarma.png' },

  // 4. SWALLOW
  { id: 31, name: 'Tuwon semo/semolina', category: 'Swallow', description: 'Smooth, firm swallow made from high-quality semolina wheat, served with soup.', image: '/assets/tuwo_shinkafa.png' },
  { id: 32, name: 'Tuwon shinkafa/Broken rice', category: 'Swallow', description: 'Classic soft swallow prepared with mashed local rice, a perfect pairing for soups.', image: '/assets/tuwo_shinkafa.png', featured: true, badge: 'Royal Choice' },
  { id: 33, name: 'Tuwon acha/fonio', category: 'Swallow', description: 'Nutritious swallow crafted from locally grown organic fonio grains.', image: '/assets/tuwo_shinkafa.png' },
  { id: 34, name: 'Tuwon amala/yam flour', category: 'Swallow', description: 'Smooth, dark swallow prepared from dried yam flour.', image: '/assets/tuwo_shinkafa.png' },
  { id: 35, name: 'Tuwon alkama/wheat', category: 'Swallow', description: 'Healthy swallow made from whole wheat flour.', image: '/assets/tuwo_shinkafa.png' },
  { id: 36, name: 'Tuwon sakwara/Pounded yam', category: 'Swallow', description: 'Traditional smooth and stretchy pounded yam.', image: '/assets/tuwo_shinkafa.png' },

  // 5. SOUPS
  { id: 37, name: 'gyada/groundnut soup', category: 'Soups', description: 'Rich Northern peanut-based soup, cooked with spinach, meat, and local spices.', image: '/assets/tuwo_shinkafa.png' },
  { id: 38, name: 'kubewa/okro soup', category: 'Soups', description: 'Fresh slimy okro soup loaded with fish and seasoning.', image: '/assets/tuwo_shinkafa.png' },
  { id: 39, name: 'Egusi/melon soup', category: 'Soups', description: 'Traditional ground melon seeds soup with leafy vegetables and red oil.', image: '/assets/tuwo_shinkafa.png' },
  { id: 40, name: 'Vegetable soup', category: 'Soups', description: 'Hearty green leafy vegetable soup cooked with fish and stock.', image: '/assets/tuwo_shinkafa.png' },
  { id: 41, name: 'Ogbono soup', category: 'Soups', description: 'Draw soup cooked with rich stock fish, meat, and traditional spices.', image: '/assets/tuwo_shinkafa.png' },

  // 6. PEPPERSOUPS
  { id: 42, name: 'Goat meat peppersoup', category: 'Peppersoups', description: 'Hot, spicy broth cooked with goat meat and local herbs.', image: '/assets/grilled_chicken.png', featured: true, spicy: true, badge: 'Fiery' },
  { id: 43, name: 'Cat-fish peppersoup', category: 'Peppersoups', description: 'Fresh catfish cooked in a fiery, herb-infused aromatic pepper broth.', image: '/assets/grilled_chicken.png' },
  { id: 44, name: 'Chicken peppersoup', category: 'Peppersoups', description: 'Spicy clear broth loaded with tender chicken pieces.', image: '/assets/grilled_chicken.png' },
  { id: 45, name: 'Assorted peppersoup', category: 'Peppersoups', description: 'Spicy cow tripe and offal soup cooked with peppersoup herbs.', image: '/assets/grilled_chicken.png' },
  { id: 46, name: 'Cow leg pepper soup', category: 'Peppersoups', description: 'Gelatinous cow leg chunks cooked in highly aromatic spicy peppersoup broth.', image: '/assets/grilled_chicken.png' },

  // 7. MOCKTAILS
  { id: 47, name: 'Blue moon', category: 'Mocktails', description: 'Refreshing blue curacao blend with lemon, mint, and soda water.', image: '/assets/chef_plating.png' },
  { id: 48, name: 'Cuddles on the beach', category: 'Mocktails', description: 'Sweet peach, cranberry, and orange juices served ice cold.', image: '/assets/chef_plating.png' },
  { id: 49, name: 'Chapman', category: 'Mocktails', description: 'Nigeria’s classic cocktail with Angostura bitters, Fanta, Sprite, and cucumber.', image: '/assets/chef_plating.png' },
  { id: 50, name: 'Pineapple sunrise', category: 'Mocktails', description: 'Zesty pineapple juice layer over sweet grenadine syrup.', image: '/assets/chef_plating.png' },
  { id: 51, name: 'Snow white', category: 'Mocktails', description: 'Creamy coconut milk mixed with fresh lime juice and soda.', image: '/assets/chef_plating.png' },
  { id: 52, name: 'Virgin pina colada', category: 'Mocktails', description: 'Creamy coconut cream and sweet pineapple juice blended with ice.', image: '/assets/chef_plating.png' },
  { id: 53, name: 'Zobo drink', category: 'Mocktails', description: 'Local hibiscus leaf brew sweetened with pineapple, ginger, and cloves.', image: '/assets/chef_plating.png' },

  // 8. MILKSHAKES SMOOTHIE & JUICES
  { id: 54, name: 'Vanilla milkshake', category: 'Milkshakes Smoothie & Juices', description: 'Thick, creamy blend of gourmet vanilla bean ice cream and milk.', image: '/assets/burger_fries.png' },
  { id: 55, name: 'Strawberry milkshake', category: 'Milkshakes Smoothie & Juices', description: 'Creamy milkshake blended with real strawberries and sweet syrup.', image: '/assets/burger_fries.png' },
  { id: 56, name: 'Chocolate milkshake', category: 'Milkshakes Smoothie & Juices', description: 'Rich chocolate ice cream blended with dark chocolate fudge syrup.', image: '/assets/burger_fries.png' },
  { id: 57, name: 'Banana milkshake', category: 'Milkshakes Smoothie & Juices', description: 'Creamy banana puree milkshake topped with whipped cream.', image: '/assets/burger_fries.png' },
  { id: 58, name: 'Date (dabino) milkshake', category: 'Milkshakes Smoothie & Juices', description: 'Local sweet date fruit (Dabino) blended into a healthy milk cream.', image: '/assets/burger_fries.png' },
  { id: 59, name: 'CK special milkshake', category: 'Milkshakes Smoothie & Juices', description: 'Oreo cookies, chocolate fudge, vanilla ice cream and whipped cream.', image: '/assets/burger_fries.png', featured: true, badge: 'Indulgent' },
  { id: 60, name: 'Smoothie', category: 'Milkshakes Smoothie & Juices', description: 'Healthy blended mix of seasonal fresh fruits.', image: '/assets/burger_fries.png' },
  { id: 61, name: 'Fresh fruit juice', category: 'Milkshakes Smoothie & Juices', description: '100% natural freshly squeezed orange or pineapple juice.', image: '/assets/burger_fries.png' },

  // 9. TEAS & PARFAIT
  { id: 62, name: 'Arabian tea', category: 'Teas & Parfait', description: 'Authentic spiced black tea infused with mint, cardamom, and saffron.', image: '/assets/chef_plating.png' },
  { id: 63, name: 'Jude special tea', category: 'Teas & Parfait', description: 'Aromatic green tea blended with fresh herbs and honey.', image: '/assets/chef_plating.png' },
  { id: 64, name: 'Fruit parfait', category: 'Teas & Parfait', description: 'Layers of creamy greek yoghurt, fresh strawberries, banana, and granola.', image: '/assets/chef_plating.png' },
  { id: 65, name: 'Cake parfait', category: 'Teas & Parfait', description: 'Rich cake crumbs layered with sweet vanilla whipped cream and cherries.', image: '/assets/chef_plating.png' }
];

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getWhatsAppLink = (itemName) => {
    const phone = '2348034364691';
    const text = encodeURIComponent(`Hello CK Restaurant & Fast Food, I would like to order: ${itemName}. Please confirm pricing and availability.`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  // Filter items based on active category and search query
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Separate featured items for current view to show in showcase card grid
  const featuredShowcase = useMemo(() => {
    return filteredItems.filter(item => item.featured);
  }, [filteredItems]);

  // Non-featured items (or all items if none are featured in this list) to show in the Menu Book list
  const menuBookList = useMemo(() => {
    return filteredItems;
  }, [filteredItems]);

  return (
    <section id="menu" className="relative py-24 bg-[#051020] overflow-hidden">
      {/* Decorative side glows */}
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-64 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <Logo className="w-16 h-16 opacity-90 animate-pulse" />
          </div>
          <span className="text-brand-orange text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Handcrafted Delicacies
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Entire Food Menu
          </h2>
          <div className="w-12 h-1 bg-brand-orange mx-auto mb-6" />
          <p className="text-gray-400 font-light">
            Savor our low-cost, high-quality recipe categories directly from the C.K Restaurant menu booklet.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 max-w-5xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSearchQuery('');
              }}
              className={`px-4 py-2.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 scale-105'
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-16 relative">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-brand-blue-dark/50 border border-white/10 focus:border-brand-orange rounded-2xl text-sm text-white focus:outline-none transition-colors"
          />
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3.5 text-xs text-brand-orange font-bold uppercase hover:underline"
            >
              Clear
            </button>
          )}
        </div>

        {/* Interactive Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Traditional Menu Book List */}
          <div className={`col-span-12 ${featuredShowcase.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} glass-panel p-6 md:p-10 rounded-3xl`}>
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-orange" />
                {activeCategory} Specials
              </h3>
              <span className="text-xs text-gray-500 font-light">
                {menuBookList.length} items found
              </span>
            </div>

            {menuBookList.length === 0 ? (
              <div className="py-16 text-center">
                <AlertCircle className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">No items match your search or filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {menuBookList.map((item) => (
                  <div key={item.id} className="group flex flex-col justify-between py-3 border-b border-white/5 hover:border-brand-orange/20 transition-colors text-left">
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="font-serif text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                        {item.name}
                        {item.spicy && <span className="ml-2 text-xs text-orange-500">🌶️</span>}
                      </h4>
                      <div className="flex-grow border-b border-dotted border-white/10 mx-2 group-hover:border-brand-orange/30 transition-colors" />
                    </div>
                    <div className="flex justify-between items-center gap-4 mt-2">
                      <p className="text-xs text-gray-400 font-light leading-relaxed text-left flex-grow max-w-[85%]">
                        {item.description}
                      </p>
                      <a
                        href={getWhatsAppLink(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-3 rounded-lg bg-white/5 hover:bg-brand-orange text-white text-[9px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1 active:scale-95 shadow-md shadow-black/10 shrink-0"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Order
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Featured Card Showcase (Only shown if active list contains featured items) */}
          {featuredShowcase.length > 0 && (
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide text-left mb-2 flex items-center gap-2 pl-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                Featured Highlights
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {featuredShowcase.map((item) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    key={`feat-${item.id}`}
                    className="group relative rounded-2xl overflow-hidden glass-panel flex flex-col h-full hover:border-brand-orange/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/5 hover:-translate-y-1.5"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <span className="px-3 py-1 rounded-full bg-brand-orange text-[9px] font-bold text-white uppercase tracking-wider shadow-md">
                          {item.badge || 'Chef Special'}
                        </span>
                        {item.spicy && (
                          <span className="w-fit px-3 py-1 rounded-full bg-orange-600 text-[9px] font-bold text-white uppercase tracking-wider shadow-md">
                            🌶️ Extra Spicy
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col flex-grow text-left">
                      <span className="text-[9px] uppercase tracking-widest text-brand-orange font-semibold mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs font-light leading-relaxed mb-4 flex-grow text-left">
                        {item.description}
                      </p>

                      {/* CTA button */}
                      <a
                        href={getWhatsAppLink(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-auto py-2.5 rounded-xl bg-white/5 hover:bg-brand-orange border border-white/10 hover:border-brand-orange text-white hover:text-white font-bold tracking-wider uppercase text-[9px] flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Order via WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* View Entire Menu note */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm">
            Looking for something else? We serve a wide array of side meals, snacks, soft drinks, and custom orders.{' '}
            <a 
              href="https://wa.me/2348034364691?text=Hello%20CK%20Restaurant,%20please%20send%20me%20your%20full%20digital%20menu%20catalog." 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange font-semibold inline-flex items-center gap-1 hover:underline ml-1"
            >
              Request Full Digital Menu
              <span className="text-brand-orange">&rarr;</span>
            </a>
          </p>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
