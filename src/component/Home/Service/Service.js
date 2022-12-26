import React from 'react';
import './Service.css';

const Service = ({ service, handleServices }) => {
    const { details, id, name, image } = service;
    return (
        <div onClick={() => handleServices(id)} className='col-md-4 col-sm-6 col-12 p-2 border service'>
            <img width="80" src={image} alt="" />
            <h4 className='mt-2'>{name}</h4>
            <p className='text-muted'>{details.slice(0, 150)}</p>
        </div>
    );
};

export default Service;