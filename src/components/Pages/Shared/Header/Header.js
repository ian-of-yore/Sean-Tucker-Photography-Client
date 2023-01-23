import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);

    const handleUserLogOut = () => {
        userLogOut()
            .then((result) => { })
            .catch((err) => console.log(err))
    }


    return (
        <div className='bg-gray-800 text-neutral-content'>
            <div className="navbar px-0 md:px-6 lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-gray-700 rounded-r-lg w-32">
                            <li><Link to='/services' className='btn btn-sm mb-1'>Courses</Link></li>
                            <Link to='/myreviews'><button className='btn btn-sm w-full mb-1'>My Reviews</button></Link>
                            <li><Link to='/blog' className='btn btn-sm mb-1'>Blog</Link></li>
                            <li><Link to='/aboutUs' className='btn btn-sm mb-1'>About Us</Link></li>
                            {
                                user?.email ?
                                    <>
                                        <Link to='/addservice'><button className='btn btn-sm w-full mb-1'>Add Service</button></Link>
                                        <button onClick={handleUserLogOut} className='btn btn-sm w-full mb-1'>Sign Out</button>
                                    </>
                                    :
                                    <Link to='/signin' className='btn btn-sm w-full mb-1'>Sign In</Link>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl pl-0 md:pl-4">
                        Sean Tucker Photography
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex lg:justify-end">
                    <Link to='/services' className='font-semibold text-lg'><button className='btn btn-ghost'>Courses</button></Link>
                    <Link to='/myreviews'><button className='btn btn-ghost'>My Reviews</button></Link>
                    <Link to='/blog' className='font-semibold text-lg'><button className='btn btn-ghost'>Blog</button></Link>
                    <Link to='/aboutUs' className='font-semibold text-lg'><button className='btn btn-ghost'>About Us</button></Link>
                    {
                        user?.email ?
                            <>
                                <Link to='/addservice' className='font-semibold text-lg'><button className='btn btn-ghost'>Add Service</button></Link>
                                <button onClick={handleUserLogOut} className='btn btn-ghost'>Sign Out</button>
                            </>
                            :
                            <Link to='/signin' className='btn btn-ghost'>Sign In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;