import { brainwave } from "../assets";
import Button from "./Button";

const Header = () => {
  const handleNewAccountClick = () => {
    window.parent.postMessage({ action: "navigate", path: "/register" }, "*");
  };

  const handleSignIn = () => {
    window.parent.postMessage({ action: "navigate", path: "/login" }, "*");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/50 lg:backdrop-blur-sm pt-2 pb-2`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <div className="flex flex-grow justify-end items-center">
          <a
            href="#"
            className="button lg:block mr-8 text-n-1/50 transition-colors hover:text-n-1 font-sans"
            onClick={handleNewAccountClick}
          >
            New Account
          </a>
          <Button className="lg:flex" onClick={handleSignIn}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;