import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [
    { id: 'HF48Ur2dbMM', title: 'Video 1' },
    { id: 'zCJccDIXbQo', title: 'Video 2' },
    { id: 'oygrmJFKYZY', title: 'Video 3' },
    { id: 'XR7QK9vR6wQ', title: 'Video 4' },
    { id: 'TXbxiAsK3x4', title: 'Video 5' },
    { id: 'ofJ0_NbSQa0', title: 'Video 6' },
    { id: 'ofJ0_NbSQa0', title: 'Video 7' },
    { id: 'TXbxiAsK3x4', title: 'Video 8' },
    { id: 'ofJ0_NbSQa0', title: 'Video 9' },
  ];

  const videosPerPage = 3;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const nextPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalPages - 1 ? prevIndex + 1 : 0
    );
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalPages - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {videos.map((video, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4" style={{ flexBasis: `calc(100% / ${videosPerPage})` }}>
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.id}`}
                  width="100%"
                  height="auto"
                  controls
                />
                <h2 className="text-lg font-bold mt-2">{video.title}</h2>
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

export default Carousel;