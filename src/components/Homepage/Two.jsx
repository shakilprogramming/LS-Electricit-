"use client"; // Required for Next.js App Router
 // Adjust the path as needed
import Image from 'next/image';
import { motion } from "framer-motion";
import { useTheme } from '@/components/shared/context/ThemeContext';


const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
};

const Two = () => {
    const { theme } = useTheme(); // Access the theme from the context

    return (
        <div className={`space-y-10 px-4 md:px-8 lg:px-16 ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
            {/* First Card */}
            <motion.div 
                className={`card flex flex-col lg:flex-row ${theme === "light" ? "bg-white" : "bg-gray-800"}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={fadeInFromLeft} className="w-full lg:w-1/2">
                    <Image 
                        src="/assets/images/about_us/root.jpg"
                        alt="Example Image"
                        width={600} 
                        height={400} 
                        className="w-full h-auto object-cover"
                        priority 
                    />
                </motion.div>
                <motion.div className="card-body w-full lg:w-1/2 p-6" variants={fadeInFromRight}>
                    <h2 className={`card-title text-xl md:text-2xl lg:text-3xl mb-4 ${theme === "light" ? "text-black" : "text-white"}`}>Résidentiel</h2>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Installations Electriques.</p>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Mise en lumières</p>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Intégration de systèmes connectés.</p>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Réception TVSAT Starlink.</p>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Intrusion.</p>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Incendie</p>
                </motion.div>
            </motion.div>

            {/* Second Card */}
            <motion.div 
                className={`card flex flex-col lg:flex-row-reverse ${theme === "light" ? "bg-base-100" : "bg-gray-700"} shadow-xl`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={fadeInFromRight} className="w-full lg:w-1/2">
                    <Image 
                        src="/assets/images/about_us/root2.jpg"
                        alt="Example Image"
                        width={600} 
                        height={400} 
                        className="w-full h-auto object-cover"
                        priority 
                    />
                </motion.div>
                <motion.div className="card-body w-full lg:w-1/2 p-6" variants={fadeInFromLeft}>
                    <h2 className={`card-title text-xl md:text-2xl lg:text-3xl mb-4 ${theme === "light" ? "text-black" : "text-white"}`}>Tertiaire</h2>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Installations Electriques</p>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Incendie</p>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Intrusion</p>
                    <p className={`text-sm md:text-base lg:text-lg ${theme === "light" ? "text-black" : "text-white"}`}>Câblage réseaux</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Two;