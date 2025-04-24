import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links=<>
       
      {/* <Link to='/'> <li><a className='link link-hover'>Home</a></li></Link>
     <Link to='/about'> <li><a className='link link-hover'>My Bookings</a></li></Link>
     
    <Link to='/blog'>  <li><a className='link link-hover'>Blogs</a></li></Link>
     <Link to='/contact'> <li><a className='link link-hover'>Contact Us</a></li></Link> */}

<div className='flex gap-3'>

  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? 'underline text-blue-600 link link-hover' : 'link link-hover'
    }
  >
    <li>Home</li>
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? 'underline text-blue-600 link link-hover' : 'link link-hover'
    }
  >
    <li>My Bookings</li>
  </NavLink>

  <NavLink
    to="/blog"
    className={({ isActive }) =>
      isActive ? 'underline text-blue-600 link link-hover' : 'link link-hover'
    }
  >
    <li>Blogs</li>
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive ? 'underline text-blue-600 link link-hover' : 'link link-hover'
    }
  >
    <li>Contact Us</li>
  </NavLink>


</div>



    </>
    return (
        
       

<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Home</a></li>
       
          <li><a>My Bookings</a></li>
      <li><a>Blogs</a></li>
      <li><a>Contact Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl rounded-l-full rounded-r-full "><img className='w-3/12' src="./src/assets/logo.png" alt="" />Phudu</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

   {links}
      
    </ul>
  </div>
  <div className="navbar-end mr-4" >
    <a className="btn btn-primary rounded-l-full rounded-r-full">Emergency</a>
  </div>

{/* <button
          type="button"
          className="  rounded-l-full rounded-r-full   bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none text-white font-medium rounded-md  shadow-sm px-4 py-2 sm:text-sm"
        >
          <small>Search Now</small>
        </button> */}





</div>




    );
};

export default Navbar;