import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/quizzes`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setQuizzes(response.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user)
    return (
      <p className="text-center min-h-screen flex flex-col items-center justify-center text-2xl">
        Loading...
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-blue-400">Dashboard 👤</h1>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-lg">Hello, {user.name} 👋</p>  
            <p className="text-gray-400">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition-all px-5 py-2 rounded-lg font-medium"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Your Quizzes
        </h2>
        {quizzes.length === 0 ? (
          <p className="text-gray-400">You haven't taken any quizzes yet.</p>
        ) : (
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            {quizzes.map((quiz) => (
              <div
                key={quiz._id}
                className="border-b border-gray-700 py-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold">{quiz.title}</h3>
                  {/* <p className="text-gray-400">Score: {quiz.score} / 100</p> */}
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 transition-all px-4 py-2 rounded-lg font-medium"
                  onClick={() => navigate(`/quiz/${quiz._id}`)}
                >
                  Start Quiz
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
