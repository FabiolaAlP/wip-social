import { Navigate } from "react-router-dom"
import { useAuth } from "../../Context/AuthContext"

const PrivateRoute = ({ children }) => {
    //this could change
    const { token, loading } = useAuth();
    if (loading) {
        //wait for token to be loaded
        return <div className="container p-4 bg-white rounded-lg dark:bg-slate-800 border-slate-900 dark:border-slate-200"><span className="text-black dark:text-white">Loading...</span></div>
    }
    return (
        token ? children : <Navigate to="/sign-in" />
    )
}

export default PrivateRoute