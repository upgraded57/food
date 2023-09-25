const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
