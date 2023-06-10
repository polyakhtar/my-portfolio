import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../../assets/project1.png'
import project2 from '../../../assets/project2.png'
import project3 from '../../../assets/project3.png'

const Project = () => {
    return (
        <div className='my-20' style={{paddingLeft:'4%',paddingRight:'4%'}}> 
        <h1 className='my-16 text-5xl font-semibold text-center' style={{color:'#FF621A'}}>Some of my projects</h1>   
       <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 md:px-4 lg:px-2 px-4 lg:grid-cols-3 gap-6'>
        <div className="group relative">
        <img  class="w-full" style={{height:'400px'}}
            src={project1} alt=""/>
        <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500 border-2 border-orange-600 shadow-lg hover:shadow-orange-600" style={{backgroundColor:'#212121'}}>
            <h1 class="text-2xl text-white">Wedding Photographer</h1>
            <Link className=" mt-5 px-8 py-3 rounded-md btn btn-outline text-white hover:bg-orange-600 duration-300" style={{borderColor:'#FF621A'}} to='/project1'>See Details</Link>
        </div>
    </div>
    <div className="group relative ">
        <img class="w-full " style={{height:'400px'}}
            src={project2} alt=""/>
        <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500 border-2 border-orange-600 shadow-lg hover:shadow-orange-600" style={{backgroundColor:'#212121'}}>
            <h1 class="text-2xl text-white">Used Phone Resale Market</h1>
            <Link className="mt-5 px-8 py-3 rounded-md btn btn-outline text-white hover:bg-orange-600 duration-300" style={{borderColor:'#FF621A'}} to='/project2'>See Details</Link>
        </div>
    </div>
    <div className="group relative">
        <img class="w-full " style={{height:'400px'}}
            src={project3} alt=""/>
        <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500 border-2 border-orange-600 shadow-lg hover:shadow-orange-600" style={{backgroundColor:'#212121'}}>
            <h1 class="text-2xl text-white">Doctors Portal</h1>
            <Link className="mt-5 px-8 py-3 rounded-md btn btn-outline text-white hover:bg-orange-600 duration-300" style={{borderColor:'#FF621A'}} to='/project3'>See Details</Link>
        </div>
    </div>

    </div> 
    </div>  
    );
};

export default Project;