import React, { createContext, useState } from "react";

const LoginContext = createContext();

const ContextProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(false)
    return <LoginContext.Provider value={{isLogin:isLogin, setIsLogin:setIsLogin}}>
        {children}
    </LoginContext.Provider>
}

export {LoginContext,ContextProvider}