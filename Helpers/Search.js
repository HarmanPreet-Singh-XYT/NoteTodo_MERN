"use client"
import React, { createContext, useState } from 'react'
export const Search_cont=createContext();
const Search = ({children}) => {
    const [searchOpt, setSearchOpt] = useState(false);
    const [searchValue, setSearchValue] = useState("");
  return (
    <Search_cont.Provider value={{searchOpt,setSearchOpt,searchValue,setSearchValue}}>
        {children}
    </Search_cont.Provider>
  );
};

export default Search;