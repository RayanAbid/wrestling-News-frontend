import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { SidebarisOpen } from "../redux/actions";

function Header({ bgColor }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(state.isSidebarisOpen);

  const sidebarHandler = async () => {
    setIsOpen(!isOpen);
    await dispatch(SidebarisOpen(isOpen));
  };

  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 dark:bg-darkBgMain"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="bg-gray-200" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    }
  };

  return (
    <div style={{ paddingBottom: "40px" }} className={` bg-appSec`}>
      <nav
        style={{
          position: "fixed",
        }}
        className="w-full drop-shadow-lg py-5 bg-clip-padding bg-white bg-opacity-20 backdrop-blur-lg "
      >
        <div className="container  mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center" aria-label="Home" role="img">
            <img
              className="cursor-pointer  w-8 sm:w-2 md:w-8"
              src={"/logo.png"}
              alt="logo"
            />
            <p className="ml-2 lg:ml-4 text-base lg:text-2xl  text-mainTextLight dark:text-textdarkMain">
              Wrestle Break
            </p>
          </div>
          <div className="">
            {/* {router.pathname != "/" && ( */}
            <button
              onClick={() => sidebarHandler()}
              className="sm:block md:hidden lg:hidden text-mainTextLight dark:text-textdarkMain light:hover:text-gray-800 dark:hover:text-textdarkMainHover dark:hover:text-textdarkMainHover focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <i className="fas fa-bars"></i>
            </button>
            {/* )} */}
            {/* <div 
            id="menu"
            className={`md:block lg:block ${show ? "" : "hidden"}`}
          >
            <button
              onClick={() => setShow(!show)}
              className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3"
            >
              <img
                className="h-8 w-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg"
                alt="hide"
              />
            </button>
            <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white dark:bg-darkBgMain md:bg-transparent  z-20">
              <li className="text-mainTextLight dark:text-textdarkMain text-lg light:hover:text-gray-800 dark:hover:text-textdarkMainHover dark:hover:text-textdarkMainHover cursor-pointer md:ml-10 pt-10 md:pt-0">
                <a href="javascript:void(0)">Company</a>
              </li>
              <li className="text-mainTextLight dark:text-textdarkMain text-lg light:hover:text-gray-800 dark:hover:text-textdarkMainHover cursor-pointer md:ml-10 pt-10 md:pt-0">
                <a href="javascript:void(0)">Features</a>
              </li>
              <li className="text-mainTextLight dark:text-textdarkMain text-lg light:hover:text-gray-800 dark:hover:text-textdarkMainHover cursor-pointer md:ml-10 pt-10 md:pt-0">
                <a href="javascript:void(0)">Contact</a>
              </li>
              <li className="cursor-pointer md:ml-10 pt-10 md:pt-0">
                {renderThemeChanger()}
              </li>
            </ul>
          </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
