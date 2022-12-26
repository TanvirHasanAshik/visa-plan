import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import countries from '../../../FakeDaata/Country.FakeData';
import Country from '../Country/Country';
import './CountryList';

const CountryList = () => {
    const navigate = useNavigate();
    const handleCountryDetails = (id) => {
        navigate("countryDetails/" + id)
    }
    return (
        <div className='container country-list text-center'>
            <div className="row d-flex justify-content-center mb-4">
                <div className="col-md-10 text-center mb-4">
                    <h4 className="text-danger">COUNTRY LIST</h4>
                    <h1 className="p-3">CHOOSE YOUR COUNTRY</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, curabitur dictumst diam cum ligula purus fringilla, pretium felis dapibus proin sem scelerisque. Erat per primis quis pharetra massa blandit donec fames</p>
                </div>
            </div>
            <div className="row g-2 mb-5">
                {
                    countries.map(country => <Country
                        key={country.id}
                        country={country}
                        handleCountryDetails={handleCountryDetails}
                    ></Country>)
                }

            </div>
            <button className="btn btn-danger mb-5">More Countries
                <FontAwesomeIcon className="ps-2" icon={faArrowRight} />
            </button>
        </div>
    );
};

export default CountryList;