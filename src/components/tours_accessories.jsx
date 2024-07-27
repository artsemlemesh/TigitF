const ToursAccessories = () => {
  return (
    <>
      {/* top with 3 photos */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-lg">
        {/* Left Section: Image */}
        <div className="md:w-1/2 w-full p-4 flex items-center justify-center">
          <img
            src="https://www.tigitmotorbikes.com/wp-content/uploads/2019/11/xe.png"
            alt="title"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-1/2 w-full p-4 flex flex-col items-start justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Adventure Motorbikes in Vietnam{" "}
          </h2>
          <p className="text-gray-700 mb-6">
            Scooters to big bikes, we have something for everyone. Tigit has
            over 400 motorbikes on the road at any given time. Mass motorbikes
            of the models that we believe are the best in the country for the
            job of traveling Vietnam. Tigit has a wide network of contacts for
            helping travelers in distress, there is nothing we haven’t dealt
            with when it comes to driving this spectacular country.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Check out our motorbikes
          </button>
        </div>
      </div>

      {/* first one */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 rounded-lg shadow-lg">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 w-full p-4 flex flex-col items-start justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vietnam Motorbike Tours{" "}
          </h2>
          <p className="text-gray-700 mb-6">
            Tigit works with the best freelance guides that we can find. Each
            guide we work with specializes in a specific niche. From the Enduro
            tour guide, to the big bike tour guide to the culture tour guide. We
            have a recommendation for all driving styles. We protect our guides
            and their routes from the mass market, ensuring everything in these
            tours stays truly unique and bespoke.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            View Tours
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 w-full p-4 flex items-center justify-center">
          <img
            src="https://www.tigitmotorbikes.com/wp-content/uploads/2024/06/Chrunix-Logo-2.jpg"
            alt="title"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* second one */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-lg">
        {/* Left Section: Image */}
        <div className="md:w-1/2 w-full p-4 flex items-center justify-center">
          <img
            src="https://www.tigitmotorbikes.com/wp-content/uploads/2022/03/DSC01312-Enhanced-scaled.jpg"
            alt="title"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-1/2 w-full p-4 flex flex-col items-start justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Motorbikes Accessories{" "}
          </h2>
          <p className="text-gray-700 mb-6">
            The Chrunix accessory store is located in every Tigit office. Full
            of motorbike gear from the cheap right up to the expensive. Offroad
            gear, adventure gear, road gear. Armour, Helmets, Panniers and
            everything that comes in the middle. Chrunix has free delivery, one
            month warranty, and connects to the Tigit point system. Spend money
            on rentals, and get discounts on gear.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Motorbike Accessories
          </button>
        </div>
      </div>
    </>
  );
};

export default ToursAccessories;
