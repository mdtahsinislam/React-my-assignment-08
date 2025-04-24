import React from 'react';
import {
    createBrowserRouter,
  
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';
export const router = createBrowserRouter([
    {
      path: "/",
     Component:Root,
     errorElement:<ErrorPage></ErrorPage>,
     children:[
      {
        index:true,
        path:"/",
        Component:Home
      },
      {
        path:'/about',
        Component:About
      },
      {
        path:'/blog',
        Component:Blog

      },
      {
        path:'/contact',
        Component:Contact
      },
      {
        path:'/about/:id',
        Component:DoctorDetails
      }
     ]
    },
  ]);