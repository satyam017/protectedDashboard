import { ReactNode } from "react";
import {  Navigate } from "react-router-dom";



interface PrivateRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const login = localStorage.getItem('login'); 
    return login ? <>{children}</>: <Navigate to="/" />
};

export default ProtectedRoute;
