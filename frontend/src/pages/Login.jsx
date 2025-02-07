import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", data.token); 
      navigate("/dashboard");
    } catch (err) {
      setError("ایمیل یا رمز عبور اشتباه است!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"  dir="rtl">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-blue-400">ورود به حساب</h2>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <form className="mt-6" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border-none outline-none mb-4 text-right"
            required
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border-none outline-none mb-4 text-right"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 p-3 rounded-lg font-semibold"
          >
            ورود
          </button>
        </form>
        <p className="text-center mt-4 text-gray-400">
          حساب کاربری ندارید؟{" "}
          <a href="/register" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
            ثبت‌نام کنید
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;