import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Blog from './component/blog/Blog.jsx';
import Login from './component/login/Login.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/home/Home.jsx'


const router =  createBrowserRouter([

  {
    path: '/',
    element:  <App />,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
