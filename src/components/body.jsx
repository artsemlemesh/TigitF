import SelectMenu, { SimpleDatePicker, TimePicker } from "./selectMenu";

const BodyComponent = () => {
  return (
    <>
      {/* rent bike menu */}
      <div className="border border-gray-300 rounded-lg m-8 max-w-full sm:max-w-2xl  lg:max-w-6xl mx-auto">
        <header className="bg-blue-600 text-white rounded-t-lg py-4">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex justify-between items-center space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="p-4">

          <div className="mb-4 text-lg font-semibold">Start Departure</div>
          <div className="flex flex-col  sm:flex-row sm:justify-between items-center sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-3xl mx-auto">            
            <div className="flex-1 flex flex-col items-center justify-center py-10">
              <SelectMenu some_text="Start City" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <SimpleDatePicker select_a_date="Start Date" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <TimePicker select_a_time="Start Time" />
            </div>
          </div>

          <div className="mb-4 text-lg font-semibold">Return Arrival</div>
          <div className="flex flex-col  sm:flex-row sm:justify-between items-center sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-3xl mx-auto">            
            <div className="flex-1 flex flex-col items-center justify-center py-10">
              <SelectMenu some_text="Return City" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <SimpleDatePicker select_a_date="Return Date" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <TimePicker select_a_time="Return Time" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
