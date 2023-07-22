import React from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./Auth.module.css";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../components/Firebase/Firebase";
import { useNavigate } from "react-router-dom";
export default function Auth() {
  const nav = useNavigate();
  const handleLogin = async () => {
    try {
      let data = await signInWithPopup(auth, provider);
      let userdata = {
        name: data.user.displayName,
        email: data.user.email,
        phone: data.user.phoneNumber,
        img: data.user.photoURL,
        id: data.user.uid,
        cart: [],
        wishlist: [],
        orders: 0,
      };
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/users`, userdata)
        .then(() => nav("/"))
        .catch((e) => {
          console.log(e.message);
        });
    } catch (error) {
      console.log(error);
    }
    nav("/");
  };
  return (
    <div className={styles.mainBox}>
      <div className={styles.logoBox} onClick={handleLogin}>
        <FcGoogle cursor={"pointer"} fontSize={"48"} />
        <p>Continue with Google</p>
      </div>
    </div>
  );
}
