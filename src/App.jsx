import { RouterProvider, Routes, createBrowserRouter, Route } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import './App.css'
import { Button } from './components/ui/button'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Link from './pages/link'
import RedirectLink from './pages/redirect-link'
import UrlProvider from './pages/context'
import RequireAuth from './pages/require-auth'


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: (
          <RequireAuth>
              <LandingPage/>
          </RequireAuth>
        )
      },
      {
        path: '/dashboard',
        element: (
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        )
      },
      {
        path: '/auth',
        element: (
          <Auth/>
        )
      },
      {
        path: '/link/:id',
        element: (
          <RequireAuth>
            <Link/>
          </RequireAuth>
        )
      },
      {
        path: '/:id',
        element: (
          <RequireAuth>
            <RedirectLink/>
          </RequireAuth>
        )
      }
    ]
  }
])
function App() {

  return (
    <>
      <UrlProvider>
          <RouterProvider router={router}/>
      </UrlProvider>
    </>
  )
}

export default App
