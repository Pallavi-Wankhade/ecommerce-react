import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");
  const [cartCount, setCartCount] = useState();

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    const items = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //adding quantity in cartItem
        : cartItem
    );
    setCartItems(items);
    setMessage(" Product Added successfully");
    setTimeout(() => {
      setMessage("");
    }, 2000);
    {
      isItemInCart && setCartItems(items);
    }
    {
      !isItemInCart && setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    // const items = [...cartItems, item]; //create new array with items appended item in cartItems.
    // setCartItems(items);
  };

  const incrementHandler = (item) => {
    const items = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //adding quantity in cartItem
        : cartItem
    );
    setCartItems(items);
  };

  const decrementHandler = (item) => {
    const items = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 1,
          } //adding quantity in cartItem
        : cartItem
    );
    setCartItems(items);
  };

  const removeFromCart = (item) => {
    const items = cartItems.filter((cartItem) => cartItem.id != item.id);
    setCartItems(items);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;
    return itemTotal + total;
  }, 0);

  console.log(cartTotal);

  useEffect(() => {
    const size = cartItems.length;
    setCartCount(size);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        message,
        cartCount,
        addToCart,
        removeFromCart,
        clearCart,
        incrementHandler,
        decrementHandler,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CartProvider;
