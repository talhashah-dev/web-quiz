import Navbar from "../components/Navbar";
import HesoSection from "../components/HesoSection";
import FeatureSection from "../components/FeatureSection";
import QuizSection from "../components/QuizSection";
import FaqSection from "../components/FaqSection";
import CourseSection from "../components/CourseSection";
import Footer from "../components/Footer";

const Home = () => {
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
