import React from 'react';
import project2 from '../../../../assets/project2-1.png';
import project3 from '../../../../assets/project2-2.png';
import project4 from '../../../../assets/project2-3.png';

const Project2 = () => {
    return (
<div className="py-16 text-white" style={{paddingLeft:'2%', paddingRight:'2%',paddingBottom:'4rem',paddingTop:'4rem'}}>
    
    <div className='container'>
<h1 className="text-center my-12 text-4xl font-medium" style={{color:'#FF621A'}}>
Recycle Phone - Used mobile buying and selling Website</h1>
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
<li className="text-white">An User can log in with different 3 roles. (Seller, Buyer, and admin).</li>
<li className="text-white">An Seller can post product with details.</li>
<li className="text-white">A  Buyer will see all the posted products and will be able to book the product.</li><li className="text-white">Admin can remove user.</li>
<li className="text-white">Seller can remove product.</li>
<li className="text-white">Buyer can remove booking.</li>
<li className="text-white">Seller can see all the bookings.</li>
<li className="text-white">Buyer can see all the booked products.</li>
<li className="text-white">Secured Front-end Routes and back-end API's.</li>
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
<li className="text-white">JWT etc.</li>
</ul>
</div>
<div className="flex md:flex-row lg:flex-row flex-col md:justify-center items-center mt-8">
<a target="blank" href="https://resale-phone.web.app/">
<button className="mt-5 px-8 py-3 rounded-md btn btn-outline text-white hover:bg-orange-600 duration-300" style={{borderColor:'#FF621A'}} to='/project3'>
<span>Visit Now</span>
</button>
</a>
<a className="mx-4" target="blank" href="https://github.com/polyakhtar/used-products-resale-client-side">
<button className="mt-5 px-8 py-3 rounded-md btn btn-outline text-white hover:bg-orange-600 duration-300" style={{borderColor:'#FF621A'}} to='/project3'><span>Github Client</span></button>
</a>
<a href="https://github.com/polyakhtar/used-products-resale-server-side" target="blank">
    <button className="mt-5 px-8 py-3 rounded-md btn btn-outline text-white hover:bg-orange-600 duration-300" style={{borderColor:'#FF621A'}} to='/project3'><span>Github Server</span>
    </button>
    </a>
    </div>
</div>
</div>
    );
};

export default Project2;