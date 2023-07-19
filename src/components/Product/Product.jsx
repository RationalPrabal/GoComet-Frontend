import axios from "axios";
import React from "react";
import SingleProduct from "../Single Product/SingleProduct";
import styles from "./Product.module.css";
export default function Product() {
  const [products, setProducts] = React.useState([]);
  const getProducts = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/products`
      );
      setProducts(result.data);
    } catch (error) {}
  };
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.ProductBox}>
      {products.length &&
        products.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
    </div>
  );
}
