import React, { useEffect, useState, type JSX } from "react";
import banner1 from "../assets/homepage-banner-1.png";
import banner2 from "../assets/homepage-banner-2.png";
import banner3 from "../assets/homepage-banner-3.png";
import becomeInstructor from "../assets/become-instructor.png";
import checkoutCourse from "../assets/checkout-courses.png";
import {
  FaBriefcase,
  FaCode,
  FaFlask,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import CustomerCard from "../components/CustomerCard";

const banners = [banner1, banner2, banner3];
const HomeScreen: React.FC = () => {
  const [selectedBanner, setSelectedBanner] = useState(banners[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * banners.length);
    setSelectedBanner(banners[randomIndex]);
  }, []);
  // Status
  type StatItem = {
    number: string;
    label: string;
  };

  const stats: StatItem[] = [
    { number: "250+", label: "Courses by our best mentors" },
    { number: "1000+", label: "Courses by our best mentors" },
    { number: "15+", label: "Courses by our best mentors" },
    { number: "2400+", label: "Courses by our best mentors" },
  ];

  // Top Categories
  type Category = {
    icon: JSX.Element;
    title: string;
    count: number;
  };

  const categories: Category[] = [
    { icon: <FaRocket size={28} />, title: "Astrology", count: 11 },
    { icon: <FaCode size={28} />, title: "Development", count: 12 },
    { icon: <FaBriefcase size={28} />, title: "Marketing", count: 12 },
    { icon: <FaFlask size={28} />, title: "Physics", count: 14 },
  ];

  // Instructor card
  type InstructorCard = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
  };
  const instructors: InstructorCard[] = [
    {
      image: becomeInstructor,
      title: "Become an instructor",
      description:
        "Join our community and share your knowledge with millions of students in Byeway. Start teaching today and make an impact.",
      buttonText: "Start Your Instructor Journey",
    },
    {
      image: checkoutCourse,
      title: "Transform your life through education",
      description:
        "Discover courses that will help you develop new skills, advance your career, and achieve your goals.",
      buttonText: "Checkout Courses",
    },
  ];
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <span className="block">Unlock Your Potential</span>
              <span className="block">With Byway</span>
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to Byway, where learning knows no bounds...
            </p>
            <button className="w-fit rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
              Start your instructor journey
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={selectedBanner}
              alt="Byway learning platform"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* Status */}
      <div className="w-full bg-gray-100 px-6 py-8 md:px-10 lg:px-20 lg:py-10 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center lg:flex-row flex-col gap-6"
          >
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold text-black">{item.number}</h3>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
            {/* Vertical divider for large screens only */}
            {index !== stats.length - 1 && (
              <div className="hidden lg:block h-12 w-px bg-gray-300 mx-2" />
            )}
          </div>
        ))}
      </div>
      {/* Top Categories */}
      <div className="w-full max-w-[1280px] mx-auto px-4 py-6 pt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-black">
            Top Categories
          </h2>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            See All
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center border border-gray-200 rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-blue-500 mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-base">{cat.title}</h3>
              <p className="text-sm text-gray-500">{cat.count} Courses</p>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <CustomerCard />
      {/* Instructor card */}
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-8 py-8 ${
              index === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } md:flex-row md:justify-between`}
          >
            <div className="flex flex-col space-y-6 md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                {instructor.title}
              </h1>
              <p className="text-lg text-gray-600">{instructor.description}</p>
              <button className="flex items-center gap-3 w-fit rounded-lg bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer">
                {instructor.buttonText}
                <FaArrowRight />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="w-fit h-fit">
                <img
                  src={instructor.image}
                  alt="Byway learning platform"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
