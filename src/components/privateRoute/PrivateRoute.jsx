import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner animation="border" variant="secondary" className="position-absolute top-50 start-50"/>
    }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;