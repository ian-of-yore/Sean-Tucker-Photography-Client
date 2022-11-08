import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import registerImg from '../../../assets/register.jfif'

const Register = () => {
    return (
        <div className="hero bg-base-200" style={{ minHeight: "83vh" }}>
            <div className="hero-content flex md:flex-row w-10/12 mx-auto">

                <div className="w-1/3 mr-10">
                    <img src={registerImg} alt="" className='rounded-lg' style={{ height: "70vh", width: "60vw" }} />
                </div>

                <div className="card flex-shrink-0 w-1/3 shadow-2xl bg-base-100" style={{ height: "70vh" }}>
                    <h3 className='text-center text-3xl font-semibold mt-6'>Sign Up</h3>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Username" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            <p className='text-end mt-2'><small>Already have an accout? <Link to='/signin'><span className='underline'>Sign In</span></Link></small></p>
                        </div>
                        <button className='btn btn-sm w-full mt-4 border-black bg-white text-black hover:bg-blue-800 hover:text-white hover:border-0' type="submit">Sign Up</button>
                        <button className='btn btn-sm btn-outline'>Continue With Google <FcGoogle className='ml-2 h-5 w-5'></FcGoogle></button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;