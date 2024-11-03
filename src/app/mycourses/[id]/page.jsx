"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi"; // For the left arrow icon
import { FaPlay } from "react-icons/fa"; // For the play icon
import Link from "next/link";

// Sample data for the resources
const resources = [
  { id: 1, title: "JavaScript Basics PDF", link: "#" },
  { id: 2, title: "React Documentation", link: "#" },
  { id: 3, title: "Node.js Guide", link: "#" },
];

const lessons = [
  { id: 1, title: "Introduction to JavaScript" },
  { id: 2, title: "React Components Deep Dive" },
  { id: 3, title: "Building APIs with Node.js" },
];

const CoursePage = () => {
  const router = useRouter();
  const initialTab =  "classRecording"; // Default to "classRecording"
  const [activeTab, setActiveTab] = useState(initialTab);



  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      {/* First Row: Navigation with Back Button and Title */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/mycourses" className="flex items-center text-blue-600 bg-white border border-blue-600 rounded-md py-2 px-4 shadow-md transition-all hover:bg-blue-600 hover:text-white">
          <HiArrowLeft className="mr-2" size={24} />
          My Courses
        </Link>
        <h2 className="text-2xl font-semibold">Class Recording</h2>
      </div>

      {/* Second Row: Video Section */}
      <div className="flex bg-white border rounded-lg shadow-md p-6 gap-6 mb-5">
        <div className="flex-1">
          <video
            controls
            className="w-full h-56 rounded-lg shadow-lg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Class Details</h2>
          <p className="text-gray-600">Detailed description about the class.</p>
        </div>
      </div>

      {/* Third Row: Course Title and Live Class */}
      <div className="flex justify-between items-center mb-3">
        <div className="p-6 flex-1 mr-4">
          <h2 className="text-2xl font-semibold">Course Title</h2>
        </div>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full">Live</span>
      </div>

      {/* Tabs */}
      <div className="bg-white border rounded-lg shadow-md mb-6">
        <div className="flex border-b">
          {["Class Recording", "Pre-Recorded Video", "Resources"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
              className={`flex-1 text-center py-2 font-semibold transition duration-300 ${
                activeTab === tab.toLowerCase().replace(" ", "")
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 transition-opacity duration-500">
          {activeTab === "classrecording" && (
            <div>
              <h3 className="text-lg font-semibold">Class Recordings</h3>
              {lessons.map((lesson) => (
                <div key={lesson.id} className="flex items-center mt-2">
                  <FaPlay className="text-black mr-2" size={20} />
                  <Link href={`${router.asPath}/lesson`} className="text-black hover:underline">{lesson.title}</Link>
                </div>
              ))}
            </div>
          )}
          {activeTab === "prerecordedvideo" && (
            <div>
              <h3 className="text-lg font-semibold">Pre-Recorded Videos</h3>
              <video
                controls
                className="w-full h-48 rounded-lg shadow-lg"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {activeTab === "resources" && (
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-2">
                {resources.map((resource) => (
                  <li key={resource.id} className="mt-2">
                    <Link href={resource.link} className="text-black hover:underline">{resource.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
