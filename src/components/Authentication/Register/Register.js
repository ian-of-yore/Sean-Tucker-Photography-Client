import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../../api/authJWT';
import registerImg from '../../../assets/register.jfif'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);
    useTitle('Sign Up');

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
            })
            .catch((err) => console.log(err))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setAuthToken(user);
            })
            .catch((err) => console.log(err))
    }


    return (
        <div className="hero bg-base-200" style={{ minHeight: "83vh" }}>
            <div className="hero-content flex md:flex-row w-10/12 mx-auto">

                <div className="w-1/3 mr-10">
                    <img src={registerImg} alt="" className='rounded-lg' style={{ height: "70vh", width: "60vw" }} />
                </div>

                <div className="card w-1/3 px-10 pt-5 shadow-2xl bg-base-100" style={{ height: "70vh" }}>
                    <h3 className='text-center text-3xl font-semibold mt-6'>Sign Up</h3>
                    <form onSubmit={handleSubmit} className="">
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
                            <p className='text-end mt-2'><small>Already have an accout? <Link to='/signin'><span className='underline'>Sign In</span></Link></small></p>
                        </div>
                        <button className='btn btn-sm w-full mt-4 border-black bg-white text-black hover:bg-blue-800 hover:text-white hover:border-0' type="submit">Sign Up</button>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-sm btn-outline mt-4'>Continue With Google <FcGoogle className='ml-2 h-5 w-5'></FcGoogle></button>
                </div>

            </div>
        </div>
    );
};

export default Register;