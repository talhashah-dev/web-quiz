import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeOut, setTimeOut] = useState(false);

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

  useEffect(() => {
    let interval = null;
    if (quizStarted && !timeOut) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [quizStarted, timeOut]);

  const handleAnswerChange = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: answer,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setTimeOut(true);
  };

  const handleRestartQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setScore(null);
    setTimer(0);
    setQuizStarted(false);
    setTimeOut(false);
  };

  const handleViewAnswers = () => {
    navigate(`/quiz/${id}/results`);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (loading) return <p className="text-center text-gray-500">در حال بارگذاری...</p>;
  if (!quiz) return <p className="text-center text-red-500">آزمون یافت نشد.</p>;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const resultMessage = () => {
    if (score === quiz.questions.length) {
      return "عالی! شما همه سوالات را درست پاسخ داده‌اید!";
    } else if (score >= quiz.questions.length * 0.6) {
      return "خوب بود! اما هنوز می‌توانید بهتر شوید.";
    } else {
      return "متاسفم. تلاش بیشتری لازم است.";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center text-right" dir="rtl">
      <h1 className="text-3xl font-bold">{quiz.title}</h1>
      
      {!quizStarted ? (
        <button
          onClick={() => setQuizStarted(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-6 rounded-lg shadow-lg transition-all"
        >
          شروع آزمون
        </button>
      ) : (
        <div className="w-full max-w-2xl">
          <p className="text-xl font-semibold text-gray-800">{`سوال ${currentQuestionIndex + 1} از ${quiz.questions.length}:`}</p>
          
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <p className="text-lg font-semibold text-gray-800">{currentQuestion.question}</p>
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`block w-full p-2 mt-2 rounded-lg text-right ${
                  answers[currentQuestionIndex] === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleAnswerChange(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex mt-4 items-center justify-between">
            <button
              onClick={handleNextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all"
            >
              {currentQuestionIndex < quiz.questions.length - 1 ? "سوال بعدی" : "پایان آزمون"}
            </button>

            {timer > 0 && (
              <p className="text-md font-semibold">{formatTime(timer)}</p>
            )}
          </div>
        </div>
      )}

      {score !== null && timeOut && (
        <div className="mt-8 w-full max-w-2xl text-center">
          <p className="text-xl font-semibold">{resultMessage()}</p>
          <p className="text-lg">درست: {score} از {quiz.questions.length}</p>
          <p className="text-lg">درصد درست: {((score / quiz.questions.length) * 100).toFixed(2)}%</p>

          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={handleRestartQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
            >
              آزمون دوباره
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
            >
              برگشت به داشبورد
            </button>
            <button
              onClick={handleViewAnswers}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
            >
              مشاهده جواب‌ها
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
