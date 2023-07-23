import React, { useContext, useState } from "react";
import styles from "./CartItem.module.css";
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
export default function CartItem({
  id,
  brand,
  title,
  price,
  mrp,
  discount,
  images,
  quantity,
  size,
}) {
  const { user, getUserData } = useContext(CartContext);
  const [quant, setQuant] = useState(quantity);
  const toast = useToast();
  const changeQuantity = async (id, change) => {
    const newUserCart = user?.cart.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          quantity: el.quantity + change,
        };
      } else return el;
    });

    try {
      await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${user.id}`, {
        cart: newUserCart,
      });
      setQuant(quant + change);
      getUserData(user.id);
    } catch {}
  };

  const deleteItem = async (id) => {
    const newUserCart = user?.cart.filter((el) => {
      return el.id !== id;
    });
    try {
      await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${user.id}`, {
        cart: newUserCart,
      });
      toast({
        title: "Item Deleted Successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      getUserData(user.id);
    } catch {}
  };

  const AddToWishlist = async (id) => {
    //only the item
    const newUserWishlist = user?.cart.filter((el) => {
      return el.id === id;
    });
    //without that item
    const newUserCart = user?.cart.filter((el) => {
      return el.id !== id;
    });
    user.cart = newUserCart;
    user?.wishlist?.push(newUserWishlist[0]);

    try {
      await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${user.id}`, {
        cart: user.cart,
        wishlist: user.wishlist,
      });
      toast({
        title: "Added to Wishlist Successfully",

        status: "success",
        duration: 4000,
        isClosable: true,
      });
      getUserData(user.id);
    } catch {}
  };
  return (
    <div className={styles.mainBox}>
      <img src={images[0]} alt="product" />
      <p className={styles.brand}>{brand}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.priceSegment}>
        <span className={styles.price}>Rs.{price}</span>
        <span className={styles.mrp}>Rs.{mrp}</span>
        <span className={styles.discount}>{`(${discount}OFF)`}</span>
      </p>
      <p className={styles.size}>
        <span>Selected Size-</span>
        <span>{size}</span>
      </p>
      <p className={styles.totalPrice}>
        <span>Total Price</span>-<span> ₹{(price * quant).toFixed(2)}</span>
      </p>
      <div className={styles.Flex}>
        <button
          onClick={() => changeQuantity(id, -1)}
          disabled={quantity === 1}
          style={{ color: "red", fontSize: "26px" }}
        >
          -
        </button>
        <p mx={2}>{quantity}</p>
        <button
          style={{ color: "green", fontSize: "22px" }}
          onClick={() => changeQuantity(id, 1)}
        >
          +
        </button>
      </div>
      <div className={styles.deleteBox}>
        <button className={styles.deleteButton} onClick={() => deleteItem(id)}>
          <AiTwotoneDelete style={{ fontSize: "20px" }} />
          Delete
        </button>
        <button
          className={styles.moveToWishlist}
          onClick={() => AddToWishlist(id)}
        >
          Move to Wishlist
        </button>
      </div>
    </div>
  );
}
