import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/authContext";

export const Protected = ({children}) => {
  
    const {user} = UserAuth();
    if(user == null || user?.check == false){
        return <Navigate to='/login'/>
    }
    return children
}
