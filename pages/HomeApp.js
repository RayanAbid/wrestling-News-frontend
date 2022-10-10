import React, { useEffect, useState } from "react";
import { firstAction, SidebarisOpen } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../sections/SideBar";

function HomeApp() {
  return (
    <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
      {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
      <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
        {/* Place your content here */}
      </div>
    </div>
  );
}

export default HomeApp;
