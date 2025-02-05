import React from 'react';
import Image from 'next/image'; // Import the Image component

const Dream = () => {
    return (
        <div
        className="hero mt-6 mb-6"
        style={{
            backgroundImage: "url('/assets/images/about_us/root4.jpg')", // Set the background image
            backgroundSize: 'cover', // Ensures the image covers the container
            backgroundPosition: 'center', // Centers the image
            height: '700px', // Medium-sized height (adjust as needed)
            width: '100%', // Set width to 100%
        }}
    >
        <div className=""></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="">
                
              
               
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  
                </div>
            </div>
        </div>
    </div>
    );
};

export default Dream;