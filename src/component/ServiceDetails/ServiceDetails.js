import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import services from '../../FakeDaata/Service.FakeData';

const ServiceDetails = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const details = services.find(service => service.id === parseInt(serviceId));

    const handleService = (service) => {
        navigate(`/enjoyService/checkOut/${details?.name}`)
    }

    return (
        <div className='container'>
            <div className="row g-5  d-flex justify-content-space-around">
                <div className="col-md-4">
                    <img src={details?.image} className="img-responsive w-100" alt="" />
                </div>
                <div className="col-md-8 mt-5 pt-5">
                    <h1 className="fw-bolder">{details?.name}</h1>
                    <p className="text-success">{details?.details}</p>
                    <button onClick={handleService} className="btn btn-danger p-3">Enjoy the service
                        <img className="mx-2" width="30" src={details?.image} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;