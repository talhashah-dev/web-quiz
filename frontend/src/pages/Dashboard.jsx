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
      .get("http://localhost:5000/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });

    axios
      .get("http://localhost:5000/api/quizzes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setQuizzes(response.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) return <p className="text-center text-gray-500">در حال بارگذاری...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-2xl text-right">
        <h1 className="text-3xl font-bold text-blue-400">👤 داشبورد</h1>
        <p className="text-lg mt-2">👋 خوش آمدید، <span className="font-semibold">{user.name}</span></p>
        <p className="text-gray-400">📧 {user.email}</p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 hover:bg-red-600 transition-all px-5 py-2 rounded-lg font-medium"
        >
          خروج از حساب
        </button>
      </div>

      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-2xl font-semibold text-right text-blue-400 mb-4">📜 آزمون‌های شما</h2>
        {quizzes.length === 0 ? (
          <p className="text-gray-400 text-right">شما هنوز هیچ آزمونی شرکت نکرده‌اید.</p>
        ) : (
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            {quizzes.map((quiz) => (
              <div key={quiz._id} className="border-b border-gray-700 py-4 flex items-center justify-between">
                <div className="text-right">
                  <h3 className="text-lg font-semibold">{quiz.title}</h3>
                  <p className="text-gray-400">امتیاز: {quiz.score} / 100</p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 transition-all px-4 py-2 rounded-lg font-medium"
                  onClick={() => navigate(`/quiz/${quiz._id}`)}
                >
                  شروع آزمون
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
