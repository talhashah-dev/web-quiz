import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import WhereToStart from "./pages/WhereToStart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CourseDetailPage from "./pages/CourseDetailPage";


const PrivateRoute = ({ children }) => {
  return localStorage.getItem("token") ? children : <Navigate to="/login" />;
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/where-to-start" element={<WhereToStart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/quiz/:id/results" element={<ResultsPage />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
