"use client"
import React, { createContext, useState,useRef } from 'react'
export const SelectedCardData_cont = createContext();
const SelectedCardData = ({children}) => {
    const Titleref = useRef("");
    const Contentref = useRef("");
    const Categref = useRef("");
    const Colorref = useRef("");
    const Tagref = useRef("");
    const Dateref = useRef("");
    const Timetick = useRef(false);
    // const [selTitle, setSelTitle] = useState("");
    // const [selContent, setSelContent] = useState("");
    // const [selCateg, setSelCateg] = useState("");
    // const [selColor, setSelColor] = useState("");
    // const [selTag, setSelTag] = useState("");
    // const [selDate, setSelDate] = useState("");
    return (
        <SelectedCardData_cont.Provider value={{Timetick,Titleref,Contentref,Categref,Colorref,Tagref,Dateref}}>
            {children}
        </SelectedCardData_cont.Provider>
    )
}

export default SelectedCardData