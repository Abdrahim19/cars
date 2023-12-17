import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Applayout from './layout/Applayout'
import ErrorBoundary from './components/commen/ErrorBoundary'
import Home from './pages/Home/Home'
import Authlayout from './layout/Authlayout'
import Login from './pages/auth/Login'
import Rigister from './pages/auth/Rigister'
import Carpage from './pages/carPage/Carpage'

const router = createBrowserRouter([
  {element:<Applayout /> , path: '/' , errorElement:<ErrorBoundary />  , 
children:[
  {path:'/' , element:<Home />}
]},
{element:<Authlayout /> , path: 'connexion' , errorElement:<ErrorBoundary />  , 
children:[
  {path:'' , element:<Login />},
  {path:'rigster' , element:<Rigister />},
]},
{element:<Carpage /> , path: 'carPage'},

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
