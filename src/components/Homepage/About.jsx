"use client"; 

import React from "react";
import { motion } from "framer-motion";
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
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className=" px-4 py-10 bg-slate-100">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center min-h-screen bg-base-100">
        {/* Left Section - Contact Info & Map */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInFromLeft}
        >
          <h1 className="text-3xl font-bold text-red-500">Nos Coordonnées</h1>

          <div className="flex items-center gap-2 py-2">
            <FaFacebookF className="text-blue-600 text-xl" />
            <p className="text-red-500">
              <a
                href="https://www.facebook.com/profile.php?id=61564253535935&sk"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Facebook
              </a>
            </p>
          </div>

          <div className="flex items-center gap-2 py-2">
            <FaPhone className="text-green-600 text-xl" />
            <p className="text-red-500">+33 6 51 62 23 50</p>
          </div>

          <div className="flex items-center gap-2 py-2">
            <MdEmail className=" text-xl" />
            <p className="text-red-500">ls_elec@yahoo.com</p>
          </div>

          <p className="text-red-500">8 rue claude hugard, Cluses 74300</p>

          <h1 className="mt-10 mb-5 text-red-500">Map</h1>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.4662133575303!2d6.577558311541068!3d46.05825149348699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c072007f91b9b%3A0x87942d499311d476!2s8%20Rue%20Claude%20Hugard%2C%2074300%20Cluses%2C%20France!5e1!3m2!1sen!2sbd!4v1738468850764!5m2!1sen!2sbd"
              className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="flex justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInFromRight}
        >
          <div className="card bg-base-100 w-full max-w-md shadow-2xl p-6">
          <h1 className="text-amber-800 text-2xl  whitespace-nowrap mt-4 m-0 p-4 inline-block bg-white/50 rounded-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]italic mb-5">Contactez - Nous</h1>

            <form onSubmit={handleSubmit} className="card-body">
              <input
                type="hidden"
                name="access_key"
                value="7ffe071e-7c2b-4dae-9372-bc157b60eca0"
              />

              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Nom</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered text-yellow-900  w-full p-2 rounded-lg"
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
                  className="input input-bordered text-yellow-900 w-full p-2 rounded-lg"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="subject">
                  <span className="label-text">Objet</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Enter the subject"
                  className="input input-bordered text-yellow-900  w-full p-2 rounded-lg"
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
                  className="textarea text-yellow-900  textarea-bordered w-full p-2 rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary w-full">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
