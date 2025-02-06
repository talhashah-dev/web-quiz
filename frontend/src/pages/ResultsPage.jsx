import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResultsPage = () => {
  const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/results/${id}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error("خطا در دریافت نتایج:", error);
      });
  }, [id]);
  
  

  if (!result) return <p>در حال بارگذاری...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center text-right" dir="rtl">
      <h1 className="text-3xl font-bold">نتایج آزمون</h1>
      <p className="text-xl font-semibold">{`درست: ${result.score} از ${result.totalQuestions}`}</p>
      <p className="text-lg">درصد درست: {((result.score / result.totalQuestions) * 100).toFixed(2)}%</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">پاسخ‌ها:</h3>
        <ul>
          {result.answers.map((answer, index) => (
            <li key={index}>
              <p>{`سوال: ${answer.questionId}`}</p>
              <p>{`پاسخ شما: ${answer.userAnswer}`}</p>
              <p>{`پاسخ درست: ${answer.correctAnswer}`}</p>
              <p
                style={{
                  color: answer.userAnswer === answer.correctAnswer ? "green" : "red",
                }}
              >
                {answer.userAnswer === answer.correctAnswer ? "صحیح" : "غلط"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsPage;
