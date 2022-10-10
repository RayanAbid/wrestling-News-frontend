export const SidebarisOpen = (data) => async (dispatch, state) => {
  dispatch({
    type: "SidebarisOpen",
    data: data,
  });
};
