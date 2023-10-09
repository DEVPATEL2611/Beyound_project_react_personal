import  React,{useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';
import { fetcher } from '../helpers';

export default function ImgMediaCard(props) {
  const [isToWishList,setIsToWishList] = useState(false);
  // useEffect(()=>{
  //   fetcher("ecommerce/wishlist")
  //   .then((res)=>{console.log(res)
      
  //     })
  //   .catch(err=>console.log(err))
  // },[])

  function addtoWishlistAPI(id){
    fetcher("ecommerce/wishlist",{
      method:"PATCH",
      body: JSON.stringify({
        productId : id
      })
    })
    .then((res)=>{console.log(res)
      setIsToWishList(true);
      })
    .catch(err=>console.log(err))
  }
  function removeFromoWishlistAPI(id){
    fetcher(`ecommerce/wishlist/${id}`,{
      method:"DELETE"})
    .then((res)=>{console.log(res)
      setIsToWishList(false);
      })
    .catch(err=>console.log(err))
  }
  
  return (
    <Card sx={{ maxWidth: 345 ,marginBottom:2 }} className='cardProduct'>
      <Link to={`/products/${props.product._id}`} style={{color:"black",textDecoration:"none"}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height = "400"
        image={props.product.displayImage}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="p" style={{whiteSpace: "nowrap",overflow:"hidden",textOverflow: "ellipsis",fontWeight:"bold",color:"black",textDecoration:"none"}} >
         {props.product.name}
        </Typography>
        
      </CardContent>
      </Link>
      <CardActions>
        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
          <div>
          <Typography gutterBottom variant="h7" component="h7"  >
            Price : {props.product.price}
            </Typography>
          </div>
        </div>
        <div>
          <Button endIcon={<FavoriteBorderIcon />} onClick={()=>addtoWishlistAPI(props.product._id)}>ADD</Button>
         <Button endIcon={<FavoriteIcon  /> } onClick={()=>removeFromoWishlistAPI(props.product._id)}>Remove </Button>
       
        </div>
      </CardActions>
    </Card>
  );
}