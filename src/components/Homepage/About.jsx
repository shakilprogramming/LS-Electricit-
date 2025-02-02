"use client"; // Required for Next.js App Router

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const About = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    if (result.success) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div id="about" className="min-h-screen bg-base-200 py-10 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Contact Us</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section (Contact Info + Map) */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInFromLeft}
          >
            <div className="bg-base-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaFacebookF className="text-blue-600 text-xl" />
                  <a
                    href="https://www.facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    My Facebook
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-600 text-xl" />
                  <p>+33 6 12 34 56 78</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdEmail className="text-red-500 text-xl" />
                  <p>example@email.com</p>
                </div>

                <p className="text-gray-600">8 rue claude hugard, Cluses 74300</p>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Map</h2>
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.4662133575303!2d6.577558311541068!3d46.05825149348699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c072007f91b9b%3A0x87942d499311d476!2s8%20Rue%20Claude%20Hugard%2C%2074300%20Cluses%2C%20France!5e1!3m2!1sen!2sbd!4v1738468850764!5m2!1sen!2sbd"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section (Contact Form) */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInFromRight}
          >
            <div className="bg-base-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="7ffe071e-7c2b-4dae-9372-bc157b60eca0" />

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="Enter the subject"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;