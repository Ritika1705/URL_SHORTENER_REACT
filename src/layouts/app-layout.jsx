import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'

const AppLayout = () => {
  return (
    <div className="min-h-screen">
        <main className='min-h-screen container'>
            <Header/>
            <Outlet/>
        </main>
        <div className='p-10 text-center bg-gray-800 mt-10'>
            Copyright @Ritika_Mandal
        </div>
    </div>
  )
}

export default AppLayout