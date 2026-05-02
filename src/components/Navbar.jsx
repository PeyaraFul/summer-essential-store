"use client";

import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {

  return (
    <>
    
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
           <RxHamburgerMenu/>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/products'>Products</Link>
            </li>          
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href='/'>Home</Link>
          </li>
          
          <li>
            <Link href='/products'>Products</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">



        <a href=""><FaRegUserCircle /></a>
        <a className="btn">Sign In</a>
     

      </div>
    </div>




    </>
  );
};

export default Navbar;
