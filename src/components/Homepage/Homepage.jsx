import React from 'react';
import Banner from './Banner';
import About from './About';
import Footer from '../shared/Footer';
import Two from './Two';

const Homepage = () => {
    return (
        <div className='max-w-screen-xl mx-auto font-poppins'>
            <Banner/>
            
            <Two/>
            <About/>
           <Footer/>
           
           
        </div>
    );
};

export default Homepage;