import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';

const Service = () => {
const [service,setService]=useState([]);
useEffect(()=>{
    fetch('service.json')
    .then(res=>res.json())
    .then(data=>{
        setService(data)
    })
},[])
    return (
        <div className='container mx-auto my-16'>
            {/* <h2 className='text-5xl font-bold text-center my-16' style={{color:'#FF621A'}}>Some of My Projects</h2>
            
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            <div>
           <img style={{height:'400px'}} to='/project1' src={project1} alt="" />
           </div>
           <img style={{height:'400px'}} to='/project2' src={project2} alt="" />
           <img style={{height:'400px'}} to='project3' src={project3} alt="" />
        </div> */}
            <h2 className='text-3xl text-center' style={{color:'gray'}}>What I Provide</h2>
            <h1 className='text-5xl font-semibold text-center my-4' style={{color:'#FF621A'}}>My Services</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6'>
                {
                    service.map(serviceData=><ServiceData
                    key={serviceData.id}
                    serviceData={serviceData}
                    ></ServiceData>)
                }
            </div>

            
        </div>
    );
};

export default Service;