import React from 'react'
import { HeroImg } from '../assets/export'
import { Link } from 'react-router-dom'

const HesoSection = () => {
  return (
    <section className="bg-gray-800 py-20">
    <div className="lg:max-w-[70%] mx-auto px-6 text-center flex flex-col lg:flex-row justify-between">
      <div className="flex justify-center">
        <img src={HeroImg} alt="Hero" className="h-60" />
      </div>
      <div className="text-center lg:text-left mt-5">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">
          Start Your Coding Journey Today
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Begin from the basics and build your expertise. We're here to guide 
          you and provide the right resources at every step of your coding journey.
        </p>
        <Link to="/where-to-start" className="text-xl underline font-bold">
          Don't know where to start?
        </Link>
      </div>
    </div>
  </section>
  )
}

export default HesoSection