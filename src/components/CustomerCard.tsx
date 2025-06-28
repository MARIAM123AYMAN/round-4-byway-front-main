import axios from "axios";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
const CustomerCard = () => {
  type TestimonialUser = {
    id: number;
    name: string;
    email: string;
    avatar: string;
  };

  const [users, setUsers] = useState<TestimonialUser[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
        const transformedUsers = response.data.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (user: any, index: number) => ({
            id: user.id,
            name: `${user.name.firstname} ${user.name.lastname}`,
            email: user.email,
            avatar: `https://i.pravatar.cc/150?img=${index + 1}`, // Fake avatar
          }),
        );
        setUsers(transformedUsers.slice(0, 3)); // Limit to 3 users
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <div className="bg-[#F8FAFC] w-full px-4 py-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              What Our Customer Say About Us
            </h2>
            <div className="flex gap-5">
              <button className="flex items-center justify-center w-12 h-8 rounded-md bg-gray-400 hover:bg-gray-500 text-white shadow border cursor-pointer">
                <FaArrowLeft />
              </button>
              <button className="flex items-center justify-center w-12 h-8 rounded-md bg-gray-400 hover:bg-gray-500 text-white shadow border cursor-pointer">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <FaQuoteLeft className="text-blue-500 text-xl mb-4" />
                <p className="text-sm text-gray-700 mb-6">
                  "Byway's tech courses are top-notch! As someone who's always
                  looking to stay ahead in the rapidly evolving tech world, I
                  appreciate the up-to-date content and engaging multimedia."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">
                      {user.name}
                    </h4>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
