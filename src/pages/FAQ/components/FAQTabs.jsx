import React, { useState } from "react";

const mainTabs = [
  {
    id: 0,
    label: "Main Tab 1",
    subTabs: [
      { id: 0, label: "Sub Tab 1", content: "Content for Sub Tab 1" },
      { id: 1, label: "Sub Tab 2", content: "Content for Sub Tab 2" },
    ],
  },
  {
    id: 1,
    label: "Main Tab 2",
    subTabs: [
      { id: 0, label: "Sub Tab 2", content: "Content for Sub Tab 2" },
      { id: 1, label: "Sub Tab 2", content: "Content for Sub Tab 2" },
    ],
  },
  {
    id: 2,
    label: "Main Tab 3",
    subTabs: [
      { id: 0, label: "Sub Tab 3", content: "Content for Sub Tab 3" },
      { id: 1, label: "Sub Tab 2", content: "Content for Sub Tab 2" },
    ],
  },
];

const FAQTabs = () => {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(null);

  return (
    <div className="flex max-w-6xl mx-auto">
      {/* main tabs section (takes a third of the page) */}
      <div className="w-1/3 p-4">
        {mainTabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveMainTab(index);
              setActiveSubTab(null);
            }}
            className={`block w-full text-left py-2 px-4 transition-colors duration-300 hover:text-gray-400 rounded ${
              activeMainTab === index
                ? "bg-sky-200 border-l-4 border-sky-700 text-gray-600"
                : " text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* main content section (takes 2/3 of the page) */}
      <div className="w-2/3 p-4">
        {mainTabs[activeMainTab].subTabs.map((subTab, index) => (
          <div key={subTab.id} className="mb-4">
            <button
              onClick={() =>
                setActiveSubTab(index === activeSubTab ? null : index)
              }
              className={`block w-full text-left py-2 px-4 transition-colors duration-300 hover:text-gray-400 rounded ${
                activeSubTab === index
                  ? "bg-sky-300 text-white"
                  : " text-gray-600"
              }`}
            >
              {subTab.label}
            </button>
            {activeSubTab === index && (
              <div
              className={`mt-2 p-4 border rounded bg-white shadow transition duration-300 ease-in-out
                 ${activeSubTab === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} ${activeSubTab === index ? '' : 'hidden'}
                 `}
            >
                {subTab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQTabs;
