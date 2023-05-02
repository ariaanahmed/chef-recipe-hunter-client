import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './authProvider/AuthProvider.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/login/Login.jsx';
import Blogs from './components/blogs/Blogs.jsx'
import Registration from './components/registration/Registration.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/registration',
        element: <Registration/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
