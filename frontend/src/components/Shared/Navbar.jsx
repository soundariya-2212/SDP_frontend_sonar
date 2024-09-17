


import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { LibraryBig } from 'lucide-react';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Sign Up",
      path: "/signup"
    },
    {
      title: "Sign In",
      path: "/signin"
    },
    {
      title: "Courses",
      path: "/courses"
    }
  ];

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  const listItemStyle = {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-sm bg-blue-300 dark:bg-teal-800 z-50">
      <div className="w-1/4 h-full text-black font-bold flex justify-start items-center text-lg dark:text-white">
        <LibraryBig className='h-6 w-6 mr-2 text-black dark:text-white' />
        LEARNERS
      </div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-9'>
        {
          NavLinks.map((links, index) => (
            <li key={index} style={listItemStyle}>
              <NavLink
                to={links.path}
                style={linkStyle}
                className={({ isActive }) =>
                  `text-black dark:text-white ${isActive ? 'font-bold' : ''}`
                }
              >
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <div>
           <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
