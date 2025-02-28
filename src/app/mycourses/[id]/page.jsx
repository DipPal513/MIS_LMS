"use client";
import useFetch from "@/utils/useFetch";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlay } from "react-icons/fa"; // For the play icon
import { HiArrowLeft } from "react-icons/hi"; // For the left arrow icon

// Sample data for the resources
const resources = [
  { id: 1, title: "JavaScript Basics PDF", link: "#" },
  { id: 2, title: "React Documentation", link: "#" },
  { id: 3, title: "Node.js Guide", link: "#" },
];

const Skeleton = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
  </div>
);
const CourseSkeleton = () => (
  <div className="flex flex-col md:flex-row animate-pulse gap-8">
    <div className="flex-1">
      <div className="h-48 bg-gray-300 rounded mb-4"></div>
    </div>
    <div className="flex-1">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  </div>
);

const CoursePage = () => {
  const router = useRouter();
  const initialTab = "classRecording"; // Default to "classRecording"
  const [activeTab, setActiveTab] = useState(initialTab);
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `/class-materials?search=course_id:${id}&searchJoin=and`
  );
  const { data: courseData, loading: courseLoader } = useFetch(
    `/courses/${id}`
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/mycourses"
          className="flex items-center text-blue-600 bg-white border border-blue-600 rounded-md py-2 px-4 shadow-lg transition-all hover:bg-blue-600 hover:text-white"
        >
          <HiArrowLeft className="mr-2" size={24} />
          My Courses
        </Link>
        <h2 className="text-2xl font-semibold">Class Recording</h2>
      </div>

      <div className="flex flex-col md:flex-row bg-white border rounded-lg shadow-lg p-8 gap-8 mb-6">
        {courseLoader ? (
          <CourseSkeleton />
        ) : (
          <div className="grid grid-cols-12 gap-3 ">
            <div className="col-span-1 md:col-span-4">
              <img src={courseData?.data?.photo} alt="course photo" />
            </div>
            <div className="col-span-1 md:col-span-8">
              <h2 className="text-2xl font-semibold mb-4">
                {courseData?.data?.title}
              </h2>
              <p className="text-gray-600">{courseData?.data?.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Third Row: Course Title and Live Class */}
      <div className="flex justify-between items-center mb-4">
        <div className="p-6 flex-1 mr-4">
          <h2 className="text-2xl font-semibold">Course Title</h2>
        </div>
        <span className="bg-red-500 text-white px-3 py-1 rounded-full">
          Live
        </span>
      </div>

      {/* Tabs */}
      <div className="bg-white border rounded-lg shadow-lg mb-6">
        <div className="flex border-b">
          {["Class Recording", "Pre-Recorded Video", "Resources"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
              className={`flex-1 text-center py-3 font-semibold transition duration-300 ${
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
        <div className="p-6 transition-opacity duration-500">
          {activeTab === "classrecording" && (
            <div>
              <h3 className="text-lg font-semibold">Live Class</h3>
              {loading && <Skeleton />}
              {error && <p className="text-red-500">Error loading data</p>}
              {data &&
                data?.data?.map((lesson) => (
                  <div key={lesson.id} className="flex items-center mt-2">
                    <FaPlay className="text-black mr-2" size={20} />
                    <Link
                      href={`/mycourses/${id}/${lesson.id}`}
                      className="text-black hover:underline"
                    >
                      {lesson.title}
                    </Link>
                  </div>
                ))}
            </div>
          )}
          {activeTab === "prerecordedvideo" && (
            <div>
              <h3 className="text-lg font-semibold">Pre-Recorded Videos</h3>
              <video
                controls
                className="w-full h-56 rounded-lg shadow-lg"
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
                    <Link
                      href={resource.course_id}
                      className="text-black hover:underline"
                    >
                      {resource.title}
                    </Link>
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
