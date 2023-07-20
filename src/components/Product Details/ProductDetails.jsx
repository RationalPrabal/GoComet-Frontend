import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
export default function ProductDetails() {
  const [product, setProduct] = React.useState(null);
  const { id } = useParams();
  const [mainImage, setMainImage] = React.useState("");
  const getSingleProduct = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/products/${id}`
      );
      setProduct(result.data);
      setMainImage(result.data.images[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    product && (
      <div className={styles.mainBox}>
        <div className={styles.imagesBox}>
          {product?.images.map((el) => {
            return (
              <img
                onClick={() => {
                  setMainImage(el);
                }}
                src={el}
                alt="clothes"
              />
            );
          })}
        </div>
        <div className={styles.imageBox}>
          <img src={mainImage} alt="clothes" />
        </div>
        <div className={styles.detailsBox}>
          <p className={styles.brand}>{product.brand}</p>
          <p className={styles.title}>{product.title}</p>
          <p>
            <span className={styles.price}>₹{product.price}</span>
            <span className={styles.mrp}>MRP ₹{product.mrp}</span>
            <span className={styles.discount}>({product.discount} OFF)</span>
          </p>
          <p className={styles.taxes}>inclusive of all taxes</p>
          <p className={styles.size}>Select Size</p>
          <div className={styles.sizeBox}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>2XL</div>
          </div>
          <div className={styles.bagBox}>
            <button className={styles.bag}>ADD TO BAG</button>
            <button className={styles.wishlist}>WISHLIST</button>
          </div>
        </div>
      </div>
    )
  );
}
