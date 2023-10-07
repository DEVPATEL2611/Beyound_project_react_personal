import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
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

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('M'); // Default selected size
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Default selected quantity

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Product"
              height="500"
              image="https://via.placeholder.com/500x500" // Replace with your product image URL
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Definitely Not Half Sleeve T-Shirt for Men
          </Typography>
          <Typography variant="h6" gutterBottom>
            $19.99
          </Typography>
          <Typography variant="body1" paragraph>
            High-quality cotton t-shirt designed for comfort and style. Definitely Not logo printed on the front.
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
          >
            Add {selectedQuantity} to Cart
          </Button>
          <Divider style={{ marginBottom: '20px' }} />
          <Divider style={{ marginBottom: '20px' }} />
          <Typography variant="h6">Product Information</Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna sit amet ante volutpat posuere in
            blandit metus.
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
          <Typography variant="h6">Product Description</Typography>
          <Typography variant="body1" paragraph>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </Typography>
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
            Definitely Not Clothing Co.
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            Customer Ratings
          </Typography>
          <Rating name="product-rating" value={4.5} precision={0.5} readOnly />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
