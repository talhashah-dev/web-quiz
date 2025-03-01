import React from 'react'
import { CSS, HTML, JavaScript, Python } from '../assets/export'

const CourseSection = () => {
  return (
    <section className="bg-gray-800 py-12">
  <div className="lg:max-w-[70%] mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
      Educational Courses
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* HTML Course */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <img src={HTML} alt="HTML" className="h-18 mb-4" />
        <h3 className="text-xl font-semibold text-blue-400">HTML</h3>
        <p className="text-gray-300 mt-2">
          Learn the basics of HTML, including page structure, tags, and 
          writing correct code. This course will help you understand 
          the fundamentals of web development.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg">
          Start Course
        </button>
      </div>

      {/* CSS Course */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <img src={CSS} alt="CSS" className="h-18 mb-4" />
        <h3 className="text-xl font-semibold text-blue-400">CSS</h3>
        <p className="text-gray-300 mt-2">
          Style web pages with CSS. This course covers colors, fonts, 
          layouts, and simple animations to make your website visually appealing.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg">
          Start Course
        </button>
      </div>

      {/* JavaScript Course */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <img src={JavaScript} alt="JavaScript" className="h-18 mb-4" />
        <h3 className="text-xl font-semibold text-blue-400">JavaScript</h3>
        <p className="text-gray-300 mt-2">
          Add interactivity to websites with JavaScript. Learn how to use 
          functions, events, and the DOM to build dynamic and interactive pages.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg">
          Start Course
        </button>
      </div>

      {/* Python Course */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <img src={Python} alt="Python" className="h-18 mb-4" />
        <h3 className="text-xl font-semibold text-blue-400">Python</h3>
        <p className="text-gray-300 mt-2">
          Learn programming with Python. This course covers fundamental 
          concepts, data types, and useful libraries to help you build applications.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg">
          Start Course
        </button>
      </div>
    </div>
  </div>
</section>

  )
}

export default CourseSection