// app/about/page.js

import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to <span className="font-semibold text-indigo-600">Coded Cotton</span>, where fashion meets creativity! We are passionate about providing high-quality, unique T-shirts that allow you to express your individuality.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our journey began with a simple idea: to create a platform where everyone can design their own T-shirts. Whether you're looking for a custom design or something from our curated collection, we've got you covered.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          At Coded Cotton, we believe in sustainability and quality. Our T-shirts are made from premium materials, ensuring comfort and durability. We also strive to make a positive impact by using eco-friendly practices in our production process.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for choosing Coded Cotton. We're excited to be a part of your style journey and look forward to helping you create something truly unique!
        </p>
        <div className="mt-8 text-center">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;