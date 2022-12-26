import React from 'react';
import './Login.css';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className="login container mt-5 ">
            <div className="row d-flex justify-content-center text-center">
                <h1 className='text-muted pb-3'>Please Login</h1>
                <div className="col-md-3 mt-2">
                    <button onClick={() => signInWithGoogle()} className="btn btn-secondary w-100">Google Login</button>
                </div>
                <div className="col-md-3 mt-2">
                    <button onClick={() => signInWithFacebook()} className="btn btn-primary w-100">Facebook Login</button>

                </div>
                <div className="col-md-3 mt-2">
                    <button onClick={() => signInWithGithub()} className="btn btn-dark w-100">GitHub Login</button>

                </div>
            </div>
        </div >
    );
};

export default Login;