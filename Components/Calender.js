"use client"
import { Calendar_cont } from "@/Helpers/Calendar-Cont";
import React, { useContext } from "react";
import Calendar_Setup from "@/Components/Calendar-Setup";
import Calendar_Empty from "@/Components/Calendar-Empty";
const Calendar = ()=>{
  const {dateSys,totalDays,month,fulldate}=useContext(Calendar_cont);
  return (
    <>
    <Calendar_Setup/>
    <main className="container-cal">
        <div className="month">
            <h1 className="inner-month">{month}</h1>
            <p className="inner-data">{fulldate}</p>
        </div>
        <div className="days">
            <p className="mon">Mon</p>
            <p className="tue">Tue</p>
            <p className="wed">Wed</p>
            <p className="thu">Thu</p>
            <p className="fri">Fri</p>
            <p className="sat">Sat</p>
            <p className="sun">Sun</p>
        </div>
        <div className="dates">
          <Calendar_Empty/>
          {totalDays.map((day,key)=>{return <div key={key} className={day === dateSys.getDate() ? "select selected" : "select"}>{day}</div>})}
        </div>
    </main>
    </>
  )
}
export default Calendar;