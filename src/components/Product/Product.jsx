import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "../Single Product/SingleProduct";
import styles from "./Product.module.css";
import { CartContext } from "../../context/CartContext";
export default function Product({ selected, brand, color, price, order }) {
  const [products, setProducts] = React.useState([]);
  const { query } = useContext(CartContext);
  const [loader, setLoader] = useState(false);
  const getProducts = async () => {
    setLoader(true);
    let URL;
    if (selected.men && selected.women) {
      URL = `${process.env.REACT_APP_BASE_URL}/products?gender=men&&gender=women`;
    } else if (selected.men) {
      URL = `${process.env.REACT_APP_BASE_URL}/products?gender=men`;
    } else if (selected.women) {
      URL = `${process.env.REACT_APP_BASE_URL}/products?gender=women`;
    } else if (brand) {
      URL = `${process.env.REACT_APP_BASE_URL}/products?brand=${brand}`;
    } else if (color) {
      URL = `${process.env.REACT_APP_BASE_URL}/products?q=${color}`;
    } else if (price.min || price.max) {
      URL = `${process.env.REACT_APP_BASE_URL}/products?price_gte=${price.min}&price_lte=${price.max}`;
    } else if (order) {
      URL = `${process.env.REACT_APP_BASE_URL}/products?_sort=price&_order=${order}`;
    } else {
      URL = `${process.env.REACT_APP_BASE_URL}/products`;
    }
    try {
      const result = await axios.get(URL);
      setProducts(result.data);
    } catch (error) {}
    setLoader(false);
  };

  async function onSearch(query) {
    setLoader(true);
    try {
      let result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/products?q=${query}`
      );

      setProducts(result.data);
    } catch (error) {
      console.log(error.message);
    }
    setLoader(false);
  }
  React.useEffect(() => {
    getProducts();
  }, [selected, brand, color, price, order]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(query);
    }, 3000);

    // Cleanup the timer when the component unmounts or the search query changes
    return () => clearTimeout(timerId);
  }, [query]);
  return loader ? (
    <div className={styles.loader}>
      <img src="./loader.gif" alt="loader" />
    </div>
  ) : (
    <div className={styles.ProductBox}>
      {products?.length &&
        products.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
    </div>
  );
}
