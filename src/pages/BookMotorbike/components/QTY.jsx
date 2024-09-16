import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rentBike, addRentedBike } from "../../../features/rentSlice";

const QTY = ({bike}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const {status, error, rentedBikes} = useSelector((state) => state.rentBike)
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleRentBike = (bikeId) => {
     dispatch(rentBike(bikeId))
  }

  

  return (
    <div className="max-w-lg w-full min-w-[250px] mx-auto p-4">
      <div className="w-full flex justify-between items-center mb-4 p-2">
        <span className="font-bold text-lg">QTY:</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={decrement}
            className="px-2 py-1 bg-gray-200 rounded-md"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={increment}
            className="px-2 py-1 bg-gray-200 rounded-md"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex  justify-between xl:flex-col   lg:flex-row  flex-col  w-full">
        <div className="w-full xl:w-full   sm:w-full p-2">
          <button className="w-full  py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Watch Video
          </button>
        </div>

        <div className="w-full xl:w-full   sm:w-full p-2">
          <button onClick={handleRentBike} className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            Add to rented list
          </button>
          {status === 'failed' && <p>Error: {error}</p>}
          <p>redted bikes: {rentedBikes.length}</p>
        </div>
      </div>
    </div>
  );
};

export default QTY;
