import React, { useContext } from 'react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/authJWT';
import registerImg from '../../../assets/register.jfif'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {

    const { createUser, googleSignIn, loading } = useContext(AuthContext);
    const [spinner, setSpinner] = useState(true);
    useTitle('Sign Up');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // The following codes are for handling email/password based authentication system
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                form.reset();
                const user = result.user;
                setAuthToken(user);
                setSpinner(false);
                navigate(from, { replace: true })
            })
            .catch((err) => {
                setSpinner(false);
                navigate('/register')
                console.log(err)
            })
    }

    // the following code is for handling social login, in this case it's for google
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setAuthToken(user);
                navigate(from, { replace: true })
            })
            .catch((err) => {
                setSpinner(false);
                navigate('/register');
                console.log(err)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            {
                loading === true && spinner === true ?
                    <div className='flex justify-center items-center h-screen'><button className="btn loading">loading</button></div>
                    :
                    <div className="hero-content flex-col sm:flex-row-reverse">
                        <div className='hidden md:block md:w-72 lg:w-96'>
                            <img src={registerImg} alt="" className='rounded-lg md:h-[500px] w-full' />
                        </div>

                        <div className='w-80 md:w-72 lg:w-96'>
                            <div className="card flex justify-center shadow-2xl rounded-lg bg-gray-300 p-7 md:h-[500px]">
                                <h3 className='text-center text-3xl font-semibold '>Sign Up</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Username</span>
                                        </label>
                                        <input type="text" placeholder="Username" name='name' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                        <p className='text-end mb-4'><small>Already have an accout? <Link to='/signin'><span className='underline'>Sign In</span></Link></small></p>
                                    </div>
                                    <button className='btn btn-sm w-full mt-4 border-black bg-white text-black hover:bg-blue-800 hover:text-white hover:border-0' type="submit">Sign Up</button>
                                </form>
                                <button onClick={handleGoogleSignIn} className='btn btn-sm btn-outline mt-4'>Continue With Google <FcGoogle className='ml-2 h-5 w-5'></FcGoogle></button>
                            </div>
                        </div>

                    </div>
            }
        </div>
    );
};

export default Register;