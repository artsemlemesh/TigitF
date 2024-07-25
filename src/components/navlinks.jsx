import KeyInfo from "./keyinfo";
import MotorbikeRoutes from "./motorbikeroutes";

const NavLinks = () => {
  return (
    <>
      <div className="flex justify-center  items-center p-4  text-white font-bold">
        <button class="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-1 px-2 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out mx-6">
          FAQ
        </button>
        <div className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mx-6">
          <KeyInfo />
        </div>
        <div className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mx-6">
          <MotorbikeRoutes />
        </div>
        <button class="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-1 px-2 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out mx-6">
          Book Motorbike
        </button>
        <button class="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-1 px-2 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out mx-6">
          Motorbike Tours
        </button>
        <button class="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-1 px-2 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out mx-6">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default NavLinks;
