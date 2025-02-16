"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img6 from '../../../public/assets/images/banner/7.jpg';
import img8 from '../../../public/assets/images/banner/8.jpg';

const Carousel = dynamic(
    () => import('react-responsive-carousel').then((mod) => mod.Carousel),
    { ssr: false }
);

const Banner = () => {
    return (
        <div className="mt-16">
            <Carousel>
                {[img6, img8].map((img, index) => (
                    <div key={index} className="relative text-center text-white">
                        <img src={img.src} alt={`Banner ${index + 7}`} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                            <h1 className="text-2xl md:text-4xl font-bold text-shadow-lg bg-black bg-opacity-50 rounded-lg p-4">
                                {index === 0 ? 'ÉLECTRICITÉ GÉNÉRALE ET INDUSTRIELS' : 'UNE URGENCE ?'}
                            </h1>
                            <p className="text-base md:text-lg whitespace-nowrap bg-black bg-opacity-50 rounded-lg p-4 text-shadow-lg">
                                Électricien situé sur Morzine, Les Gets, Cluses, Chamonix et Megève
                            </p>
                            <div className="mt-4 flex gap-4 justify-center">
                                <Link href="/contact" passHref>
                                    <button className="bg-red-600 text-black py-2 px-6 rounded-lg text-base font-bold transition duration-300 hover:bg-red-700">
                                        <p>URGENCE DEPANNAGE</p>
                                        24H /24 ET 7J/7
                                    </button>
                                </Link>
                                <Link href="/enough" passHref>
                                    <button className="bg-white text-black py-2 px-6 rounded-lg text-base font-bold transition duration-300 hover:bg-gray-200">
                                        <p>DEVIS GRATUIT</p>
                                        <h1>RAPIDE</h1>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
