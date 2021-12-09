import * as types from './actionTypes';

export const addToCart = (itemID) => {
  return {
    type: types.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  console.log(qty);
  return {
    type: types.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const emptyCart = () => {
  return {
    type: types.EMPTY_CART,
  }
}