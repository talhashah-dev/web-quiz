import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGlobe,
  FaSearch,
  FaUser,
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaChartLine,
  FaBook,
  FaVideo,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const WhereToStart = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="lg:max-w-[70%] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <FaSearch className="text-gray-400 cursor-not-allowed" />
            <FaGlobe className="text-gray-400 cursor-not-allowed" />
            <Link to="/login">
              <FaUser className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            </Link>
          </div>
          <Link to="/" className="text-xl font-bold text-blue-400">
            Web Quiz
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
          Where Should I Start?
        </h1>

        {/* Steps Section */}
        <div className="space-y-8 lg:max-w-[50%] mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">HTML</h2>
            <p className="text-gray-400 text-right">
              HTML is the foundation of every website. Learning HTML allows you
              to structure web pages. It is a markup language used for defining
              the structure of web content.
            </p>
            <Link
              to="/learn/html"
              className="mt-4 inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
            >
              Start Learning HTML <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">CSS</h2>
            <p className="text-gray-400 text-right">
              CSS allows you to design and style web pages. With CSS, you can
              make web pages visually appealing, controlling colors, fonts, and
              layout.
            </p>
            <Link
              to="/learn/css"
              className="mt-4 inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
            >
              Start Learning CSS <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              JavaScript
            </h2>
            <p className="text-gray-400 text-right">
              JavaScript makes web pages interactive. It allows you to add
              complex functionality to websites, such as animations, form
              validation, and server interactions.
            </p>
            <Link
              to="/learn/javascript"
              className="mt-4 inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
            >
              Start Learning JavaScript <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Build Small Projects
            </h2>
            <p className="text-gray-400 text-right">
              After learning the basics, start building small projects. This
              helps you apply your knowledge and gain practical experience.
              Projects like a simple blog or a calculator are great starting
              points.
            </p>
            <Link
              to="/projects"
              className="mt-4 inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
            >
              View Projects <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Frontend Section */}
        <div className="mt-12 lg:max-w-[70%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            What is Frontend Development?
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center lg:text-right">
            <h3 className="text-2xl font-semibold text-blue-400">Frontend</h3>
            <p className="text-gray-400 text-right mt-2">
              Frontend development refers to the part of a website users
              interact with. It includes design, user interface, and experience.
              Core technologies include HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        {/* Backend Section */}
        <div className="mt-12 lg:max-w-[70%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            What is Backend Development?
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center lg:text-right">
            <h3 className="text-2xl font-semibold text-blue-400">Backend</h3>
            <p className="text-gray-400 text-right mt-2">
              Backend development refers to the part of a website that works
              behind the scenes. It includes the server, database, and business
              logic. Technologies include Node.js, Python, Ruby, and PHP.
            </p>
          </div>
        </div>

        {/* Database Section */}
        <div className="mt-12 lg:max-w-[70%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            What is a Database?
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center lg:text-right">
            <h3 className="text-2xl font-semibold text-blue-400">Database</h3>
            <p className="text-gray-400 text-right mt-2">
              Databases are used to store and manage data. Popular databases
              include MySQL, PostgreSQL, and MongoDB.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="lg:max-w-[70%] mx-auto text-center">
          <p className="text-gray-400 text-lg mb-4">
            &copy;2025 Web Quiz | All rights reserved.
          </p>
          <div className="text-gray-400 mb-4">
            <p>Address: Tehran, Enghelab Street, Web Quiz Building</p>
            <p>Email: support@webquiz.com</p>
            <p>Phone: 021-12345678</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhereToStart;
