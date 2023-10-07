import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetcher } from '../helpers';
function SingleProductPage() {
  const {id} = useParams();
  const [sigleProduct,setSingleProduct] = useState([]);
  useEffect(()=>{
    fetcher(`ecommerce/product/${id}`,{
      method:"GET"
    },localStorage.getItem("token"))
    .then((res)=>{
      setSingleProduct(res.data)
      console.log(res.data)})
    .catch(err=>console.log(err))
  },[])
  return (
    
    <div>SingleProductPage</div>
  )
}

export default SingleProductPage