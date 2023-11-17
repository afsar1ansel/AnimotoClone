import React from "react";
import {
  AlertDialog,
  Box,
  Center,
  Divider,
  Flex,
  SimpleGrid,
  Spacer,
  Text,

} from "@chakra-ui/react";


import { useContext } from "react";
import {
  FormLabel,Input
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import { AppContext } from "../context/Appcontext";
import { Navigate } from "react-router-dom";
import CheckOutDialog from "../components/CheckOutDialog";
// import AlertDialog from "./CheckOutDialog";
// import { AlertDialog } from "@chakra-ui/react";


export default function Checkout() {
  const { state } = useContext(CartContext);
  const {isLogin} = useContext(AppContext)
  console.log(state);
  console.log('in checkout')

  if(!isLogin){
    return <Navigate to="/login" />
  }


  return (
    <SimpleGrid
    flexWrap="wrap-reverse"
    columns={{sm:1,md:2,lg:2}}
      spacing={16}
      margin="auto"
      w={{sm:"100%",md:"90%",lg:"80%"}}
      mb={10}
     
      mt={8}
      
      bg="#F3f3F9"
      borderRadius="md"
    > 
    <Center>
       <Box width="100%"   p={16}>
        <form>
          <FormLabel>Card Number</FormLabel>
          <Input boxShadow="base" type="password" maxLength="16" min={16} />
          <FormLabel>Expiry</FormLabel>
          <Input boxShadow="base" type="date" />
          <FormLabel>CVV</FormLabel>
          <Input boxShadow="base" maxLength="3" type="password" />
          <FormLabel>Postal Code</FormLabel>
          <Input boxShadow="base" maxLength="6" type="text" />
        </form>
      </Box>
    </Center>
     

      <Box w="100%" p={16}>
        <Text fontSize="2rem" fontWeight="600" color="#181C47" align="center">
          Your Order Summary
        </Text>
        <Divider />
        <Flex pt={4}>
          <Box>
            <Text>{state.type} subscription:</Text>
            <Text>Animoto {state.subscription}</Text>
          </Box>
          <Spacer />
          <Box>₹{state.Price}</Box>
        </Flex>
        <Text py={6} align="start">
          {`Billed as ₹${state.price} every ${
            state.type === "Annual" ? "year" : "month"
          }`}
        </Text>

        <Flex pt={4}>
          <Box>
            <Divider color="black" />
            <Text fontSize="2rem" fontWeight="600" color="#181C47">
              Total:
            </Text>
          </Box>
          <Spacer />
          <Box fontSize="2rem" fontWeight="600" color="#181C47">
            ₹{state.Price}
          </Box>
        </Flex>
        <Divider />
        <Center py={6}>
          <CheckOutDialog />
        </Center>
        <Text align="center">
          By purchasing, you agree to the terms of service and privacy policy.
        </Text>
      </Box>
    </SimpleGrid>
  );
}
