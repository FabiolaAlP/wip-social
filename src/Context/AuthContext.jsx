import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("authToken"));
    const [loading, setIsLoading] = useState(true);
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
        setIsLoading(false);
    }, [token]);
    const signUp = async (email, username, password) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/sign-up`, { email, username, password });
            return response;
        } catch (error) {
            throw error;
        }
    }
    const signIn = async (emailOrUsername, password) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/sign-in`, { emailOrUsername, password });
            const token = response.data.token;
            const username = response.data.username;
            setToken(token);
            localStorage.setItem("authToken", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            return response;
            // toast.success(`Successfully logged in !Welcome ${ user }`, { position: "top-right", duration: 4000 });
        } catch (error) {
            console.error(error.message);
            throw error;
            // toast.error(`Login Failed.Try again later.${ error.message }`, { position: "top-right", duration: 5000 })
        }
    }
    const logout = () => {
        setToken(null);
        localStorage.removeItem("authToken");
        delete axios.defaults.headers.common["Authorization"];
        toast.success("Successfully logged out!", { position: "top-right", duration: 4000 })
    }
    return (
        <AuthContext.Provider value={{ token, loading, logout, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}