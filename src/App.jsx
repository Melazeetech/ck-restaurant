import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';
import About from './components/About';
import Gallery from './components/Gallery';
import DigitalVisibility from './components/DigitalVisibility';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#080303] text-gray-100 overflow-x-hidden antialiased">
      {/* Navbar header */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Featured Menu Section */}
        <FeaturedMenu />

        {/* 3. About Section */}
        <About />

        {/* 4. Experience Gallery */}
        <Gallery />

        {/* 5. Digital Visibility Section (Booking, Delivery, Socials) */}
        <DigitalVisibility />

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Location Section */}
        <Location />
      </main>

      {/* 8. Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
