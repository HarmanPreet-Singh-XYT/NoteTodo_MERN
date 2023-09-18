"use client"
import React, { createContext,useState } from 'react'
export const Categories_Cont = createContext();
const Categories = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <Categories_Cont.Provider value={{selectedCategory, setSelectedCategory,categories,setCategories}}>
        {children}
    </Categories_Cont.Provider>
  )
}

export default Categories