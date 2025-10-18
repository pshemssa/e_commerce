import React from 'react';
import { ShoppingCart } from 'lucide-react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <div className="text-xs text-gray-500">{product.category}</div>
      <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
      <div className="mt-2 flex items-center justify-between">
        <div className="text-blue-600 font-bold">${product.price}</div>
        <button
          onClick={() => onAddToCart && onAddToCart(product)}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <ShoppingCart size={16} />
          <span className="text-sm">Add</span>
        </button>
      </div>
    </div>
    );
  }

  export default ProductCard;