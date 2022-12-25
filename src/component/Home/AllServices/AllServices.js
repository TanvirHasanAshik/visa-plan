import React from 'react';
import services from '../../../FakeDaata/Service.FakeData';
import Service from '../Service/Service';
import './AllServices.css';

const AllServices = () => {
    return (
        <div className='container mt-5 pt-2'>
            <div className="row text-center d-flex justify-content-center">
                <div className="col-md-10 col-sm-12">
                    <h6 className="fw-bold text-danger">WHAT WE OFFER</h6>
                    <h1 className="fw-bold mt-3">OUR SERVICES</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit, curabitur dictumst diam cum ligula purus fringilla, pretium felis dapibus proin sem scelerisque. Erat per primis quis pharetra massa blandit donec fames</p>
                </div>
            </div>
            <div className="row text-center mt-5 mb-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AllServices;