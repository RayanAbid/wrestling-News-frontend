const initialState = {
  isSidebarisOpen: false,
  news: [],
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    case "SidebarisOpen":
      return { ...state, isSidebarisOpen: rest.data };
    case "setAllNews":
      return { ...state, news: rest.data };

    default:
      return state;
  }
};

export default changeState;
