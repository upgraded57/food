export const ADDITEMTOCART = "ADDITEMTOCART";
export const DELETEITEMFROMCART = "DELETEITEMFROMCART";

export const addItemToCart = (item) => {
  return {
    type: ADDITEMTOCART,
    payload: item,
  };
};

export const deleteItemFromCart = (item) => {
  return {
    type: DELETEITEMFROMCART,
    payload: item,
  };
};
