"use client";  // Required for Next.js App Router

import Image from 'next/image';
import { motion } from "framer-motion";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
};

const Two = () => {
    return (
        <div className="space-y-10 px-4 md:px-8">
            {/* First Card */}
            <motion.div 
                className="card flex flex-col lg:flex-row bg-base-300 shadow-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={fadeInFromLeft} className="w-full lg:w-1/2">
                    <Image 
                        src="/assets/images/about_us/root.jpg"
                        alt="Example Image"
                        width={500} 
                        height={50} 
                        className="w-full h-full object-cover"
                        priority 
                    />
                </motion.div>
                <motion.div className="card-body w-full lg:w-1/2" variants={fadeInFromRight}>
                    <h2 className="card-title text-lg md:text-2xl">Résidentiel</h2>
                    <p>Installations Electriques.</p>
                    <p>Mise en lumières</p>
                    <p>Intégration de systèmes connectés.</p>
                    <p>Réception TVSAT Starlink.</p>
                    <p>Intrusion.</p>
                    <p>Incendie</p>
                </motion.div>
            </motion.div>

            {/* Second Card */}
            <motion.div 
                className="card flex flex-col lg:flex-row-reverse bg-base-100 shadow-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={fadeInFromRight} className="w-full lg:w-1/2">
                    <Image 
                        src="/assets/images/about_us/root2.jpg"
                        alt="Example Image"
                        width={400} 
                        height={200} 
                        className="w-full h-full object-cover"
                        priority 
                    />
                </motion.div>
                <motion.div className="card-body w-full lg:w-1/2" variants={fadeInFromLeft}>
                    <h2 className="card-title text-lg md:text-2xl">Tertiaire</h2>
                    <p>Installations Electriques</p>
                    <p>Incendie</p>
                    <p>Intrusion</p>
                    <p>Câblage réseaux</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Two;
