"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { base_url } from "@/utils/URL";
import { FaRocket } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const MyCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const token = Cookies.get("token");
    try {
      const response = await axios.get(
        `${base_url}/courses?orderBy=id&sortedBy=desc&page=1&limit=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCourses(response?.data?.data);
      console.log("courses data", response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStartNow = (id) => {
    router.push(`/mycourses/${id}`);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 my-10 border rounded-lg py-3 shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-left">My Courses</h1>
      {loading ? (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="flex flex-col lg:flex-row items-center lg:items-start bg-white rounded-lg shadow-md p-4 lg:p-6 border border-gray-200"
            >
              <div className="w-full mb-4 lg:mb-0">
                <Skeleton height={200} />
              </div>
              <div className="lg:ml-6 w-full lg:w-2/3 text-left">
                <Skeleton count={2} />
                <Skeleton width={100} height={40} />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col lg:flex-row items-center lg:items-start bg-white rounded-lg shadow-md p-4 lg:p-6 border border-gray-200"
            >
              <div className="w-full mb-4 lg:mb-0">
                <img
                  src={course.photo}
                  alt={course.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:ml-6 w-full lg:w-2/3 text-left">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4"> {course.coordinator_name}</p>
                <button
                  className="px-5 py-2 rounded-lg bg-main text-white font-semibold hover:bg-blue-800 transition duration-300 gap-2 flex items-center"
                  onClick={() => handleStartNow(course.id)}
                >
                 <p>Start Now</p> <IoIosArrowForward />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCoursesPage;
