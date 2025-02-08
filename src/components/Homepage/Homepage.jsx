import React from 'react';
import Banner from './Banner';
import About from './About';

import Two from './Two';
import Three from './Three';
import Dream from './Dream';
import Footer from './Footer';
import Lal from './Lal';

const Homepage = () => {
    return (
        <div className='max-w-screen-2xl mx-auto font-poppins bg-slate-100'>
            <Banner/>
            <Three/>
            
            <Two/>
            <Lal/>
            <About/>
            <Dream/>

        
           <Footer/>
           
        </div>
    );
};

export default Homepage;