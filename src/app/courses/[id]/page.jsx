"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CourseDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("Information");
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Dummy data for demonstration
  const courseDetails = {
    title: "Advanced JavaScript Course",
    subtitle: "Master JavaScript for Full-Stack Development",
    price: "$199",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: [
      "Understand advanced JavaScript concepts.",
      "Implement ES6+ features effectively.",
      "Master asynchronous programming with Promises and async/await.",
      "Build and manipulate the DOM dynamically.",
      "Write optimized and clean JavaScript code.",
    ],
    content: Array.from({ length: 10 }, (_, index) => ({
      title: `Module ${index + 1}: Advanced Topic ${index + 1}`,
      details: "Detailed description and exercises for this module...",
    })),
    instructor: {
      name: "John Doe",
      expertise: "JavaScript, React, Node.js, Full-Stack Development",
      photo: "https://via.placeholder.com/150",
    },
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      {/* Top Section with Dark Blue Gradient Background */}
      <div className="bg-gradient-to-r mt-5 from-blue-800 to-blue-600 text-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Video */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <video
              controls
              className="w-full h-48 lg:h-56 rounded-lg shadow-lg"
              src={courseDetails.videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right: Title and Subtitle */}
          <div className="lg:w-2/3 lg:ml-6 text-left">
            <h1 className="text-3xl font-extrabold">{courseDetails.title}</h1>
            <p className="mt-2 text-lg font-light">{courseDetails.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content: Two-Column Layout */}
      <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Course Details */}
        <div className="bg-white border rounded-lg shadow-lg p-6 h-[210px]">
          <h2 className="text-xl font-semibold mb-4">{courseDetails.title}</h2>
          <p className="text-lg font-light mb-6">{courseDetails.price}</p>
          <button className="w-full py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
            Enroll Now
          </button>
        </div>

        {/* Right Column: Tabs */}
        <div className="lg:col-span-2 bg-white border rounded-lg shadow-lg">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {["Information", "Content", "Instructor"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center py-3 font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-600 hover:text-blue-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 transition-opacity duration-500">
            {activeTab === "Information" && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {courseDetails.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {activeTab === "Content" && (
              <div className="space-y-4">
                {courseDetails.content.map((module, index) => (
                  <div
                    key={index}
                    className="border rounded-lg shadow-md overflow-hidden transition-shadow duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center py-3 px-4 bg-gray-100 hover:bg-gray-200 transition-all"
                    >
                      <span className="text-left font-semibold text-gray-800">
                        {module.title}
                      </span>
                      {activeAccordion === index ? (
                        <FaChevronUp className="text-blue-700" />
                      ) : (
                        <FaChevronDown className="text-blue-700" />
                      )}
                    </button>
                    {activeAccordion === index && (
                      <div className="p-4 bg-white text-gray-700 transition-all duration-300">
                        {module.details}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Instructor" && (
              <div className="flex items-center space-x-4">
                <img
                  src={courseDetails.instructor.photo}
                  alt={courseDetails.instructor.name}
                  className="w-24 h-24 rounded-full shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {courseDetails.instructor.name}
                  </h3>
                  <p className="text-gray-700">
                    Expertise: {courseDetails.instructor.expertise}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
