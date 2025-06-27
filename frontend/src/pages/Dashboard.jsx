import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [courses, setCourses] = useState([]);
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
      .catch((error) => console.error("خطا در دریافت آزمون‌ها:", error));

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/courses`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("خطا در دریافت دوره‌ها:", error));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user)
    return (
      <p className="text-center min-h-screen flex flex-col items-center justify-center text-2xl text-white">
        در حال بارگذاری...
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center" dir="rtl">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-blue-400">داشبورد 👤</h1>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-lg">سلام، {user.name} 👋</p>
            <p className="text-gray-400">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition-all px-5 py-2 rounded-lg font-medium"
          >
            خروج
          </button>
        </div>
      </div>

      {/* Quizzes Section */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">آزمون‌های شما</h2>
        {quizzes.length === 0 ? (
          <p className="text-gray-400">شما هنوز هیچ آزمونی شرکت نکرده‌اید.</p>
        ) : (
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            {quizzes.map((quiz) => (
              <div
                key={quiz._id}
                className="border-b border-gray-700 py-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold">{quiz.title}</h3>
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

      {/* Courses Section */}
      <div className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">دوره‌های آموزشی</h2>
        {courses.length === 0 ? (
          <p className="text-gray-400">هیچ دوره‌ای در حال حاضر وجود ندارد.</p>
        ) : (
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4">
            {courses.map((course) => (
              <div
                key={course._id}
                className="border-b border-gray-700 pb-4 flex flex-col gap-2"
              >
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-gray-400 text-sm">{course.description}</p>
                <Link to={`/courses/${course._id}`}>
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                    مشاهده دوره
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
