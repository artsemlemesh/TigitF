import PhotoCarousel from "./photoCarousel1";
import TabsBike from "./tabsBike";

const AvailableBikes = () => {
  return (
    <>
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center mb-4">Available Bikes</h2>

        <div className="max-w-[1700px] border border-gray-300 rounded-lg m-6 p-2  mx-auto">
          <div className="flex flex-wrap m-2 justify-center">
            <div className="w-full min-w-[430px] sm:w-1/2 lg:w-1/3 p-2 flex flex-col justify-center">
              <PhotoCarousel />
            </div>
            <div className="w-full min-w-[430px] sm:w-1/2 lg:w-1/3 p-2  items-center justify-start h-full">
              <TabsBike/>
            </div>
            <div className="w-full  lg:w-1/3 p-2 flex flex-col items-center justify-center">
              <div className="border border-gray-300 p-4 rounded-lg">
                Lort voluptates, adipisci assumenda.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableBikes;
