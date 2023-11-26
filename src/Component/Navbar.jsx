import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='rounded-md bg-slate-900 h-16 flex justify-between items-center'>
      <div className='flex gap-4 justify-end text-white md:mr-24 mr-3 items-center' style={{ margin: 'auto' }}>
        <NavLink  to='/' >
          <li className='py-5 md:mx-5 text-white font-semibold md:text-xl cursor-pointer list-none'>
            <span className='underlinebtn-word'>Home</span>
          </li>
        </NavLink>
        <NavLink to='/about' >
          <li className='py-5 md:mx-5 text-white font-semibold md:text-xl cursor-pointer list-none'>
            <span className='underlinebtn-word'>About</span>
          </li>
        </NavLink>
        <NavLink to='/projects' >
          <li className='py-5 md:mx-5 text-white font-semibold md:text-xl cursor-pointer list-none'>
            <span className='underlinebtn-word'>Projects</span>
          </li>
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-5 md:mx-5 text-white font-semibold md:text-xl cursor-pointer list-none'>
            <span className='underlinebtn-word'>Contact</span>
          </li>
        </NavLink>
      </div>
    </nav>
  );
};
