import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import SingleBlog from './Pages/SingleBlog.jsx';
import Content from './Components/Content.jsx';
import ContentPage from './Pages/ContentPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({params}) => fetch(`http://localhost:3000/blogs/${params.id}`)
      },
      {
        path : "/desi-webseries",
        element: <ContentPage/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
