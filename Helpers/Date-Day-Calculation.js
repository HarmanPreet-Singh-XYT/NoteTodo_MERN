"use client"
import React, { createContext, useState } from 'react'
export const DateDay_Calculation_cont = createContext();
const Date_Day_Calculation = ({children}) => {
  const [rawDateData, setRawDateData] = useState([])
  function CalculateResult(value){
    setRawDateData([]);
    for(let count = value;count >= -value;count--){
      calculateDates(count,setRawDateData)
    }
    }
  function calculateDates(date,setdata){
    let dateObj = new Date();
    dateObj.setDate(dateObj.getDate() - date)
    console.log(rawDateData,dateObj)
    setdata((prevdata)=>[...prevdata,dateObj])
  }
  return (
    <DateDay_Calculation_cont.Provider value={{rawDateData, setRawDateData,CalculateResult}}>
        {children}
    </DateDay_Calculation_cont.Provider>
  )}

export default Date_Day_Calculation