import React, { createContext, useEffect, useState } from "react";
import { fetcher } from ".";

const LoginContext = createContext();

const ContextProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(localStorage.getItem("token")?true:false)
    const [cartproduct,setCartProduct] = useState('');
    
    function fetchCartFromAPI(){
        fetcher(`ecommerce/cart`)
          .then((res)=>{
            addToCart(res.results)
          })
          .catch(err=>console.log(err))
    }
    useEffect(()=>{
        if(isLogin) fetchCartFromAPI();
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
        }   
    }
    
   
    return <LoginContext.Provider value={{isLogin:isLogin, setLoginState:setLoginState,cartproduct:cartproduct,setCartProduct:addToCart}}>
        {children}
    </LoginContext.Provider>
}

export {LoginContext,ContextProvider}