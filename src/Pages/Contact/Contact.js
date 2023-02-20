import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        
            <div className="mx-10 py-20" style={{paddingLeft:'4%',paddingRight:'4%'}} >
            <div style={{opacity:'1',transform:'none'}}>
            <h3 className=" text-center text-xl" style={{color:'gray'}}>Feel Free To Contact Me</h3>
            <h1 className="text-4xl font-semibold drop-shadow-md text-center" style={{color:'#FF621A'}}>Get In Touch</h1>
            <div className="flex items-center justify-center mt-4">
            <div className="side-line"></div><div className="middle-line">
            <div className="inner-circle">
            </div>
            </div>
            <div className="side-line"></div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="" style={{opacity:'1',transform:'none'}}>
            <h2 className="text-2xl font-medium text-white">Contact Me</h2>
            <form action="https://formsubmit.co/poly09876pm@gmail.com" method="POST">
            <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
            <input  className='input-field'  type="text" name="name" placeholder="Name" required=""/>
            <input className='input-field' type="email" name="email" id="email" placeholder="Email" required=""/>
            </div>
            <input className='input-field' type="text" name="subject" id="subject" placeholder="Subject" required=""/>
            <textarea className='input-field' name="message" id="message" cols="30" rows="5" placeholder="Message" required="">
            </textarea>
            <button type="submit" value="Send Message" className='btn btn-outline text-white hover:bg-orange-600' style={{borderColor:'#FF621A'}}>
            <span className='mr-2'>Send</span>
            <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z">
            </path>
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z">
            </path>
            </svg>
            </span>
            </button>
            </form>
            </div>
            <div className="lg:ml-24 md:ml-24" style={{opacity:'1',transform:'none'}}>
            <h2 className="text-2xl font-medium text-white" >Contact Info</h2>
            <div className="flex items-center my-6">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-2xl mr-8 text-slate-300 hover:text-orange-500 cursor-pointer duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z">
            </path>
            </svg>
            <h3 className="font-medium" style={{color:'#FF621A'}}>Poly Akhtar</h3>
            </div>
            <div className="flex items-center my-6">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-2xl mr-8 text-slate-300 hover:text-orange-500 cursor-pointer duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
            <h3 className="font-medium" style={{color:'#FF621A'}}>+8801865162456</h3>
            </div>
            <div className="flex items-center my-6">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl mr-8 text-slate-300 hover:text-orange-500 cursor-pointer duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z">
            </path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z">
            </path>
            </svg>
            <h3 className="font-medium " style={{color:'#FF621A'}}>poly09876pm@gmail.com</h3>
            </div>
            <div className="flex items-center my-6">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-2xl mr-8 text-slate-300 hover:text-orange-500 cursor-pointer duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z">
            </path>
            </svg>
            <h3 className="font-medium" style={{color:'#FF621A'}}>Cumilla, Bangladesh</h3>
            </div>
            <div className="mt-8 flex items-center">
            <h3 className="text-xl text-slate-300">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4">
            </div>
            <a href="https://www.linkedin.com/in/poly-akhtar/" target="blank" className="text-3xl text-slate-300 hover:text-orange-500 hover:-translate-y-1.5 shadow-lg mx-1 duration-300">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
            <a href="https://github.com/polyakhtar" target="blank" className="text-3xl text-slate-300 hover:text-orange-500 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
            </svg></a>
            <a href="https://www.facebook.com/poly.akhter00/" target="blank" className="text-3xl text-slate-300 hover:text-orange-500 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></a>
            </div>
            </div>
            </div>
            </div>
        
    );
};

export default Contact;