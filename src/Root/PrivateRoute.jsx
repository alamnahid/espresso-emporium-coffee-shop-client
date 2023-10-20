import { useContext } from "react";
import { AuthContext } from "../Components/Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div className="text-center mt-96"><span className="loading loading-lg loading-spinner text-success "></span></div>
    }
    if(user){
        return children;
    }
    
    return (
        <Navigate state={location.pathname} to='/login'>

        </Navigate>
    );
};

export default PrivateRoute;