import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Home';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/About';
import ContactPage from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
    alert(`${product.name} has been added to your cart!`);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />
        )}
        {currentPage === 'products' && (
          <ProductsPage onAddToCart={handleAddToCart} />
        )}
        {currentPage === 'about' && (
          <AboutPage />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;