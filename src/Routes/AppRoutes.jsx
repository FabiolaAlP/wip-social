import App from "../App";
import Error from "../components/Error/Error";
import HomePage from "../Pages/HomePage";
import SignIn from "../Pages/SignIn";
import { Navigate } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
const AppRoutes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { path: 'home', element: <HomePage /> },
            { path: 'sign-up', element: <SignUp /> },
            { path: 'sign-in', element: <SignIn /> },
        ],
    },
    { path: '*', element: <Navigate to="/" /> },
];

export default AppRoutes;