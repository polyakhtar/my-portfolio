import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import Project from './Project/Project';

import Service from './Service/Service';

const Home = () => {
    return (
        <div className='max-w-screen-2xl mx-auto' style={{paddingLeft:'4%',paddingRight:'4%'}}>
           <Banner></Banner>
           <Service></Service>
           <Project></Project>
           <Contact></Contact>
           
        </div>
    );
};

export default Home;