import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CartModal from "../CartModal/CartModal";
import WishlistModal from "../WishlistModal/WishlistModal";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const { getUserData, user, setQuery } = useContext(CartContext);
  const { userId, getUserId, LogoutUser, setAuth, isAuth } =
    useContext(AuthContext);
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const toast = useToast();
  const nav = useNavigate();
  React.useEffect(() => {
    getUserId();
  }, []);

  React.useEffect(() => {
    if (userId) {
      getUserData(userId);
    }
  }, [userId]);
  React.useEffect(() => {
    if (width < 551) {
      setShow(false);
    }
  }, []);
  return (
    <>
      {" "}
      <div className={styles.hamburger}>
        <GiHamburgerMenu onClick={() => setShow(!show)} />
      </div>
      {show && (
        <div className={styles.mainBox}>
          <div className={styles.leftBox}>
            <div onClick={() => nav("/")} className={styles.logo}>
              <img
                src="data:image/png;base64,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"
                alt="logo"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search items"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.rightBox}>
            <div>
              {!isAuth ? (
                <p onClick={() => nav("/auth")}>Login</p>
              ) : (
                <Popover>
                  <PopoverTrigger>
                    <img
                      src={user?.img}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                      }}
                      alt="profile"
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Hi,{user?.name}</PopoverHeader>
                    <PopoverBody>
                      <Box display={"grid"}>
                        <Button
                          color={"red.300"}
                          onClick={() => {
                            LogoutUser();
                            getUserData(user?.id);
                            setAuth(false);
                            toast({
                              title: "Logged out Successfully",

                              status: "success",
                              duration: 4000,
                              isClosable: true,
                            });
                          }}
                        >
                          LogOut
                        </Button>
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            <div style={{ display: "flex" }}>
              <CartModal />
              {isAuth ? `(${user?.cart.length})` : ""}
            </div>
            <WishlistModal />
          </div>
        </div>
      )}
    </>
  );
}
