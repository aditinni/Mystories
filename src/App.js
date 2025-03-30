import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Stories from './Pages/Stories';
import { Home } from './Pages/Home';
import { CommonLayout } from './CommonLayout/CommonLayout';

export const App =()=>{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CommonLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'stories', element: <Stories /> },
      ],
    },
  ], {
    basename: "/Mystories"
  });
  

  return(
    <>
  
  
  <RouterProvider router={router} />
  </>

);

   
  
}



