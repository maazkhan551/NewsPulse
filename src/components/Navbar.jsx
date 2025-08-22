import React, { Component } from 'react';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo / Brand */}
            <a href="/" className="text-2xl font-bold text-blue-600">
              NewsPulse
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="/categories" className="text-gray-700 hover:text-blue-600">Categories</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={this.toggleMenu}>
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <a
                href="/"
                className="block text-gray-700 hover:text-blue-600"
                onClick={this.closeMenu}
              >
                Home
              </a>
              <a
                href="/categories"
                className="block text-gray-700 hover:text-blue-600"
                onClick={this.closeMenu}
              >
                Categories
              </a>
              <a
                href="/about"
                className="block text-gray-700 hover:text-blue-600"
                onClick={this.closeMenu}
              >
                About
              </a>
              <a
                href="/contact"
                className="block text-gray-700 hover:text-blue-600"
                onClick={this.closeMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
