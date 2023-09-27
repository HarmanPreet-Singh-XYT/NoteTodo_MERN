"use client"
import React, { createContext, useState } from 'react'
export const Sidebar_cont = createContext();
const SideCont = ({children}) => {
    const [sidebar, setsidebar] = useState(false);
  return (
    <Sidebar_cont.Provider value={{sidebar, setsidebar}}>
      {children}
    </Sidebar_cont.Provider>
  )
}

export default SideCont;