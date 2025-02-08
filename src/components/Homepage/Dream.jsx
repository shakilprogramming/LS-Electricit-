import React from 'react';
import Image from 'next/image';

const Dream = () => {
    return (
        <div className='m-auto'>
            <div className='m-auto'>
                 <Image
                         src="/assets/images/about_us/root4.jpg"
                         alt="Logo"
                         width={800} // Set appropriate width
                         height={600} // Set appropriate height
                         className="rounded-lg"
                         layout="responsive"
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                       />
            </div>
        </div>
    );
};

export default Dream;