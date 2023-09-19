import { FormData_cont } from '@/Helpers/CardCreationData';
import React, { useContext } from 'react'
const Status = () => {
    const {months} = useContext(FormData_cont);
    const date = new Date;
  return (
    <>
        <section className="status">
                <div className="current-date"><h1 className="date-insider">{date.getDate()} {" "} {months[date.getMonth()]} {" "} {date.getFullYear()}</h1></div>
                <div className="settings"><i className="fa-solid fa-gear"></i></div>
        </section>
    </>
  )
}

export default Status;