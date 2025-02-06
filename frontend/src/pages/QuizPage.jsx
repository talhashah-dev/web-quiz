import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/quizzes/${id}`)
      .then((response) => {
        if (response.data.category !== "HTML") {
          navigate("/");
        } else {
          setQuiz(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching quiz:", error);
        setLoading(false);
      });
  }, [id, navigate]);

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    if (!quiz) return;

    let correct = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correct++;
      }
    });

    setScore(correct);

    axios
      .post("http://localhost:5000/api/results", {
        user: "65a123abc...",
        quiz: id,
        score: correct,
        totalQuestions: quiz.questions.length,
      })
      .then(() => navigate("/results"))
      .catch((error) => console.error("Error submitting result:", error));
  };

  if (loading) return <p className="text-center text-gray-500">در حال بارگذاری...</p>;
  if (!quiz) return <p className="text-center text-red-500">آزمون یافت نشد.</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700">{quiz.title}</h1>
      
      {quiz.questions.map((q, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 w-full max-w-2xl mt-4 transition-transform transform hover:scale-105">
          <p className="text-lg font-semibold text-gray-800">{q.question}</p>
          {q.options.map((option) => (
            <label key={option} className="block text-gray-700 mt-2">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                className="mr-2"
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-6 rounded-lg shadow-lg transition-all"
        onClick={handleSubmit}
      >
        ارسال پاسخ‌ها
      </button>

      {score !== null && (
        <p className="mt-4 text-xl font-semibold text-gray-800">
          نمره شما: {score} از {quiz.questions.length}
        </p>
      )}
    </div>
  );
};

export default QuizPage;
