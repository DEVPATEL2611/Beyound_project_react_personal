import React, { useEffect, useState } from 'react'
import Demo from '../components/Demo'
import ImageCrad from '../components/ImageCrad'
import { fetcher } from '../helpers';


function HomePage() {
    const [productList,setProductList] = useState(null);
    function loadProducts(){
        fetcher("ecommerce/clothes/products?limit=150").then((res)=>setProductList(res.data))
        .catch((err)=>console.log(err))
    }
    function fetchFavourites(){
          fetcher("ecommerce/wishlist")
        .then((res)=>{console.log(res.data)
            const dd = res.data.items;
            console.log(dd)
             dd.map((pID)=>{return console.log(pID._id)})
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
     loadProducts()
    fetchFavourites()
    },[])
    
  return (
    <div>
        <Demo />
        <div style={{display:"flex",flexWrap:"wrap",gap:20,justifyContent:"space-around",width:"80%",margin:"auto auto",paddingTop:"30px"}}>
        {
            productList && productList.map((product)=>{
                return <ImageCrad product={product} key={product._id} />
            })
        }
        </div>
    </div>
  )
}

export default HomePage