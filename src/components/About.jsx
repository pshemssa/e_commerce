import React from 'react';

function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About TechStyle Store</h1>
      <p className="mb-6">
        Welcome to TechStyle Store, your premier destination for cutting-edge electronics,
        trendy fashion, and stylish accessories. Founded in 2025, we've been committed to
        bringing you the best products at competitive prices.
      </p>

      <p className="mb-6">
        Our mission is to make quality products accessible to everyone while providing
        exceptional customer service. We carefully curate our collection to ensure every
        item meets our high standards of quality and style.
      </p>

      <p className="mb-6">
        With thousands of satisfied customers worldwide, we're proud to be your trusted
        shopping partner. Join our community and experience the difference!
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">Premium Quality</h4>
            <p className="text-sm mt-2">Every product is carefully selected and tested to ensure it meets our stringent quality standards. We never compromise on quality.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">Best Prices</h4>
            <p className="text-sm mt-2">We work directly with manufacturers to bring you competitive prices without sacrificing quality.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">Fast Delivery</h4>
            <p className="text-sm mt-2">With our efficient logistics network, your orders reach you quickly and safely.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">Customer First</h4>
            <p className="text-sm mt-2">Our dedicated support team is available 24/7 to assist you with any questions or concerns.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;



