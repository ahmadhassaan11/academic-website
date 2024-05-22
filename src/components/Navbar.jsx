import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center pl-8 pr-8">
        <div className="flex items-center">
          <img src="/HLogo.jpeg" alt="Harvard Logo" className="h-8 mr-1" />
          <h1>HARVARD UNIVERSITY</h1>
        </div>
        <div>HARVARD.EDU</div>
      </div>
      <nav className="bg-gray-100 text-black pl-4 pr-4">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h2 className="text-3xl font-bold">Marcos Barrozo</h2>
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold text-cyan-600" : "hover:text-cyan-700")}>Home </NavLink>
            <NavLink to="/research" className={({ isActive }) => (isActive ? "font-bold text-cyan-600" : "hover:text-cyan-700")}>Research </NavLink>
            <NavLink to="/teaching" className={({ isActive }) => (isActive ? "font-bold text-cyan-600" : "hover:text-cyan-700")}>Teaching </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;