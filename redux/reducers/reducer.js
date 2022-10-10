const initialState = {
  isSidebarisOpen: false,
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    case "SidebarisOpen":
      return { ...state, isSidebarisOpen: rest.data };

    default:
      return state;
  }
};

export default changeState;
