import React, { useState } from "react";

const photos = [
  {
    src: "https://www.tigitmotorbikes.com/wp-content/uploads/2019/10/blade-banner-1-345x220.jpg",
    alt: "Photo 1",
  },
  {
    src: "https://www.tigitmotorbikes.com/wp-content/uploads/2018/05/blade-2-345x220.jpg",
    alt: "Photo 2",
  },
  {
    src: "https://www.tigitmotorbikes.com/wp-content/uploads/2018/05/blade-3-345x220.jpg",
    alt: "Photo 3",
  },
  {
    src: "https://www.tigitmotorbikes.com/wp-content/uploads/2018/05/blade-4-345x220.jpg",
    alt: "Photo 4",
  },
  {
    src: "https://www.tigitmotorbikes.com/wp-content/uploads/2018/05/blade-5-345x220.jpg",
    alt: "Photo 5",
  },
];

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h1 className="text-2xl ml-4 sm:text-xl font-bold  text-blue-600 mb-4">
        Honda Blade 110cc
      </h1>
      <div className="max-w-lg mx-auto p-4">
        <div className="relative overflow-hidden w-full h-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto flex-shrink-0 object-contain rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-3 mt-4">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCircleClick(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoCarousel;
