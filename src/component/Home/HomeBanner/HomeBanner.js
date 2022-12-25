import React from 'react';

const HomeBanner = () => {
    return (
        <div className='container-fluid banner-container'>
            <div className="row home-banner d-flex align-items-center ps-5">
                <div className="col-md-6 col-sm-12 ">
                    <h1 className="fs-1 text-white fw-bold">Best Solution to all Migration matters</h1>
                    <p className="text-white py-2">Fugiat aperiam luctus hymenaeos quibusdam cumque torquent accusamus auctor minima dictumst molestias cubilia, labore laudantium inceptos</p>
                    <button className="btn btn-danger p-3">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;