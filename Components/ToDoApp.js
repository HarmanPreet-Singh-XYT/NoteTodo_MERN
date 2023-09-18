import { DateDay_Calculation_cont } from '@/Helpers/Date-Day-Calculation'
import React, { useContext, useEffect, useState } from 'react'
import DateProjection from './DateProjection'
import { Selection_Cont } from '@/Helpers/Selection'
import ToDoButtonFunctionality from './ToDoButtonFunctionality'
import { Notes_Cont } from '@/Helpers/Notes'

const ToDoApp = () => {
    const {rawDateData}=useContext(DateDay_Calculation_cont)
    const {selectionMode} = useContext(Selection_Cont);
    const {Todo, setTodo} = useContext(Notes_Cont);
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
    );};
    function create_todo(color,tag,title,content,category,setTodos){
        const date = new Date;
        let createTime = true;
        const fulldate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        const time = createTime && `${date.getHours()}:${date.getMinutes()}`;
        const timeopt = createTime ? true : false;
        const random_id = Math.random()*100;
        const categoryCheck = category ? `All ${category}` : "All";
        const note = {id:random_id,date:fulldate,tag,col:color,tit:title,time:time,cont:content,category:categoryCheck,cls:`inside-card`,priority:false,completed:false,timeopt:timeopt}
        setTodos((prevnotes)=>[...prevnotes,note]);
        // setCreateTime(false);
    }
    useEffect(() => {
      create_todo("#39a454","Jan","Testing","Hello","Junna",setTodo)
      create_todo("#39a454","Jan","Testing","Hello","Junna",setTodo)
    }, [])
    

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
                        <div className="inside-card">
                            <h1 className="card-title">Input fields</h1>
                            <p className="card-tag">Design System</p>
                            <hr className="card-hr"/>
                            <section className="bottom-content">
                                <p className="tasks-count"><i className="fa-solid fa-clipboard-check"></i>4/8</p>
                                <p className="date"><i className="fa-solid fa-calendar-days"></i>07.07.2022</p>
                            </section>
                        </div>
                    </section>
                    <button className="add-card"><i className="fa-solid fa-plus"></i> Add card</button>
                </div>
                <div className="in-progress wid todocard"><section className="top-card">
                    <h2 className="purpose">In-Progess</h2>
                    <button className="todo-options"><i className="fa-solid fa-ellipsis"></i></button>
                </section>
                <section className="card-content">
                    <div className="inside-card">
                            <h1 className="card-title">Input fields</h1>
                            <p className="card-tag">Design System</p>
                            <hr className="card-hr"/>
                            <section className="bottom-content">
                                <p className="tasks-count"><i className="fa-solid fa-clipboard-check"></i>4/8</p>
                                <p className="date"><i className="fa-solid fa-calendar-days"></i>07.07.2022</p>
                            </section>
                    </div>
                    {
                        Todo.map((eachTodo)=>((eachTodo.priority)&&(!eachTodo.completed) ) &&
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
                <button className="add-card"><i className="fa-solid fa-plus"></i> Add card</button></div>
                <div className="done wid todocard">
                    <section className="top-card">
                        <h2 className="purpose">Done</h2>
                        <button className="todo-options"><i className="fa-solid fa-ellipsis"></i></button>
                    </section>
                    <section style={{height:"86%"}} className="card-content">
                    <div className="inside-card">
                            <h1 className="card-title">Input fields</h1>
                            <p className="card-tag">Design System</p>
                            <hr className="card-hr"/>
                            <section className="bottom-content">
                                <p className="tasks-count"><i className="fa-solid fa-clipboard-check"></i>4/8</p>
                                <p className="date"><i className="fa-solid fa-calendar-days"></i>07.07.2022</p>
                            </section>
                        </div>
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