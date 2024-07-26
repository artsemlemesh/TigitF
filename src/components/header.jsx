// import { useState } from "react";
// import Account from "./account";
// import NavLinks from "./navlinks";
// import { FaBars, FaHandshake, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";

// const Header = () => {

//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen)
//     }

//   return (
//     <div className="px-4 mx-auto flex flex-col sm:flex-row items-center justify-between bg-blue-500 rounded-md">
//       <div className="flex items-center space-x-3">
//         <FaHandshake size={50} className="mx-4 text-green-500" />
//         <span className="text-xl font-bold">Tigit motorbikes</span>
//       </div>
//       <nav className="hidden md:flex space-x-6">
//         <NavLinks />
//       </nav>

//       <div className="flex items-center space-x-4">
//         <div className="flex items-center">
//           <FaUser className="h-6 w-6 text-gray-500" />
//           <Account />
//         </div>

//         <div className="flex items-center">
//           <div className="flex items-center space-x-1 px-2">
//             <FaShoppingCart className="h-6 w-6 text-gray-500" />
//             <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out">
//               Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="md:hidden flex items-center mt-4 sm:mt-0">
//         <button onClick={toggleMobileMenu} className="text-white">
//             {isMobileMenuOpen ? <FaTimes size={30}/> : <FaBars size={30}/>}
//         </button>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="md:hidden flex flex-col items-center mt-4 space-y-2 bg-blue-600 p-4 w-full rounded-md">
//             <NavLinks/>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Header;

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import KeyInfo from "./keyinfo";
import MotorbikeRoutes from "./motorbikeroutes";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 ">
                      <KeyInfo />
                      
                    </div>
                    <div className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3">
                      <MotorbikeRoutes />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <div className=" px-3 py-2 text-base text-gray-300 font-medium rounded-md hover:bg-gray-700 hover:text-white">
                <KeyInfo />
              </div>
              <div className=" px-3 py-2 text-base text-gray-300 font-medium rounded-md hover:bg-gray-700 hover:text-white">
                <MotorbikeRoutes />
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
