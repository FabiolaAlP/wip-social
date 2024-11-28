import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../validation/authSchema.js";
import toast from 'react-hot-toast';

const SignUp = () => {
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({
        resolver: yupResolver(signUpSchema),
        mode: "onTouched"
    })
    const submitHandler = async (data) => {
        const { email, username, password } = data;
        try {
            const response = await signUp(email, username, password);
            toast.success(response.data.message || 'User registered successfully!', { duration: 4000, position: "top-right" });
            setTimeout(() => {
                navigate('/sign-in');
            }, 3000);
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 400) {
                    if (data.message === "All fields are required") {
                        toast.error(`Sign up failed. All fields are required. Try again later.`, { position: "top-right", duration: 4000 })
                    } else if (data.message === "Invalid email address") {
                        toast.error(`Sign up failed. Invalid email address. Try again later.`, { position: "top-right", duration: 4000 })
                    } else if (data.message === "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number") {
                        toast.error(`Sign up failed. Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number. Try again later.`, { position: "top-right", duration: 4000 })
                    }
                } else if (status === 409) {
                    toast.error(`Couldn't create account. User already registered with that email or username. Try again later. ${error.message}`, { position: "top-right", duration: 5000 });
                }
            }
            else {
                toast.error(`Couldn't create account. Try again later. ${error.message}`, { position: "top-right", duration: 5000 });
            }
        }
    }
    return (
        <div className='w-4/5 max-w-4xl p-6 mx-auto border-2 rounded-lg shadow-lg bg-white/50 dark:bg-slate-700/30 backdrop-blur-lg border-slate-300 dark:border-slate-200'>
            <form className='flex flex-col justify-center gap-10 p-2 sm:p-4' onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor="email">
                    <input className={`w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-sky-400 ${touchedFields.email && errors.email ? 'border-red-500' : touchedFields.email && !errors.email ? 'border-green-500' : 'border-none'
                        }`} type="email" placeholder='email' {...register("email")} autoComplete='email' />
                    {errors.email ? (
                        <p className="mt-2 text-xs font-medium text-red-300">
                            {errors.email.message}
                        </p>
                    ) : (
                        touchedFields.email && !errors.email && (
                            <p className="mt-2 text-xs font-medium text-green-500">Email looks good!</p>
                        )
                    )}
                </label>
                <label htmlFor="username">
                    <input className={`w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-sky-400 ${touchedFields.username && errors.username ? 'border-red-500' : touchedFields.username && !errors.username ? 'border-green-500' : 'border-none'}`} type="text" placeholder='username'{...register("username")} autoComplete='username' />
                    {errors.username ? (
                        <p className="mt-2 text-xs font-medium text-red-300">
                            {errors.username.message}
                        </p>
                    ) : (
                        touchedFields.username && !errors.username && (
                            <p className="mt-2 text-xs font-medium text-green-500">Username looks good!</p>
                        )
                    )}
                </label>
                <label htmlFor="password">
                    <input className={`w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-sky-400 ${touchedFields.password && errors.password ? 'border-red-500' : touchedFields.password && !errors.password ? 'border-green-500' : 'border-none'}`} type="password" placeholder='password' {...register("password")} autoComplete='new-password' />
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
                {/* <label htmlFor="confirmPassword">
                    <input className='w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-slate-300' type="password" placeholder='confirm password' />
                </label> */}
                <button className='block w-full p-4 mx-auto text-black border-2 rounded-lg bg-neutral-200 dark:bg-slate-800 dark:text-white border-slate-300 dark:border-slate-200 sm:w-40 hover:scale-110' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp