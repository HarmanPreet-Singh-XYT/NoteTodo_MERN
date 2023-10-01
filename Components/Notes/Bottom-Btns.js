import React,{useContext} from 'react'
import { Selection_Cont } from '@/Helpers/Selection';
import { Notes_Cont } from '@/Helpers/Notes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { Calendar_cont } from '@/Helpers/Calendar-Cont';
import { Number_cont } from '@/Helpers/Numbers-Status';
const BottomBtns = () => {
    const {selectionMode, setSelectionMode} = useContext(Selection_Cont);
    const {notes,setNotes} = useContext(Notes_Cont);
    const {show_EditCard, setShow_EditCard} = useContext(ShowCard_Cont);
    const {showCalendar,setshowCalendar} = useContext(Calendar_cont);
    const {TotalDelete, setTotalDelete} = useContext(Number_cont);
    function priortize(){
        setNotes((prevnotes)=>
        prevnotes.map((note)=>note.cls.includes("card-selected") ? !note.priority ? {...note,priority:true} : {...note,priority:false} : note)
        );
    };
    function delete_card(){
        setNotes((prevNotes)=>
        prevNotes.filter((note)=>!note.cls.includes("card-selected") && note)
        )
        setTotalDelete(TotalDelete+1);
    }
    function complete(){
        setNotes((prevnotes)=>
        prevnotes.map((note)=>
        note.cls.includes("card-selected") ? {...note,completed:!note.completed} : note));
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