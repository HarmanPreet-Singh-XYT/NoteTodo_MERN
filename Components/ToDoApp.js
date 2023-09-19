import { DateDay_Calculation_cont } from '@/Helpers/Date-Day-Calculation'
import React, { useContext, useEffect, useState } from 'react'
import DateProjection from './Todo/DateProjection'
import { Selection_Cont } from '@/Helpers/Selection'
import ToDoButtonFunctionality from './Todo/ToDoButtonFunctionality'
import { Notes_Cont } from '@/Helpers/Notes'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import { Useref_Update_cont } from '@/Helpers/Useref_Update'
const ToDoApp = () => {
    const {rawDateData}=useContext(DateDay_Calculation_cont)
    const {title,content,colorr,tag,status} = useContext(Useref_Update_cont);
    const {selectionMode} = useContext(Selection_Cont);
    const {Todo, setTodo} = useContext(Notes_Cont);
    const {setShow_TodoShowCard,show_TodoEditCard,show_TodoCreateCard,setShow_TodoCreateCard} = useContext(ShowCard_Cont);
    const date = new Date();
    function deselect(id,clas){
        setTodo((prevNotes)=>
        prevNotes.map((note)=>
        note.id === id ? {...note,cls:"inside-card"} : note
        ))
    }
    function add_selection(id,clas){
        !selectionMode && setTodo((prevNotes)=>
        prevNotes.map((note)=>
        note.cls.includes("card-selected") ? {...note,cls:"inside-card"} : note
        ));
        clas.includes("card-selected") ? 
        deselect(id,clas)
        :
        setTodo((prevNotes) =>
        prevNotes.map((note) =>
        note.id === id ? { ...note, cls:"inside-card card-selected" } : note
      )
    );
    };
    function updateValueOnClick(Todo){
        Todo.forEach(todo => {
            if(todo.cls.includes("card-selected")){
                title.current = todo.tit;
                content.current = todo.cont;
                colorr.current = todo.colorr;
                tag.current = todo.tag;
                status.current = todo.priority;
            }
        });
    }
    useEffect(()=>{
        updateValueOnClick(Todo)
    },[Todo,show_TodoEditCard])
    

  return (
    <>
            <nav className="todo-nav">
                <DateProjection/>
            </nav>
            <hr style={{backgroundColor:"lightgray"}} className="hrline"/>
            <section className="todo-content">
                <div className="todo wid">
                    <section className="top-card">
                        <h2 className="purpose">To Do</h2>
                        <button className="todo-options"><i className="fa-solid fa-ellipsis"></i></button>
                    </section>
                    <section className="card-content">
                    {
                        Todo.map((eachTodo)=>!eachTodo.completed &&
                        <div onDoubleClick={()=>setShow_TodoShowCard(true)} onClick={()=>{add_selection(eachTodo.id,eachTodo.cls);updateValueOnClick(Todo)}} id={eachTodo.id} key={eachTodo.id} className={eachTodo.cls}>
                            <h1 className="card-title">{eachTodo.tit}</h1>
                            <p className="card-tag">{eachTodo.tag}</p>
                            <hr style={{borderColor:`${eachTodo.col}`}} className="card-hr"/>
                            <section className="bottom-content">
                                <p className="tasks-count"><i className="fa-solid fa-clipboard-check"></i>{eachTodo.time}</p>
                                <p className="date"><i className="fa-solid fa-calendar-days"></i>{eachTodo.date}</p>
                            </section>
                        </div>
                        )
                    }
                    </section>
                    <button onClick={()=>{setShow_TodoCreateCard(true)}} className="add-card"><i className="fa-solid fa-plus"></i> Add card</button>
                </div>
                <div className="in-progress wid todocard"><section className="top-card">
                    <h2 className="purpose">In-Progess</h2>
                    <button className="todo-options"><i className="fa-solid fa-ellipsis"></i></button>
                </section>
                <section className="card-content">
                    {
                        Todo.map((eachTodo)=>((eachTodo.priority)&&(!eachTodo.completed) ) &&
                        <div onDoubleClick={()=>setShow_TodoShowCard(true)} onClick={()=>add_selection(eachTodo.id,eachTodo.cls)} id={eachTodo.id} key={eachTodo.id} className={eachTodo.cls}>
                            <h1 className="card-title">{eachTodo.tit}</h1>
                            <p className="card-tag">{eachTodo.tag}</p>
                            <hr style={{borderColor:`${eachTodo.col}`}} className="card-hr"/>
                            <section className="bottom-content">
                                <p className="tasks-count"><i className="fa-solid fa-clipboard-check"></i>{eachTodo.time}</p>
                                <p className="date"><i className="fa-solid fa-calendar-days"></i>{eachTodo.date}</p>
                            </section>
                        </div>
                        )
                    }
                </section>
                <button onClick={()=>{setShow_TodoCreateCard(true)}} className="add-card"><i className="fa-solid fa-plus"></i> Add card</button></div>
                <div className="done wid todocard">
                    <section className="top-card">
                        <h2 className="purpose">Done</h2>
                        <button className="todo-options"><i className="fa-solid fa-ellipsis"></i></button>
                    </section>
                    <section style={{height:"86%"}} className="card-content">
                    {
                        Todo.map((eachTodo)=>eachTodo.completed &&
                        <div onClick={()=>add_selection(eachTodo.id,eachTodo.cls)} id={eachTodo.id} key={eachTodo.id} className={eachTodo.cls}>
                            <h1 className="card-title">{eachTodo.tit}</h1>
                            <p className="card-tag">{eachTodo.tag}</p>
                            <hr style={{borderColor:`${eachTodo.col}`}} className="card-hr"/>
                            <section className="bottom-content">
                                <p className="tasks-count"><i className="fa-solid fa-clipboard-check"></i>{eachTodo.time}</p>
                                <p className="date"><i className="fa-solid fa-calendar-days"></i>{eachTodo.date}</p>
                            </section>
                        </div>
                        )
                    }
                    </section>
                </div>
            </section>
            <hr className="sep-bottom"/>
            <ToDoButtonFunctionality/>
    </>
  )
}

export default ToDoApp