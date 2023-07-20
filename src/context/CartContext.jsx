import React from "react";
import { createContext } from "react";
import axios from "axios";
export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [query, setQuery] = React.useState("");
  const [user, setUser] = React.useState(null);
  const getUserData = async (id) => {
    try {
      let data = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${id}`
      );

      setUser(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <CartContext.Provider value={{ getUserData, user, query, setQuery }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartContextProvider;
