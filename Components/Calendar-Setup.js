
import { Calendar_cont } from '@/Helpers/Calendar-Cont';
import React, { useContext, useEffect } from 'react'

const Calendar_Setup = () => {
    const {run,setRun,settotalDays,months,dateSys,setMonth,setFulldate} = useContext(Calendar_cont);
    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    };
    function totalDay() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let totalDays = daysInMonth(month, year);
        let total = [];
        for(let count=1;count <= totalDays;count++){
            total.push(count);
            total.length === totalDays && settotalDays(total);
        }
    };
    function execute(){
        setMonth(months[dateSys.getMonth()]);
        setFulldate(dateSys.toString().slice(0,15));
        totalDay();
    };
    useEffect(()=>{
        execute();
    },[])
    return null;
}

export default Calendar_Setup;