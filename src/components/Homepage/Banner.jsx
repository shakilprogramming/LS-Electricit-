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
        <div>
            <Carousel>
            <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
                <img src={img6.src} alt="Banner 7" />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        whiteSpace: 'nowrap',
                        margin: '0',
                        padding: '1rem',
                        lineHeight: '1.2',
                        display: 'inline-block',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '8px',
                    }}>
                        ÉLECTRICITÉ GÉNÉRALE ET INDUSTRIELS
                    </h1>
                    <p style={{
                        fontSize: '1rem',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        whiteSpace: 'nowrap',
                        margin: '0',
                        padding: '1rem',
                        display: 'inline-block',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '8px',
                    }}>
                        Électricien situé sur Morzine, Les Gets, Cluses, Chamonix et Megève
                    </p>

                    {/* Buttons */}
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/contact" passHref>
                            <button style={{
                                backgroundColor: '#c53030',
                                color: 'black',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                transition: '0.3s',
                            }}>
                             <p> URGENCE DEPANNAGE </p>
                              24H /24 ET 7J/7
                            </button>
                        </Link>

                        <Link href="/enough" passHref>
                            <button style={{
                                backgroundColor: '#ffff',
                                color: 'black',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                transition: '0.3s',
                            }}>
                             <p> DEVIS GRATUIT </p>
                             <h1> RAPIDE</h1>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
                <img src={img8.src} alt="Banner 7" />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                }}>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        whiteSpace: 'nowrap',
                        margin: '0',
                        padding: '1rem',
                        lineHeight: '1.2',
                        display: 'inline-block',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '8px',
                    }}>
                    UNE URGENCE ?
                    </h1>
                    <p style={{
                        fontSize: '1rem',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        whiteSpace: 'nowrap',
                        margin: '0',
                        padding: '1rem',
                        display: 'inline-block',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '8px',
                    }}>
                        
                    </p>
                    <p className='text-2xl'>Électricien situé sur Morzine, Les Gets, Cluses, Chamonix et Megève</p>

                    {/* Buttons */}
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/contact" passHref>
                            <button style={{
                                backgroundColor: '#c53030',
                                color: 'black',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                transition: '0.3s',
                            }}>
                             <p> URGENCE DEPANNAGE </p>
                              24H /24 ET 7J/7
                            </button>
                        </Link>

                        <Link href="/enough" passHref>
                            <button style={{
                                backgroundColor: '#ffff',
                                color: 'black',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                transition: '0.3s',
                            }}>
                             <p> DEVIS GRATUIT </p>
                             <h1> RAPIDE</h1>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Carousel>
        </div>
    );
};

export default Banner;
