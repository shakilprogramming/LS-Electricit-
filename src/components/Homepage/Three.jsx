import React from 'react';
import Link from 'next/link'; // Import the Link component

const Three = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: "url('/assets/images/about_us/root3.jpg')", // Set the background image
                backgroundSize: 'cover', // Ensures the image covers the container
                backgroundPosition: 'center', // Centers the image
                height: '500px', // Medium-sized height (adjust as needed)
                width: '100%', // Set width to 100%
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Électricité générale et industriels</h1>
                    <p className="mb-5">
                        Vous recherchez un professionnel pour vos travaux d'électricité générale et industrielle ?
                    </p>
                    <p className="mb-5">
                        Notre équipe met son expertise à votre service pour répondre à vos besoins
                    </p>
                    <p>
                        Tout en respectant vos envies et votre budget.
                        Nous réalisons des devis gratuits pour tous vos projets électriques.
                    </p>
                   
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/seemore" passHref>
                            <button
                                style={{
                                    backgroundColor: '#ffff',
                                    color: 'black',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: '0.3s',
                                }}
                            >
                             En savoir plus
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Three;