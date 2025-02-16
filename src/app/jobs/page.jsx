"use client"; // Required for Next.js App Router
import Image from 'next/image';
import { useTheme } from '@/components/shared/context/ThemeContext';

const page = () => {
  const { theme } = useTheme(); // Access the theme from the context

  return (
    <div className="bg-white text-gray-500 text-center mt-20"> 
     <div className='text-black max-w-screen-2xl mx-auto w-full whitespace-nowrap mt-4 m-0 p-4 inline-block bg-black/50 rounded-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]'>
  <h1 className='text-center text-5xl pt-10 sm:text-4xl md:text-5xl'> Remise en norme électrique à Marnaz</h1>
  <ul className='pl-6 list-disc sm:pl-6 '> 
    <li className='text-lg sm:text-2xl md:text-3xl leading-relaxed'>
      • Remplacement les portes fusibles <br />
      • Remplacement le tableau électrique <br />
      • Remise en norme NFC 15 100 <br />
      • GTL
    </li>
  </ul>
</div>
     {/* Set background to white and text to grey */}
   
      <div className="max-w-screen-2xl mx-auto"> {/* Adds margin-top to create space below the navbar */}
        {/* Header Section */}
        <div className=' text-teal-700 h-32 pt-4'>
          {/* Header content */}
        </div>

        {/* Carousel Container */}
        <div className="carousel w-full "> {/* Adds margin-top to create space below the title */}
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
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full h-2/3">
            <Image
              src="/assets/images/about_us/root17.jpg"
              alt="Slide 2"
              width={800}
              height={600}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          {/* Slide 4 */}
        </div>

        <div>
        <div className="text-black max-w-screen-2xl mx-auto w-full mt-4 p-4 bg-black/50 rounded-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
  <h1 className="text-center text-3xl sm:text-4xl md:text-5xl pt-6">
    Motorisations d’un volet basculant au centrale EDF
  </h1>
  <ul className="pl-4 sm:pl-6 list-disc mt-4">
    <li className="text-base sm:text-lg md:text-2xl leading-relaxed">
      Etude d’installation <br />
      Câblage la platine <br />
      Capteur de température(4-20mA) <br />
      Logiciel Machine expert basic (Schneider)
    </li>
  </ul>
</div>


          <div className="carousel w-full mt-2"> {/* Adds margin-top to create space below the title */}
            {/* Slide 1 */}
            <div id="slide3" className="carousel-item relative w-full h-1/4"> {/* Adjust height */}
              <Image
                src="/assets/images/about_us/root5.jpg"
                alt="Slide 3"
                width={900} // Set appropriate width
                height={800} // Set appropriate height
                className="rounded-lg w-full h-full object-cover" // Make image cover the container
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 2 */}
            <div id="slide4" className="carousel-item relative w-full h-2/3">
              <Image
                src="/assets/images/about_us/root11.jpg"
                alt="Slide 4"
                width={800}
                height={600}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-2/3">
              <Image
                src="/assets/images/about_us/root14.jpg"
                alt="Slide 5"
                width={800}
                height={600}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 3 */}
            {/* Slide 4 */}
          </div>
        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto'>
       <div className='text-black max-w-screen-2xl mx-auto w-full whitespace-nowrap mt-4 m-0 p-4 inline-block bg-black/50 rounded-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]'>
       <h1 className='text-center text-3xl sm:text-4xl md:text-5xl pt-6'> Installation Portail battant à Bonneville</h1>
        <ul className='pl-4 sm:pl-6 list-disc text-left'>
          <li className='text-lg sm:text-2xl md:text-3xl leading-relaxed'>
            Etude <br />
            Installation<br />
            Programmation
          </li>
        </ul>
       </div>

       
        <div className="carousel w-full mt-2 "> {/* Adds margin-top to create space below the title */}
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full h-1/4"> {/* Adjust height */}
            <Image
              src="/assets/images/about_us/root19.jpg"
              alt="Slide 1"
              width={900} // Set appropriate width
              height={800} // Set appropriate height
              className="rounded-lg w-full h-full object-cover" // Make image cover the container
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              {/* Navigation buttons */}
            </div>
          </div>

          {/* Slide 2 */}
          {/* Slide 3 */}
          {/* Slide 4 */}
        </div>
      </div>
    </div>
  );
};

export default page;