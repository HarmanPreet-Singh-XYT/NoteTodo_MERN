"use client"
import React, { createContext, useState } from 'react'
export const Login_cont = createContext();
const LoginCont = ({children}) => {
    const [login, setLogin] = useState(true);
  return (
    <Login_cont.Provider value={{login,setLogin}}>
        {children}
    </Login_cont.Provider>
  )
}

export default LoginCont