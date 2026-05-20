import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, MessageSquare, Calendar, Users, Clock, Send, CheckCircle, Navigation, Award, Share2 } from 'lucide-react';

export default function DigitalVisibility() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '',
    time: '18:00',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API database save
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  };

  const getWhatsAppReservationText = () => {
    const text = `Hello CK Restaurant, I would like to confirm my table reservation:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nGuests: ${formData.guests}\nDate: ${formData.date}\nTime: ${formData.time}\n\nPlease confirm availability. Thank you!`;
    return `https://wa.me/2348034364691?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="digital-visibility" className="relative py-24 bg-black overflow-hidden">
      {/* Visual backgrounds */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Digital Connection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            How Customers Find Us Online
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto mb-6" />
          <p className="text-gray-400 font-light">
            Stay connected with CK Restaurant. Place instant orders, reserve tables, track locations, or see what is trending in our kitchen.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Interactive Table Reservation Form */}
          <div id="reservation" className="lg:col-span-5 glass-panel p-8 rounded-3xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-brand-accent text-[10px] uppercase font-bold tracking-widest block mb-1">
              Reservations
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Reserve A Dining Table
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Hadiza Bello"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-red rounded-xl text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +234 803 436 4691"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-red rounded-xl text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Guests count</label>
                  <div className="relative">
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-red rounded-xl text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option className="bg-[#080303]">1 Guest</option>
                      <option className="bg-[#080303]">2 Guests</option>
                      <option className="bg-[#080303]">4 Guests</option>
                      <option className="bg-[#080303]">6+ Guests</option>
                    </select>
                    <Users className="absolute right-4 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Time Slot</label>
                  <div className="relative">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-red rounded-xl text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option className="bg-[#080303]" value="12:00">12:00 PM (Lunch)</option>
                      <option className="bg-[#080303]" value="14:00">02:00 PM</option>
                      <option className="bg-[#080303]" value="16:00">04:00 PM</option>
                      <option className="bg-[#080303]" value="18:00">06:00 PM (Dinner)</option>
                      <option className="bg-[#080303]" value="20:00">08:00 PM</option>
                      <option className="bg-[#080303]" value="21:30">09:30 PM</option>
                    </select>
                    <Clock className="absolute right-4 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Select Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-red rounded-xl text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-4 rounded-xl bg-brand-red hover:bg-brand-red-dark disabled:bg-brand-red/50 text-white font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-2 border border-brand-red shadow-lg shadow-brand-red/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Processing Booking...
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    Submit Reservation
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Column 2: Digital Visibility Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            
            {/* Map Mockup Card */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col h-full justify-between">
              <div className="relative rounded-xl overflow-hidden h-40 bg-gray-900 border border-white/5">
                <img
                  src="/assets/jos_map.png"
                  alt="Map Mockup Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 bg-black/65 backdrop-blur-md border border-white/5 text-[9px] font-bold text-white px-2.5 py-1 rounded flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-brand-red" />
                  Bauchi Road, Jos
                </span>
              </div>
              <div className="text-left mt-4">
                <h4 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-brand-accent" />
                  Navigation Map
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                  Find our physical venue easily via coordinates. Located at the prominent Yan Taya Junction.
                </p>
                <a
                  href="https://maps.google.com/?q=No.+29/4+Bauchi+Road,+Yan+Taya+Junction,+Jos+Plateau+State,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest text-brand-accent uppercase hover:underline"
                >
                  Get GPS Directions
                  <Send className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp Quick Order Card */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between text-left">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">WhatsApp Ordering</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                  Skip the website queues! Chat directly with our front desk riders to select dishes, specify address, and check billing.
                </p>
                <a
                  href="https://wa.me/2348034364691?text=Hello%20CK%20Restaurant,%20I'd%20like%20to%20order%20food%20for%20delivery."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-green-600/15"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Local Delivery Info */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-6">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">Fast Jos Delivery</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                  Warm meals delivered to your doorstep at Bauchi Road, Terminus, Farin Gada, Federal Lowcost, Anglo Jos, and Rayfield areas.
                </p>
                <div className="text-[10px] font-bold text-brand-accent tracking-widest uppercase flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-accent" />
                  Average Delivery: 30-45 Mins
                </div>
              </div>
            </div>

            {/* Social Media handles */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
                <Share2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">Social Discovery</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                  Follow us for behind-the-scenes plating, recipes, promotions, and announcements on social channels.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-medium text-gray-300">
                    IG: @CKRestaurantJos
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-medium text-gray-300">
                    FB: CK Restaurant
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full glass-panel p-8 rounded-3xl border border-brand-red/30 shadow-2xl text-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-accent mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Reservation Submitted!
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                Your booking details have been registered. To guarantee your seat immediately, please click the button below to send details to our WhatsApp dispatch desk.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={getWhatsAppReservationText()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-2 border border-brand-red shadow-lg shadow-brand-red/25 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirm via WhatsApp
                </a>
                <button
                  onClick={() => {
                    setShowSuccess(false);
                    setFormData({ name: '', phone: '', guests: '2 Guests', date: '', time: '18:00' });
                  }}
                  className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-semibold text-xs transition-colors"
                >
                  Close & Go Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
