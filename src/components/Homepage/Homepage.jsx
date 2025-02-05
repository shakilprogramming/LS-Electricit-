import React from 'react';
import Banner from './Banner';
import About from './About';
import Footer from '../shared/Footer';
import Two from './Two';
import Three from './Three';

const Homepage = () => {
    return (
        <div className='max-w-screen-xl mx-auto font-poppins'>
            <Banner/>
            <Three/>
            <Two/>
            <About/>
           
           <Footer/>
           
           
        </div>
    );
};

export default Homepage;