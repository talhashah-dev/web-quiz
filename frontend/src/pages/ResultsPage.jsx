import { useEffect, useState } from "react";
import axios from "axios";

const ResultsPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/results")
      .then(response => setResults(response.data))
      .catch(error => console.error("Error fetching results:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Quiz Results</h1>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((result) => (
          <div key={result._id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <p><strong>{result.user.name}</strong> scored {result.score} out of {result.totalQuestions} in <strong>{result.quiz.title}</strong></p>
          </div>
        ))
      )}
    </div>
  );
};

export default ResultsPage;
