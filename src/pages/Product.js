import React, { useContext, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Divider,
  Rating,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { fetcher } from '../helpers';
import { LoginContext } from '../helpers/LoginContext';
import { useNavigate } from 'react-router-dom';
const ProductPage = (props) => {
  const [selectedSize, setSelectedSize] = useState('M'); // Default selected size
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Default selected quantity
  const navigate = useNavigate();
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };
  const {setCartProduct} = useContext(LoginContext)
  const handCartApi = (id)=>{
    if(localStorage.getItem("token")){
      fetcher(`ecommerce/cart/${id}`,{
        method:"PATCH",
        body : JSON.stringify({
          "quantity" :parseInt(selectedQuantity) 
        })
      },localStorage.getItem("token"))
      .then((res)=>{console.log(res)
        setCartProduct(res.results)
        
      })
      .catch(err=>console.log(err))
    }else{
      navigate("/login");
    }
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Product"
              height="700"
              image={props.product.displayImage} // Replace with your product image URL
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {props.product.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
          &#8377;{props.product.price}
          </Typography>
          
          <Divider style={{ marginBottom: '20px' }} />
          <Typography variant="h6">Select Size</Typography>
          <Select value={selectedSize} onChange={handleSizeChange} fullWidth style={{ marginBottom: '20px' }}>
            <MenuItem value="S">Small</MenuItem>
            <MenuItem value="M">Medium</MenuItem>
            <MenuItem value="L">Large</MenuItem>
            <MenuItem value="XL">Extra Large</MenuItem>
          </Select>
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="quantity">Select Quantity</InputLabel>
            <Input
              id="quantity"
              type="number"
              value={selectedQuantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1 }}
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            style={{ marginBottom: '20px' }}
            onClick={()=>handCartApi(props.product._id)}
          >
            Add {selectedQuantity} to Cart
          </Button>
          <Divider style={{ marginBottom: '20px' }} />
          <Divider style={{ marginBottom: '20px' }} />
         
          <Typography variant="h6">Product Highlights</Typography>
          <Typography variant="body1" paragraph>
            - Comfortable fit and soft fabric
            <br />
            - Classic design with Definitely Not logo
            <br />
            - Suitable for various occasions
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
          <Typography variant="h6">Manufacturer</Typography>
          <Typography variant="body1" paragraph>
           
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            Customer Ratings
          </Typography>
          <Rating name="product-rating" value={props.product.ratings} precision={0.5} readOnly />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
