"use client"
import { useState } from "react";

const CourseDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("Information");

  // Dummy data for demonstration
  const courseDetails = {
    title: "Advanced JavaScript Course",
    subtitle: "Master JavaScript for Full-Stack Development",
    price: "$199",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Dummy video URL
    description:
      "This course covers advanced JavaScript concepts and best practices for modern web development.",
    content: "Modules include ES6+, async programming, DOM manipulation, and more.",
    instructor:
      "John Doe, a seasoned JavaScript developer with 10+ years of industry experience.",
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      {/* Top Section with Dark Blue Gradient Background */}
      <div className="bg-gradient-to-r mt-5 from-blue-800 to-blue-600 text-white p-6 rounded-lg shadow-md">
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
        <div className="bg-white border rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">{courseDetails.title}</h2>
          <p className="text-lg font-light mb-6">{courseDetails.price}</p>
          <button className="w-full py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
            Enroll Now
          </button>
        </div>

        {/* Right Column: Tabs */}
        <div className="lg:col-span-2 bg-white border rounded-lg shadow-md">
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
              <p>{courseDetails.description}</p>
            )}
            {activeTab === "Content" && (
              <p>{courseDetails.content}</p>
            )}
            {activeTab === "Instructor" && (
              <p>{courseDetails.instructor}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
