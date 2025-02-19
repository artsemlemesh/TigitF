import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const solutions = [
  {
    name: "All Vietnam",
    description: "Best routes",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Saigon motorbike loops",
    description: "some description",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Danang to Nha Trang",
    description: "The best Route",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Danang to Hanoi",
    description: "Another best route",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Offroad",
    description: "history Da Nang loop",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function MotorbikeRoutes() {
  // const {isDropdownVisible,
  //   handleMouseEnter,
  //   handleMouseLeave,} = useContext(GlobalContext)

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsDropdownVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsDropdownVisible(false);
  // };

  const handleButtonClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div onClick={handleButtonClick} className="relative">
      <div className="inline-flex items-center gap-x-1  font-semibold leading-6  focus:outline-none">
        <span>Routes</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </div>

      {isDropdownVisible && (
        <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
