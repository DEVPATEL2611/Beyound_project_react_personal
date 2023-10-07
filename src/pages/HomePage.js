import React, { useEffect, useState } from 'react'
import Demo from '../components/Demo'
import ImageCrad from '../components/ImageCrad'

function HomePage() {
    const [productList,setProductList] = useState(null);
    const getProductList =  ()=>{
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=150",{
            headers : {
                projectID : "f1set4c"
            }
        }).then((response)=>response.json())
        .then(res=>setProductList(res.data))
        .catch(e=>console.log(e));
    }
    useEffect(()=>{
        getProductList();
    },[])
    
  return (
    <div>
        <Demo />
        <div style={{display:"flex",flexWrap:"wrap",gap:20,justifyContent:"space-around",width:"80%",margin:"auto auto",paddingTop:"30px"}}>
        {
            productList && productList.map((product)=>{
                return <ImageCrad product={product} key={product.id} />
            })
        }
        </div>
    </div>
  )
}

export default HomePage