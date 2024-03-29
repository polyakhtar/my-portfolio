import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

    return (
      
        <nav className="w-full shadow" style={{backgroundColor:'#313131'}}>
        <div className="justify-between mx-auto lg:max-w-screen-2xl md:items-center md:flex " style={{paddingLeft:'6%',paddingRight:'6%'}}>
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <h2 className="text-4xl font-bold font-Lobster" style={{color:'#FF621A'}}>Poly Akhtar</h2>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none  focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-white">
                        <li className="text-xl hover:text-orange-500">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-xl hover:text-orange-500">
                            <Link to="/project">Project</Link>
                        </li>
                        <li className="text-xl hover:text-orange-500">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="text-xl hover:text-orange-500">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="text-xl hover:text-orange-500">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className='btn btn-outline text-white border-orange-500 hover:bg-orange-600' >
                            <a className='text-lg' href="https://drive.google.com/file/d/1DWfwHfoQ1UJB0WT3DIO2_mXKGxNlkC7L/view?usp=sharing" target='blank'>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    

     
    );
  };

export default Navbar;