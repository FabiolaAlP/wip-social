import React from 'react'

const SignIn = () => {
    return (
        <div className='w-4/5 max-w-4xl p-6 mx-auto border-2 rounded-lg shadow-lg bg-white/50 dark:bg-slate-700/30 backdrop-blur-lg border-slate-300 dark:border-slate-200'>
            <form className='flex flex-col justify-center gap-10 p-2 sm:p-4'>
                <label htmlFor="email">
                    <input className='w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-slate-300' type="email" placeholder='email' />
                </label>
                <label htmlFor="password">
                    <input className='w-full py-3 rounded-lg shadow-lg indent-2 focus:outline-none focus:ring focus:ring-slate-300' type="password" placeholder='password' />
                </label>
                <button className='block w-full p-4 mx-auto text-black border-2 rounded-lg bg-neutral-200 dark:bg-slate-800 dark:text-white border-slate-300 dark:border-slate-200 sm:w-40 hover:scale-110' type='submit'>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn