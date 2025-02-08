"use client"; // Required for Next.js App Router
import Image from 'next/image';
import { useTheme } from '@/components/shared/context/ThemeContext';

const page = () => {
  const { theme } = useTheme(); // Access the theme from the context

  return (
    <div className="mt-16 max-w-screen-2xl mx-auto bg-slate-100"> {/* Adds margin-top to create space below the navbar */}
      
      {/* Header Section */}
      <div className='bg-slate-900 text-teal-700 h-32 pt-4'>
        <h1 className='text-white text-center text-5xl mt-8 font-bold'>
          Nos réalisations
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="carousel w-full mt-8"> {/* Adds margin-top to create space below the title */}
        
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-1/4"> {/* Adjust height */}
          <Image
            src="/assets/images/about_us/root6.jpg"
            alt="Slide 1"
            width={900} // Set appropriate width
            height={800} // Set appropriate height
            className="rounded-lg w-full h-full object-cover" // Make image cover the container
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-2/3">
          <Image
            src="/assets/images/about_us/root5.jpg"
            alt="Slide 2"
            width={800}
            height={600}
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-2/3">
          <Image
            src="/assets/images/about_us/root4.jpg"
            alt="Slide 3"
            width={800}
            height={600}
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full h-2/3">
          <Image
            src="/assets/images/about_us/root3.jpg"
            alt="Slide 4"
            width={800}
            height={600}
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
