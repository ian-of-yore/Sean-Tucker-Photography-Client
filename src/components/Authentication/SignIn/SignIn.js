import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signInImg from '../../../assets/SignIn.jfif'
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignIn = () => {
    const { userLogIn, googleSignIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogIn(email, password)
            .then((result) => {
                console.log(result.user);
                form.reset();
            })
            .catch((err) => console.log(err))
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
            })
            .catch((err) => console.log(err))
    }


    return (
        <div className="hero bg-base-200" style={{ minHeight: "83vh" }}>
            <div className="hero-content flex md:flex-row-reverse w-10/12 mx-auto">

                <div className="w-1/3 ml-10">
                    <img src={signInImg} alt="" className='rounded-lg' style={{ height: "70vh", width: "60vw" }} />
                </div>

                <div className="card flex-shrink-0 w-1/3 px-10 shadow-2xl bg-base-100 pt-16" style={{ height: "70vh" }}>
                    <h3 className='text-center text-3xl font-semibold mt-4'>Sign In</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <div className='flex justify-between mt-2'>
                                <p><small className='hover:underline'><Link>Forgot Password?</Link></small></p>
                                <p className='text-end'><small>New here? <Link to='/register'><span className='underline'>Sign Up</span></Link></small></p>
                            </div>
                        </div>
                        <button className='btn btn-sm w-full mt-4 border-black bg-white text-black hover:bg-blue-800 hover:text-white hover:border-0' type="submit">Sign In</button>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-sm btn-outline mt-4'>Continue With Google <FcGoogle className='ml-2 h-5 w-5'></FcGoogle></button>
                </div>

            </div>
        </div>
    );
};

export default SignIn;