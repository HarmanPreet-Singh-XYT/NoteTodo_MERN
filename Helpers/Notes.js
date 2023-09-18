"use client"
import React, { createContext,useState } from 'react'
export const Notes_Cont = createContext();
const Notes_con = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [Todo, setTodo] = useState([]);
  return (
    <Notes_Cont.Provider value={{notes, setNotes,Todo, setTodo}}>
        {children}
    </Notes_Cont.Provider>
  )
}

export default Notes_con;