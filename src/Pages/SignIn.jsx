import { useAuth } from '../Context/AuthContext'
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../validation/authSchema.js";
import toast from 'react-hot-toast';

const SignIn = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({
        resolver: yupResolver(signInSchema),
        mode: "onTouched"
    })
    const submitHandler = async (data) => {
        const { emailOrUsername, password } = data;
        try {
            const response = await signIn(emailOrUsername, password);
            const username = response.data.username;
            toast.success(`Welcome, ${username}`, { position: "top-right", duration: 4000 });
            setTimeout(() => {
                navigate("/feed")
            }, 3000)
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 400) {
                    toast.error(`Login failed. All fields are required. Try again.`, { position: 'top-right', duration: 4000 })
                } else if (status === 401) {
                    toast.error(`Login failed. Invalid credentials. Incorrect password. Try again.`, { position: 'top-right', duration: 4000 })
                }
                else if (status === 404) {
                    toast.error(`Login failed. Invalid credentials. User with that email or username doesn't exist.Try again.`, { position: 'top-right', duration: 4000 })
                }
            } else {
                toast.error(`Login Failed. Try again later. ${error.message}`, { position: "top-right", duration: 5000 });
            }
        }
    }
    return (
        <div className='w-4/5 max-w-4xl p-6 mx-auto border-2 rounded-lg shadow-lg bg-white/50 dark:bg-slate-700/30 backdrop-blur-lg border-slate-300 dark:border-slate-200'>
            <form className='flex flex-col justify-center gap-10 p-2 sm:p-4' onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor="emailOrUsername">
                    <input className={`w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-sky-400 ${touchedFields.email && errors.email ? 'border-red-500' : touchedFields.email && !errors.email ? 'border-green-500' : 'border-none'
                        }`} type="text" placeholder='email or username' {...register("emailOrUsername")} autoComplete='emailOrUsername' />
                    {errors.emailOrUsername ? (
                        <p className="mt-2 text-xs font-medium text-red-300">
                            {errors.emailOrUsername.message}
                        </p>
                    ) : (
                        touchedFields.emailOrUsername && !errors.emailOrUsername && (
                            <p className="mt-2 text-xs font-medium text-green-500">Credentials look good!</p>
                        )
                    )}
                </label>
                <label htmlFor="password">
                    <input className={`w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-sky-400 ${touchedFields.password && errors.password ? 'border-red-500' : touchedFields.password && !errors.password ? 'border-green-500' : 'border-none'}`} type="password" placeholder='password' {...register("password")} autoComplete='password' />
                    {errors.password ? (
                        <p className="mt-2 text-xs font-medium text-red-300">
                            {errors.password.message}
                        </p>
                    ) : (
                        touchedFields.password && !errors.password && (
                            <p className="mt-2 text-xs font-medium text-green-500">Password looks good!</p>
                        )
                    )}
                </label>
                <button className='block w-full p-4 mx-auto text-black border-2 rounded-lg bg-neutral-200 dark:bg-slate-800 dark:text-white border-slate-300 dark:border-slate-200 sm:w-40 hover:scale-110' type='submit'>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn