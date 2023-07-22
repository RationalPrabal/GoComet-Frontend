import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
export default function ProductDetails() {
  const [product, setProduct] = React.useState(null);
  const { id } = useParams();
  const [mainImage, setMainImage] = React.useState("");
  const { user, getUserData } = useContext(CartContext);
  const { isAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/products/${id}`
      );
      setProduct(result.data);
      setMainImage(result.data.images[0]);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  const AddToCart = async () => {
    if (isAuth) {
      user?.cart?.push({
        ...product,
        quantity: 1,
      });

      try {
        await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/users/${user.id}`,
          { cart: user.cart }
        );

        toast({
          title: "Item added to cart",

          status: "success",
          duration: 4000,
          isClosable: true,
        });
        getUserData(user.id);
      } catch {
        toast({
          title: "can not add item to cart",

          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Please Login first",

        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  const AddToWishlist = async () => {
    if (isAuth) {
      user?.wishlist?.push(product);

      try {
        await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/users/${user.id}`,
          { wishlist: user.wishlist }
        );

        toast({
          title: "Item added to the wishlist",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        getUserData(user.id);
      } catch {
        toast({
          title: "can not add item to the wishlist",

          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Please Login first",

        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  React.useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    product && (
      <div>
        {loading ? (
          <div className={styles.loader}>
            <img src="./loader.gif" alt="loader" />
          </div>
        ) : (
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
                <span className={styles.discount}>
                  ({product.discount} OFF)
                </span>
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
                <button className={styles.bag} onClick={() => AddToCart()}>
                  ADD TO BAG
                </button>
                <button
                  className={styles.wishlist}
                  onClick={() => AddToWishlist()}
                >
                  WISHLIST
                </button>
              </div>
            </div>
          </div>
        )}
        {loading ? (
          <div className={styles.loader}>
            <img src="./loader.gif" alt="loader" />
          </div>
        ) : (
          <div className={styles.mainBoxMobile}>
            <div className={styles.imageBox}>
              <img src={mainImage} alt="clothes" />
            </div>
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
            <div className={styles.detailsBox}>
              <p className={styles.brand}>{product.brand}</p>
              <p className={styles.title}>{product.title}</p>
              <p>
                <span className={styles.price}>₹{product.price}</span>
                <span className={styles.mrp}>MRP ₹{product.mrp}</span>
                <span className={styles.discount}>
                  ({product.discount} OFF)
                </span>
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
                <button className={styles.bag} onClick={() => AddToCart()}>
                  ADD TO BAG
                </button>
                <button
                  className={styles.wishlist}
                  onClick={() => AddToWishlist()}
                >
                  WISHLIST
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
}
