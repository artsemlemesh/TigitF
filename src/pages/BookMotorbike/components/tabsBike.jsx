import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../../../features/availableBikesSlice";

const tabs = [
  { id: 0, label: "Overview" },
  { id: 1, label: "Specs" },
  { id: 2, label: "Stock" },
];

const TabsBike = ({ bike, bikeStatus, bikeError }) => {
  const dispatch = useDispatch();
  // const bikes = useSelector((state) => state.bikes.bikes);
  // const bikeStatus = useSelector((state) => state.bikes.status);
  // const bikeError = useSelector((state) => state.bikes.error);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (bikeStatus === "idle") {
      dispatch(fetchBikes());
    }
  }, [bikeStatus, dispatch]);

  let content;

  if (bikeStatus === "succeeded") {
    content = (
      <div className="text-gray-700">
        {activeTab === 0 && <p>{bike.content}</p>}
        {activeTab === 1 && (
          <>
            <p className="flex justify-between">
              <span className="font-bold">Transmission:</span>
              <span>{bike.transmission}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-bold">Gears:</span>
              <span>{bike.gears}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-bold">Engine Size:</span>
              <span>{bike.engine}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-bold">Seat Height:</span>
              <span>{bike.seat_height}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-bold">Weight:</span>
              <span>{bike.weight}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-bold">Horse Power:</span>
              <span>{bike.power}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-bold">Tank Size:</span>
              <span>{bike.tank_size}</span>
            </p>
          </>
        )}
        {activeTab === 2 && <p>Stock details or availability information...</p>}
      </div>
    );
  } else if (bikeStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (bikeStatus === "failed") {
    content = <p>Error: {bikeError}</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex justify-between space-x-4 border-b-2 border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 transition-colors duration-300 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{content}</div>
    </div>
  );
};

export default TabsBike;
