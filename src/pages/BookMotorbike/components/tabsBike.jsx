import { useState } from "react";

const tabs = [
  {
    id: 0,
    label: "Overview",
    content:`The Honda Blade is one of the most common and simple motorbikes in Vietnam. Nothing bad can go wrong on these indestructible machines! Although Tigit offers more exciting motorbikes, the Blade is all that a traveller needs in Vietnam. The incredible Honda Blade can tackle any road that Vietnam can throw at it!`  },
  { id: 1, label: "Specs", content: { transmission: "semi-automatic", gears: "4 Gears", engine: '110cc', seat: '769mm', weight: '98kg', power: '9 HP', tank: '3.7 Litres' } },
  { id: 2, label: "Stock", content: "Content for Tab 3" },
];
const TabsBike = () => {
  const [activeTab, setActiveTab] = useState(0);

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
      <div className="p-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="text-gray-700">
                {tab.id === 1 ? (
                    <>
                        <p className="flex justify-between"><span className="font-bold">Transmission:</span><span>{tab.content.transmission}</span></p>
                        <p className="flex justify-between"><span className="font-bold">Gears:</span><span>{tab.content.gears}</span></p>
                        <p className="flex justify-between"><span className="font-bold">Engine Size:</span><span>{tab.content.engine}</span></p>
                        <p className="flex justify-between"><span className="font-bold">Seat Height:</span><span>{tab.content.seat}</span></p>
                        <p className="flex justify-between"><span className="font-bold">Weight:</span><span>{tab.content.weight}</span></p>
                        <p className="flex justify-between"><span className="font-bold">Horse Power:</span><span>{tab.content.power}</span></p>
                        <p className="flex justify-between"><span className="font-bold">Tank Size:</span><span>{tab.content.tank}</span></p>
                    </>
                ):
                (
                    <p>
                        {tab.content}
                    </p>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TabsBike;
