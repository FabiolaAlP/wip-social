import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "../Footer/Footer"
import Navbar from '../Navbar/Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className='flex flex-col items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout