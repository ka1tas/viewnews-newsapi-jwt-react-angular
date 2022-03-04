import React  from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';



const AuthenticatedRoute = ({ children }) => {
    let user = useSelector(state => state.user);
    let auth = (user.authStatus && !user.isblocked);

    if (!auth) {
        return <Navigate to="/login"  />;
    }

    return children;
}

export default AuthenticatedRoute;