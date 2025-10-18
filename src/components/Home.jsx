import React from 'react';
import HeroSection from './Hero';
import ProductCard from './ProductCard';
import { products } from './products';

function HomePage({ onNavigate, onAddToCart }) {
  const handleShopNow = () => onNavigate && onNavigate('products');

  return (
    <div>
      <HeroSection onShopNow={handleShopNow} />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold">Quality Products</h4>
              <p className="text-sm mt-2">Curated selection of premium items</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold">Fast Shipping</h4>
              <p className="text-sm mt-2">Quick delivery to your doorstep</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-sm mt-2">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

