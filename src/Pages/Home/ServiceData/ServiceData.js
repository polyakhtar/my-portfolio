import React from 'react';

const ServiceData = ({serviceData}) => {
const {image,name,description}=serviceData;
    return (
        <div className="card lg:my-16 mx-4 shadow-lg hover:shadow-orange-600" style={{backgroundColor:'#313131',boxShadow:''}}>
  <figure className="px-10 pt-10">
    <img style={{width:'60px',height:'60px'}} src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl text-white my-2">{name}</h2>
    <p className='text-lg'style={{color:'#d0c4c4'}}>{description}</p>
    
  </div>
</div>
    );
};

export default ServiceData;