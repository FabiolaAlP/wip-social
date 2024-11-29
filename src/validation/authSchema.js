import * as Yup from "yup";

//TO-DO: add schema for auth validation
export const signUpSchema = Yup.object().shape({
    email: Yup.string().email("must be a valid email").required("email is required."),
    username: Yup.string().min(3, "username should have at least 3 characters")
        .matches(/^[a-zA-Z0-9_.]+$/, "Username can only contain letters, numbers, underscores, or dots.")
        .required("username is required."),
    password: Yup.string().min(8, "Password must be at least 8 characters long.")
        .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
        .matches(/[a-z]/, "Password must include at least one lowercase letter.")
        .matches(/[0-9]/, "Password must include at least one number.")
        .required("password is required.")
})

export const signInSchema = Yup.object().shape({
    emailOrUsername: Yup.string()
        .test(
            "emailOrUsername",
            "Please enter a valid email or username.",
            async (value) => {
                if (!value) return false;
                const isEmailValid = await Yup.string()
                    .email("Must be a valid email.")
                    .isValid(value);

                const isUsernameValid = await Yup.string()
                    .matches(/^[a-zA-Z0-9_.]+$/, "Username can only contain letters, numbers, underscores, or dots.")
                    .isValid(value);

                return isEmailValid || isUsernameValid;
            }
        ).required("Field is required."),
    password: Yup.string().required("Password is required")
});