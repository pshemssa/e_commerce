import React from 'react';
import { ShoppingCart } from 'lucide-react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col shadow-md hover:shadow-lg hover:border-pink-200 transition-all duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
        loading="lazy"
      />
      <div className="text-xs font-poppins text-slate-700">{product.category}</div>
      <h3 className="text-lg font-montserrat font-semibold text-slate-800 mt-1 line-clamp-2">
        {product.name}
      </h3>
      <div className="mt-2 flex items-center justify-between flex-grow">
        <div className="text-coral-500 font-bold font-poppins">${product.price.toFixed(2)}</div>
        <button
          onClick={() => onAddToCart(product)}
          className="inline-flex items-center gap-2 bg-pink-400 text-white px-3 py-1.5 rounded-lg font-poppins text-sm font-medium hover:bg-coral-500 focus:ring-2 focus:ring-pink-200 focus:outline-none transition-all duration-200"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
