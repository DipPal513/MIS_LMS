"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

// Sample course data for demonstration
const courses = [
  {
    id: 1,
    title: "Advanced JavaScript Course",
    author: "John Doe",
    imageUrl: "https://via.placeholder.com/400x200?text=Node.js+Course", // Dummy image URL
  },
  {
    id: 2,
    title: "React for Beginners",
    author: "Jane Smith",
    imageUrl: "https://via.placeholder.com/400x200?text=Node.js+Course", // Dummy image URL
  },
  {
    id: 3,
    title: "Node.js & Express Essentials",
    author: "Alex Johnson",
    imageUrl: "https://via.placeholder.com/400x200?text=Node.js+Course", // Dummy image URL
  },
];

const MyCoursesPage = () => {
  const router = useRouter(); // Initialize router

  // Function to navigate to the course details page
  const handleStartNow = (id) => {
    router.push(`/mycourses/${id}`); // Navigate to course detail page
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 my-10 border rounded-lg py-3 shadow-lg">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-left">My Courses</h1>

      {/* Courses List */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col lg:flex-row items-center lg:items-start bg-white rounded-lg shadow-md p-4 lg:p-6 border border-gray-200"
          >
            {/* Left: Dummy Image */}
            <div className="w-full mb-4 lg:mb-0">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Course Details */}
            <div className="lg:ml-6 w-full lg:w-2/3 text-left">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">Instructor: {course.author}</p>
              <button
                className="px-5 py-2 rounded-lg bg-main text-white font-semibold hover:bg-blue-800 transition duration-300"
                onClick={() => handleStartNow(course.id)} // Navigate on click
              >
                Start Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCoursesPage;
