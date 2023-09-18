"use client"
import React, { createContext,useState } from 'react'
export const Notes_Cont = createContext();
const Notes_con = ({children}) => {
    const [notes, setNotes] = useState([]);
  return (
    <Notes_Cont.Provider value={{notes, setNotes}}>
        {children}
    </Notes_Cont.Provider>
  )
}

export default Notes_con;