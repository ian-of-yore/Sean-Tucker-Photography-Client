import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../../assets/logo.jpg'

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);

    const handleUserLogOut = () => {
        userLogOut()
            .then((result) => { })
            .catch((err) => console.log(err))
    }


    return (
        <div className='bg-neutral text-neutral-content'>
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/services'>Services</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl pl-2">
                        <img src={logo} alt="" className='h-7 w-7 rounded-lg mr-2' />
                        Sean Tucker
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/services' className='font-semibold text-lg'>Services</Link></li>
                        <li><Link to='/blog' className='font-semibold text-lg'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <div>
                                <Link><button className='btn btn-ghost'>My Reviews</button></Link>
                                <Link><button className='btn btn-ghost'>Add Service</button></Link>
                                <button onClick={handleUserLogOut} className='btn btn-ghost'>Sign Out</button>
                            </div>
                            :
                            <Link to='/signin' className='btn btn-ghost'>Sign In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;