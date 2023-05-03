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
import Chefs from './components/chefs/Chefs.jsx';
import ChefRecipes from './components/chefRechipes/ChefRecipes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs`)
      },
      {
        path: '/chefs',
        element: <Chefs/>,
      },
      {
        path: '/ChefRecipes',
        element: <ChefRecipes/>,
        loader: () => fetch('http://localhost:5000/chefs/')
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
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
