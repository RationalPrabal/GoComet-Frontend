import React, { useContext } from "react";
import styles from "./WishlistItem.module.css";
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
export default function WishlistItem({
  id,
  brand,
  title,
  price,
  mrp,
  discount,
  images,
}) {
  const { user, getUserData } = useContext(CartContext);
  const toast = useToast();
  const deleteItem = async (id) => {
    const newUserWishlist = user?.wishlist.filter((el) => {
      return el.id !== id;
    });
    try {
      await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${user.id}`, {
        wishlist: newUserWishlist,
      });
      toast({
        title: "Item deleted from wishlist",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      getUserData(user.id);
    } catch {
      toast({
        title: "Could not delete item from wishlist",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const AddToCart = async (id) => {
    //only the item
    const newUserCart = user?.wishlist.filter((el) => {
      return el.id === id;
    });
    //without that item
    const newUserWishlist = user?.wishlist.filter((el) => {
      return el.id !== id;
    });
    user.wishlist = newUserWishlist;
    user?.cart?.push({ ...newUserCart[0], quantity: 1 });

    try {
      await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${user.id}`, {
        cart: user.cart,
        wishlist: user.wishlist,
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

      <div className={styles.deleteBox}>
        <button className={styles.deleteButton} onClick={() => deleteItem(id)}>
          <AiTwotoneDelete style={{ fontSize: "20px" }} />
          Delete
        </button>
        <button className={styles.moveToWishlist} onClick={() => AddToCart(id)}>
          Move to Cart
        </button>
      </div>
    </div>
  );
}
