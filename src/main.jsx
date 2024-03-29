import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Blog from './component/blog/Blog.jsx';
import Login from './component/login/Login.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/home/Home.jsx'
import AuthProvider from './authProvider/AuthProvider.jsx';
import ChefDetails from './component/chefDetails/ChefDetails.jsx';
import Register from './component/register/Register.jsx';
import PrivateRoute from './component/privateRoute/PrivateRoute.jsx';
import ErrorPage from './component/errorPage/ErrorPage.jsx';



const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://skychef-server-hparvez307.vercel.app/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
