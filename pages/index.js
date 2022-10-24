import React, { useEffect, useState } from "react";
import { firstAction, getAllNews, SidebarisOpen } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../sections/SideBar";
import Image from "next/image";
import moment from "moment";
import NewsCard from "../components/NewsCard";

function HomeApp() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchNews = async () => {
    dispatch(getAllNews());
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
      {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
      <div className="w-full h-full">
        {/* Place your content here */}
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {state?.news?.map((item, index) => (
            <>
              {item.source != "impactwrestling.com" && (
                <NewsCard item={item} index={index} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeApp;
