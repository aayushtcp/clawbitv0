'use client';
import React, { useState } from 'react';

const FooterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Project inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    window.location.href = `mailto:clawbitlabs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="w-full max-w-120 mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Have a project <span className="text-gray-400">in mind?</span>
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
            How should we call you? *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-5 py-3.5 bg-gray-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
          />
        </div>
        {/* Email Field */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full px-5 py-3.5 bg-gray-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
          />
        </div>
        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={3}
            className="w-full px-5 py-3.5 bg-gray-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all resize-none"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className=" cursor-pointer w-full bg-black text-white font-semibold py-4 rounded-full hover:bg-gray-800 transition-colors duration-200 text-base"
        >
          Send Message
        </button>
        {/* Privacy Policy Text */}
        <p className="mt-5 text-sm text-gray-600">
          By submitting, you agree to our{' '}
          <a href="#" className="text-black font-medium hover:underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-black font-medium hover:underline">
            Cookie Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default FooterForm;
