import { Navigate } from "react-router-dom"
import { useAuth } from "../../Context/AuthContext"

const PrivateRoute = ({ children }) => {
    //this could change
    const { token, loading } = useAuth();
    if (loading) {
        //wait for token to be loaded
        return <div className="container p-4 bg-gray-800 rounded-lg"><span className="text-white">Loading...</span></div>
    }
    return (
        token ? children : <Navigate to="/login" />
    )
}

export default PrivateRoute