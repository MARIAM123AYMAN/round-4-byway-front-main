import React from "react";
import {
  IoPlayOutline,
  IoSchoolOutline,
  IoMedalOutline,
} from "react-icons/io5";
import instructor from "../assets/instructor.png";

const CourseLearningPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 pt-4 md:pt-0">
              Introduction to User Experience Design
            </h1>
            <img
              src="https://placehold.co/800x400"
              alt="Course Preview"
              className="rounded-lg w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Course Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Embark on a transformative journey into the dynamic world of User
              Experience (UX) Design with our comprehensive course,
              "Introduction to User Experience Design." This course is
              meticulously crafted to provide you with a foundational
              understanding of the principles, methodologies, and tools that
              drive exceptional user experiences in the digital landscape.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Key Learning Objectives
            </h2>
            <ul className="list-disc pl-4 space-y-2 text-gray-700">
              <li>
                Gain a clear understanding of what User Experience (UX) Design
                entails and its importance in today's digital world.
              </li>
              <li>
                Explore the fundamental principles of user-centered design and
                how to apply them to create intuitive and user-friendly
                interfaces.
              </li>
              <li>
                Learn about the various elements that contribute to a positive
                user experience, including information architecture, interaction
                design, and visual design.
              </li>
            </ul>
          </div>
          <div>
            <div className="my-12 border-t border-gray-200" />
            <h2 className="text-xl font-semibold text-gray-900">Instructor</h2>
            <div className="py-5">
              <h3 className="text-xl font-semibold text-blue-500">
                Ronald Richards
              </h3>
              <h5 className="text-gray-700 font-normal">UI/UX Designer</h5>
            </div>
            <div className="flex items-center gap-4 justify-between md:justify-normal">
              <div>
                <img
                  src={instructor}
                  alt="Instructor"
                  className="w-[120px] h-[120px] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <IoMedalOutline size={22} />
                  40,445 Reviews
                </span>
                <span className="flex items-center gap-1">
                  <IoSchoolOutline size={22} />
                  500 Students
                </span>
                <span className="flex items-center gap-1">
                  <IoPlayOutline size={22} />
                  15 Courses
                </span>
              </div>
            </div>
            <p className="font-normal text-gray-700 py-5">
              With over a decade of industry experience, Ronald brings a wealth
              of practical knowledge to the classroom. He has played a pivotal
              role in designing user-centric interfaces for renowned tech
              companies, ensuring seamless and engaging user experiences.
            </p>
          </div>
        </div>
        {/* Sidebar */}
        <aside className="space-y-6">Sidebar</aside>
      </div>
    </div>
  );
};

export default CourseLearningPage;
