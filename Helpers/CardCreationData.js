"use client"
import React, { createContext, useState } from 'react'
export const FormData_cont = createContext();

const CardCreationData = ({children}) => {
    const [months, setMonths] = useState(['January','February','March','April','May','June','July','August','September','October','November','December']);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [categ, setCateg] = useState("");
    const [tag, setTag] = useState("");
    const [color, setColor] = useState("");
  return (
    <FormData_cont.Provider value={{title,content,date,categ,color,tag,months,setTag,setTitle,setContent,setDate,setCateg,setColor}}>
        {children}
    </FormData_cont.Provider>
  )
}

export default CardCreationData