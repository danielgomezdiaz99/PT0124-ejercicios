import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [ user, setUser ] = useState(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });

    const [ allUser, setAllUser ] = useState({
        data:{
            confirmationCode: '',
            user:{
                password: '',
                email: '',
            },
        },
    });

    const bridgeData = (state) => {
        const data = localStorage.getItem("data");
        const dataJson = JSON.parse(data);
        console.log(dataJson);
        switch (state) {
            case "ALLUSER":
                setAllUser(dataJson);
                localStorage.removeItem("data");
                break;
        
            default:
                break;
        }
    }

    const login = (data) => {
        localStorage.setItem('user', data);
        const parseUser = JSON.stringify(data);
        setUser(parseUser);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const value = useMemo(() => ({
        user,
        setUser,
        login,
        logout,
        allUser,
        setAllUser,
        bridgeData,
    }), [user, allUser]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const UserAuth = () => useContext(AuthContext);