import React, { createContext, useState } from "react";

const LoginContext = createContext();

const ContextProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(false)
    const [cartproduct,setCartProduct] = useState(localStorage.getItem("cart")||0);
    function addToCart(num){
        setCartProduct(num);
        localStorage.setItem("cart",num);
    }
    return <LoginContext.Provider value={{isLogin:isLogin, setIsLogin:setIsLogin,cartproduct:cartproduct,setCartProduct:addToCart}}>
        {children}
    </LoginContext.Provider>
}

export {LoginContext,ContextProvider}