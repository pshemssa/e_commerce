import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail />
              <div>
                <div className="font-medium">Email</div>
                <div>support@techstylestore.com</div>
                <div>sales@techstylestore.com</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone />
              <div>
                <div className="font-medium">Phone</div>
                <div>+250 788 123 456</div>
                <div>+250 788 654 321</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin />
              <div>
                <div className="font-medium">Address</div>
                <div>KG 123 St, Kigali</div>
                <div>Rwanda, East Africa</div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input name="name" value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border rounded px-3 py-2 h-32" />
            </div>
            <div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;