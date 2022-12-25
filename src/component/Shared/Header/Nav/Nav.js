import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../../../images/logo.png';
const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-white fs-5">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="Bootstrap" width="200" height="50" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/visa">Visa</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/testimonial">Testimonial</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Nav;