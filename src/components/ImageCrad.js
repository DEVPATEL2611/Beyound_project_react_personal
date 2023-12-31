import  React,{useContext, useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from 'react-router-dom';
import { fetcher } from '../helpers';
import { LoginContext } from '../helpers/LoginContext';

export default function ImgMediaCard(props) {
  const [isToWishList,setIsToWishList] = useState(props.isWishListed);
  const navigate = useNavigate();
  const {setWishListProducts} = useContext(LoginContext);
  
  function addtoWishlistAPI(id){
   if(localStorage.getItem("token")){
    fetcher("ecommerce/wishlist",{
      method:"PATCH",
      body: JSON.stringify({
        productId : id
      })
    })
    .then((res)=>{console.log(res)
      setIsToWishList(true);
      setWishListProducts(res.data.items)
      })
    .catch(err=>console.log(err))
   }else{
    return navigate("/login");
   }
  }
  function removeFromoWishlistAPI(id){
    if(localStorage.getItem("token")){
      fetcher(`ecommerce/wishlist/${id}`,{
        method:"DELETE"})
      .then((res)=>{console.log(res)
        setIsToWishList(false);
        setWishListProducts(res.data.items)
        })
      .catch(err=>console.log(err))
    }else{
      return navigate("/login")
    }
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
          {!isToWishList ? ( <Button endIcon={<FavoriteBorderIcon />} onClick={()=>addtoWishlistAPI(props.product._id)}>ADD</Button>) : (<Button endIcon={<FavoriteIcon  /> } onClick={()=>removeFromoWishlistAPI(props.product._id)}>Remove </Button>)}
          
         
       
        </div>
      </CardActions>
    </Card>
  );
}