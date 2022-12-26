import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const { serviceName } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Enjoy the ${serviceName}. Thank you`);
        setTimeout(() => {
            navigate('/')
        }, 7000);
    }
    return (
        <div className="container">
            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-md-12 text-center">
                    <h2 className='fw-bold'>Enjoy the <span style={{ color: "goldenrod" }}>{serviceName}</span>, Please give your information</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center mt-3">
                        <div class="form-floating mb-3 col-md-4 ">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Tanvir Hasan" required />
                            <label for="floatingInput">First Name</label>
                        </div>
                        <div class="form-floating mb-3 col-md-4">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Tanvir Hasan" required />
                            <label for="floatingInput">Last Name</label>
                        </div>
                        <div class="form-floating mb-3 col-md-4">
                            <input type="email" className="form-control" id="floatingInput" placeholder="tanvir@gmail.com" required />
                            <label for="floatingInput">Your Email</label>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center ">
                        <div class="form-floating mb-3 col-md-12">
                            <input type="text" className="form-control" id="floatingInput" placeholder=" " required />
                            <label for="floatingInput">Street</label>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center ">
                        <div class="form-floating mb-3 col-md-6">
                            <input type="text" className="form-control" id="floatingInput" placeholder=" " required />
                            <label for="floatingInput">City</label>
                        </div>
                        <div class="form-floating mb-3 col-md-6">
                            <input type="text" className="form-control" id="floatingInput" placeholder=" " required />
                            <label for="floatingInput">Zip Code</label>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center ">
                        <div class="form-floating mb-3 col-md-6">
                            <input type="text" className="form-control" id="floatingInput" placeholder=" " required />
                            <label for="floatingInput">Phone Number</label>
                        </div>
                        <div class="form-floating mb-3 col-md-6">
                            <input type="text" className="form-control" id="floatingInput" placeholder=" " required />
                            <label for="floatingInput">Country/Region</label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-danger fw-bolder p-3"
                        >Submit
                            <FontAwesomeIcon className="ps-2" icon={faMessage} required />
                        </button>
                        <ToastContainer theme="dark" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CheckOut;