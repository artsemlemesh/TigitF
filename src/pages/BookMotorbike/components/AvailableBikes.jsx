import PhotoCarousel from "./photoCarousel1";
import QTY from "./QTY";
import TabsBike from "./tabsBike";

const AvailableBikes = ({ bike, bikeStatus, bikeError }) => {
  return (
    <>
      <div className="w-full min-w-[430px] sm:w-1/2 lg:w-1/3 p-2 flex flex-col justify-center">
        <PhotoCarousel bike={bike} />
      </div>
      <div className="w-full min-w-[430px] sm:w-1/2 lg:w-2/5 p-2  items-center justify-start h-full">
        <TabsBike bike={bike} bikeStatus={bikeStatus} bikeError={bikeError} />
      </div>
      <div className="w-full  lg:w-full xl:w-1/5 p-2 flex flex-col items-center justify-center h-full">
        <QTY />
      </div>
    </>
  );
};

export default AvailableBikes;
