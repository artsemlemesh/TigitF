import PhotoCarousel from "./photoCarousel1";
import TabsBike from "./tabsBike";

const AvailableBikes = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">Available Bikes</h2>

        <div className="max-w-full border border-gray-300 rounded-lg m-6 p-2  mx-16">
          <div className="flex flex-wrap m-2">
            <div className="w-full md:w-1/3 p-2 flex flex-col  justify-center">
              <PhotoCarousel />
            </div>
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-start h-full">
              <TabsBike/>
            </div>
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center">
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
