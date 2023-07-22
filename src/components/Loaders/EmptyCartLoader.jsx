import React from "react";
import styles from "./EmptyCartLoader.module.css";
export default function EmptyCartLoader({ location }) {
  return (
    <div className={styles.mainBox}>
      <img
        src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
        alt="empty cart"
      />
      <p className={styles.emptyPara}>There is nothing in your {location}</p>
    </div>
  );
}
