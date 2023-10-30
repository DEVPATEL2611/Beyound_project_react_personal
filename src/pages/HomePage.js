import React, { useContext, useEffect, useState } from 'react'
import Demo from '../components/Demo'
import ImageCrad from '../components/ImageCrad'
import { fetcher } from '../helpers';
import { LoginContext } from '../helpers/LoginContext';


function HomePage() {
    const [productList,setProductList] = useState(null);
    const [wishListObj,setWishListObj] = useState({});
    const {wishlistProducts,setWishListProducts} = useContext(LoginContext);
    function loadProducts(){
        fetcher("ecommerce/clothes/products?limit=50").then((res)=>setProductList(res.data))
        .catch((err)=>console.log(err))
    }
    function fetchFavourites(){
        if(localStorage.getItem("token")){
            
          fetcher("ecommerce/wishlist")
          .then((res)=>{console.log(res.data)
            //const dd = res.data.items;
            setWishListProducts(res.data.items);
        })
        .catch(err=>console.log(err))
        }
    }
    function settingWishlistProp(){
        let obj = {};
        if(localStorage.getItem("token")){
            wishlistProducts.forEach((item)=>{
                obj[item?.products?._id] = true;
            })
            setWishListObj(obj);
        }else{
            setWishListObj(obj)
        }
       
    }

    useEffect(()=>{
        loadProducts()
        fetchFavourites()
    },[])
    useEffect(()=>{
        settingWishlistProp();
    },[wishlistProducts])
    
  return (
    <div>
        <Demo />
        <div style={{display:"flex",flexWrap:"wrap",gap:20,justifyContent:"space-around",width:"80%",margin:"auto auto",paddingTop:"30px"}}>
        {
            productList && productList.map((product)=>{
                return <ImageCrad product={product} key={product._id} isWishListed={!!wishListObj[product._id]} />
            })
        }
        
        </div>
    </div>
  )
}

export default HomePage