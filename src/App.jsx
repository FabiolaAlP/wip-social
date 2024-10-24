import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { useTheme } from './Context/ThemeContext'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900'>
        <h1 className='text-3xl text-blue-600 underline dark:text-zinc-300 hover:scale-125'>Social Media App</h1>
        {<Outlet />}
      </main>
      <Footer />
    </>
  )
}
export default App;
