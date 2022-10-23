import React, { useEffect, useState } from "react";
import { firstAction, getAllNews, SidebarisOpen } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../sections/SideBar";
import Image from "next/image";
import moment from "moment";

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
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {state?.news.map((item) => (
            <>
              {item.source != "impactwrestling.com" && (
                <a target="_blank" href={item?.postLink}>
                  <div class="max-w-sm bg-appMain rounded-lg overflow-hidden shadow-lg">
                    <img
                      style={{
                        objectFit: "cover",
                        minHeight: "40%",
                        maxHeight: "40%",
                      }}
                      class="w-full"
                      src={item?.image}
                    />
                    <div class="px-6 py-4">
                      <div class="font-bold text-md mb-2">
                        {item?.title.substring(0, 40)}
                        {item?.title.length > 40 && "..."}
                      </div>
                      <p class="text-white text-sm text-base">
                        {item?.description.substring(0, 30)}
                        {item?.description.length > 30 && "..."}
                      </p>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex justify-between">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                        {item?.source}
                      </span>
                      <span>{moment(item?.createdAt).fromNow()}</span>
                    </div>
                  </div>
                </a>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeApp;
