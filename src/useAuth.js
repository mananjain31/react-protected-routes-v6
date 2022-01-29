import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const useAuth = () => {
    const [auth, setAuth] = React.useState(false);
    const login = callback => {
        setAuth(true);
        callback();
    }
    const logout = callback => {
        setAuth(false);
        callback();
    }
    const RequireAuth = ({redirectTo, children}) => {
        const location = useLocation();
        return auth ? children : <Navigate to={redirectTo} state={{ from: location }} />;
    }
    return {auth, login, logout, RequireAuth};
}
export default useAuth;