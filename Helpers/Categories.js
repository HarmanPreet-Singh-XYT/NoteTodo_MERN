"use client"
import React, { createContext,useState } from 'react'
export const Categories_Cont = createContext();
const Categories = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedButton, setSelectedButton] = useState("overview");
    const [selectedID, setSelectedID] = useState(null);
  return (
    <Categories_Cont.Provider value={{selectedID, setSelectedID,selectedButton, setSelectedButton,selectedCategory, setSelectedCategory,categories,setCategories}}>
        {children}
    </Categories_Cont.Provider>
  )
}

export default Categories