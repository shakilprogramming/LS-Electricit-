"use client"; // Required for Next.js App Router
import Image from 'next/image';
import { useTheme } from '@/components/shared/context/ThemeContext';

const page = () => {
  const { theme } = useTheme(); // Access the theme from the context

  return (
    <div className="bg-white text-gray-500"> {/* Set background to white and text to grey */}
      <h1 className='text-center text-3xl mt-40'> Installation Portail battant à Bonneville</h1>
      <ul className='pl-6'>
        <li>
          Etude <br />
          Installation<br />
          Programmation
        </li>
      </ul>

      <div className="mt-16 max-w-screen-2xl mx-auto"> {/* Adds margin-top to create space below the navbar */}
        {/* Header Section */}
        <div className='bg-slate-900 text-teal-700 h-32 pt-4'>
          {/* Header content */}
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

          {/* Slide 3 */}
          {/* Slide 4 */}
        </div>

        <div>
          <h1 className='text-center text-3xl pt-10'> Installation Portail battant à Bonneville</h1>
          <ul className='pl-6 text-3xl'>
            <li className='text-4xl'>
              Etude <br />
              Installation<br />
              Programmation
            </li>
          </ul>

          <div className="carousel w-full mt-8"> {/* Adds margin-top to create space below the title */}
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
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-2/3">
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

            {/* Slide 3 */}
            {/* Slide 4 */}
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-center text-3xl'> Installation Portail battant à Bonneville</h1>
        <ul className='pl-6'>
          <li>
            Etude <br />
            Installation<br />
            Programmation
          </li>
        </ul>

        <p></p>
        <div className="carousel w-full mt-8"> {/* Adds margin-top to create space below the title */}
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