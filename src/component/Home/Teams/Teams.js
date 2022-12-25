import React from 'react';
import './Team.css';
import teams from '../../../FakeDaata/ProfessionalTeam.FakeData';
import Team from '../Team/Team';

const Teams = () => {
    return (
        <div className='container-fluid mt-5 p-5 bg-light'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5 col-sm-12">
                    <h6 className="fw-bold text-danger">OUR TEAM MEMBER</h6>
                    <h1>PROFESSIONAL TEAM</h1>
                </div>
                <div className="col-md-7 col-sm-12">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, curabitur dictumst diam cum ligula purus fringilla, pretium felis dapibus proin sem scelerisque. Erat per primis quis pharetra massa blandit donec fames</p>
                </div>
            </div>
            <div className="row mt-5 pt-5">
                {
                    teams.map(team => <Team
                        key={team.id}
                        team={team}
                    ></Team>)
                }
            </div>
        </div>
    );
};

export default Teams;