import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({}); // Added for basic form validation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted with data:', formData);
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructured for brevity
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for field when user types
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="min-h-screen bg-cream-50 px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-slate-800 mb-8 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold text-slate-800 mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-6 text-slate-700">
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-pink-400" />
                <div>
                  <div className="font-medium text-slate-800">Email</div>
                  <div className="text-sm hover:text-coral-500 transition-colors duration-200">
                    <a href="mailto:support@techstylestore.com">support@techstylestore.com</a>
                  </div>
                  <div className="text-sm hover:text-coral-500 transition-colors duration-200">
                    <a href="mailto:sales@techstylestore.com">sales@techstylestore.com</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-pink-400" />
                <div>
                  <div className="font-medium text-slate-800">Phone</div>
                  <div className="text-sm">+250 788 123 456</div>
                  <div className="text-sm">+250 788 654 321</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-pink-400" />
                <div>
                  <div className="font-medium text-slate-800">Address</div>
                  <div className="text-sm">KG 123 St, Kigali</div>
                  <div className="text-sm">Rwanda, East Africa</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold text-slate-800 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border border-gray-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 bg-white text-slate-800 placeholder-gray-400 transition-all duration-200 ${
                    errors.name ? 'border-coral-500' : ''
                  }`}
                  placeholder="Your name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-coral-500 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border border-gray-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 bg-white text-slate-800 placeholder-gray-400 transition-all duration-200 ${
                    errors.email ? 'border-coral-500' : ''
                  }`}
                  placeholder="Your email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-coral-500 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border border-gray-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 bg-white text-slate-800 placeholder-gray-400 transition-all duration-200 h-32 resize-y ${
                    errors.message ? 'border-coral-500' : ''
                  }`}
                  placeholder="Your message"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-coral-500 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-pink-400 text-white px-6 py-2 rounded-lg font-medium hover:bg-coral-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;