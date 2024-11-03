"use client";
import { useRouter } from "next/navigation";
import { MdAccessTime } from "react-icons/md";

const CoursePage = () => {
  const router = useRouter();

  // Sample data for course modules
  const modules = [
    { id: 1, title: "Introduction to Course", duration: "10:00" },
    { id: 2, title: "Understanding the Basics", duration: "15:00" },
    { id: 3, title: "Advanced Concepts", duration: "20:00" },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto p-8 bg-gray-100">
      {/* Left: Video Section */}
      <div className="flex-1 mb-6 md:mb-0 md:mr-6">
        <video
          controls
          className="w-full h-72 rounded-lg shadow-md border border-gray-300"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">Course Overview</h2>
        <p className="mt-2 text-gray-600">
          This course offers a comprehensive introduction to the subject matter, covering essential concepts and practical applications.
        </p>
      </div>

      {/* Right: Course Modules Section */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Modules</h2>
        <ul>
          {modules.map((module) => (
            <li key={module.id} className="flex items-center justify-between p-3 border-b border-gray-200 hover:bg-gray-50 transition duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white mr-3">
                  {module.id}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{module.title}</h3>
                  <div className="flex items-center text-gray-500">
                    <MdAccessTime className="mr-1" />
                    <span>{module.duration}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoursePage;
