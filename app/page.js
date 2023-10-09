"use client"
import { Categories_Cont } from '@/Helpers/Categories';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useLayoutEffect } from 'react'
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

const Page = () => {
    const {selectedButton} = useContext(Categories_Cont);
    const {showCalendar} = useContext(Calendar_cont);
    const {showLogin} = useContext(ShowCard_Cont);
  return (
    <>
    <Notifcation/>
    {showLogin && <Login/>}
    {!showLogin && 
    <>
    <LoadDB/>
    <Cards/>
    <LoadData/>
    <main className="container">
        <div className="sidebar">
            <SideBar/>
        </div>
        <button className='sidebtn'><i className="fa-solid fa-caret-up"></i></button>
        <div className="main">
            {selectedButton==="overview" && <Overview/>}
            {selectedButton==="task" && <ToDoApp/>}
            {selectedButton==="note" && <NotesApp/>}
            {selectedButton==="support" && <Support/>}
            {selectedButton==="output" && <Output/>}
        </div>
        <div style={{width:"24%",display:"block",transform: `translateX(${showCalendar ? "0" : "110"}%)`}} className='calendar-div'>
        <Calendar/>
        </div>
    </main>
    </>}
    </>
  )
}

export default Page