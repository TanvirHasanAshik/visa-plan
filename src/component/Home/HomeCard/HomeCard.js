import React from 'react';

const HomeCard = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 header-card bg-primary text-white me-2">
                    <h2>For All Vias</h2>
                    <p>Fugiat aperiam luctus hymenaeos</p>
                </div>
                <div className="col-md-2 header-card bg-primary text-white me-2">
                    <h2>Consulting</h2>
                    <p>Fugiat aperiam luctus hymenaeos</p>
                </div>
                <div className="col-md-2 header-card bg-primary text-white me-2">
                    <h2>PR/TR</h2>
                    <p>Fugiat aperiam luctus hymenaeos</p>
                </div>
                <div className="col-md-2 header-card bg-danger text-white me-2">
                    <h2>Notes</h2>
                    <p>Fugiat aperiam luctus hymenaeos</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;