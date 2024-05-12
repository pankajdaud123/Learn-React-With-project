import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu,X } from 'lucide-react';
const Navlinks = () => {
  return (
    <div className="hidden justify-between items-center  w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="text-orange-700"
            className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="text-orange-700"
            className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="text-orange-700"
            className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/github"
            activeClassName="text-orange-700"
            className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
          >
            Github
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

function NavCompo() {
 const [isOpen , setIsOPen] = useState(false);


const handlebtn  = ()=>{

    setIsOPen(!isOpen);
}

  return (
    <>
    <div >
      <Navlinks />
    </div>
   <div>
     <button className='fixed top-10 right-10 z-50  text-black hover:text-slate-600 w-8 h-8 my-1 flex items-center
      md:hidden dark:hover:text-slate-300' onClick={handlebtn}>
        {isOpen?<X/>: <Menu/>} 
     </button>
     </div>
     {isOpen && 
        (  
        <ul className="flex flex-col h-16 md:hidden mt-4 font-medium  lg:space-x-8 lg:mt-0">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="text-orange-700"
              className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="text-orange-700"
              className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="text-orange-700"
              className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              activeClassName="text-orange-700"
              className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
            >
              Github
            </NavLink>
          </li>
        </ul>
      )}
       
     </>
  );
}

export default NavCompo;