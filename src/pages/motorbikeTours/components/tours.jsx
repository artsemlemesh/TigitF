import { useEffect, useState } from "react";
import Tour from "./tour";
import { useDispatch, useSelector } from "react-redux";
import { fetchTours } from "../../../features/tourSlice";

// const tours = [
//   {
//     header: "first",
//     hashtag1: "Hanoi",
//     hashtag2: "Tigit Guides",
//     hashtag3: "Rent a Tour Guide",
//   },
//   { header: "second", hashtag2: "Tigit Guides", hashtag3: "Rent a Tour Guide" },
//   { header: "third", hashtag1: "Tigit Guides", hashtag3: "Rent a Tour Guide" },
// ];

const tabs = [
  {
    id: 0,
    label: "All Tours",
  },
  { id: 1, label: "Hanoi Tours" },
  { id: 2, label: "The Extra Mile" },
  { id: 3, label: "Saigon TOurs" },
  { id: 4, label: "Danang Tours" },
  { id: 5, label: "City to City Tours" },
  { id: 6, label: "TOur cho" },
];

const ToursComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const dispatch = useDispatch()
  const tours = useSelector((state) => state.tours.tours)
  const status = useSelector((state) => state.tours.status)
  const error = useSelector((state) => state.tours.error)

  useEffect(() => {
    if (status === 'idle'){
        dispatch(fetchTours())
    }
}, [status, dispatch])

  const filterTours = (tours, activeTab) => {
    if (activeTab === 0) {
      return tours
    }

    const filterKeywords = tabs[activeTab].label.toLowerCase().split(' ')
    return tours.filter((tour) =>
    tour.hashtags.some((hashtag) =>
      filterKeywords.some((keyword) => hashtag.toLowerCase().includes(keyword))
    ))
  }


  let content;
  if(status === 'succeeded') {
    const filteredTours = filterTours(tours, activeTab)
    content = filteredTours.map((tour, index) => (
      <Tour
        key={index}
        header={tour.header}
        image={tour.image}
        content={tour.content}
        hashtags={tour.hashtags}
      />
    ))}
  

  return (
    <>
      <div className=" max-w-[1000px]   mx-auto flex flex-wrap justify-between space-x-4 border-b-2 border-gray-200 mb-4">
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

      <div className="max-w-full mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {tours.map((tour, index) => (
          <Tour
            key={index}
            header={tour.header}
            // hashtag1={tour.hashtag1}
            // hashtag2={tour.hashtag2}
            // hashtag3={tour.hashtag3}
          />
        ))} */}
        {content}
        
      </div>
    </>
  );
};

export default ToursComponent;
