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

const jobs = () => {
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
    <div id="one" className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-base-200 p-6">
      {/* Left Section (Address + Map) */}
      <motion.div 
        className="text-center lg:text-left flex-1 p-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromLeft}
      >
   
        <div id="one" className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-base-200 p-6">
      {/* Left Section (Address + Contact Info) */}
      <div className="text-center lg:text-left flex-1 p-6">
        <h1 className="text-3xl font-bold text-red-500">Nos Coordonnées</h1>

        <div className="flex items-center gap-2 py-2">
          <FaFacebookF className="text-blue-600 text-xl" />
          <p className='text-red-500'><a href="https://www.facebook.com/profile.php?id=61564253535935&sk" target="_blank" rel="noopener noreferrer">My Facebook</a></p>
        </div>

        <div className="flex items-center gap-2 py-2">
          <FaPhone className="text-green-600 text-xl" />
          <p className='text-red-500'>+33 6 12 34 56 78</p> {/* Replace with actual phone number */}
        </div>

        <div className="flex items-center gap-2 py-2">
          <MdEmail className="text-red-500 text-xl" />
          <p className='text-red-500'>example@email.com</p> {/* Replace with actual email */}
        </div>

        <p className='text-red-500' >8 rue claude hugard, Cluses 74300</p>
        <h1 className='mt-10 mb-5 text-red-500'>Map</h1>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.4662133575303!2d6.577558311541068!3d46.05825149348699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c072007f91b9b%3A0x87942d499311d476!2s8%20Rue%20Claude%20Hugard%2C%2074300%20Cluses%2C%20France!5e1!3m2!1sen!2sbd!4v1738468850764!5m2!1sen!2sbd"
            width="600"
            height="450"
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
        id="two" 
        className="flex-1 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInFromRight}
      >
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
          <form onSubmit={handleSubmit} className="card-body">
            <input type="hidden" name="access_key" value="7ffe071e-7c2b-4dae-9372-bc157b60eca0" />

            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                required
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                required
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="subject">
                <span className="label-text">Subject</span>
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Enter the subject"
                className="input input-bordered border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                required
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="message">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                className="textarea textarea-bordered border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default jobs;
