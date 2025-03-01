import React from 'react'

const FaqSection = () => {
  return (
    <section className="bg-gray-800 py-12">
  <div className="lg:max-w-[70%] mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      {/* Question 1 */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md text-left">
        <h3 className="text-xl font-semibold text-blue-400">
          How can I enroll in courses?
        </h3>
        <p className="text-gray-300 mt-2">
          To enroll in a course, simply log into your account, select the course 
          you want, and click the "Start" button. After that, you'll have full 
          access to all the course materials.
        </p>
      </div>

      {/* Question 2 */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md text-left">
        <h3 className="text-xl font-semibold text-blue-400">
          Are these courses suitable for beginners?
        </h3>
        <p className="text-gray-300 mt-2">
          Yes! All courses start from a beginner level and gradually introduce 
          more advanced concepts. So even if you have no prior programming 
          experience, you can easily get started.
        </p>
      </div>

      {/* Question 3 */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md text-left">
        <h3 className="text-xl font-semibold text-blue-400">
          Do I need high-speed internet?
        </h3>
        <p className="text-gray-300 mt-2">
          No, high-speed internet is not required. You can watch the courses 
          even with a normal internet connection. However, for downloading 
          course materials, a faster connection may be helpful.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default FaqSection