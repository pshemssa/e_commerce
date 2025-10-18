import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from './products';

function ProductsPage({ onAddToCart }) {
  const categories = ['All', 'Electronics', 'Fashion', 'Accessories'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream-50 px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-slate-800 mb-8 text-center">
          Our Products
        </h2>
        <p className="text-sm font-poppins text-slate-700 text-center mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} found
        </p>

        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-poppins font-medium text-sm transition-all duration-200 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-pink-400 text-white'
                  : 'bg-gray-100 text-slate-800 hover:bg-mint-300 hover:text-slate-800'
              }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-slate-700 font-poppins text-base py-8">
            No products found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;