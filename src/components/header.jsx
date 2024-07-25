import Account from "./account";
import NavLinks from "./navlinks";
import { FaHandshake } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between  bg-blue-500 rounded-md">
        <div className="flex items-center space-x-3">
          <FaHandshake size={50} className="mx-6 text-green-500" />
          <span className="text-xl font-bold">Tigit motorbikes</span>
        </div>
        <div>
          <NavLinks />
        </div>
        <div>
            <Account />
        </div>
      </div>
    </>
  );
};

export default Header;
