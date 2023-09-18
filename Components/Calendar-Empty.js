
import { Calendar_cont } from '@/Helpers/Calendar-Cont';
import React, { useContext } from 'react'

const Calendar_Empty = () => {
    const {days,dateSys} = useContext(Calendar_cont);
    const date = new Date(dateSys.getFullYear(), dateSys.getMonth(), 1).toString().slice(0,3);
    let index = 0;
    let i =[];
    days.forEach(element => {
        if(element != date){
            index ++;
        }else{
            for(let count = 1;count<=index;count++){
                i.push(count);
            };
        };
    });
    return (
        i.map((element,key)=><div key={key} className='empty'></div>)
    )
}

export default Calendar_Empty;