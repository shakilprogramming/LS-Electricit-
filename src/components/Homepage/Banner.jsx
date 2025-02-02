"use client";

import dynamic from 'next/dynamic';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../public/assets/images/banner/1.jpg';
import img2 from '../../../public/assets/images/banner/2.jpg';
import img3 from '../../../public/assets/images/banner/2.jpg';
import img4 from '../../../public/assets/images/banner/3.jpg';
import img5 from '../../../public/assets/images/banner/4.jpg';
import img6 from '../../../public/assets/images/banner/5.jpg';

const Carousel = dynamic(
    () => import('react-responsive-carousel').then((mod) => mod.Carousel),
    { ssr: false }
);

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1.src} alt="Banner 1" />
            </div>
            <div>
                <img src={img2.src} alt="Banner 2" />
            </div>
            <div>
                <img src={img3.src} alt="Banner 3" />
            </div>
            <div>
                <img src={img4.src} alt="Banner 4" />
            </div>
            <div>
                <img src={img5.src} alt="Banner 5" />
            </div>
            <div>
                <img src={img6.src} alt="Banner 6" />
            </div>
        </Carousel>
    );
};

export default Banner;
