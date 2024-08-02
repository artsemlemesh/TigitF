
const Tour = ({header, image, content, hashtags}) => {
    
  
  return (
        <div className="max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md overflow-hidden">
          {/* Picture */}
          <img
            src={image} 
            alt={header}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
          />
    
          {/* Header */}
          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
            {header}
          </h2>
    
          {/* Text */}
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600">
              {content}
            </p>
    
          {/* Hashtags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {hashtags.map((hashtag, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-full">#{hashtag}</span>

            ))}
            {/* <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-full">#hashtag1</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-full">#hashtag2</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-full">#hashtag3</span> */}
          </div>
        </div>
      );
  };
  
  export default Tour;
  