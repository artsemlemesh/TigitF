import FlyoutMenu from "./flyout";
import KeyInfo from "./keyinfo";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center p-4 bg-blue-500 text-white font-bold">
        <FlyoutMenu />
        <KeyInfo/>
      </div>
    </>
  );
};

export default Header;
