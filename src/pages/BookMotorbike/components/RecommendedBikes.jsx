
const bikes = [
  {
    pic: "https://www.tigitmotorbikes.com/wp-content/uploads/2019/10/blade-banner-1-345x220.jpg",
    title: "Honda Blade 110cc",
    link: "https://google.com",
  },
  {
    pic: "https://www.tigitmotorbikes.com/wp-content/uploads/2019/10/Tigit-Honda-XR-2-345x220.png",
    title: "Honda XR 150cc",
    link: "https://google.com",
  },
  {
    pic: "https://www.tigitmotorbikes.com/wp-content/uploads/2019/10/CB500-Banner-345x220.jpg",
    title: "Honda CB 500x",
    link: "https://google.com",
  },
];

const RecommendedBikes = () => {
  return (
    <div className="bg-gray-100 pb-6">
    <div className="max-w-6xl mx-auto p-4 ">
      <h2 className="text-3xl font-bold text-center mb-4">Recommended Bikes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bikes.map((bike, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <a href={bike.link}>
              <img
                src={bike.pic}
                alt={bike.title}
                className="w-full object-contain transition-transform duration-300 hover:blur-sm"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{bike.title}</h3>
            </div>
            <div className="flex flex-col  items-center justify-between mb-4">
              <button className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default RecommendedBikes;
