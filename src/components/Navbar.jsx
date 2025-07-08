import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/Logo-P.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Desktop */}
      <div className="flex justify-around items-center px-10 py-4 text-white">
        <img src={Logo} alt="Logo P" className="h-30"></img>

        {/* Menu Desktop (original) */}
        <ul className="hidden md:flex gap-6 font-bold">
          <li className="cursor-pointer text-indigo-700 rounded-full px-4">
            Home
          </li>
          <li className="cursor-pointer hover:bg-indigo-700 rounded-full px-4">
            <a href="#about">About me</a>
          </li>
          <li className="cursor-pointer hover:bg-indigo-700 rounded-full px-4">
            <a href="#Skills">Skills</a>
          </li>
          <li className="cursor-pointer hover:bg-indigo-700 rounded-full px-4">
            <a href="#projects">Projects</a>
          </li>
        </ul>

        {/* Botão Connect (original com ícone do LinkedIn) */}
        <a
          href="https://www.linkedin.com/in/pedro-henrique-566211266/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center bg-white text-indigo-700 px-5 py-2 rounded-full font-bold hover:bg-indigo-50 hover:border-indigo-700 hover:border cursor-pointer"
        >
          <FaLinkedin className="mr-2" /> Connect with me
        </a>

        {/* Botão Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:bg-indigo-700 cursor-pointer rounded-full"
          aria-label="Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu Mobile (com botão de fechar) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gradient-to-b from-indigo-900 to-indigo-700 flex flex-col items-center justify-center space-y-6">
          {/* Botão de fechar no canto superior direito */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 cursor-pointer right-6 p-2 text-white hover:bg-indigo-600 rounded-full"
            aria-label="Fechar menu"
          >
            <FaTimes size={24} />
          </button>

          <img src={Logo} alt="Logo P" className="h-20 mb-6" />

          <a
            href="#"
            className="text-2xl text-white flex items-center px-6 py-3 hover:bg-indigo-600 rounded-full transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-2xl text-white flex items-center px-6 py-3 hover:bg-indigo-600 rounded-full transition-colors"
            onClick={toggleMenu}
          >
            About me
          </a>
          <a
            href="#skills"
            className="text-2xl text-white flex items-center px-6 py-3 hover:bg-indigo-600 rounded-full transition-colors"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-2xl text-white flex items-center px-6 py-3 hover:bg-indigo-600 rounded-full transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-2xl text-white flex items-center px-6 py-3 hover:bg-indigo-600 rounded-full transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </a>

          <a
            href="https://www.linkedin.com/in/pedro-henrique-566211266/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center px-8 py-3 rounded-full bg-white text-indigo-700 font-bold hover:bg-indigo-100 transition-colors"
            onClick={toggleMenu}
          >
            <FaLinkedin className="mr-3" /> Connect with me
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
