"use client"
import { Categories_Cont } from '@/Helpers/Categories';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useLayoutEffect, useState } from 'react'
import Calendar from '@/Components/Calender';
import { Calendar_cont } from '@/Helpers/Calendar-Cont';
import ToDoApp from '@/Components/ToDoApp';
import NotesApp from '@/Components/NotesApp'
import SideBar from '@/Components/SideBar';
import Cards from '@/Components/PageComponents/Cards';
import Support from '@/Components/Support';
import Output from '@/Components/Output';
import LoadData from '@/Components/Output/LoadData';
import Overview from '@/Components/Overview';
import Login from '@/Components/Login';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import LoadDB from '@/Components/LoadDB';
import Notifcation from '@/Components/Notifcation';
import { Account_cont } from '@/Helpers/Account-Info';
import LocalStorage from '@/Components/LocalStorage';
import LoadCookie from '@/Components/LoadCookie';

const Page = () => {
    const {selectedButton} = useContext(Categories_Cont);
    const {showCalendar} = useContext(Calendar_cont);
    const {showLogin} = useContext(ShowCard_Cont);
    const {AccountType} = useContext(Account_cont);
    const [sidebarDisplay, setsidebarDisplay] = useState(false)
    const condition = (AccountType==='local'||AccountType==='localregister')
  return (
    <>
    <LoadCookie/>
    <Notifcation/>
    {showLogin && <Login/>}
    {!showLogin && 
    <>
    {condition && <LocalStorage/>}
    <LoadDB/>
    <Cards/>
    <LoadData/>
    <button onClick={()=>setsidebarDisplay(!sidebarDisplay)} className='sidebtn'><i className="fa-solid fa-caret-up"></i></button>
    <main className="container">
        <div className={sidebarDisplay ? 'sidebar' : 'sidebar show-sidebar'}>
            <SideBar/>
        </div>
        <div className="main">
            {selectedButton==="overview" && <Overview/>}
            {selectedButton==="task" && <ToDoApp/>}
            {selectedButton==="note" && <NotesApp/>}
            {selectedButton==="support" && <Support/>}
            {selectedButton==="output" && <Output/>}
        </div>
        <div className={showCalendar ? 'calendar-div' : 'calendar-div showcalendar'}>
        <Calendar/>
        </div>
    </main>
    </>}
    </>
  )
}

export default Page