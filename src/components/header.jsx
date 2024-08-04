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
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/authSlice";
import LoginForm from "./LoginForm";
import { useState } from "react";

const navigation = [
  { name: "Blog", href: "/blog", current: true },
  { name: "FAQ", href: "/faqs", current: false },
  { name: "Book", href: "/bookMotorbike", current: false },
  { name: "Tours", href: "/motorbikeTours", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    dispatch(logoutUser());
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

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
                {/* <div className="flex flex-shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div> */}
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
                <div className="hidden sm:block ml-auto">
                    {user ? (
                      <>
                        <span className="text-gray-700 font-semibold text-center">
                          Hello, {user.username}
                        </span>
                        <button
                          onClick={handleLogout}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 text-center"
                        >
                          {authStatus === "loading"
                            ? "Logging out ..."
                            : "Logout"}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={toggleLogin}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                        >
                          {authStatus === "loading"
                            ? "Logging in ..."
                            : "Login"}
                        </button>
                        {showLogin && <LoginForm />}
                      </>
                    )}
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
              <div>
                {user ? (
                  <div className="px-4 py-3 border-t border-gray-200 text-center">
                    <span className="block text-gray-700 font-semibold">
                      Hello, {user.username}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full text-center"
                    >
                      {authStatus === "loading" ? "Logging out ..." : "Logout"}
                    </button>
                  </div>
                ) : (
                  <div className="px-4 py-3 border-t border-gray-200 text-center">
                    <button
                      onClick={toggleLogin}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center"
                    >
                      {authStatus === "loading" ? "Logging in ..." : "Login"}
                    </button>
                    {showLogin && <LoginForm />}
                  </div>
                )}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
