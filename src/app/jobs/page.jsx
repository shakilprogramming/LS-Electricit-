import React from 'react';
import Image from 'next/image';

const Job = () => {
    return (
     <div className='mt-8'>
            <div className='lg:max-w-screen-lg m-auto mt-8'> {/* Added mt-8 for margin-top */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div>
                    <Image 
                        src="/assets/images/about_us/parts.jpg"  // ✅ Corrected path
                        alt="Example Image"
                        width={500} 
                        height={300} 
                        priority 
                    />
                </div>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                <div>
                    <h1>Next.js Image Example</h1>
                    <Image 
                        src="/assets/images/about_us/parts.jpg"  // ✅ Corrected path
                        alt="Example Image"
                        width={500} 
                        height={300} 
                        priority 
                    />
                </div>
            </div>
        </div>
     </div>
    );
};

export default Job;