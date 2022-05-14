import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    // reload problem and add loading sppiner
    if (loading) {
        return <div>
            <h1 className='text-center'><div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                </div>
            </div></h1>
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;