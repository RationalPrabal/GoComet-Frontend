import React, { useState } from "react";
import Filter from "../components/Filter/Filter";
import Product from "../components/Product/Product";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [selected, setSelected] = useState({
    men: false,
    women: false,
  });
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");

  function brandFunction(val) {
    setBrand(val);
  }
  function colorFunction(val) {
    setColor(val);
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.filterDiv}>
        <Filter
          setSelected={setSelected}
          selected={selected}
          brandFunction={brandFunction}
          colorFunction={colorFunction}
        />
      </div>

      <div className={styles.productDiv}>
        <Product selected={selected} brand={brand} color={color} />
      </div>
    </div>
  );
}
