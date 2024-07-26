import KeyInfo from "./keyinfo";
import MotorbikeRoutes from "./motorbikeroutes";

const NavLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center p-4 text-white font-bold space-y-4 sm:space-y-0 sm:space-x-6">
      <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out">
        FAQ
      </button>
      <div className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        <KeyInfo />
      </div>
      <div className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        <MotorbikeRoutes />
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out">
        Book Motorbike
      </button>
      <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out">
        Motorbike Tours
      </button>
      <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out">
        Contact Us
      </button>
    </div>
  );
};

export default NavLinks;