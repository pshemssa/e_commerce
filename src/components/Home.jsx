import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './Hero';
import ProductCard from './ProductCard';
import { products } from './products';

function HomePage({ onAddToCart }) {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <HeroSection onShopNow={handleShopNow} />

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-slate-800 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleShopNow}
            className="inline-flex items-center gap-2 bg-pink-400 text-white px-6 py-3 rounded-full font-poppins font-semibold hover:bg-coral-500 focus:ring-2 focus:ring-pink-200 focus:outline-none transition-all duration-300 transform hover:scale-105"
            aria-label="View all products"
          >
            View All Products
          </button>
        </div>
      </section>

      <section className="bg-cream-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-slate-800 mb-6 text-center">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Quality Products',
                desc: 'Curated selection of premium items',
              },
              {
                title: 'Fast Shipping',
                desc: 'Quick delivery to your doorstep',
              },
              {
                title: '24/7 Support',
                desc: 'Always here to help you',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-100 hover:border-pink-200 transition-all duration-300"
              >
                <h4 className="text-lg font-poppins font-semibold text-slate-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;