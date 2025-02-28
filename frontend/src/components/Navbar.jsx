import React from 'react'
import { FaGlobe, FaSearch, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
    <div className="lg:max-w-[70%] mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-400">
        Web Quiz
      </Link>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-400 cursor-not-allowed" />
        <FaGlobe className="text-gray-400 cursor-not-allowed" />
        <Link to="/login">
          <FaUser className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
        </Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar