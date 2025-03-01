import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
  <div className="lg:max-w-[70%] mx-auto text-center">
    <p className="text-gray-400 text-lg mb-4">
      &copy;2025 Web Quiz | All Rights Reserved
    </p>
    <div className="text-gray-400 mb-4">
      <p>Address: Tehran, Enghelab Street, Web Quiz Building</p>
      <p>Email: support@webquiz.com</p>
      <p>Phone: 021-12345678</p>
    </div>
    <div className="flex justify-center gap-6 mt-4">
      <a href="#" className="text-blue-400 hover:text-blue-500">
        <FaFacebook size={24} />
      </a>
      <a href="#" className="text-blue-400 hover:text-blue-500">
        <FaTwitter size={24} />
      </a>
      <a href="#" className="text-blue-400 hover:text-blue-500">
        <FaInstagram size={24} />
      </a>
      <a href="#" className="text-blue-400 hover:text-blue-500">
        <FaLinkedin size={24} />
      </a>
    </div>
  </div>
</footer>

)
}

export default Footer