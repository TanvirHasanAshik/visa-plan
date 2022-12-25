import React from 'react';
import './Consultation.css';
import consultation from '../../../images/CONSULTATION.jpg';
const Consultation = () => {
    return (
        <div className="container">
            <div className="row mt-5 consultation p-5 text-center">
                <div className="col-md-5 col-sm-12">
                    <img className='w-100' src={consultation} alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <h1 className="fw-bold text-white">FREE CONSULTATION</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit, curabitur dictumst diam cum ligula purus fringilla, pretium felis dapibus proin sem scelerisque. Erat per primis quis pharetra massa blandit donec fames</p>
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Consultation;