import axios from "axios";
import { URL } from "../../utils/APIUtils";

export const SidebarisOpen = (data) => async (dispatch, state) => {
  dispatch({
    type: "SidebarisOpen",
    data: data,
  });
};

export const getAllNews = (data) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/news/get-all-news`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data.success) {
        dispatch({
          type: "setAllNews",
          data: response.data.news,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
