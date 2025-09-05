import React, { useState } from 'react';
import {Link} from "react-router-dom"
 const Navbar = ()=> {
  const [isOpen,setisOpen] = useState(false);
  let toggleMenu = () => {
    setisOpen((prev)=> !prev);
  };

  const closeMenu = () => {
     setisOpen(false);
  };

    return (
      <nav className="bg-white shadow-md  w-full top-0 left-0 z-50 fixed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo / Brand */}
            <Link to="/" className="text-2xl font-bold text-blue-600">
              NewsPulse
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/business" className="text-gray-700 hover:text-blue-600">Business</Link>
              <Link to="/entertainment" className="text-gray-700 hover:text-blue-600">Entertainment</Link>
              <Link to="/general" className="text-gray-700 hover:text-blue-600">General</Link>
              <Link to="/health" className="text-gray-700 hover:text-blue-600">Health</Link>
              <Link to="/science" className="text-gray-700 hover:text-blue-600">Science</Link>
              <Link to="/sports" className="text-gray-700 hover:text-blue-600">Sports</Link>
              <Link to="/technology" className="text-gray-700 hover:text-blue-600">Technology</Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-600"
                onClick={ closeMenu}
              >
                Home
              </Link>
              <Link
                to="/business"
                className="block text-gray-700 hover:text-blue-600"
                onClick={ closeMenu}
              >
                business
              </Link>
              <Link
                to="/entertainment"
                className="block text-gray-700 hover:text-blue-600"
                onClick={ closeMenu}
              >
                entertainment
              </Link>
              <Link
                to="/general"
                className="block text-gray-700 hover:text-blue-600"
                onClick={ closeMenu}
              >
                general
              </Link>
              <Link
                to="/health"
                className="block text-gray-700 hover:text-blue-600"
                onClick={ closeMenu}
              >
                health
              </Link>
              <Link
                to="/science"
                className="block text-gray-700 hover:text-blue-600"
                onClick={ closeMenu}
              >
                science
              </Link>
              <Link
                to="/sports"
                className="block text-gray-700 hover:text-blue-600"
                onClick={ closeMenu}
              >
                sports
              </Link>
              <Link
                to="/technology"
                className="block text-gray-700 hover:text-blue-600"
                onClick={ closeMenu}
              >
                technology
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
}

export default Navbar;
