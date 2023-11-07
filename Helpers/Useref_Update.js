"use client"
import React, { createContext, useRef, useState } from 'react'
export const Useref_Update_cont = createContext();
const Useref_Update = ({children}) => {
    const title = useRef("");
    const content = useRef("");
    const colorr = useRef("");
    const tag = useRef("");
    const status = useRef("");
    const datevalue = useRef("");
    const timevalue = useRef("");
  return (
    <Useref_Update_cont.Provider value={{title,content,colorr,tag,status,datevalue,timevalue}}>
        {children}
    </Useref_Update_cont.Provider>
  );
};

export default Useref_Update;