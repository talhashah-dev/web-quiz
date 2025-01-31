const questions = [
    {
      question: `HTML مخفف چیست؟`,
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "هیچ‌کدام"
      ],
      answer: 0
    },
    {
      question: `کدام تگ برای تعریف یک لینک استفاده می‌شود؟`,
      options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;hyper&gt;"],
      answer: 0
    },
    {
      question: `کدام عنصر برای ایجاد خط جدید استفاده می‌شود؟`,
      options: ["&lt;lb&gt;", "&lt;break&gt;", "&lt;br&gt;", "&lt;hr&gt;"],
      answer: 2
    },
    {
      question: `کدام ویژگی آدرس تصویر را در تگ <img> مشخص می‌کند؟`,
      options: ["src", "href", "alt", "link"],
      answer: 0
    },
    {
      question: `کدام تگ برای نمایش متن بولد استفاده می‌شود؟`,
      options: ["&lt;bold&gt;", "&lt;b&gt;", "&lt;strong&gt;", "هر دو &lt;b&gt; و &lt;strong&gt;"],
      answer: 3
    },
    {
      question: `تگ <title> کجا استفاده می‌شود؟`,
      options: ["در داخل &lt;head&gt;", "در داخل &lt;body&gt;", "در داخل &lt;footer&gt;", "در هیچ‌کدام"],
      answer: 0
    },
    {
      question: `کدام ویژگی در لینک‌ها آدرس مقصد را مشخص می‌کند؟`,
      options: ["href", "src", "link", "target"],
      answer: 0
    },
    {
      question: `ویژگی alt در تگ <img> چه کاربردی دارد؟`,
      options: [
        "برای تعریف یک متن جایگزین",
        "برای تنظیم آدرس تصویر",
        "برای لینک دادن تصویر",
        "هیچ‌کدام"
      ],
      answer: 0
    },
    {
      question: `چگونه می‌توان یک جدول در HTML ایجاد کرد؟`,
      options: [
        "با استفاده از تگ &lt;table&gt;",
        "با استفاده از تگ &lt;tbl&gt;",
        "با استفاده از تگ &lt;grid&gt;",
        "هیچ‌کدام"
      ],
      answer: 0
    },
    {
      question: `کدام تگ برای نمایش کد استفاده می‌شود؟`,
      options: ["&lt;code&gt;", "&lt;pre&gt;", "&lt;kbd&gt;", "هر دو &lt;code&gt; و &lt;pre&gt;"],
      answer: 3
    },
    {
      question: `چگونه می‌توان متنی را لینک کرد؟`,
      options: ["با استفاده از تگ &lt;a&gt;", "با استفاده از تگ &lt;link&gt;", "با استفاده از تگ &lt;url&gt;", "هیچ‌کدام"],
      answer: 0
    },
    {
      question: `تفاوت بین <div> و <span> چیست؟`,
      options: [
        "&lt;div&gt; بلاکی است و &lt;span&gt; این‌لاین است",
        "&lt;div&gt; این‌لاین است و &lt;span&gt; بلاکی است",
        "هر دو بلاکی هستند",
        "هر دو این‌لاین هستند"
      ],
      answer: 0
    },
    {
      question: `کدام تگ برای تعریف یک فرم استفاده می‌شود؟`,
      options: ["&lt;form&gt;", "&lt;input&gt;", "&lt;action&gt;", "&lt;fieldset&gt;"],
      answer: 0
    },
    {
      question: `کدام تگ برای نمایش نقل قول استفاده می‌شود؟`,
      options: ["&lt;quote&gt;", "&lt;blockquote&gt;", "&lt;q&gt;", "&lt;quotation&gt;"],
      answer: 1
    },
    {
      question: `کدام ویژگی در تگ <a> برای باز کردن لینک در پنجره جدید استفاده می‌شود؟`,
      options: ["target", "href", "rel", "src"],
      answer: 0
    },
    {
      question: `کدام تگ برای ایجاد لیست مرتب استفاده می‌شود؟`,
      options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;dl&gt;"],
      answer: 1
    },
    {
      question: `کدام تگ برای تعریف یک بخش از متن استفاده می‌شود؟`,
      options: ["&lt;section&gt;", "&lt;article&gt;", "&lt;div&gt;", "&lt;span&gt;"],
      answer: 0
    },
    {
      question: `تگ <meta> در کجا استفاده می‌شود؟`,
      options: ["در داخل &lt;head&gt;", "در داخل &lt;body&gt;", "در داخل &lt;footer&gt;", "هیچ‌کدام"],
      answer: 0
    },
    {
      question: `کدام تگ برای ایجاد یک تصویر قابل کلیک استفاده می‌شود؟`,
      options: ["&lt;a&gt;", "&lt;img&gt;", "&lt;button&gt;", "&lt;link&gt;"],
      answer: 0
    },
    {
      question: `چگونه می‌توان یک دکمه ایجاد کرد؟`,
      options: ["با استفاده از تگ &lt;button&gt;", "با استفاده از تگ &lt;input&gt;", "با استفاده از تگ &lt;a&gt;", "هیچ‌کدام"],
      answer: 0
    },
    {
      question: `کدام ویژگی در تگ <img> برای تنظیم عرض تصویر استفاده می‌شود؟`,
      options: ["width", "height", "alt", "src"],
      answer: 0
    },
    {
      question: `کدام ویژگی در CSS برای تنظیم فاصله داخلی (padding) استفاده می‌شود؟`,
      options: ["padding", "margin", "border", "spacing"],
      answer: 0
    },
    {
      question: `کدام دستور در CSS برای تغییر رنگ متن استفاده می‌شود؟`,
      options: ["color", "background-color", "text-color", "font-color"],
      answer: 0
    },
    {
      question: `کدام ویژگی در CSS برای تنظیم رنگ پس‌زمینه استفاده می‌شود؟`,
      options: ["background-color", "background-image", "color", "background"],
      answer: 0
    },
    {
      question: `چگونه می‌توان در CSS عرض یک عنصر را تنظیم کرد؟`,
      options: [
        "با استفاده از ویژگی width",
        "با استفاده از ویژگی height",
        "با استفاده از ویژگی size",
        "هیچ‌کدام"
      ],
      answer: 0
    },
    {
      question: `چگونه می‌توان در HTML یک ویدیو را نمایش داد؟`,
      options: ["با استفاده از تگ &lt;video&gt;", "با استفاده از تگ &lt;movie&gt;", "با استفاده از تگ &lt;media&gt;", "هیچ‌کدام"],
      answer: 0
    },
    {
      question: `تگ &lt;iframe&gt; برای چه کاری استفاده می‌شود؟`,
      options: ["برای نمایش محتوای خارجی", "برای نمایش فرم‌ها", "برای نمایش تصاویر", "هیچ‌کدام"],
      answer: 0
    }
  ];
  
  
  
  

let currentQuestionIndex = 0;
let correctAnswers = 0;
const incorrectQuestions = [];

const startButton = document.getElementById("start-quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-question");
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("quiz-result");
const correctAnswersElement = document.getElementById("correct-answers");
const percentageElement = document.getElementById("percentage");
const incorrectQuestionsElement = document.getElementById("incorrect-questions");

startButton.addEventListener("click", () => {
  document.getElementById("quiz-intro").classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
});

nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector("input[name='option']:checked");
  if (!selectedOption) {
    alert("لطفاً یک گزینه انتخاب کنید!");
    return;
  }

  const answer = parseInt(selectedOption.value);
  if (answer === questions[currentQuestionIndex].answer) {
    correctAnswers++;
  } else {
    incorrectQuestions.push(questions[currentQuestionIndex].question);
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${index}"> ${option}</label>`;
    optionsElement.appendChild(li);
  });
  nextButton.classList.remove("hidden");
}

function showResults() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  correctAnswersElement.textContent = correctAnswers;
  const percentage = ((correctAnswers / questions.length) * 100).toFixed(2);
  percentageElement.textContent = percentage;

  incorrectQuestionsElement.innerHTML = "";
  incorrectQuestions.forEach((question) => {
    const li = document.createElement("li");
    li.textContent = question;
    incorrectQuestionsElement.appendChild(li);
  });
}
