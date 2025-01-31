import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/quizzes")
      .then(response => setQuizzes(response.data))
      .catch(error => console.error("Error fetching quizzes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Available Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{quiz.title}</h2>
            <Link to={`/quiz/${quiz._id}`} className="mt-2 block text-blue-500">
              Start Quiz →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
