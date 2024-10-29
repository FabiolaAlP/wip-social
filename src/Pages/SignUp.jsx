import React from 'react'

const SignUp = () => {
    return (
        <div className='w-4/5 max-w-4xl p-6 mx-auto border-2 rounded-lg bg-slate-300/20 dark:bg-stone-400/20 backdrop-blur-lg border-slate-600 dark:border-slate-300'>
            <form className='flex flex-col justify-center gap-10 p-2 sm:p-4'>
                <label htmlFor="email">
                    <input className='w-full py-2 rounded-lg indent-2' type="email" placeholder='email' />
                </label>
                <label htmlFor="password">
                    <input className='w-full py-2 rounded-lg indent-2' type="password" placeholder='password' />
                </label>
                <label htmlFor="confirmPassword">
                    <input className='w-full py-2 rounded-lg indent-2' type="password" placeholder='confirm password' />
                </label>
                <button className='block w-full p-4 mx-auto text-black border-2 rounded-lg bg-slate-300 dark:bg-slate-800 dark:text-white border-slate-800 dark:border-slate-300 sm:w-40' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp