"use client"
import React, { createContext,useState } from 'react'
export const Categories_Cont = createContext();
const Categories = ({children}) => {
    const [categories, setCategories] = useState([]);
  return (
    <Categories_Cont.Provider value={{categories,setCategories}}>
        {children}
    </Categories_Cont.Provider>
  )
}

export default Categories