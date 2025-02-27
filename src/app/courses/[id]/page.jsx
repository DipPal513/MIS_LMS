"use client";
import { base_url } from "@/utils/URL";
import useFetch from "@/utils/useFetch";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const courseDetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Information");
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { data, loading: courseLoading, error } = useFetch(`/courses/${id}`);
  const courseDetails = data?.data;
  const [contentData, setContentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const fetchData = async () => {
    setLoading(true);
    setFetchError(null);
    const token = Cookies.get("token");

    try {
      const response = await axios.get(
        `${base_url}/class-materials?orderBy=id&sortedBy=desc&page=1&search=course_id:${id}&searchJoin=and`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setContentData(response?.data?.data);
      console.log(response);
    } catch (error) {
      console.log(error);
      setFetchError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleEnrollNow = () => {
    setIsModalOpen(true);
  };

  const onConfirm = async () => {
    const token = Cookies.get("token");
    const userId = Cookies.get("id");

    try {
      await axios.post(
        `${base_url}/course-users`,
        {
          course_id: id,
          user_ids: [userId],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
          "Content-Type": "application/json",
        }
      );
      setIsModalOpen(false);
      toast.success("Enrollment successful!");
      router.push("/mycourses");
    } catch (error) {
      console.log("The error is: ", error);
      toast.error("Enrollment failed. Please try again.");
    }
  };

  if (courseLoading) {
    return (
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className=" mt-5 bg-[var(--main-color)] text-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <Skeleton height={224} />
            </div>
            <div className="lg:w-2/3 lg:ml-6 text-left">
              <Skeleton height={40} width={`80%`} />
              <Skeleton height={20} width={`60%`} className="mt-2" />
            </div>
          </div>
        </div>
        <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg shadow-lg p-6 h-[210px]">
            <Skeleton height={30} width={`80%`} />
            <Skeleton height={20} width={`40%`} className="mt-4" />
            <Skeleton height={40} className="mt-6" />
          </div>
          <div className="lg:col-span-2 bg-white border rounded-lg shadow-lg">
            <div className="flex border-b border-gray-200">
              {["Information", "Content", "Instructor"].map((tab) => (
                <Skeleton key={tab} height={40} width={`33.33%`} />
              ))}
            </div>
            <div className="p-6">
              <Skeleton count={5} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading course details.</div>;
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="bg-gradient-to-r mt-5 bg-[var(--main-color)] text-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-56 rounded-lg shadow-lg"
              src={courseDetails?.intro_video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="lg:w-2/3 lg:ml-6 text-left">
            <h1 className="text-3xl font-extrabold">{courseDetails?.title}</h1>
            <p className="mt-2 text-lg font-light">
              {courseDetails?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg shadow-lg p-6 h-[210px]">
          <h2 className="text-xl font-semibold mb-4">{courseDetails?.title}</h2>
          <p className="text-lg font-light ">{courseDetails?.price}</p>
          <p className="font-semibold mb-3"> $399</p>
          <button
            className="w-full py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            onClick={handleEnrollNow}
          >
            Enroll Now
          </button>
        </div>
        <div className="lg:col-span-2 bg-white border rounded-lg shadow-lg">
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
          <div className="p-6 transition-opacity duration-500">
            {activeTab === "Information" && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {/* {courseDetails?.description?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))} */}
              </ul>
            )}
            {activeTab === "Content" && (
              <div className="space-y-4">
                {loading ? (
                  <Skeleton count={5} />
                ) : fetchError ? (
                  <div>{fetchError}</div>
                ) : (
                  contentData?.map((module, index) => (
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
                          {module.link}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
            {activeTab === "Instructor" && (
              <div className="flex items-center space-x-4">
                <img
                  src={courseDetails?.instructor?.photo}
                  alt={courseDetails?.coordinator_name}
                  className="w-24 h-24 rounded-full shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {courseDetails?.coordinator_name}
                  </h3>
                  <p className="text-gray-700">
                    {courseDetails?.coordinator_number}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-96 transform scale-95 transition-transform duration-300 ease-out animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Confirm Enrollment
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Are you sure you want to enroll in this course?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="py-2 px-5 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition duration-200"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="py-2 px-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg transition duration-200"
                onClick={onConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default courseDetailsPage;
