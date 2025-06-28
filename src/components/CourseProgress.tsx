import { ChevronDown, ChevronUp, Video } from "lucide-react"
import { useState } from "react"

function CourseProgress() {
  const [IsOpenSection, setIsOpenSection] = useState<number | null>(null);
  const [activeLesson, setActiveLesson] = useState<{ section: number; lesson: number } | null>(null);

  const tabs = [
    {
      title: "Introduction to UX Design",
      lessons: [
        { title: "What is User Experience (UX) Design?", duration: "4min", completed: true },
        { title: "Historical Overview of UX Design", duration: "4min", completed: true },
        { title: "Understanding User-Centered Design", duration: "4min", completed: true },
        { title: "The Role of UX Design in Digital Products", duration: "4min", completed: false },
        { title: "Introduction to UX Design Tools and Techniques", duration: "4min", completed: false },
      ],
    },
    {
      title: "Basics of User-Centered Design",
      lessons: [
        { title: "Lesson 1", duration: "5min", completed: false },
        { title: "Lesson 2", duration: "3min", completed: false },
      ],
    },
    {
      title: "Elements of User Experience",
      lessons: [
        { title: "Lesson 1", duration: "5min", completed: false },
        { title: "Lesson 2", duration: "3min", completed: false },
      ],
    },
    {
      title: "Visual Design Principles",
      lessons: [
        { title: "Lesson 1", duration: "5min", completed: false },
        { title: "Lesson 2", duration: "3min", completed: false },
      ],
    },
  ];

  return (
    <div className="flex justify-end">
      <div className="w-[400px] bg-[#E2E8F0] border rounded-[16px]">
        <h2 className=" p-6 font-bold text-black text-[24px]">Course Completion</h2>

        {tabs.map((tab, index) => (
          <div key={index}>
            <div
              className="text-[18px] p-5 flex flex-start gap-4 font-bold"
              onClick={() =>
                setIsOpenSection(IsOpenSection === index ? null : index)
              }
            >
              {IsOpenSection == index ? <ChevronUp /> : <ChevronDown />}
              <h3>{tab.title}</h3>
            </div>

            {IsOpenSection == index && (
              <div className="border-t-1  border-[#0f172a38]">
                {tab.lessons.map((lesson, i) => {
                  const isActive = activeLesson?.section === index && activeLesson?.lesson === i;

                  const bgClass = isActive
                    ? "bg-[#0F172A] text-white"
                    : "bg-[#E2E8F0] text-[#0F172A]";

                  return (
                    <div
                      key={i}
                      onClick={() => setActiveLesson({ section: index, lesson: i })}
                      className={`p-4 flex justify-between m-5 rounded-md cursor-pointer ${bgClass}`}
                    >
                      <div className="flex gap-3 items-center">
                        <input type="checkbox" className="bg-green-500" checked={lesson.completed} readOnly />
                        <span className="w-[215px] text-[16px] font-[400]">
                          {i}. {lesson.title}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Video />
                        <p className="text-[16px]">{lesson.duration}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseProgress;
