import React from 'react';
import { MessageSquare, ArrowUp, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050202] text-gray-400 py-16 overflow-hidden border-t border-white/5">
      {/* Glow detail */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand details */}
          <div className="md:col-span-2 text-left">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
              <span className="font-serif text-3xl font-bold tracking-tight text-white transition-all group-hover:text-brand-red">
                CK<span className="text-brand-red group-hover:text-white">.</span>
              </span>
              <div className="flex flex-col border-l border-white/20 pl-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-400">
                  Restaurant
                </span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-brand-red font-medium">
                  & Fast Food
                </span>
              </div>
            </a>

            <p className="text-sm font-light leading-relaxed max-w-sm mb-6">
              Experience the finest gourmet fast food and authentic Northern recipes in Jos, Plateau State. Unforgettable taste, luxurious comfort, and elite standards.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.885.056 1 .046 1.672.213 2.128.39.598.232 1.061.54 1.516.995.455.455.763.918.995 1.516.177.456.344 1.128.39 2.128.048 1.101.056 1.455.056 3.885 0 2.43-.008 2.784-.056 3.885-.046 1-.213 1.672-.39 2.128-.232.598-.54 1.061-.995 1.516-.455.455-.918.763-1.516.995-.456.177-1.128.344-2.128.39-1.101.048-1.455.056-3.885.056-2.43 0-2.784-.008-3.885-.056-1-.046-1.672-.213-2.128-.39a3.864 3.864 0 01-1.516-.995 3.864 3.864 0 01-.995-1.516c-.177-.456-.344-1.128-.39-2.128C2.008 14.784 2 14.43 2 12c0-2.43.008-2.784.056-3.885.046-1 .213-1.672.39-2.128c.232-.598.54-1.061.995-1.516a3.864 3.864 0 011.516-.995c.456-.177 1.128-.344 2.128-.39C9.216 2.008 9.57 2 12 2zm0 1.8c-2.43 0-2.717.01-3.664.053-.94.043-1.4.2-1.74.333-.45.175-.77.384-1.11.725-.34.34-.55.66-.725 1.11-.133.34-.29 1-.333 1.74-.043.947-.053 1.234-.053 3.664s.01 2.717.053 3.664c.043.94.2 1.4.333 1.74.175.45.384.77.725 1.11.34.34.66.55 1.11.725.34.133 1 .29 1.74.333.947.043 1.234.053 3.664.053s2.717-.01 3.664-.053c.94-.043 1.4-.2 1.74-.333.45-.175.77-.384 1.11-.725.34-.34.55-.66.725-1.11.133-.34.29-1 .333-1.74.043-.947.053-1.234.053-3.664s-.01-2.717-.053-3.664c-.043-.94-.2-1.4-.333-1.74a3.056 3.056 0 00-.725-1.11 3.056 3.056 0 00-1.11-.725c-.34-.133-1-.29-1.74-.333-.947-.043-1.234-.053-3.664-.053zm0 3.6c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 7.2c-1.49 0-2.7-1.21-2.7-2.7s1.21-2.7 2.7-2.7 2.7 1.21 2.7 2.7-1.21 2.7-2.7 2.7zm5.55-7.875c0 .54-.438.975-.975.975s-.975-.438-.975-.975.438-.975.975-.975.975.438.975.975z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://wa.me/2348034364691"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-all">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white hover:underline transition-all">Signature Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-all">Our Story</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white hover:underline transition-all">Experience Gallery</a>
              </li>
              <li>
                <a href="#digital-visibility" className="hover:text-white hover:underline transition-all">Table Reservations</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="text-left">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Direct Contact
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>
                  No. 29/4 Bauchi Road,<br />
                  Yan Taya Junction, Jos,<br />
                  Plateau State, Nigeria.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <div className="flex flex-col font-medium text-white">
                  <a href="tel:+2348034364691" className="hover:text-brand-accent transition-colors">+234 803 436 4691</a>
                  <a href="tel:+2349025536790" className="hover:text-brand-accent transition-colors">+234 902 553 6790</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} CK Restaurant & Fast Food. All rights reserved.
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-panel text-gray-400 hover:text-white hover:border-brand-red transition-all cursor-pointer shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          {/* Developer Credit */}
          <p className="text-xs text-gray-500 font-light flex items-center gap-1">
            Concept Website Designed by{' '}
            <span className="text-gray-300 font-medium hover:text-brand-accent transition-colors flex items-center gap-0.5">
              GizoGizo Technologies
              {/* <Heart className="w-3 h-3 text-brand-red fill-brand-red inline" /> */}
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
