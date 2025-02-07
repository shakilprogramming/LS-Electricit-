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

const Two = () => {
  const { theme } = useTheme(); // Access the theme from the context

  return (
   <div>
    <div className='bg-slate-900 text-teal-700 h-32 pt-4'>
      <h1 className='text-white text-center text-5xl mt-2 font-bold'>Nos réalisations</h1>
       
    </div>
      <div className="carousel w-full">
     
     {/* Slide 1 */}
     <div id="slide1" className="carousel-item relative w-full">
       <Image
         src="/assets/images/about_us/root6.jpg"
         alt="Logo"
         width={800} // Set appropriate width
         height={600} // Set appropriate height
         className="rounded-lg"
       />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide4" className="btn btn-circle">❮</a>
         <a href="#slide2" className="btn btn-circle">❯</a>
       </div>
     </div>

     {/* Slide 2 */}
     <div id="slide2" className="carousel-item relative w-full">
       <Image
         src="/assets/images/about_us/root5.jpg"
         alt="Logo"
         width={800} // Set appropriate width
         height={600} // Set appropriate height
         className="rounded-lg"
       />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide1" className="btn btn-circle">❮</a>
         <a href="#slide3" className="btn btn-circle">❯</a>
       </div>
     </div>
   </div>
   </div>
  );
};

export default Two;