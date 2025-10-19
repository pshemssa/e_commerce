import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate(); // For React Router navigation

  const handleShopNow = () => {
    navigate('/products'); // Navigate to products page
  };

  return (
    <section className=" pt-0 bg-gradient-to-r from-pink-400 to-mint-300 text-slate-800 md:py-20 ">
      <div>
        <img
          src="/images/Background.png"
          alt="TechStyle Store Hero"
          className=" mx-auto w-60"
        />
      </div>
      
      <div className=" mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
          Welcome to <span className="text-coral-500"> 𝓣𝓔𝓒Ħ𝕊tyl𝕖 𝕊tor𝕖</span>
        </h1>
        <p className="mt-4 text-lg py-5 md:text-xl font-poppins text-slate-700 opacity-90 max-w-2xl mx-auto">
          Discover the latest in tech, fashion, and accessories
        </p>
      
        <div >
          <button
            onClick={handleShopNow}
            className="inline-flex items-center gap-2 bg-coral-500 text-white px-6 py-5 rounded-full font-poppins font-semibold hover:bg-coral-600 focus:ring-2 focus:ring-pink-200 focus:outline-none transition-all duration-300 transform hover:scale-105"
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