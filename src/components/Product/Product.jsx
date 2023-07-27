import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "../Single Product/SingleProduct";
import styles from "./Product.module.css";
import { CartContext } from "../../context/CartContext";
export default function Product({ filter }) {
  const [products, setProducts] = React.useState([]);
  const { query } = useContext(CartContext);
  const [loader, setLoader] = useState(false);
  const getProducts = async () => {
    setLoader(true);
    let baseURL = `${process.env.REACT_APP_BASE_URL}/products`;
    console.log(baseURL);
    let flag = false;
    if (filter.price.length > 0) {
      flag = true;
      filter.price.forEach((el) => {
        baseURL = baseURL + "?price_gte=" + el.min + "&price_lte=" + el.max;
      });
    }
    if (filter.brand.length > 0) {
      if (flag) {
        filter.brand.forEach((el) => {
          baseURL = baseURL + "&brand=" + el;
        });
      } else {
        filter.brand.forEach((el) => {
          if (flag) {
            baseURL = baseURL + "&brand=" + el;
          } else baseURL = baseURL + "?brand=" + el;
          flag = true;
        });
      }
    }

    if (filter.gender.length > 0) {
      if (flag) {
        filter.gender.forEach((el) => {
          baseURL = baseURL + "&gender=" + el;
        });
      } else {
        filter.gender.forEach((el) => {
          if (flag) {
            baseURL = baseURL + "&gender=" + el;
          } else baseURL = baseURL + "?gender=" + el;
          flag = true;
        });
      }
    }
    if (filter.color.length > 0) {
      if (flag) {
        filter.color.forEach((el) => {
          baseURL = baseURL + "&title_like=" + el;
        });
      } else {
        filter.color.forEach((el) => {
          if (flag) {
            baseURL = baseURL + "&title_like=" + el;
          } else baseURL = baseURL + "?title_like=" + el;
          flag = true;
        });
      }
    }
    if (filter.sort) {
      if (flag) {
        baseURL = baseURL + "&_sort=price&_order=" + filter.sort;
      } else {
        baseURL = baseURL + "?_sort=price&_order=" + filter.sort;
      }
    }
    console.log(baseURL);
    try {
      const result = await axios.get(baseURL);
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
  }, [filter]);

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
      {products?.length ? (
        products.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))
      ) : (
        <div className={styles.mainBox}>
          <img
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
            alt="no products found"
          />
          <p className={styles.emptyPara}>No Products found</p>
        </div>
      )}
    </div>
  );
}
