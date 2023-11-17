import React, { createContext, useReducer } from 'react';


const initialState = {
  Price: '',
  type: '',
  subscription: '',
};


const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
          return {
            ...state,
            Price: action.payload.price,
            type: action.payload.type,
            subscription: action.payload.subscription,
          };
   
    default:
      return state;
  }
};


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
