import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTabs } from "../../../features/FAQslice";


const FAQTabs = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tabs.tabs);
  const tabStatus = useSelector((state) => state.tabs.status);
  const error = useSelector((state) => state.tabs.error);

  // important, to fetch our tab's content
  useEffect(() => {
    if (tabStatus === "idle") {
      dispatch(fetchTabs());
    }
  }, [tabStatus, dispatch]);

  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(null);

  let mainTab;
  let subTab;
  if (tabStatus === "succeeded" && tabs.length > 0) {
    mainTab = tabs.map((tab, index) => (
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
    ));
    subTab = tabs[activeMainTab].sub_tabs.map((subTab, index) => (
      <div key={subTab.id} className="mb-4">
        <button
          onClick={() => setActiveSubTab(index === activeSubTab ? null : index)}
          className={`block w-full text-left py-2 px-4 transition-colors duration-300 hover:text-gray-400 rounded ${
            activeSubTab === index ? "bg-sky-300 text-white" : " text-gray-600"
          }`}
        >
          {subTab.label}
        </button>
        {activeSubTab === index && (
          <div
            className={`mt-2 p-4 border rounded bg-white shadow transition duration-300 ease-in-out
                 ${
                   activeSubTab === index
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 -translate-y-2"
                 } ${activeSubTab === index ? "" : "hidden"}
                 `}
          >
            {subTab.content}
          </div>
        )}
      </div>
    ));
  } else if (tabStatus === 'loading'){
    mainTab = <p>Loading...</p>
  } else if (tabStatus === 'failed'){
    mainTab = <p>Error: {error}</p>
  }

  return (
    <div className="flex max-w-6xl mx-auto">
      {/* main tabs section (takes a third of the page) */}
      <div className="w-1/3 p-4">{mainTab}</div>

      {/* main content section (takes 2/3 of the page) */}
      <div className="w-2/3 p-4">{subTab}</div>
    </div>
  );
};

export default FAQTabs;
