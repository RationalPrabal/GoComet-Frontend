import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import EmptyCartLoader from "../Loaders/EmptyCartLoader";

export default function CartModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(user?.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setCartItems(user?.cart);
  }, [user]);
  useEffect(() => {
    let sum = 0;
    cartItems?.map((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum.toFixed(2));
  }, [cartItems]);
  return (
    <>
      <p onClick={onOpen}>Cart</p>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart Items</ModalHeader>
          <ModalCloseButton />
          {cartItems?.length === 0 ? (
            <EmptyCartLoader location="cart" />
          ) : (
            <ModalBody>
              {cartItems?.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </ModalBody>
          )}

          <ModalFooter>
            <p
              style={{
                textAlign: "left",
                marginLeft: "0",
                fontFamily: "helvetica",
                fontWeight: "bold ",
                color: "#ff3e6c",
                fontSize: "18px",
              }}
            >
              <span>Total Cart Value</span>-<span>₹{total}</span>
            </p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
