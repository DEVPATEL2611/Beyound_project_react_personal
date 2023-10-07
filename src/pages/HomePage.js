import React, { useEffect, useState } from 'react'
import Demo from '../components/Demo'
import ImageCrad from '../components/ImageCrad'
import { fetcher } from '../helpers';
import { Link } from 'react-router-dom';

function HomePage() {
    const [productList,setProductList] = useState(null);
    // const getProductList =  ()=>{
    //     fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=150",{
    //         headers : {
    //             projectID : "f1set4c"
    //         }
    //     }).then((response)=>response.json())
    //     .then(res=>setProductList(res.data))
    //     .catch(e=>console.log(e));
    // }

    useEffect(()=>{
        const auth = localStorage.getItem("token");
        fetcher("ecommerce/clothes/products?limit=150",{
            method:"GET"
        },auth).then((res)=>setProductList(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(productList)
  return (
    <div>
        <Demo />
        <div style={{display:"flex",flexWrap:"wrap",gap:20,justifyContent:"space-around",width:"80%",margin:"auto auto",paddingTop:"30px"}}>
        {
            productList && productList.map((product)=>{
                return <Link to={`/products/${product._id}`}><ImageCrad product={product} key={product._id} /></Link>
            })
        }
        </div>
    </div>
  )
}

export default HomePage