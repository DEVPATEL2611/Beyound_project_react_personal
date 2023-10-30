import React, { createContext, useEffect, useState } from "react";
import { fetcher } from ".";

const LoginContext = createContext();

const ContextProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(localStorage.getItem("token")?true:false)
    const [cartproduct,setCartProduct] = useState('');
    const [wishlistProducts,setWishListProducts] = useState([]);
    function fetchCartFromAPI(){
        fetcher(`ecommerce/cart`)
          .then((res)=>{
            addToCart(res.results)
          })
          .catch(err=>console.log(err))
    }
    function fetchWishlistFromAPI(){
        fetcher(`ecommerce/wishlist`)
          .then((res)=>{
            wishlistEvent(res.data.items);
          })
          .catch(err=>console.log(err))
    }
    useEffect(()=>{
        if(isLogin===true){ 
            fetchCartFromAPI();
            fetchWishlistFromAPI();
        }
    },[isLogin])
    function addToCart(num){
        setCartProduct(num);
        localStorage.setItem("cart",num);
    }
    function setLoginState(loginState){
        setIsLogin(loginState);
        localStorage.setItem("loginState",loginState)
        if(loginState===false){
            localStorage.removeItem("token");
            localStorage.removeItem("cart");
            localStorage.removeItem("wishlist")
        }   
    }
    function wishlistEvent(obj){
        setWishListProducts([...wishlistProducts,obj]);
        localStorage.setItem("wislist",obj);
    }
    
   
    return <LoginContext.Provider value={{isLogin:isLogin, setLoginState:setLoginState,cartproduct:cartproduct,setCartProduct:addToCart,wishlistProducts:wishlistProducts,setWishListProducts:wishlistEvent}}>
        {children}
    </LoginContext.Provider>
}

export {LoginContext,ContextProvider}
