import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import { ClipLoader } from 'react-spinners';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    let [color, setColor] = useState("#ffffff");
    console.log(user)

    if (loading) {
        return <ClipLoader
            color={color}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    }

    if (user) {
        return children;
    }
    
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;