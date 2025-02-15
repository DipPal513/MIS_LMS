"use client";
import useFetch from "@/utils/useFetch";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";

const CoursePage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `/class-materials?search=course_id:${id}&searchJoin=and`
  );
  const { data: courseData, loading: courseLoader } = useFetch(
    `/courses/${id}`
  );
  const modules = data?.data || [];
  const [activeModule, setActiveModule] = useState(null);
console.log(modules)
  // Convert Google Drive link to an embeddable format
  const getEmbedUrl = (driveLink) => {
    if (!driveLink) return "";
    
    // Match the Google Drive file ID in the link
    const match = driveLink.match(/\/d\/([^/]+)\//);
    
    // If a valid match is found, construct the preview URL
    return match
      ? `https://drive.google.com/file/d/${match[1]}/preview`
      : driveLink; // If the link doesn't match, return the original
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto p-8 bg-gray-100">
      <div className="flex-1 mb-6 md:mb-0 md:mr-6">
        {loading ? (
          <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse"></div>
        ) : activeModule ? (
          <iframe
            src={
              getEmbedUrl(activeModule.link)
            }
            width="100%"
            height="400px"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        ) : (
          <div className="w-full h-72 flex items-center justify-center text-gray-600 bg-gray-200 rounded-lg">
            Select a module to watch
          </div>
        )}
        {activeModule && (
          <>
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {activeModule.title}
            </h2>
            <p className="mt-2 text-gray-600">
              {activeModule.description}
            </p>
          </>
        ) }
      </div>

      {/* Right: Course Modules Section */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 max-h-[500px] overflow-y-scroll relative ">
      <div className=" sticky -top-6 bg-white w-full py-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {courseData?.data?.title}
        </h2>
        <p className="text-gray-600 font-semibold mb-1">
          {courseData?.data?.coordinator_name}
        </p>
      </div>
        {loading ? (
          <ul className="mt-4">
            {[...Array(5)].map((_, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-3 border-b border-gray-200"
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="flex-1 ml-3">
                  <div className="w-full h-5 bg-gray-300 animate-pulse mb-2"></div>
                  <div className="w-full h-4 bg-gray-300 animate-pulse"></div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {modules.map((module, index) => (
              <li
                key={module.id}
                className={`flex items-center justify-between p-3 border-b border-gray-200 transition duration-300 cursor-pointer ${
                  activeModule?.id === module.id
                    ? "bg-blue-100 border-l-4 border-blue-500"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveModule(module)}
              >
                <div className="flex items-center">
                  <div>
                    <FaPlayCircle className="text-4xl mr-3" />
                  </div>
                  <h3 className="font-semibold  text-gray-800">
                    {module.title}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
