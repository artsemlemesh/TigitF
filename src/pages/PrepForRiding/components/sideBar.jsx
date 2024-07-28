import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = ({ posts, activePost }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="sticky top-0 h-screen overflow-y-auto bg-white p-4">
      <div
        className="flex items-center justify-between cursor-pointer p-4 mt-2 bg-white border border-gray-300 rounded-lg shadow-md"
        onClick={toggleDropdown}
      >
        <h3 className=" text-xl font-bold">Table of Contents</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 mt-2 bg-white border border-gray-300 rounded-lg shadow-md">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg cursor-pointer hover:bg-gray-100 ${
                post.id === activePost
                  ? 'bg-blue-100 border-l-4 border-blue-500 shadow'
                  : 'border-l-4 border-transparent'
              } transition-all duration-300 ease-in-out`}
            >
              <h4 className="text-gray-800 font-semibold">{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
