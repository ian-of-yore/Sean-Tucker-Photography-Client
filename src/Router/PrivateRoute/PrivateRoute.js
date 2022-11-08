import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading === true) {
        return <div className='flex justify-center items-center' style={{ height: "83vh" }}>
            <button className="btn loading">loading</button>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }}></Navigate>
};

export default PrivateRoute;