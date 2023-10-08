import React, { createContext, useState } from "react";

const LoginContext = createContext();

const ContextProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(localStorage.getItem("loginState")||true)
    const [cartproduct,setCartProduct] = useState(localStorage.getItem("cart"));
    function addToCart(num){
        setCartProduct(num);
        localStorage.setItem("cart",num);
    }
    function setLoginState(loginState){
        setIsLogin(loginState);
        localStorage.setItem("loginState",loginState);
        addToCart(localStorage.getItem("cart"))
        if(loginState===false){
            localStorage.removeItem("token");
        }
    }
    return <LoginContext.Provider value={{isLogin:isLogin, setLoginState:setLoginState,cartproduct:cartproduct,setCartProduct:addToCart}}>
        {children}
    </LoginContext.Provider>
}

export {LoginContext,ContextProvider}