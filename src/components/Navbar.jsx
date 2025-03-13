import React from 'react'
import icon from "../assets/icon.avif";
const Navbar = () => {
  return (
    <nav
      id="hero"
      className="bg-black text-white px-8 md:px-16 py-4 flex justify-between items-center"
    >
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div>
          {" "}
          <img src={icon} alt="logo" className="w-14 h-ful rounded-full" />
        </div>
        <div>
          <ul className="flex space-x-8 ">
            <li>
              <a href="#hero" className="hover:text-amber-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-300">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-amber-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-amber-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-amber-300">
                Certificates
              </a>
            </li>
            
            <li>
              <a href="#contact" className="hover:text-amber-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
