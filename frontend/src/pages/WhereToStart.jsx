import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGlobe,
  FaSearch,
  FaUser,
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaChartLine,
  FaBook,
  FaVideo,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const WhereToStart = () => {
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

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
          از کجا شروع کنم؟
        </h1>

        {/* Steps Section */}
        <div className="space-y-8 lg:max-w-[50%] mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center  lg:text-right">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              HTML
            </h2>
            <p className="text-gray-400 text-right">
              HTML پایه و اساس هر وب‌سایت است. با یادگیری HTML می‌توانید ساختار
              اولیه صفحات وب را ایجاد کنید. HTML یک زبان نشانه‌گذاری است که برای
              ساختاردهی محتوای وب استفاده می‌شود
            </p>
            <Link
              to="/learn/html"
              className="mt-4 inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
            >
              شروع یادگیری HTML <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              CSS
            </h2>
            <p className="text-gray-400 text-right">
              CSS به شما امکان می‌دهد تا ظاهر و استایل صفحات وب خود را طراحی
              کنید. با CSS می‌توانید صفحات وب خود را زیبا و جذاب کنید. CSS برای
              کنترل رنگ‌ها، فونت‌ها، و چیدمان عناصر استفاده می‌شود
            </p>
            <Link
              to="/learn/css"
              className="mt-4 inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
            >
              شروع یادگیری CSS <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              JavaScript
            </h2>
            <p className="text-gray-400 text-right">
              JavaScript به شما امکان می‌دهد تا صفحات وب خود را تعاملی کنید. با
              JavaScript می‌توانید عملکردهای پیچیده‌تری به وب‌سایت خود اضافه
              کنید. این زبان برای ایجاد انیمیشن‌ها، اعتبارسنجی فرم‌ها و ارتباط
              با سرور استفاده می‌شود
            </p>
            <Link
              to="/learn/javascript"
              className="mt-4 inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
            >
              شروع یادگیری JavaScript <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
             پروژه‌های کوچک بسازید
            </h2>
            <p className="text-gray-400 text-right">
              پس از یادگیری اصول اولیه، شروع به ساخت پروژه‌های کوچک کنید. این
              کار به شما کمک می‌کند تا دانش خود را به کار بگیرید و تجربه عملی
              کسب کنید. پروژه‌هایی مانند ساخت یک وبلاگ ساده یا یک ماشین حساب
              می‌توانند شروع خوبی باشند
            </p>
            <Link
              to="/projects"
              className="mt-4 inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
            >
              مشاهده پروژه‌ها <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Frontend Section */}
        <div className="mt-12 lg:max-w-[70%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            فرانت‌اند چیست؟
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <div className="flex items-center space-x-4">
              <FaCode className="text-blue-400 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">
                  فرانت‌اند
                </h3>
                <p className="text-gray-400 text-right mt-2">
                  فرانت‌اند به بخشی از وب‌سایت گفته می‌شود که کاربران با آن
                  تعامل دارند. این بخش شامل طراحی، رابط کاربری و تجربه کاربری
                  می‌شود. تکنولوژی‌های اصلی فرانت‌اند شامل HTML، CSS و
                  JavaScript است. فرانت‌اند توسعه‌دهندگان مسئول ایجاد ظاهر و
                  احساس وب‌سایت هستند
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="mt-12 lg:max-w-[70%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            بک‌اند چیست؟
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <div className="flex items-center space-x-4">
              <FaServer className="text-blue-400 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">بک‌اند</h3>
                <p className="text-gray-400 text-right mt-2">
                  بک‌اند به بخشی از وب‌سایت گفته می‌شود که در پشت صحنه کار
                  می‌کند و کاربران مستقیماً با آن تعامل ندارند. این بخش شامل
                  سرور، پایگاه داده و منطق کسب‌وکار است. تکنولوژی‌های اصلی
                  بک‌اند شامل Node.js، Python، Ruby و PHP است. توسعه‌دهندگان
                  بک‌اند مسئول مدیریت داده‌ها و عملکردهای سرور هستند
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Database Section */}
        <div className="mt-12 lg:max-w-[70%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            پایگاه داده چیست؟
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
            <div className="flex items-center space-x-4">
              <FaDatabase className="text-blue-400 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">
                  پایگاه داده
                </h3>
                <p className="text-gray-400 text-right mt-2">
                  پایگاه داده‌ها برای ذخیره و مدیریت اطلاعات استفاده می‌شوند.
                  انواع مختلفی از پایگاه داده‌ها وجود دارد، مانند پایگاه
                  داده‌های رابطه‌ای (SQL) و غیر رابطه‌ای (NoSQL). برخی از پایگاه
                  داده‌های معروف شامل MySQL، PostgreSQL و MongoDB هستند. پایگاه
                  داده‌ها نقش حیاتی در ذخیره‌سازی و بازیابی اطلاعات دارند
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            مزایای یادگیری برنامه‌نویسی
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
              <FaLaptopCode className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-400">
                فرصت‌های شغلی
              </h3>
              <p className="text-gray-400 text-right mt-2">
                یادگیری برنامه‌نویسی به شما امکان می‌دهد تا در حوزه‌های مختلف
                فناوری اطلاعات مشغول به کار شوید. از توسعه وب تا هوش مصنوعی،
                فرصت‌های شغلی زیادی وجود دارد
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
              <FaChartLine className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-400">
                درآمد بالا
              </h3>
              <p className="text-gray-400 text-right mt-2">
                برنامه‌نویسان معمولاً درآمد بالایی دارند. با افزایش تجربه و
                مهارت‌هایتان، می‌توانید به درآمدهای بالاتری دست پیدا کنید
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
              <FaBook className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-400">
                یادگیری مداوم
              </h3>
              <p className="text-gray-400 text-right mt-2">
                برنامه‌نویسی یک حوزه پویا است که همیشه در حال تغییر و پیشرفت
                است. این به شما امکان می‌دهد تا همیشه در حال یادگیری و
                به‌روزرسانی مهارت‌های خود باشید
              </p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
            منابع آموزشی
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
              <FaBook className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-400">کتاب‌ها</h3>
              <p className="text-gray-400 text-right mt-2">
                کتاب‌های زیادی برای یادگیری برنامه‌نویسی وجود دارد. کتاب‌هایی
                مانند &quot;Eloquent JavaScript&quot; و &quot;You Don’t Know JS&quot; می‌توانند شروع
                خوبی باشند
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
              <FaVideo className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-400">
                ویدئوهای آموزشی
              </h3>
              <p className="text-gray-400 text-right mt-2">
                ویدئوهای آموزشی در پلتفرم‌هایی مانند YouTube و Udemy می‌توانند
                به شما در یادگیری برنامه‌نویسی کمک کنند
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center lg:text-right">
              <FaCode className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-400">
                پروژه‌های عملی
              </h3>
              <p className="text-gray-400 text-right mt-2">
                انجام پروژه‌های عملی بهترین راه برای یادگیری برنامه‌نویسی است.
                با ساخت پروژه‌های واقعی، می‌توانید دانش خود را به کار بگیرید
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

export default WhereToStart;
