import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Product from "../../components/Product/Product";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [filter, setFilter] = useState({
    price: [],
    gender: [],
    color: [],
    brand: [],
    sort: "",
  });
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

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
          <Filter filter={filter} setFilter={setFilter} show={show} />
        </div>

        <div className={styles.productDiv}>
          <Product filter={filter} />
        </div>
      </div>
    </>
  );
}
