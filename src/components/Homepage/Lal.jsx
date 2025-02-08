"use client"; // Required for Next.js App Router
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

const Lal = () => {
  const { theme } = useTheme(); // Access the theme from the context

  return (
    <div className='text-center items-center bg-slate-100'>
        <div className='bg-slate-900 text-teal-700 h-32 pt-4'>
      <h1 className='text-white  text-5xl mt-2 font-bold text-start'>Partenaire avec</h1>
       
    </div>
      <div className="w-1/2 ml-12 mt-8"> {/* Container to control image size */}
            <Image
              src="/assets/images/about_us/root9.jpg"
              alt="Logo"
              width={400} // Further reduced width
              height={200} // Further reduced height
              className="rounded-lg object-cover w-full h-auto" // Ensure the image fits the container
            />
            </div>
    </div>
  );
};

export default Lal;