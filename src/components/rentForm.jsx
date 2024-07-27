import { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import 'react-datepicker/dist/react-datepicker.css';

const RentForm = () => {
  const [formData, setFormData] = useState({
    start_city: "",
    start_date: null,
    start_time: "",
    return_city: "",
    return_date: null,
    return_time: "",
  });

  const handeChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  // const dispatch = useDispatch()

  //   set up later after incorporated Redux
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch()
    setFormData({
      start_city: "",
      start_date: null,
      start_time: "",
      return_city: "",
      return_date: null,
      return_time: "",
    });
  };

  return (
    <div className="w-full mx-auto bg-white p-8">
      <h2 className="text-2xl mb-2 ">Start Departure</h2>
      <form className="flex flex-wrap ">
        {/* start city */}
        <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center">
          <label
            className="block text-lg font-medium text-gray-700 mb-2"
            htmlFor="start_city"
          >
            Start city
          </label>
          <select
            id="start_city"
            name="start_city"
            value={formData.start_city}
            onChange={(e) =>
              setFormData({ ...formData, start_city: e.target.value })
            }
            className="border border-gray-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Choose start city</option>
            <option value="Danang">Danang</option>
            <option value="Hanoi">Hanoi</option>
            <option value="HCM">HCM</option>
            <option value="Hue">Hue</option>
          </select>
        </div>
        {/* start date */}
        <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center">
          <label
            htmlFor="date-picker"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            start date
          </label>
          <DatePicker
            id="date-picker"
            selected={formData.start_date}
            onChange={(date) => handeChange(date, "start_date")}
            dateFormat="MMMM d, yyyy"
            className="border border-gray-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholderText="Click to select a date"
            minDate={new Date()}
          />
        </div>

        {/* start time */}
        <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center">
          <label
            htmlFor="time-picker"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            start time
          </label>
          <DatePicker
            id="time-picker"
            selected={formData.start_time}
            onChange={(date) => handeChange(date, "start_time")}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
            minTime={new Date().setHours(8, 0)}
            maxTime={new Date().setHours(17, 0)}
            className="border border-gray-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholderText="Click to select a date"
          />
        </div>

        {/* return city */}
        <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center">
          <label
            className="block text-lg font-medium text-gray-700 mb-2"
            htmlFor="return_city"
          >
            Return city
          </label>
          <select
            id="return_city"
            name="return_city"
            value={formData.return_city}
            onChange={(e) =>
              setFormData({ ...formData, return_city: e.target.value })
            }
            className="border border-gray-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Choose return city</option>
            <option value="Danang">Danang</option>
            <option value="Hanoi">Hanoi</option>
            <option value="HCM">HCM</option>
            <option value="Hue">Hue</option>
          </select>
        </div>

        {/* return date */}
        <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center">
          <label
            htmlFor="date-picker-return"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            return date
          </label>
          <DatePicker
            id="date-picker-return"
            selected={formData.return_date}
            onChange={(date) => handeChange(date, "return_date")}
            dateFormat="MMMM d, yyyy"
            className="border border-gray-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholderText="Click to select a date"
            minDate={new Date()}
          />
        </div>

        {/* return time */}
        <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center">
          <label
            htmlFor="time-picker-return"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            return time
          </label>
          <DatePicker
            id="time-picker-return"
            selected={formData.return_time}
            onChange={(date) => handeChange(date, "return_time")}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
            minTime={new Date().setHours(8, 0)}
            maxTime={new Date().setHours(17, 0)}
            className="border border-gray-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholderText="Click to select a date"
          />
        </div>

        <div className="w-full md:w-1/3 p-2 flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mx-2"
          >
            Book now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentForm;
