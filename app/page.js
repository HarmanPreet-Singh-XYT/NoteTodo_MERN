"use client"
import Catside_buttons from '@/Components/Catside-buttons';
import Create_card from '@/Components/Create-card';
import Footer from '@/Components/Footer';
import Links from '@/Components/Links';
import Navbar from '@/Components/Navbar';
import Notes from '@/Components/Notes';
import SidebarOptions from '@/Components/Sidebar-options';
import Status from '@/Components/Status';
import TopBtn from '@/Components/TopBtn';
import { Categories_Cont } from '@/Helpers/Categories';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useLayoutEffect } from 'react'
import BottomBtns from '@/Components/Bottom-Btns';
import EditCard from '@/Components/EditCard';
import SetCurrentValues from '@/Components/SetCurrentValues';
import Calendar from '@/Components/Calender';
import { Calendar_cont } from '@/Helpers/Calendar-Cont';
import ShowCard from '@/Components/ShowCard';
import ToDoApp from '@/Components/ToDoApp';
const Page = () => {
    const {setCategories} = useContext(Categories_Cont);
    const {show_FullCard,show_EditCard,show_CreateCard} = useContext(ShowCard_Cont);
    const {showCalendar} = useContext(Calendar_cont);
    function create_categories(category,color){
        const random = Math.random()*100;
        const cat = {id:random,cat:category,col:color};
        setCategories((prevcat)=>[...prevcat,cat]);
    }
    function time(){
      let dateObj = new Date();
 
// Subtract one day from current time                       
      dateObj.setDate(dateObj.getDate() + 19);
      
      return dateObj
    }
    const precat = ["All","Projects","Business","Finance"]
    useLayoutEffect(() => {
      precat.forEach((cat)=>create_categories(cat));
      console.log(time())
    }, []);
  return (
    <>
    <SetCurrentValues/>
    {show_FullCard && <ShowCard/>}
    {show_CreateCard && <Create_card/>}
    {show_EditCard && <EditCard/>}
    <main className="container">
        <div className="sidebar">
            <Status/>
            <SidebarOptions/>
            <Catside_buttons/>
            <Links/>
            <Footer/>
        </div>
        <div className="main">
            <ToastContainer/>
            <ToDoApp/>
            {/* <Navbar/>
            <TopBtn/>
            <Notes/>
            <BottomBtns/> */}
        </div>
        <div style={{width:"24%",display:"block",transform: `translateX(${showCalendar ? "0" : "110"}%)`}} className='calendar-div'>
        <Calendar/>
        </div>
    </main>
    </>
  )
}

export default Page