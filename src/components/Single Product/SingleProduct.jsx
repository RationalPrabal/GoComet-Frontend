import React from "react";
import styles from "./SingleProduct.module.css";
import { Link } from "react-router-dom";
export default function SingleProduct({
  images,
  brand,
  title,
  mrp,
  discount,
  price,
  id,
}) {
  return (
    <Link to={`/${id}`}>
      <div className={styles.mainBox}>
        <div className={styles.imageBox}>
          <img src={images[0]} alt="product" />
        </div>
        <h4>{brand}</h4>
        <p className={styles.title}>{title}</p>
        <p className={styles.priceSegment}>
          <span className={styles.price}>Rs.{price}</span>
          <span className={styles.mrp}>Rs.{mrp}</span>
          <span className={styles.discount}>{`(${discount}OFF)`}</span>
        </p>
        <div></div>
      </div>
    </Link>
  );
}
