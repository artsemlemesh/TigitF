import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const SelectMenu = ({ some_text }) => {
  const [selected, setSelected] = useState(people[3]);

  useEffect(() => {
    console.log("Selected person:", selected);
  }, [selected]);
  
  return (
    
    <Listbox  onChange={setSelected}> {/* removed value={selected} since it threw an error when i reused component, tried to reassign the value twice  */}
      <Label className="block text-lg font-medium text-gray-700 mb-2 ">
         {some_text} 
      </Label>
      <div className="relative  ">
        <ListboxButton className="relative w-[200px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 ">
          <span className="flex items-center">
            <img
              alt=""
              src={selected.avatar}
              className="h-5 w-5 flex-shrink-0 rounded-full"
            />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <img
                  alt=""
                  src={person.avatar}
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {person.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default SelectMenu;

export const SimpleDatePicker = ({ select_a_date }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <label
        htmlFor="date-picker"
        className="block text-lg font-medium text-gray-700 mb-2"
      >
        {select_a_date}
      </label>
      <DatePicker
        id="date-picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMMM d, yyyy"
        className="border border-gray-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholderText="Click to select a date"
      />
      {selectedDate && (
        <p className="mt-4 text-gray-600">
          Selected Date: {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
};


export const TimePicker = ({select_a_time}) => {
    const [selectedTime, setSelectedTime] = useState(null);
  
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <label htmlFor="time-picker" className="block text-lg font-medium text-gray-700 mb-2">
          {select_a_time}
        </label>
        <DatePicker
          id="time-picker"
          selected={selectedTime}
          onChange={time => setSelectedTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          className="border border-gray-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholderText="Click to select time"
        />
        {selectedTime && (
          <p className="mt-4 text-gray-600">
            Selected Time: {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    );
  };