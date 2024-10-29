import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

const MobileNavbar = ({ toggleTheme, isLoggedIn, theme }) => {

    return (
        <div className="absolute left-0 w-full p-6 text-black bg-white dark:text-white dark:bg-slate-800 top-16 md:hidden">
            <div className="flex flex-col items-center space-y-4">
                {!isLoggedIn && (
                    <>
                        <Link to="/sign-up" className="hover:text-blue-400">Sign Up</Link>
                        <Link to="/sign-in" className="hover:text-blue-400">Sign In</Link>
                        {theme === "dark" ? <Icon onClick={toggleTheme} icon="line-md:sun-rising-filled-loop" className='w-8 h-8 text-black dark:text-white' /> : <Icon onClick={toggleTheme} icon="line-md:moon-rising-filled-alt-loop" className='w-8 h-8 text-black dark:text-white' />}
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <Link to="/" className="hover:text-blue-400">Social</Link>
                        <button className="hover:text-blue-400">Logout</button>
                        {theme === "dark" ? <Icon onClick={toggleTheme} icon="line-md:sun-rising-filled-loop" className='w-8 h-8 text-black dark:text-white' /> : <Icon onClick={toggleTheme} icon="line-md:moon-rising-filled-alt-loop" className='w-8 h-8 text-black dark:text-white' />}
                    </>
                )}
            </div>
        </div>
    )
}

export default MobileNavbar