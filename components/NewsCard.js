import moment from "moment";
import React from "react";

function NewsCard({ item, index }) {
  return (
    <a key={index} target="_blank" href={item?.postLink}>
      <div class="max-w-sm min-h-full bg-appSec  rounded-lg overflow-hidden shadow-lg">
        <div className="  ">
          <img
            style={{
              height: "163px",
              // objectFit: "contain",
              // minHeight: "40%",
              // maxHeight: "40%",
              // height: "40%",
            }}
            class="object-cover w-full"
            src={item?.image}
          />
        </div>

        <div class="px-6 py-4">
          <div class="font-bold text-md mb-2">
            {item?.title?.substring(0, 40)}
            {item?.title?.length > 40 && "..."}
          </div>
          <p class="text-white text-sm text-base">
            {item?.description?.substring(0, 20)}
            {item?.description?.length > 20 && "..."}
          </p>
        </div>
        <div class="px-6 pt-4  flex pb-3 justify-between">
          <span class="inline-block  bg-gray-200 rounded-full px-3 text-xs font-semibold text-gray-700 mr-2 ">
            {item?.source}
          </span>
          <span className="text-sm">{moment(item?.createdAt)?.fromNow()}</span>
        </div>
      </div>
    </a>
  );
}

export default NewsCard;
