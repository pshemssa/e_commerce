import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          About TechStyle Store
        </h1>

        {/* Intro Paragraphs */}
        <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Welcome to <span className="font-semibold text-pink-400">TechStyle Store</span>, your premier destination for cutting-edge electronics, trendy fashion, and stylish accessories. Founded in 2025, we’re committed to bringing you the best products at competitive prices.
          </p>
          <p>
            Our mission is to make quality products accessible to everyone while providing exceptional customer service. We carefully curate our collection to ensure every item meets our high standards of style and functionality.
          </p>
          <p>
            With thousands of satisfied customers worldwide, we’re proud to be your trusted shopping partner. Join our community and experience the <span className="text-coral-500 font-medium">TechStyle difference</span>!
          </p>
        </div>

        {/* Why Choose Us Section */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Premium Quality',
                desc: 'Every product is carefully selected and tested to meet our stringent quality standards.',
              },
              {
                title: 'Best Prices',
                desc: 'We work directly with manufacturers to bring you competitive prices without sacrificing quality.',
              },
              {
                title: 'Fast Delivery',
                desc: 'Our efficient logistics network ensures your orders arrive quickly and safely.',
              },
              {
                title: 'Customer First',
                desc: 'Our dedicated support team is available 24/7 to assist with any questions or concerns.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-pink-200"
              >
                <h4 className="text-lg font-semibold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;