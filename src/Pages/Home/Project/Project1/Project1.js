import React from 'react';
import project2 from '../../../../assets/project1-1.png';
import project3 from '../../../../assets/project1-2.png';
import project4 from '../../../../assets/project1-3.png';

const Project1 = () => {
    return (
<div className="py-16 text-white" style={{paddingLeft:'2%', paddingRight:'2%',paddingBottom:'4rem',paddingTop:'4rem'}}>
    
    <div className='container'>
<h1 className="text-center my-12 text-4xl font-medium" style={{color:'#FF621A'}}>
Service Website - Wedding Photographer</h1>
</div>
<div className='px-20 py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
    <img className='h-80' src={project2} alt="" />
    <img className='h-80' src={project3} alt="" />
    <img className='h-80' src={project4} alt="" />
</div>
<div className='px-20'>

<div className="my-6">
<h2 className="text-2xl font-semibold mb-3" style={{color:'#FF621A'}}>Features:</h2>
<ul className=" list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
<li className="text-white">This project includes photography service</li>
<li className="text-white">There are many routes in the project</li>
<li className="text-white">By clicking the route customer visit varius page</li>
<li className="text-white">Customer can be book any service and give review for this specific service</li>
<li className="text-white">Private route used in this website.</li>
</ul>
</div>
<div className="my-6">
<h2 className="text-2xl font-semibold mb-3" style={{color:'#FF621A'}}>Tools &amp; Technologies:</h2>
<ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
<li className="text-white">React</li>
<li className="text-white">TailwindCSS</li>
<li className="text-white">Firebase</li>
<li className="text-white">NodeJS</li>
<li className="text-white">ExpressJS</li>
<li className="text-white">MongoDB</li>
</ul>
</div>
<div className="flex md:flex-row lg:flex-row flex-col md:justify-center items-center mt-8">
<a target="blank" href="https://recycle-phone.web.app/">
<button className="mt-5 px-8 py-3 rounded-md btn btn-outline text-white hover:bg-orange-600 duration-300" style={{borderColor:'#FF621A'}} to='/project3'>
<span>Visit Now</span>
</button>
</a>
<a className="mx-4" target="blank" href="https://github.com/MdHRShohel/Recycle-Phone_Client-Site">
<button className="mt-5 px-8 py-3 rounded-md btn btn-outline text-white hover:bg-orange-600 duration-300" style={{borderColor:'#FF621A'}} to='/project3'><span>Github Client</span></button>
</a>
<a href="https://github.com/MdHRShohel/Recycle-Phone_Server-Site" target="blank">
    <button className="mt-5 px-8 py-3 rounded-md btn btn-outline text-white hover:bg-orange-600 duration-300" style={{borderColor:'#FF621A'}} to='/project3'><span>Github Server</span>
    </button>
    </a>
    </div>
</div>
</div>
    );
};

export default Project1;