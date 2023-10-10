import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { ShoppingCart, CheckCircleOutline } from "@mui/icons-material";
import { fetcher } from "../helpers";

const CartComponent = ({ products }) => {
  const [cart,setCart] = useState({});
  function fetchCartFromAPI(){
    fetcher(`ecommerce/cart`)
      .then((res)=>{
        setCart(res.data.items);
      })
      .catch(err=>console.log(err))
}
useEffect(()=>{
  fetchCartFromAPI();
})
console.log(cart)
  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: 400,
        padding: 40,
        margin: "auto",
        marginTop: 50,
        textAlign: "center",
        background: "#ffffff",
        borderRadius: 10,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 20, color: "#000000" }}>
        Beyoung Cart
      </Typography>

      {/* <List style={{ marginBottom: 20 }}>
        {products.map((product, index) => (
          <ListItem key={index}>
            <ListItemText primary={product.name} secondary={`$${product.price}`} />
          </ListItem>
        ))}
      </List> */}


      <Button
        variant="contained"
        color="primary"
        style={{
          background: "#000000",
          color: "#ffffff",
          width: "80%",
        }}
        startIcon={<CheckCircleOutline />}
      >
        Place Order
      </Button>
    </Paper>
  );
};

export default CartComponent;