import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <Link to='/'>Sean Tucker</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link>Sign In</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;