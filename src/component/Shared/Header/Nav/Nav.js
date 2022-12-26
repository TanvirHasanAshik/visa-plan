import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../../../images/logo.png';
import auth from '../../../../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
const Nav = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    console.log(user)
    return (
        <nav className="navbar navbar-expand-lg bg-white fs-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Bootstrap" width="200" height="50" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <p className='fw-bold nav-link text-secondary'>{user?.displayName || user?.email}</p>
                        </li>
                        <li className="nav-item">
                            <img width="60" className='nav-link rounded-circle' src={user?.photoURL} alt="" />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/visa">Visa</Link>
                        </li>
                        <li className="nav-item">
                            {user ? <button onClick={() => signOut()} className="btn btn-danger nav-link">Log Out</button>
                                : <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Nav;