"use client"
import React, { createContext, useState } from 'react'
export const Useref_Update_cont = createContext();
const Useref_Update = ({children}) => {
    const [update, setupdate] = useState(false);
  return (
    <Useref_Update_cont.Provider value={{update,setupdate}}>
        {children}
    </Useref_Update_cont.Provider>
  );
};

export default Useref_Update;