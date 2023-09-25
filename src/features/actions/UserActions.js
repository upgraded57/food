export const GT_USER_DATA = "GET_USER_DATA";

export const getUserData = (user) => {
  return {
    type: "GET_USER_DATA",
    payload: user,
  };
};
