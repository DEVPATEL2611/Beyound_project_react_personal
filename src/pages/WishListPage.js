import React, { useContext, useEffect, useState } from "react";
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  CardMedia,
} from "@mui/material";
import { DeleteOutline, AddShoppingCart } from "@mui/icons-material";
import { fetcher } from "../helpers";
import { LoginContext } from "../helpers/LoginContext";

const WishlistComponent = () => {
  const [favvProducts,setFavvProducts] = useState([]);
  const {setCartProduct} = useContext(LoginContext);
  function fetchFavourites(){
    let obj = {};
      fetcher("ecommerce/wishlist")
      .then((res)=>{console.log(res.data)
        //const dd = res.data.items;
        setFavvProducts(res.data.items)
    })
    .catch(err=>console.log(err))
  }
  console.log(favvProducts)
  
  useEffect(()=>{
  fetchFavourites()
  },[favvProducts])

const onRemoveFromWishlist = (id)=>{
  if(localStorage.getItem("token")){
    fetcher(`ecommerce/wishlist/${id}`,{
      method:"DELETE"})
    .then((res)=>{console.log(res)
      })
    .catch(err=>console.log(err))
  }
}
const onAddToCart = (id)=>{
  if(localStorage.getItem("token")){
    fetcher(`ecommerce/cart/${id}`,{
      method:"PATCH",
      body : JSON.stringify({
        "quantity" :1
      })
    },localStorage.getItem("token"))
    .then((res)=>{console.log(res)
      setCartProduct(res.results)
    })
    .catch(err=>console.log(err))
  }
}
  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: '80%',
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
        Beyoung Wishlist
      </Typography>
      
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      
      {favvProducts && favvProducts.map((product, index) => (
        <Card key={index} style={{ margin: 20, width: 300 }}>
          <CardMedia
            component="img"
            alt={product.products.name}
            height="350"
            image={product.products.displayImage}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom style={{whiteSpace: "nowrap",overflow:"hidden",textOverflow: "ellipsis"}}>
              {product.products.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${product.products.price}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "space-between" }}>
          
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddShoppingCart />}
              onClick={() => onAddToCart(product.products._id)}
            >
              Add to Cart
            </Button>
            <IconButton
              color="primary"
              aria-label="Remove from Wishlist"
              onClick={() => onRemoveFromWishlist(product.products._id)}
            >
              <DeleteOutline />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
    </Paper>
  );
};

export default WishlistComponent;
