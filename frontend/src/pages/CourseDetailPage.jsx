import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(0);

  const userId = "PUT_HARD_CODED_USER_ID_HERE"; // Replace later

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.log("Error loading course:", err));
  }, [id]);

  const markAsCompleted = async () => {
    await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/courses/${id}/complete/${
        selectedLesson + 1
      }`,
      {
        userId,
      }
    );
    alert("✅ علامت‌گذاری شد به عنوان کامل شده");
  };

  if (!course)
    return <p className="text-center text-white p-6">در حال بارگذاری...</p>;

  const lesson = course.lessons[selectedLesson];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8" dir="rtl">
      <div className="max-w-8xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">
          {course.title}
        </h1>
        <p className="text-gray-400 mb-6 whitespace-pre-line" dir="rtl">
          {course.description}
        </p>

        <div className="border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-6">{lesson.title}</h2>
          <video
            controls
            className="w-full rounded my-4"
            src={lesson.videoUrl}
          />

          <p className="text-gray-400 mb-2 whitespace-pre-line" dir="rtl">
            {lesson.description}
          </p>

          <div
            className="flex gap-2 flex-wrap mt-4 w-full justify-center"
            dir="ltr"
          >
            <button
              disabled={selectedLesson === 0}
              onClick={() => setSelectedLesson((prev) => prev - 1)}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 disabled:opacity-40"
            >
              درس قبلی
            </button>

            <button
              disabled={selectedLesson === course.lessons.length - 1}
              onClick={() => setSelectedLesson((prev) => prev + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-40"
            >
              درس بعدی
            </button>

            <a
              href={lesson.videoUrl}
              download
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              دانلود ویدیو
            </a>

            {/* <button
              onClick={markAsCompleted}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              علامت‌گذاری به عنوان کامل شده
            </button> */}
            
            <Link to={`/dashboard`}>
              <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 disabled:opacity-40">
                داشبورد
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
