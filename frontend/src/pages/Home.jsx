import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaSearch,
  FaGlobe,
  FaCode,
  FaLaptopCode,
  FaChartLine,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HeroImg, HTML, CSS, JavaScript, Python } from "../assets/export";

const Home = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quizzes")
      .then((response) => setQuizzes(response.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="lg:max-w-[70%] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <FaSearch className="text-gray-400 cursor-not-allowed" />
            <FaGlobe className="text-gray-400 cursor-not-allowed" />
            <Link to="/login">
              <FaUser className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            </Link>
          </div>
          <Link to="/" className="text-xl font-bold text-blue-400">
            وب کوویز
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-800 py-20">
        <div className="lg:lg:max-w-[70%] mx-auto px-6 text-center flex flex-col lg:flex-row justify-between">
          <div className="flex justify-center">
            <img src={HeroImg} alt="Hero" className="h-60" />
          </div>
          <div className="text-center lg:text-right mt-5">
            <h1 className="text-4xl font-bold mb-4 text-blue-400">
              شروع سفر کدنویسی خود امروز
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              از پایه شروع کنید و تخصص خود را بسازید. در کنار شما هستیم تا در هر
              مرحله از سفر کدنویسی شما، راهنمایی و منابع مناسب را در اختیارتان
              قرار دهیم
            </p>
            <Link to="" className="text-xl underline font-bold">
              نمیدونی از کجا شروع کنی؟
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-full sm:max-w-[80%] md:lg:max-w-[70%] mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
          ویژگی‌های ما
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-end">
              <FaCode className="text-blue-400 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-blue-400">
              یادگیری آسان
            </h3>
            <p className="text-gray-400 mt-2">
              با دوره‌های ساده و کاربردی شروع کنید و به سرعت اصول برنامه‌نویسی
              را یاد بگیرید این دوره‌ها به گونه‌ای طراحی شده‌اند که شما را از
              پایه به یک برنامه‌نویس ماهر تبدیل کنند
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-end">
              <FaLaptopCode className="text-blue-400 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-blue-400">
              پروژه‌های واقعی
            </h3>
            <p className="text-gray-400 mt-2">
              با پروژه‌های واقعی، مهارت‌های عملی خود را تقویت کنید و تجربه کسب
              کنید این پروژه‌ها به شما کمک می‌کنند تا آموخته‌های خود را در شرایط
              واقعی به کار گیرید و آمادگی بیشتری برای بازار کار پیدا کنید
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-end">
              <FaChartLine className="text-blue-400 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-blue-400">
              پیشرفت قابل اندازه‌گیری
            </h3>
            <p className="text-gray-400 mt-2">
              پیشرفت خود را با آزمون‌ها و گواهینامه‌ها پیگیری کنید. این امکان را
              به شما می‌دهد که هر مرحله از یادگیری خود را ارزیابی کرده و بر اساس
              آن بهبود یابید
            </p>
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
          میخوایی بدونی چقدر بلدی؟
        </h2>
        <div className="lg:max-w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* HTML Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row items-center">
            <div className="flex-1 sm:w-1/2">
              <pre className="bg-[#1e1e1e] p-4 rounded-lg text-sm text-gray-300 font-mono">
                <code>
                  <span className="text-[#569cd6]">{`<!DOCTYPE html>`}</span>
                  <br />
                  <span className="text-[#d4d4d4]">{`<`}</span>
                  <span className="text-[#4ec9b0]">html</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>
                  <br />
                  <span className="text-[#d4d4d4]">{`<`}</span>
                  <span className="text-[#4ec9b0]">head</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>
                  <br />
                  <span className="text-[#d4d4d4]">{`<`}</span>
                  <span className="text-[#4ec9b0]">title</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>HTML آموزش
                  <span className="text-[#d4d4d4]">{`</`}</span>
                  <span className="text-[#4ec9b0]">title</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>
                  <br />
                  <span className="text-[#d4d4d4]">{`</`}</span>
                  <span className="text-[#4ec9b0]">head</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>
                  <br />
                  <span className="text-[#d4d4d4]">{`<`}</span>
                  <span className="text-[#4ec9b0]">body</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>
                  <br />
                  <span className="text-[#d4d4d4]">{`<`}</span>
                  <span className="text-[#4ec9b0]">h1</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>سلام دنیا!
                  <span className="text-[#d4d4d4]">{`</`}</span>
                  <span className="text-[#4ec9b0]">h1</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>
                  <br />
                  <span className="text-[#d4d4d4]">{`</`}</span>
                  <span className="text-[#4ec9b0]">body</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>
                  <br />
                  <span className="text-[#d4d4d4]">{`</`}</span>
                  <span className="text-[#4ec9b0]">html</span>
                  <span className="text-[#d4d4d4]">{`>`}</span>
                </code>
              </pre>
            </div>
            <div className="flex-1 sm:w-1/2 text-center lg:text-right mt-4 sm:mt-0 sm:ml-6">
              <h2 className="text-2xl font-semibold text-blue-400">HTML</h2>
              <p className="text-gray-400 mt-2 text-sm">
                زبان پایه‌ای است که برای ساختاردهی محتوای وب‌سایت‌ها 
                استفاده می‌شود. با یادگیری HTML می‌توانید صفحات وب ساده و پیچیده
                ایجاد کنید
              </p>
              <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
                شروع آزمون
              </button>
            </div>
          </div>

          {/* CSS Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row items-center">
            <div className="flex-1 sm:w-1/2">
              <pre className="bg-[#1e1e1e] p-4 rounded-lg text-sm text-gray-300 font-mono">
                <code>
                  <span className="text-[#4ec9b0]">body</span>{" "}
                  <span className="text-[#d4d4d4]">{`{`}</span>
                  <br />
                  <span className="text-[#d4d4d4] pl-4">
                    background-color:
                  </span>{" "}
                  <span className="text-[#ce9178]">#f0f0f0</span>;<br />
                  <span className="text-[#d4d4d4] pl-4">color:</span>{" "}
                  <span className="text-[#ce9178]">#333</span>;<br />
                  <span className="text-[#d4d4d4]">{`}`}</span>
                  <br />
                  <span className="text-[#4ec9b0]">h1</span>{" "}
                  <span className="text-[#d4d4d4]">{`{`}</span>
                  <br />
                  <span className="text-[#d4d4d4] pl-4">color:</span>{" "}
                  <span className="text-[#ce9178]">#3498db</span>;<br />
                  <span className="text-[#d4d4d4] pl-4">font-size:</span>{" "}
                  <span className="text-[#b5cea8]">2rem</span>;<br />
                  <span className="text-[#d4d4d4]">{`}`}</span>
                </code>
              </pre>
            </div>
            <div className="flex-1 sm:w-1/2 text-center lg:text-right mt-4 sm:mt-0 sm:ml-6">
              <h2 className="text-2xl font-semibold text-blue-400">CSS</h2>
              <p className="text-gray-400 mt-2 text-sm">
                 برای استایل‌دهی و زیباسازی صفحات وب استفاده می‌شود. با
                می‌توانید ظاهر وب‌سایت‌ها را به‌طور کامل کنترل کنید
              </p>
              <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
                شروع آزمون
              </button>
            </div>
          </div>

          {/* JavaScript Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row items-center">
            <div className="flex-1 sm:w-1/2">
              <pre className="bg-[#1e1e1e] p-4 rounded-lg text-sm text-gray-300 font-mono">
                <code>
                  <span className="text-[#569cd6]">function</span>{" "}
                  <span className="text-[#dcdcaa]">greet</span>
                  <span className="text-[#d4d4d4]">() {`{`}</span>
                  <br />
                  <span className="text-[#d4d4d4] pl-4">alert</span>
                  <span className="text-[#d4d4d4]">(</span>
                  <span className="text-[#ce9178]">&quot;سلام دنیا!&quot;</span>
                  <span className="text-[#d4d4d4]">);</span>
                  <br />
                  <span className="text-[#d4d4d4]">{`}`}</span>
                  <br />
                  <span className="text-[#dcdcaa]">greet</span>
                  <span className="text-[#d4d4d4]">();</span>
                </code>
              </pre>
            </div>
            <div className="flex-1 sm:w-1/2 text-center lg:text-right mt-4 sm:mt-0 sm:ml-6">
              <h2 className="text-2xl font-semibold text-blue-400">
                JavaScript
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
               یک زبان برنامه‌نویسی است که برای افزودن تعامل و
                پویایی به صفحات وب استفاده می‌شود. با JavaScript می‌توانید
                وب‌سایت‌های تعاملی و پویا ایجاد کنید
              </p>
              <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
                شروع آزمون
              </button>
            </div>
          </div>

          {/* Python Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row items-center">
            <div className="flex-1 sm:w-1/2">
              <pre className="bg-[#1e1e1e] p-4 rounded-lg text-sm text-gray-300 font-mono">
                <code>
                  <span className="text-[#569cd6]">def</span>{" "}
                  <span className="text-[#dcdcaa]">greet</span>
                  <span className="text-[#d4d4d4]">():</span>
                  <br />
                  <span className="text-[#d4d4d4] pl-4">print</span>
                  <span className="text-[#d4d4d4]">(</span>
                  <span className="text-[#ce9178]">&quot;سلام دنیا!&quot;</span>
                  <span className="text-[#d4d4d4]">)</span>
                  <br />
                  <span className="text-[#dcdcaa]">greet</span>
                  <span className="text-[#d4d4d4]">()</span>
                </code>
              </pre>
            </div>
            <div className="flex-1 sm:w-1/2 text-center lg:text-right mt-4 sm:mt-0 sm:ml-6">
              <h2 className="text-2xl font-semibold text-blue-400">Python</h2>
              <p className="text-gray-400 mt-2 text-sm">
                 یک زبان برنامه‌نویسی قدرتمند و ساده است که برای توسعه وب،
                تحلیل داده‌ها، هوش مصنوعی و بسیاری از زمینه‌های دیگر استفاده
                می‌شود
              </p>
              <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
                شروع آزمون
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-800 py-12">
        <div className="lg:max-w-[70%] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            دوره‌های آموزشی
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* HTML Card */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img src={HTML} alt="HTML" className="h-18 mb-4" />
              <h3 className="text-xl font-semibold text-blue-400">HTML</h3>
              <p className="text-gray-300 mt-2">
                یادگیری اصول اولیه HTML از جمله ساختار صفحه، تگ‌ها و نحوه نوشتن
                کد صحیح. این دوره به شما کمک می‌کند تا پایه‌های وب‌سایت‌سازی را
                به خوبی درک کنید
              </p>
              <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg">
                شروع دوره
              </button>
            </div>

            {/* CSS Card */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img src={CSS} alt="CSS" className="h-18 mb-4" />
              <h3 className="text-xl font-semibold text-blue-400">CSS</h3>
              <p className="text-gray-300 mt-2">
                استایل‌دهی به صفحات وب با CSS. این دوره شامل مباحثی مثل رنگ‌ها
                فونت‌ها، چیدمان و ایجاد انیمیشن‌های ساده می‌باشد تا ظاهر
                وب‌سایت‌تان جذاب‌تر شود
              </p>
              <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg">
                شروع دوره
              </button>
            </div>

            {/* JavaScript Card */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img src={JavaScript} alt="JavaScript" className="h-18 mb-4" />
              <h3 className="text-xl font-semibold text-blue-400">
                JavaScript
              </h3>
              <p className="text-gray-300 mt-2">
                افزودن تعامل به وب‌سایت‌ها با JavaScript. در این دوره با استفاده
                از توابع، رویدادها و DOM، صفحات وب تعاملی خواهید ساخت و
                قابلیت‌های پیچیده‌تری به آن‌ها اضافه خواهید کرد
              </p>
              <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg">
                شروع دوره
              </button>
            </div>

            {/* Python Card */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img src={Python} alt="Python" className="h-18 mb-4" />
              <h3 className="text-xl font-semibold text-blue-400">Python</h3>
              <p className="text-gray-300 mt-2">
                یادگیری برنامه‌نویسی با Python. در این دوره با مفاهیم پایه
                برنامه‌نویسی، انواع داده‌ها، و کتابخانه‌های مفید Python آشنا
                خواهید شد تا برای ساخت برنامه‌های کاربردی آماده شوید
              </p>
              <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-lg">
                شروع دوره
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-800 py-12">
        <div className="lg:max-w-[70%] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            سوالات متداول
          </h2>
          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-right">
              <h3 className="text-xl font-semibold text-blue-400">
                چطور می‌توانم در دوره‌ها ثبت‌نام کنم؟
              </h3>
              <p className="text-gray-300 mt-2">
                برای ثبت‌نام در دوره‌ها، کافیست وارد حساب کاربری خود شوید و دوره
                مد نظر خود را انتخاب کرده و بر روی دکمه &quot;شروع&quot; کلیک
                کنید. پس از آن، شما می‌توانید به تمام محتوای آموزشی دسترسی پیدا
                کنید
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-right">
              <h3 className="text-xl font-semibold text-blue-400">
                آیا این دوره‌ها برای مبتدی‌ها مناسب هستند؟
              </h3>
              <p className="text-gray-300 mt-2">
                بله! تمامی دوره‌ها از سطح مبتدی شروع می‌شوند و به تدریج شما را
                با مفاهیم پیشرفته‌تر آشنا می‌کنند. پس حتی اگر تجربه‌ای در زمینه
                برنامه‌نویسی ندارید، می‌توانید به راحتی شروع کنید
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-right">
              <h3 className="text-xl font-semibold text-blue-400">
                آیا به اینترنت پرسرعت نیاز دارم؟
              </h3>
              <p className="text-gray-300 mt-2">
                نه، به اینترنت پرسرعت نیاز ندارید. حتی با اینترنت معمولی هم
                می‌توانید دوره‌ها را مشاهده کنید. فقط برای دانلود فایل‌های
                آموزشی ممکن است نیاز به اتصال اینترنتی سریع‌تر داشته باشید
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="lg:max-w-[70%] mx-auto text-center">
          <p className="text-gray-400 text-lg mb-4">
            &copy;2025 وب کوییز | تمام حقوق محفوظ است
          </p>
          <div className="text-gray-400 mb-4">
            <p>آدرس: تهران، خیابان انقلاب، ساختمان وب کوییز</p>
            <p>support@webquiz.com :ایمیل</p>
            <p>021-12345678 :تلفن</p>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
