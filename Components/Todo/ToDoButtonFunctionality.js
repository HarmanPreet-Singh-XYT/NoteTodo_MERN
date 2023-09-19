import { Calendar_cont } from '@/Helpers/Calendar-Cont';
import { Notes_Cont } from '@/Helpers/Notes';
import { Selection_Cont } from '@/Helpers/Selection';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToDoButtonFunctionality = () => {
    const {Todo, setTodo} = useContext(Notes_Cont);
    const {showCalendar, setshowCalendar} = useContext(Calendar_cont);
    const {selectionMode, setSelectionMode} = useContext(Selection_Cont);
    const {setShow_TodoEditCard} = useContext(ShowCard_Cont);
    function completetodo(){
        setTodo((prevNotes)=>
        prevNotes.map((note)=>
        note.cls.includes("card-selected") ? {...note,priority:false,completed:!note.completed} : note
        ));
    };
    function prioritytodo(){
        setTodo((prevNotes)=>
        prevNotes.map((note)=>
        note.cls.includes("card-selected") ? {...note,priority:!note.priority} : note
        ));
    };
    function delete_card(){
        setTodo((prevNotes)=>
        prevNotes.filter((note)=>!note.cls.includes("card-selected") && note)
        )
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
                <button onClick={completetodo} className="bottom-icons check"><i className="fa-solid fa-check"></i></button>
                <button onClick={()=>setShow_TodoEditCard(true)} className="bottom-icons edit"><i className="fa-solid fa-pen"></i></button>
                <button onClick={delete_card} className="bottom-icons cross"><i className="fa-solid fa-xmark"></i></button>
                <button onClick={()=>setshowCalendar(!showCalendar)} className="bottom-icons calendar"><i className="fa-solid fa-calendar-days"></i></button>
                <button onClick={prioritytodo} className="bottom-icons bookmark"><i className="fa-solid fa-star"></i></button>
                <button onClick={()=>{setSelectionMode(!selectionMode);notify(selectionMode ? "Selection Mode Disabled" : "Selection Mode Enabled")}} className="bottom-icons plus-btn"><i className="fa-regular fa-square-plus"></i></button>
        </section>
    </>
  )
}

export default ToDoButtonFunctionality