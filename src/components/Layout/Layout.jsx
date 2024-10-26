import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "../Footer/Footer"
import Navbar from '../Navbar/Navbar'

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex flex-col items-center justify-center flex-grow bg-slate-100 dark:bg-slate-900'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout