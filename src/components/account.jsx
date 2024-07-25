import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import {
  ShoppingCartIcon,
  UserIcon,
  UserPlusIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const options = [
  { name: "login", href: "#", icon: LockClosedIcon },
  { name: "register", href: "#", icon: UserPlusIcon },
];

const Account = () => {

    

  return (
    <>
      <Popover className="relative"
       
      >
        <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
        <div className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mx-6">

            account
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
          </div>
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute max-w-xs w-60 h-50 left-[5%] z-10 mt-5 flex  -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-3 ">
              {options.map((item) => (
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
                  <div className="flex items-center">
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0"></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </>
  );
};

export default Account;
