import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ClassNames } from '@emotion/react';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 ,marginBottom:2 }} className='cardProduct'>
      <CardMedia
        component="img"
        alt="green iguana"
        height = "400"
        image={props.product.displayImage}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="p" style={{whiteSpace: "nowrap",overflow:"hidden",textOverflow: "ellipsis",fontWeight:"bold"}} >
         {props.product.name}
        </Typography>
        
      </CardContent>
      <CardActions>
        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
          <div>
          <Typography gutterBottom variant="h7" component="h7"  >
            Price : {props.product.price}
            </Typography>
          </div>
        </div>
        <div>
          <Button size="small" variant='outlined' endIcon={<FavoriteBorderIcon />}>Wishlist</Button></div>
        
      </CardActions>
    </Card>
  );
}