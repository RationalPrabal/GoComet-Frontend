import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Product from "../../components/Product/Product";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [selected, setSelected] = useState({
    men: false,
    women: false,
  });
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState({
    min: "",
    max: "",
  });
  const [order, setOrder] = useState("");
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  function brandFunction(val) {
    setBrand(val);
  }
  function colorFunction(val) {
    setColor(val);
  }
  function priceFunction(val) {
    setPrice(val);
  }
  function orderFunction(val) {
    setOrder(val);
  }
  useEffect(() => {
    if (width < 701) {
      setShow(false);
    }
  }, []);
  return (
    <>
      <div className={styles.filterButton}>
        <button onClick={() => setShow(!show)}>
          {!show ? "Apply Filters" : "Close Filters"}
        </button>
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.filterDiv}>
          <Filter
            setSelected={setSelected}
            selected={selected}
            brandFunction={brandFunction}
            colorFunction={colorFunction}
            priceFunction={priceFunction}
            orderFunction={orderFunction}
            show={show}
          />
        </div>

        <div className={styles.productDiv}>
          <Product
            selected={selected}
            brand={brand}
            color={color}
            price={price}
            order={order}
          />
        </div>
      </div>
    </>
  );
}
