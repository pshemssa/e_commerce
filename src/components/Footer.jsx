import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 ">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">TechStyle Store</h3>
            <p className="mt-2 text-sm">Your one-stop shop for electronics, fashion, and accessories.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Shipping Info</li>
              <li>Returns</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <ul className="flex flex-col gap-1 text-sm">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className=" text-center py-4 text-sm ">
         © 2025 TechStyle Store. All rights reserved.
        </div>
      </footer>
  );
}

export default Footer;
