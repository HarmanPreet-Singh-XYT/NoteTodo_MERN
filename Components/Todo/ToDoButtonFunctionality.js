import { Calendar_cont } from '@/Helpers/Calendar-Cont';
import { Notes_Cont } from '@/Helpers/Notes';
import { Number_cont } from '@/Helpers/Numbers-Status';
import { Selection_Cont } from '@/Helpers/Selection';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Account_cont } from '@/Helpers/Account-Info';
const ToDoButtonFunctionality = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    const {Todo, setTodo} = useContext(Notes_Cont);
    const {showCalendar, setshowCalendar} = useContext(Calendar_cont);
    const {selectionMode, setSelectionMode} = useContext(Selection_Cont);
    const {setShow_TodoEditCard} = useContext(ShowCard_Cont);
    const {TotalDelete, setTotalDelete} = useContext(Number_cont);
    const {AccountType} = useContext(Account_cont);
    function completetodo(){
        setTodo((prevNotes)=>
        prevNotes.map((note)=>
        note.cls.includes("card-selected") ? {...note,priority:false,completed:!note.completed} : note
        ));
        Todo.map((td)=>td.cls.includes("card-selected") &&
        AccountType==='cloud' && axios.patch(`${url}/todos/todo/edit`,{
            id:td.id,
            User_id:td.User_id,
            completed:!td.completed,
        },
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}}));
    };
    function prioritytodo(){
        setTodo((prevNotes)=>
        prevNotes.map((note)=>
        note.cls.includes("card-selected") ? {...note,priority:!note.priority} : note
        ));
        Todo.map((td)=>td.cls.includes("card-selected") &&
        AccountType==='cloud' && axios.patch(`${url}/todos/todo/edit`,{
            id:td.id,
            User_id:td.User_id,
            priority:!td.priority,
        },
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}}));
    };
    function delete_card(){
        Todo.map((to)=>to.cls.includes("card-selected") && setTotalDelete(TotalDelete+1))
        setTodo((prevNotes)=>
        prevNotes.filter((note)=>!note.cls.includes("card-selected") && note)
        )
        AccountType==='cloud' && Todo.map((todo)=>{todo.cls.includes("card-selected") && axios.delete(`${url}/todos/todo/delete/${todo.User_id}/${todo.id}`,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})})
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