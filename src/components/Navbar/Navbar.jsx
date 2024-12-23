import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTheme } from '../../Context/ThemeContext';
import { useAuth } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { token, loading, logout } = useAuth();
    useEffect(() => {
        if (!loading) {  // Only update isLoggedIn after loading finishes
            setIsLoggedIn(!!token);
        }

    }, [token, loading])
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <nav className='p-4 text-white border-b-2 shadow-lg bg-white/50 dark:bg-slate-800 border-slate-800 dark:border-slate-200'>
            <div className='container flex items-center justify-between mx-auto'>
                <Icon icon="mdi:people-group" className='w-10 h-10 text-black dark:text-white hover:animate-pulse' />
                <div className='md:hidden'>
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMenuOpen ? <Icon icon="line-md:menu-to-close-transition" className='w-8 h-8 text-black dark:text-white' /> : <Icon icon="line-md:close-to-menu-transition" className='w-8 h-8 text-black dark:text-white' />}
                    </button>
                </div>
                <div className="hidden space-x-4 md:flex md:items-center">
                    {!isLoggedIn && (
                        <>
                            <Link to="/sign-up" className="text-black dark:text-white hover:text-blue-400">Sign Up</Link>
                            <Link to="/sign-in" className="text-black dark:text-white hover:text-blue-400">Sign In</Link>
                            {theme === "dark" ? <Icon onClick={toggleTheme} icon="line-md:sun-rising-filled-loop" className='w-8 h-8 text-black dark:text-white hover:text-blue-400' /> : <Icon onClick={toggleTheme} icon="line-md:moon-rising-filled-alt-loop" className='w-8 h-8 text-black dark:text-white hover:text-blue-400' />}
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <Link to="/" className="text-black dark:text-white hover:text-blue-400">Social</Link>
                            <button className="text-black dark:text-white" onClick={logout}>Logout</button>
                            {theme === "dark" ? <Icon onClick={toggleTheme} icon="line-md:sun-rising-filled-loop" className='w-8 h-8 text-black dark:text-white hover:text-blue-400' /> : <Icon onClick={toggleTheme} icon="line-md:moon-rising-filled-alt-loop" className='w-8 h-8 text-black dark:text-white hover:text-blue-400' />}
                        </>
                    )}
                </div>
            </div>
            {isMenuOpen && (
                <MobileNavbar isLoggedIn={isLoggedIn} theme={theme} toggleTheme={toggleTheme} />
            )}
        </nav>
    )
}

export default Navbar