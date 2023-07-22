import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import WishlistItem from "../WishlistItem/WishlistItem";
import EmptyCartLoader from "../Loaders/EmptyCartLoader";

export default function WishlistModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(CartContext);
  const [wishlistItems, setWishlistItems] = useState(user?.wishlist);
  useEffect(() => {
    setWishlistItems(user?.wishlist);
  }, [user]);
  return (
    <>
      <p onClick={onOpen}>Wishlist</p>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart Items</ModalHeader>
          <ModalCloseButton />
          {wishlistItems?.length === 0 ? (
            <EmptyCartLoader location="wishlist" />
          ) : (
            <ModalBody>
              {wishlistItems?.map((item) => (
                <WishlistItem key={item.id} {...item} />
              ))}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
