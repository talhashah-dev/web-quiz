import React from 'react'
import { Link } from 'react-router-dom'

const QuizSection = () => {
  return (
    <>
        <section className="mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
    Want to test your knowledge?
  </h2>
  <div className="lg:max-w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    
    {/* HTML Section */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row items-center">
    <div className="flex-1 sm:w-1/2 text-center lg:text-left mt-4 sm:mt-0 sm:ml-6">
        <h2 className="text-2xl font-semibold text-blue-400">HTML</h2>
        <p className="text-gray-400 mt-2 text-sm pr-8">
          HTML is the foundation of web development, used to structure web pages and content.
          Learn HTML to build both simple and complex web pages.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
          <Link to="/login">Start Quiz</Link>
        </button>
      </div>
      <div className="flex-1 sm:w-1/2">
        <pre className="bg-[#1e1e1e] p-4 rounded-lg text-sm text-gray-300 font-mono">
          <code>
            <span className="text-[#569cd6]">{`<!DOCTYPE html>`}</span>
            <br />
            <span className="text-[#d4d4d4]">{`<`}</span>
            <span className="text-[#4ec9b0]">html</span>
            <span className="text-[#d4d4d4]">{`>`}</span>
            <br />
            <span className="text-[#d4d4d4]">{`<`}</span>
            <span className="text-[#4ec9b0]">head</span>
            <span className="text-[#d4d4d4]">{`>`}</span>
            <br />
            <span className="text-[#d4d4d4]">{`<`}</span>
            <span className="text-[#4ec9b0]">title</span>
            <span className="text-[#d4d4d4]">{`>`}</span>HTML Tutorial
            <span className="text-[#d4d4d4]">{`</`}</span>
            <span className="text-[#4ec9b0]">title</span>
            <span className="text-[#d4d4d4]">{`>`}</span>
            <br />
            <span className="text-[#d4d4d4]">{`</`}</span>
            <span className="text-[#4ec9b0]">head</span>
            <span className="text-[#d4d4d4]">{`>`}</span>
            <br />
            <span className="text-[#d4d4d4]">{`<`}</span>
            <span className="text-[#4ec9b0]">body</span>
            <span className="text-[#d4d4d4]">{`>`}</span>
            <br />
            <span className="text-[#d4d4d4]">{`<`}</span>
            <span className="text-[#4ec9b0]">h1</span>
            <span className="text-[#d4d4d4]">{`>`}</span>Hello, World!
            <span className="text-[#d4d4d4]">{`</`}</span>
            <span className="text-[#4ec9b0]">h1</span>
            <span className="text-[#d4d4d4]">{`>`}</span>
            <br />
            <span className="text-[#d4d4d4]">{`</`}</span>
            <span className="text-[#4ec9b0]">body</span>
            <span className="text-[#d4d4d4]">{`>`}</span>
            <br />
            <span className="text-[#d4d4d4]">{`</`}</span>
            <span className="text-[#4ec9b0]">html</span>
            <span className="text-[#d4d4d4]">{`>`}</span>
          </code>
        </pre>
      </div>
    </div>

    {/* CSS Section */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row items-center">
    <div className="flex-1 sm:w-1/2 text-center lg:text-left mt-4 sm:mt-0 sm:ml-6">
        <h2 className="text-2xl font-semibold text-blue-400">CSS</h2>
        <p className="text-gray-400 mt-2 text-sm pr-8">
          CSS is used for styling web pages and controlling their layout. Master CSS to design stunning websites.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
          <Link to="/login">Start Quiz</Link>
        </button>
      </div>
      <div className="flex-1 sm:w-1/2">
        <pre className="bg-[#1e1e1e] p-4 rounded-lg text-sm text-gray-300 font-mono">
          <code>
            <span className="text-[#4ec9b0]">body</span> {`{`}
            <br />
            <span className="text-[#d4d4d4] pl-4">background-color:</span>{" "}
            <span className="text-[#ce9178]">#f0f0f0</span>;
            <br />
            <span className="text-[#d4d4d4] pl-4">color:</span>{" "}
            <span className="text-[#ce9178]">#333</span>;
            <br />
            {`}`}
            <br />
            <span className="text-[#4ec9b0]">h1</span> {`{`}
            <br />
            <span className="text-[#d4d4d4] pl-4">color:</span>{" "}
            <span className="text-[#ce9178]">#3498db</span>;
            <br />
            <span className="text-[#d4d4d4] pl-4">font-size:</span>{" "}
            <span className="text-[#b5cea8]">2rem</span>;
            <br />
            {`}`}
          </code>
        </pre>
      </div>
     
    </div>

    </div>
</section>
    </>
  )
}

export default QuizSection