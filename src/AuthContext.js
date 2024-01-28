import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    auth: null,
    setAuth: () => {},
    user: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const isAuth = async () => {
    //         try {
    //             // const res = await axios.get(
    //             //   'http://localhost:5000/api/logged-user/',
    //             //   { withCredentials: true }
    //             // );

    //             setUser(auth);
    //         } catch (error) {
    //             setUser(null);
    //         }
    //     };

    //     isAuth();
    // }, [user]);

    return (
        <AuthContext.Provider value={{ setUser, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
