import axios from "axios";
import React, { useContext, useEffect } from "react";
import SingleProduct from "../Single Product/SingleProduct";
import styles from "./Product.module.css";
import { CartContext } from "../../context/CartContext";
export default function Product({ selected, brand, color }) {
  const [products, setProducts] = React.useState([]);
  const { query } = useContext(CartContext);
  console.log(query);
  const getProducts = async () => {
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
    } else {
      URL = `${process.env.REACT_APP_BASE_URL}/products`;
    }
    try {
      const result = await axios.get(URL);
      setProducts(result.data);
    } catch (error) {}
  };

  async function onSearch(query) {
    try {
      let result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/products?q=${query}`
      );
      console.log(result.data);
      setProducts(result.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  React.useEffect(() => {
    getProducts();
  }, [selected, brand, color]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(query);
    }, 5000);

    // Cleanup the timer when the component unmounts or the search query changes
    return () => clearTimeout(timerId);
  }, [query]);
  return (
    <div className={styles.ProductBox}>
      {products?.length &&
        products.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
    </div>
  );
}
