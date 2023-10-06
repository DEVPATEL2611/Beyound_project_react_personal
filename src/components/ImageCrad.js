import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height = "400"
        image={props.product.displayImage}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="p" style={{overflow:"hidden",textOverflow: "ellipsis",fontWeight:"bold",height:"50px",width:"300px"}} >
         {props.product.name}
        </Typography>
        <Typography gutterBottom variant="h7" component="h7"  >
         Price : {props.product.price}
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small" variant='outlined' endIcon={<FavoriteBorderIcon />}>Wishlist</Button>
      </CardActions>
    </Card>
  );
}