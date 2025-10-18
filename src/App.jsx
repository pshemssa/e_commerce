import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Home';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/About';
import ContactPage from './components/Contact';

function App() {
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/products"
              element={<ProductsPage onAddToCart={handleAddToCart} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;