import React from 'react'
import { FaChartLine, FaCode, FaLaptopCode } from 'react-icons/fa'

const FeatureSection = () => {
  return (
    <section className="max-w-full sm:max-w-[80%] md:lg:max-w-[70%] mx-auto px-6 py-12">
    <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
      Our Features
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex justify-start">
          <FaCode className="text-blue-400 text-4xl mb-4" />
        </div>
        <h3 className="text-xl font-semibold text-blue-400">Easy Learning</h3>
        <p className="text-gray-400 mt-2">
          Start with simple and practical courses to quickly grasp the 
          fundamentals of programming. These courses are designed to help you 
          become a skilled developer from scratch.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex justify-start">
          <FaLaptopCode className="text-blue-400 text-4xl mb-4" />
        </div>
        <h3 className="text-xl font-semibold text-blue-400">Real-World Projects</h3>
        <p className="text-gray-400 mt-2">
          Strengthen your practical skills with real-world projects and gain 
          hands-on experience. These projects will help you apply what you learn 
          in real scenarios and prepare for the job market.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex justify-start">
          <FaChartLine className="text-blue-400 text-4xl mb-4" />
        </div>
        <h3 className="text-xl font-semibold text-blue-400">Track Your Progress</h3>
        <p className="text-gray-400 mt-2">
          Monitor your progress with quizzes and certifications. This allows you 
          to evaluate each stage of your learning and improve accordingly.
        </p>
      </div>
    </div>
  </section>
  )
}

export default FeatureSection