import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='flex flex-col items-center justify-center w-full border-t-2 bg-white/50 dark:bg-slate-800 h-14 sm:h-16 border-slate-800 dark:border-slate-200'>
            <span className='text-lg font-bold text-black dark:text-white'>
                {year}
            </span>
        </footer>
    )
}

export default Footer