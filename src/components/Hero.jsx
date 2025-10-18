import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HeroSection({ onShopNow }) {
  const navigate = useNavigate(); // For React Router navigation

  const handleShopNow = () => {
    if (onShopNow) onShopNow(); // Call optional prop if provided
    navigate('/products'); // Navigate to products page
  };

  return (
    <section className="bg-gradient-to-r from-pink-400 to-mint-300 text-slate-800 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold tracking-tight">
          Welcome to <span className="text-coral-500">TechStyle Store</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl font-poppins text-slate-700 opacity-90 max-w-2xl mx-auto">
          Discover the latest in tech, fashion, and accessories
        </p>
        <div className="mt-8">
          <button
            onClick={handleShopNow}
            className="inline-flex items-center gap-2 bg-coral-500 text-white px-6 py-3 rounded-full font-poppins font-semibold hover:bg-coral-600 focus:ring-2 focus:ring-pink-200 focus:outline-none transition-all duration-300 transform hover:scale-105"
            aria-label="Shop now and explore products"
          >
            Shop Now
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;