import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaSearch,
  FaGlobe,
  FaCode,
  FaLaptopCode,
  FaChartLine,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HeroImg, HTML, CSS, JavaScript, Python } from "../assets/export";
import WhereToStart from "./WhereToStart";
import Navbar from "../components/Navbar";
import HesoSection from "../components/HesoSection";
import FeatureSection from "../components/FeatureSection";
import QuizSection from "../components/QuizSection";
import FaqSection from "../components/FaqSection";
import CourseSection from "../components/CourseSection";
import Footer from "../components/Footer";

const Home = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/quizzes`)
      .then((response) => setQuizzes(response.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <HesoSection />
      <FeatureSection />
      <QuizSection />
      <CourseSection />      
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
