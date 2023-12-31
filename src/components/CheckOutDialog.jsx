import React from "react";
import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import Checkout from "../Routes/Checkout";
// import { checkout } from "../Context/actions";
// import { CartContext } from "../Context/CartContext/CartContext";

export default function CheckOutDialog() {
  const { dispatch } = useContext(CartContext);
  const { state } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => {
    onClose();
    toast({
      title: "PAYMENT SUCCESSFUL",
      description: "Than You. Your Subscription has been Activated",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    dispatch(Checkout);
    navigate("/");
  };

  return (
    <>
      <Button
        w="100%"
        size="lg"
        colorScheme="messenger"
        bg="#23408c"
        onClick={onOpen}
      >
        PAY ₹{state.Price} NOW
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              CONFIRM PURCHASE
            </AlertDialogHeader>

            <AlertDialogBody>AMOUNT TO BE PAID: ₹{state.Price}</AlertDialogBody>

            <AlertDialogFooter>
              <Button
                px={10}
                colorScheme="messenger"
                bg="#23408c"
                ref={cancelRef}
                onClick={handleClick}
              >
                PAY
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                CANCEL
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
