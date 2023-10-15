import { FormData_cont } from '@/Helpers/CardCreationData';
import Cookies from 'js-cookie';
import React, { useContext } from 'react'
const Status = () => {
    const {months} = useContext(FormData_cont);
    const date = new Date;
  return (
    <>
        <section className="status">
                <div className="current-date"><h1 className="date-insider">{date.getDate()} {" "} {months[date.getMonth()]} {" "} {date.getFullYear()}</h1></div>
                <div className="dropdown">
                <button className="dropbtn"><i className="fa-solid fa-gear"></i></button>
                <div className="dropdown-content">
                  <a onClick={()=>{Cookies.remove('loginD');location.reload();}} >Logout</a>
                </div>
              </div>
        </section>
    </>
  )
}

export default Status;