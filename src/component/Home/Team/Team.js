import React from 'react';
import './Team.css';
const Team = ({ team }) => {
    const { name, status, image } = team;
    return (
        <div className="col-md-3 col-sm-6 text-center">
            <img className='w-100' src={image} alt="" />
            <h6 className="fw-bold mt-2 text-danger">{name}</h6>
            <p>{status}</p>
        </div>
    );
};

export default Team;