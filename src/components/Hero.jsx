import React from 'react';
import { ChevronRight } from 'lucide-react';

function HeroSection({ onShopNow }) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Welcome to TechStyle Store</h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">Discover the latest in tech, fashion, and accessories</p>
        <div className="mt-8">
          <button
            onClick={() => onShopNow && onShopNow()}
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:opacity-95"
          >
            Shop Now
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;