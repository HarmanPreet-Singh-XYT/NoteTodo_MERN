"use client"
import React, { createContext, useState } from 'react'
export const Account_cont = createContext();
const Account_Info = ({children}) => {
    const [AccountInfo, setAccountInfo] = useState({});
    const [Error, setError] = useState(false);
    const [Exist, setExist] = useState(false);
    const [AccountType, setAccountType] = useState('');
  return (
    <Account_cont.Provider value={{AccountType, setAccountType,Exist, setExist,AccountInfo, setAccountInfo,Error, setError}}>
        {children}
    </Account_cont.Provider>
  )
}

export default Account_Info