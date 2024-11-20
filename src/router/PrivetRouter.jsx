import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";


const PrivetRouter = ({children}) => {
    const {user, loading}=useContext(AuthContext);

const location=useLocation();
// console.log(location);

if(loading){
    <Loading></Loading>
}

    if(user && user?.email){
        return children ;


    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
};

export default PrivetRouter;