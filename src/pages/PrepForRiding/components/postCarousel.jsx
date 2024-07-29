import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PostCarousel = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold ">Related Posts</h2>

      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {posts.map((post, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevPage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextPage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default PostCarousel;
