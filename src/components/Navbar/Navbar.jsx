import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTheme } from '../../Context/ThemeContext';
import { useAuth } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { isLoggedIn } = useAuth();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <nav className='p-4 text-white border-b-2 shadow-lg bg-white/50 dark:bg-slate-800 backdrop-blur-lg border-slate-800 dark:border-slate-200'>
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
                            <Link to="/sign-up" className="text-black dark:text-white">Sign Up</Link>
                            <Link to="/sign-in" className="text-black dark:text-white">Sign In</Link>
                            {theme === "dark" ? <Icon onClick={toggleTheme} icon="line-md:sun-rising-filled-loop" className='w-8 h-8 text-black dark:text-white' /> : <Icon onClick={toggleTheme} icon="line-md:moon-rising-filled-alt-loop" className='w-8 h-8 text-black dark:text-white' />}
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <Link to="/" className="text-black dark:text-white">Social</Link>
                            <button className="text-black dark:text-white">Logout</button>
                            {theme === "dark" ? <Icon onClick={toggleTheme} icon="line-md:sun-rising-filled-loop" className='w-8 h-8 text-black dark:text-white' /> : <Icon onClick={toggleTheme} icon="line-md:moon-rising-filled-alt-loop" className='w-8 h-8 text-black dark:text-white' />}
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