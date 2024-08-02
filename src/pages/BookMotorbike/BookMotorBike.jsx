import { useDispatch, useSelector } from "react-redux";
import AvailableBikes from "./components/AvailableBikes";
import RecommendedBikes from "./components/RecommendedBikes";
import { useEffect } from "react";
import { fetchBikes } from "../../features/availableBikesSlice";

const BookMotorbike = () => {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bikes.bikes);
  const bikeStatus = useSelector((state) => state.bikes.status);
  const bikeError = useSelector((state) => state.bikes.error);

  useEffect(() => {
    if (bikeStatus === "idle") {
      dispatch(fetchBikes());
    }
  }, [bikeStatus, dispatch]);

  return (
    <>
      {/* <RecommendedBikes /> */}
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center mb-4">Available Bikes</h2>
        <div className="max-w-[1700px] border border-gray-300 rounded-lg m-6 p-2  mx-auto">
          <div className="flex flex-wrap m-2 justify-center">
            {bikeStatus === "succeeded" &&
              bikes.map((bike, index) => (
                <AvailableBikes
                  key={index}
                  bike={bike}
                  bikeStatus={bikeStatus}
                  bikeError={bikeError}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookMotorbike;
