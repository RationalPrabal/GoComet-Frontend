import React from "react";
import Filter from "../components/Filter/Filter";
import Product from "../components/Product/Product";
import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.filterDiv}>
        <Filter />
      </div>

      <div className={styles.productDiv}>
        <Product />
      </div>
    </div>
  );
}
