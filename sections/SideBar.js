import React, { useEffect, useState } from "react";
import { firstAction, SidebarisOpen } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function SideBar() {
  const state = useSelector((state) => state);

  return (
    <>
      <div className="w-64 absolute sm:relative  bg-appSec shadow md:h-full flex-col justify-between hidden sm:flex">
        <div className="px-8">
          <div className=" w-full flex items-center">
            <img
              className="cursor-pointer   w-7/12"
              src={"/logo.png"}
              alt="logo"
            />
          </div>

          <ul className="mt-12 h-screen">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="text-sm text-white  ml-2">Dashboard</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${!state.isSidebarisOpen ? "hidden" : "block"}`}>
        <div
          className="w-64 z-40 absolute  bg-appSec    shadow md:h-full flex-col justify-between sm:hidden  transition duration-150 ease-in-out"
          id="mobile-nav"
        >
          <div className="px-8 h-screen">
            <div className="h-16  w-full flex items-center"></div>
            <ul className="mt-12">
              <li className="flex  w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <span className="text-sm  ml-2">Dashboard</span>
                </div>
              </li>
            </ul>
            <div className="flex justify-center mt-48 mb-4 w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
