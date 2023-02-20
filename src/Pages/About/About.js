import React from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../assets/about.json';

const About = () => {
    return (
        <div className='my-16 min-h-screen'>
            <div className='' >
            <div className='text-center my-6'>
            <p className='text-xl' style={{color:'gray'}}>Something About Myself</p>
            <h1 className='text-5xl font-semibold' style={{color:'#FF621A'}}><span className='text-white'>About</span> Me</h1>
            </div>
            <div className=' flex min-h-[80vh] flex-col-reverse lg:flex-row items-center justify-between' style={{backgroundColor:'#212121'}}>
            <div className='container mx-auto lg:flex lg:flex-row md:flex-row items-center'>
            <div className='lg:w-1/2 animation md:mt-2 lg:mt-2'>
            <Lottie animationData={aboutAnimation} loop={true}></Lottie>
            </div>
            <div className='text-white lg:w-1/2  md:px-16  lg:mx-8 lg:px-4 px-6 pt-8'>
            <h2 className='text-3xl' style={{color:'gray'}}>Hello, I'm</h2>
            <h1 className='text-5xl'>Poly Akhtar</h1>
            <p className='text-4xl my-4' style={{color:'#FF621A'}}>A Front-End Developer</p>
            <p className='text-xl'>
            I am a student of Accounting Department at National University. I've been trying to learn programming for 3 years, at this time Looking back in my past, I can't find any other chapter except coding.
            </p>
            <br/>
            <p className='text-xl'>I am passionate about programming. I am strongly committed to be a solid software engineer and develop efficient software systems. I am interested about building excellent software that improves the lives of those around me.</p>
            <button className='btn btn-outline text-white hover:bg-orange-600 my-4' style={{borderColor:'#FF621A'}}><a href='https://drive.google.com/file/d/1DWfwHfoQ1UJB0WT3DIO2_mXKGxNlkC7L/view?usp=sharing' target='blank'>My Resume</a></button>
            </div>
            
        
            </div>
        </div>
            </div>
        </div>
    );
};

export default About;