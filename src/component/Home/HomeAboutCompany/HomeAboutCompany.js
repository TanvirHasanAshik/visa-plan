import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import homeAbout from '../../../images/homeAbout.jpg';
import { faArrowRight, faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'
const HomeAboutCompany = () => {
    return (
        <div className='container mb-5 pb-5'>
            <div className="row mt-5">
                <div className="col-md-5 col-sm-12 col-12">
                    <img src={homeAbout} className='w-100' alt="" />
                </div>
                <div className="col-md-6 col-sm-12 col-12 ms-5">
                    <h4 className="text-danger fw-bolder">About Company</h4>
                    <h2 className="mt-5">We Provide The Best Way To
                        Success Your Migration</h2>
                    <p className="mt-3 text-dark">Fugiat aperiam luctus hymenaeos quibusdam cumque torquent accusamus auctor minima dictumst molestias cubilia, labore laudantium inceptos</p>

                    <div className="border-start border-danger">
                        <p className="pb-2 ms-3"><FontAwesomeIcon className='me-2' icon={faCheckCircle} /> Free Assessment</p>
                        <p className="pb-2 ms-3"><FontAwesomeIcon className='me-2' icon={faCheckCircle} />Points Calculate</p>
                        <p className="pb-2 ms-3"><FontAwesomeIcon className='me-2' icon={faCheckCircle} />Book Appointment</p>
                        <p className="pb-2 ms-3"><FontAwesomeIcon className='me-2' icon={faCheckCircle} />Registered Immigration Officer </p>
                    </div>
                    <button className="btn btn-danger p-3 mt-2">
                        Apply Now
                        <FontAwesomeIcon className='ps-2' icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutCompany;