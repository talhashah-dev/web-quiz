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
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/quizzes/${id}`)
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
    const answersData = quiz.questions.map((q, index) => {
      const userAnswer = answers[index];
      const correctAnswer = q.correctAnswer;
      if (userAnswer === correctAnswer) {
        correct++;
      }
      return { questionId: q._id, userAnswer, correctAnswer };
    });

    setScore(correct);
    setTimeOut(true);

    const token = localStorage.getItem("token");

    axios
      .post(
        `${import.meta.env.VITE_API_BASE_URL}/api/results`,
        {
          quiz: quiz._id,
          score: correct,
          totalQuestions: quiz.questions.length,
          answers: answersData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error submitting results:", error);
      });
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

  if (loading)
    return (
      <p className="text-center min-h-screen flex flex-col items-center justify-center text-2xl">
        Loading...
      </p>
    );
  if (!quiz) return <p className="text-center text-red-500">Quiz not found.</p>;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const resultMessage = () => {
    if (score === quiz.questions.length) {
      return "Great job! You answered everything correctly!";
    } else if (score >= quiz.questions.length * 0.6) {
      return "Not bad, but you could do much better.";
    } else {
      return "Looks like you need to study more! Try again!";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">{quiz.title}</h1>

      {!quizStarted ? (
        <div className="w-full max-w-2xl text-center">
          <p className="text-lg mb-4">
            The quiz consists of 25 questions and has no time limit.
          </p>
          <p className="text-lg mb-4">
            This is not an official test, just a great way to see how much you know about HTML.
          </p>
          <p className="text-lg mb-4">
            For each correct answer, you earn 4 points. At the end of the quiz, your total score will be displayed, with a maximum score of 100.
          </p>
          <p className="text-lg font-semibold mb-6">Good luck!</p>

          <button
            onClick={() => setQuizStarted(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          <p className="text-xl font-semibold text-gray-800">{`Question ${currentQuestionIndex + 1} of ${quiz.questions.length}:`}</p>

          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <p className="text-lg font-semibold text-gray-800">{currentQuestion.question}</p>
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`block w-full p-2 mt-2 rounded-lg ${
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
              {currentQuestionIndex < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>

            {timer > 0 && <p className="text-md font-semibold">{formatTime(timer)}</p>}
          </div>
        </div>
      )}

      {score !== null && timeOut && (
        <div className="mt-8 w-full max-w-2xl text-center">
          <p className="text-xl font-semibold mb-2">{resultMessage()}</p>
          <p className="text-lg">
            Correct answers: {score} out of {quiz.questions.length}
          </p>
          <p className="text-lg">
            Accuracy: {((score / quiz.questions.length) * 100).toFixed(2)}%
          </p>

          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={handleRestartQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
            >
              Back to Dashboard
            </button>
            <button
              onClick={handleViewAnswers}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
            >
              View Answers
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
