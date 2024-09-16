import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBikeToCart, rentBike } from "../../../features/rentSlice";
import Cart from "./cart";


const QTY = ({bike}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const {status, error, rentedBikes} = useSelector((state) => state.rentBike)
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);


  const handleAddToCart = () => {
    dispatch(addBikeToCart({bikeId: bike.id, quantity}))
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

        <div className="w-full xl:w-full sm:w-full p-2">
          <button
            onClick={handleAddToCart}  // Call the handleAddToCart function on click
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            disabled={status === "loading"}  // Disable while loading
          >
            {status === "loading" ? "Renting..." : "Add to rented list"}
          </button>
        </div>
        <Cart/>
      </div>
    </div>
  );
};

export default QTY;
