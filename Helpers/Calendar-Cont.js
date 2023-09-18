"use client"
import React, { createContext, useState } from 'react'
export const Calendar_cont = createContext();
const Context = ({children}) => {
    const [months, setMonths] = useState(["January","February","March","April","May","June","July","Auguest","September","October","November","December"]);
    const [days, setDays] = useState(["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]);
    const [dateSys, setDateSys] = useState(new Date);
    const [month, setMonth] = useState("");
    const [fulldate, setFulldate] = useState("");
    const [totalDays, settotalDays] = useState([]);
    const [run, setRun] = useState(true);
    const [showCalendar, setshowCalendar] = useState(false);
    return (
        <Calendar_cont.Provider value={{showCalendar, setshowCalendar,run,setRun,totalDays, settotalDays,months,days,dateSys,month,fulldate,setMonth,setFulldate}}>
            {children}
        </Calendar_cont.Provider>
      )
}

export default Context;