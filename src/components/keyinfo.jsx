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
    name: "Blogs",
    description: "All out posts",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Preparation",
    description: "Essential things to bring",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "How to navigate in Vietnam",
    description: "How to ride a bike safely",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Parking and security",
    description: "How to prevent the bike from stealing",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Eating in Vietnam",
    description: "Eateries, restaurants and coffee shops",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function KeyInfo() {
  // const {isDropdownVisible,
  //   handleMouseEnter,
  //   handleMouseLeave,} = useContext(GlobalContext)


  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <div className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6  focus:outline-none">
        <span>Info</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </div>

      {isDropdownVisible && (
        <div
          
          className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
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
