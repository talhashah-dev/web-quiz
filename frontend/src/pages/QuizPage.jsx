import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quizzes/${id}`)
      .then(response => setQuiz(response.data))
      .catch(error => console.error("Error fetching quiz:", error));
  }, [id]);

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

    axios.post("http://localhost:5000/api/results", {
      user: "65a123abc...",
      quiz: id,
      score: correct,
      totalQuestions: quiz.questions.length,
    })
      .then(() => navigate("/results"))
      .catch(error => console.error("Error submitting result:", error));
  };

  if (!quiz) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold">{quiz.title}</h1>
      {quiz.questions.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg font-semibold">{q.question}</p>
          {q.options.map((option) => (
            <label key={option} className="block">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={handleSubmit}>
        Submit
      </button>
      {score !== null && <p>Your Score: {score}/{quiz.questions.length}</p>}
    </div>
  );
};

export default QuizPage;
