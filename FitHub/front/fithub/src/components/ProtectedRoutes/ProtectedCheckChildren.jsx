import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/authContext";


export const ProtectedCheckChildren = ({ children }) => {
    const { allUser, user } = UserAuth();
    if (allUser?.data?.user?.check == true || user?.check == true) {
        return <Navigate to="/dashboard" />;
    }
    if (user == null && allUser.data.confirmationCode === "") {
        return <Navigate to="/login" />;
    }
    return children;
};

