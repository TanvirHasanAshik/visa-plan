import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import countries from '../../FakeDaata/Country.FakeData';
import './CountryDetails.css';

const CountryDetails = () => {
    const { countryId } = useParams();
    const details = countries.find(country => country.id === parseInt(countryId));
    console.log(details && details);
    return (
        <div className='container'>
            <div className="row d-flex align-items-center">
                <div className="col-md-5 col-sm-12">
                    <img src={details?.image} className="w-100" alt="" />
                </div>
                <div className="col-md-5">
                    <h1 className='text-muted fw-bold'>{details?.name}</h1>
                    <p className="mt-4">{details?.description}</p>
                    <button className="btn btn-danger">
                        APPLY NOW <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;