import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import bannerAnimation from '../../../assets/banner1.json'
import{Typewriter} from 'react-simple-typewriter'

const Banner = () => {
 
    return (
        <div className=' flex min-h-[80vh] flex-col-reverse lg:flex-row items-center justify-between' style={{backgroundColor:'#212121'}}>
            <div className='container mx-auto lg:flex lg:flex-row md:flex-row items-center'>
            <div className='text-white lg:w-1/2 md:mt-10 md:px-16 md:pt-8 lg:mx-8 lg:px-4 px-6 pt-8'>
            <h2 className='text-3xl' style={{color:'gray'}}>Hello, I'm</h2>
            <h1 className='text-5xl'>Poly Akhtar</h1>
            <p className='text-4xl my-4' style={{color:'#FF621A'}}>
                A{' '}
            <span style={{ color:'#FF621A' }}>
          <Typewriter
            words={['Front-End Developer', 'React Developer', 'Mern-Stack Developer']}
            loop={10}
            cursor
            cursorStyle='।'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
             </p>
            <p className='text-xl'>
            I am a student of Accounting Department at National University. I've been trying to learn programming for 3 years, at this time Looking back in my past, I can't find any other chapter except coding.
            </p>
            <br/>
            <p className='text-xl'>I am passionate about programming. I am strongly committed to be a solid software engineer and develop efficient software systems. I am interested about building excellent software that improves the lives of those around me.</p>
            <div className='my-4'>
            <button className='btn btn-outline text-white hover:bg-orange-600 mr-6' style={{borderColor:'#FF621A'}}>
                <a href='https://drive.google.com/file/d/1DWfwHfoQ1UJB0WT3DIO2_mXKGxNlkC7L/view?usp=sharing' target='blank'>Download Resume</a></button>
            <button className='btn btn-outline text-white hover:bg-orange-600' style={{borderColor:'#FF621A'}}><Link to='/about'>About Me</Link></button>
            </div>
            </div>
            <div className='lg:w-1/2 animation'>
            <Lottie animationData={bannerAnimation} loop={true}></Lottie>

            </div>
        
            </div>
        </div>
    );
};

export default Banner;