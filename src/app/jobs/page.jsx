"use client"; // Required for Next.js App Router
import Image from 'next/image';
import { useTheme } from '@/components/shared/context/ThemeContext';

const page = () => {
  const { theme } = useTheme(); // Access the theme from the context

  return (
    <div className="bg-white text-gray-500 text-center mt-10 sm:mt-20"> 
      {/* First Section */}
      <div className='text-black max-w-screen-2xl mx-auto w-full whitespace-normal sm:whitespace-nowrap mt-4 m-0 p-4 inline-block bg-black/50 rounded-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]'>
        <h1 className='text-center text-3xl sm:text-5xl pt-6 sm:pt-10'>Remise en norme électrique à Marnaz</h1>
        <ul className='pl-6 list-disc'>
          <li className='text-xl sm:text-3xl'>
            • Remplacement les portes fusibles <br />
            • Remplacement le tableau électrique <br />
            • Remise en norme NFC 15 100 <br />
            • GTL
          </li>
        </ul>
      </div>

      {/* Carousel Container */}
      <div className="max-w-screen-2xl mx-auto mt-4 sm:mt-8">
        {/* Header Section */}
        <div className='text-teal-700 h-24 sm:h-32 pt-4'>
          {/* Header content */}
        </div>

        {/* Carousel */}
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full h-48 sm:h-64 md:h-96">
            <Image
              src="/assets/images/about_us/root6.jpg"
              alt="Slide 1"
              width={900}
              height={800}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full h-48 sm:h-64 md:h-96">
            <Image
              src="/assets/images/about_us/root17.jpg"
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
        </div>
      </div>

      {/* Second Section */}
      <div className='max-w-screen-2xl mx-auto mt-4 sm:mt-8'>
        <div className='text-black w-full whitespace-normal sm:whitespace-nowrap m-0 p-4 inline-block bg-black/50 rounded-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]'>
          <h1 className='text-center text-3xl sm:text-5xl pt-6 sm:pt-10'>Motorisations d’un volet basculant au centrale EDF</h1>
          <ul className='pl-6 list-disc'>
            <li className='text-xl sm:text-3xl'>
              • Etude d’installation <br />
              • Câblage la platine <br />
              • Capteur de température(4-20mA) <br />
              • Logiciel Machine expert basic (Schneider)
            </li>
          </ul>
        </div>

        <div className="carousel w-full mt-2 sm:mt-4">
          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full h-48 sm:h-64 md:h-96">
            <Image
              src="/assets/images/about_us/root5.jpg"
              alt="Slide 3"
              width={900}
              height={800}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full h-48 sm:h-64 md:h-96">
            <Image
              src="/assets/images/about_us/root11.jpg"
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

      {/* Third Section */}
      <div className='max-w-screen-2xl mx-auto mt-4 sm:mt-8'>
        <div className='text-black w-full whitespace-normal sm:whitespace-nowrap m-0 p-4 inline-block bg-black/50 rounded-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]'>
          <h1 className='text-center text-3xl sm:text-5xl pt-6 sm:pt-10'>Installation Portail battant à Bonneville</h1>
          <ul className='pl-6 list-disc'>
            <li className='text-xl sm:text-3xl'>
              • Etude <br />
              • Installation <br />
              • Programmation
            </li>
          </ul>
        </div>

        <div className="carousel w-full mt-2 sm:mt-4">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full h-48 sm:h-64 md:h-96">
            <Image
              src="/assets/images/about_us/root19.jpg"
              alt="Slide 1"
              width={900}
              height={800}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              {/* Navigation buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;