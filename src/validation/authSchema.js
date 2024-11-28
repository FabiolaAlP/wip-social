import * as Yup from "yup";

//TO-DO: add schema for auth validation
export const signUpSchema = Yup.object().shape({
    email: Yup.string().email("must be a valid email").required("email is required."),
    username: Yup.string().min(3, "username should have at least 3 characters").required("username is required."),
    password: Yup.string().min(8, "Password must be at least 8 characters long.").required("password is required.")
})