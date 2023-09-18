"use client"
import React, { createContext,useState } from 'react'
export const Selection_Cont = createContext();
const Selection_con = ({children}) => {
    const [selectionMode, setSelectionMode] = useState(false);
  return (
    <Selection_Cont.Provider value={{selectionMode, setSelectionMode}}>
        {children}
    </Selection_Cont.Provider>
  )
}

export default Selection_con;