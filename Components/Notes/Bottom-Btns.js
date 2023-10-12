import React,{useContext} from 'react'
import { Selection_Cont } from '@/Helpers/Selection';
import { Notes_Cont } from '@/Helpers/Notes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { Calendar_cont } from '@/Helpers/Calendar-Cont';
import { Number_cont } from '@/Helpers/Numbers-Status';
import { Account_cont } from '@/Helpers/Account-Info';
import axios from 'axios';
const BottomBtns = () => {
    const {AccountType} = useContext(Account_cont);
    const {selectionMode, setSelectionMode} = useContext(Selection_Cont);
    const {notes,setNotes} = useContext(Notes_Cont);
    const {show_EditCard, setShow_EditCard} = useContext(ShowCard_Cont);
    const {showCalendar,setshowCalendar} = useContext(Calendar_cont);
    const {TotalDelete, setTotalDelete} = useContext(Number_cont);
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    function priortize(){
        setNotes((prevnotes)=>
        prevnotes.map((note)=>note.cls.includes("card-selected") ? !note.priority ? {...note,priority:true} : {...note,priority:false} : note)
        );
        notes.map((note)=>{note.cls.includes("card-selected") && 
        AccountType==='cloud' && axios.patch(`${url}/notes/note/edit`,{
            id:note.id,
            User_id:note.User_id,
            priority:true
        },
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})});
    };
    function delete_card(){
        notes.map((note)=>{note.cls.includes("card-selected") && setTotalDelete(TotalDelete+1)})
        setNotes((prevNotes)=>
        prevNotes.filter((note)=>!note.cls.includes("card-selected") && note)
        )
        AccountType==='cloud' && notes.map((note)=>{note.cls.includes("card-selected") && axios.delete(`${url}/notes/note/delete/${note.User_id}/${note.id}`,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})})
    }
    function complete(){
        setNotes((prevnotes)=>
        prevnotes.map((note)=>
        note.cls.includes("card-selected") ? {...note,completed:!note.completed} : note));
        notes.map((note)=>{note.cls.includes("card-selected") && 
        AccountType==='cloud' && axios.patch(`${url}/notes/note/edit`,{
            id:note.id,
            User_id:note.User_id,
            completed:!note.completed,
        },
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})});
    }
    function notify(notification){
        toast.info(notification, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    return (
    <>
        <section className="btns-bottom">
                <button onClick={complete} className="bottom-icons check"><i className="fa-solid fa-check"></i></button>
                <button onClick={()=>{setShow_EditCard(true);}} className="bottom-icons edit"><i className="fa-solid fa-pen"></i></button>
                <button onClick={delete_card} className="bottom-icons cross"><i className="fa-solid fa-xmark"></i></button>
                <button onClick={()=>setshowCalendar(!showCalendar)} className="bottom-icons calendar"><i className="fa-solid fa-calendar-days"></i></button>
                <button onClick={priortize} className="bottom-icons bookmark"><i className="fa-solid fa-star"></i></button>
                <button onClick={()=>{setSelectionMode(!selectionMode);notify(selectionMode ? "Selection Mode Disabled" : "Selection Mode Enabled")}} className="bottom-icons plus-btn"><i className="fa-regular fa-square-plus"></i></button>
        </section>
    </>
  )
}

export default BottomBtns