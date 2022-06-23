import { Outlet, Navigate } from "react-router-dom";
import AuthService from "../services/AuthsService";

const PrivateRoute = () => {
    const auth =  AuthService.getToken() != null;
    return auth ? <Outlet /> : <Navigate to="/acesso-negado" />;
}

export default PrivateRoute;
