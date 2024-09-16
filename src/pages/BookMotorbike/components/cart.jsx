import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeBikeFromCart } from "../../../features/rentSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const rentedBikes = useSelector((state) => state.rentBike.rentedBikes);  // Access the rented bikes

  const handleRemoveBike = (bikeId) => {
    dispatch(removeBikeFromCart({ bikeId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Rented Bikes</h2>
      <ul>
        {rentedBikes.map((bike) => (
          <li key={bike.bikeId}>
            Bike ID: {bike.bikeId}, Quantity: {bike.quantity}
            <button onClick={() => handleRemoveBike(bike.bikeId)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;