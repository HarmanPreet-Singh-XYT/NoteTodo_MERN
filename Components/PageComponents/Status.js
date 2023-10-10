import { FormData_cont } from '@/Helpers/CardCreationData';
import React, { useContext, useState } from 'react'
const Status = () => {
    const {months} = useContext(FormData_cont);
    const [dropdown, setdropdown] = useState(false);
    const date = new Date;
  return (
    <>
        <section className="status">
                <div className="current-date"><h1 className="date-insider">{date.getDate()} {" "} {months[date.getMonth()]} {" "} {date.getFullYear()}</h1></div>
                <div class="dropdown">
                <button class="dropbtn"><i class="fa-solid fa-gear"></i></button>
                <div class="dropdown-content">
                  <a onClick={()=>location.reload()} >Logout</a>
                </div>
              </div>
        </section>
    </>
  )
}

export default Status;