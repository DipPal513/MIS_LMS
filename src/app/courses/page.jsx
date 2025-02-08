"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBook, FaClock, FaDollarSign } from "react-icons/fa";

const AllCoursesPage = () => {
  const router = useRouter();
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "Learn the basics of Course 1.",
      image: "/path/to/course1.jpg",
    },
    {
      id: 2,
      title: "Course 2",
      description: "Deep dive into Course 2 topics.",
      image: "/path/to/course2.jpg",
    },
    {
      id: 3,
      title: "Master advanced skills in Course 3.",
      image: "/path/to/course3.jpg",
    },
    // Add more courses as needed
  ];

  return (
    <div className="max-w-screen-xl mx-auto mt-8 mb-8 px-2 sm:px-8 lg:px-16">
      <div className="flex bg-white rounded-lg shadow border">
        {/* Main Content - Course Cards */}
        <div className="flex-1 py-3 px-2 sm:p-6">
          <h2 className="text-2xl border-b-2 pb-4 font-bold mb-6">
            <FaBook className="inline-block mr-2 text-indigo-500" />
            All Courses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="cursor-pointer bg-white rounded-md shadow border p-4 hover:shadow-lg transition-shadow"
                onClick={() => router.push(`/courses/${course.id}`)}
              >
                <img
                  src={
                    "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    <FaBook className="inline-block mr-2 text-green-500" />
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{course.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-md font-semibold">
                      <FaClock className="inline-block mr-2 text-blue-500" />
                      34 Hours
                    </h3>
                    <p className="font-semibold text-md">
                      <FaDollarSign className="inline-block mr-2 text-yellow-500" />
                      399
                    </p>
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="inline-block w-full text-center py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow hover:from-indigo-600 hover:to-purple-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;
