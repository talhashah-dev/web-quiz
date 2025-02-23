import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResultsPage = () => {
  const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      axios
        .get(`{http://localhost:5000/api/results/${id}}`)
        .then((response) => {
          // Assuming the response data is an array of quiz objects
          console.log(response)

          // setResult(response.data);

          // result.forEach((quiz) => {
          //   console.log(`Quiz Title: ${quiz.quiz.title}`);
          //   console.log("Questions and their Answers:");

          //   // Loop through each question
          //   quiz.quiz.questions.forEach((question) => {
          //     // Find the corresponding answer for this question
          //     const answer = quiz.answers.find(
          //       (ans) => ans.questionId === question._id
          //     );
          //     if (answer) {
          //       console.log(`Question: ${question.question}`);
          //       console.log(`Options: ${question.options.join(", ")}`);
          //       console.log(`Correct Answer: ${answer.correctAnswer}`);
          //       console.log("---");
          //     }
          //   });
          // });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchResult();
  }, []);

  if (!result) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center text-right"
      dir="rtl"
    >
      hello
      {/* <h1 className="text-3xl font-bold">{result.quiz.title}</h1>
      <p className="text-xl font-semibold mb-4">نتایج آزمون</p>

      <p className="text-lg mb-4">
        نمره شما: {result.score} از {result.totalQuestions}
      </p>
      <p className="text-lg mb-4">
        درصد درست: {((result.score / result.totalQuestions) * 100).toFixed(2)}%
      </p>

      <ul>
        {result.answers?.map((answer, index) => (
          <li key={index} className="mb-4">
            <p>{`سوال: ${answer.questionId}`}</p>
            <p>{`پاسخ شما: ${answer.userAnswer}`}</p>
            <p>{`پاسخ درست: ${answer.correctAnswer}`}</p>
            <p
              style={{
                color:
                  answer.userAnswer === answer.correctAnswer ? "green" : "red",
              }}
            >
              {answer.userAnswer === answer.correctAnswer ? "صحیح" : "غلط"}
            </p>
          </li>
        ))}
      </ul>

      <button
        onClick={() => window.history.back()}
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg mt-6"
      >
        بازگشت به صفحه اصلی
      </button> */}
    </div>
  );
};

export default ResultsPage;
