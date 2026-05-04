import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    subject: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyText = `Customer Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country}
Phone: ${formData.phone}

Requirement Details:
${formData.details}`;
    const mailtoLink = `mailto:ibrahimrasithbusiness@gmail.com?subject=Inquiry: ${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex-1 w-full flex items-center justify-center py-20 px-6 bg-surface-container-lowest">
      <div className="max-w-2xl w-full bg-white dark:bg-surface-container-low p-10 rounded-2xl shadow-xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold mb-3">Start Your Journey</h1>
          <p className="text-secondary text-sm">Please provide your details below and we will get back to you shortly.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Customer Name</label>
              <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
              <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="country">Country</label>
              <input required type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="United States" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
              <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="+1 234 567 890" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="subject">Requirement Subject</label>
            <input required type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="Project inquiry" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="details">Requirement Details</label>
            <textarea required id="details" name="details" value={formData.details} onChange={handleChange} rows="5" className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Please describe your requirements in detail..."></textarea>
          </div>
          
          <button type="submit" className="w-full bg-primary text-on-primary-fixed py-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
