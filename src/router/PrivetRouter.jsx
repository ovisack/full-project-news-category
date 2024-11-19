import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";


const PrivetRouter = ({children}) => {
    const {user, loading}=useContext(AuthContext);
if(loading){
    <Loading></Loading>
}

    if(user && user?.email){
        return children ;


    }
    return <Navigate to={"/auth/login"}></Navigate>
};

export default PrivetRouter;