import React, { useEffect, useState } from "react";
import { firstAction, SidebarisOpen } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

function SideBar() {
  const state = useSelector((state) => state);

  const links = [
    { name: "Latest News", link: "/" },
    { name: "Profile", link: "/profile" },
  ];

  return (
    <>
      <div className="w-64 bg-appSec sm:relative  bg-transpaent shadow md:h-full flex-col justify-between hidden sm:flex">
        <div
          style={{
            position: "fixed",
          }}
          className="px-8 drop-shadow-lg py-5 bg-clip-padding bg-white bg-opacity-20 backdrop-blur-lg "
        >
          <div className="  flex items-center">
            <img
              width={"130px"}
              className="cursor-pointer"
              src={"/logo.png"}
              alt="logo"
            />
          </div>

          <ul className="mt-12 h-screen">
            <li className="flex flex-col justify-between text-gray-300 hover:text-gray-500 cursor-pointer  mb-6">
              {links.map((item, index) => (
                <Link href={item?.link}>
                  <span className="text-lg text-white mb-4  ml-2">
                    {item.name}
                  </span>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: 30,
        }}
        className={`bg-appSec ${!state.isSidebarisOpen ? "hidden" : "block"}`}
      >
        <div
          style={{
            border: "1px solid white",
            borderLeft: 0,
            borderTop: "0px",
            borderBottom: "0px",
            position: "fixed",
          }}
          className="w-64 z-40  drop-shadow-lg py-5 bg-clip-padding bg-white bg-opacity-20 backdrop-blur-lg  sm:hidden  transition duration-150 ease-in-out"
          id="mobile-nav"
        >
          <div className="px-8 h-screen">
            <div className="h-16  w-full flex items-center"></div>
            <ul className="mt-12">
              <li className="flex  w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  {links.map((item, index) => (
                    <Link href={item?.link}>
                      <span className="text-sm  ml-2">{item.name}</span>
                    </Link>
                  ))}
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
