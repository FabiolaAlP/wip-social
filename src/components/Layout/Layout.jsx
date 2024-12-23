import { Outlet } from 'react-router-dom'
import Footer from "../Footer/Footer"
import Navbar from '../Navbar/Navbar'
import ActionsMenu from '../ActionsMenu/ActionsMenu'
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <Toaster />
            <ActionsMenu />
            <main className='flex flex-col items-center justify-center flex-grow bg-neutral-200 dark:bg-slate-900'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout