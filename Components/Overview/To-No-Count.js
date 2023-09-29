import { Number_cont } from '@/Helpers/Numbers-Status';
import React, { useContext } from 'react'

const To_No_Count = () => {
    const {TodoProgress,TodoDone,NotesDone,NotesProgress} = useContext(Number_cont);
  return (
    <>
        <div className="pend top-stat ov-cards">
                <h1 className="pend-num">{TodoProgress}</h1>
                <hr className="op-sep"/>
                <h1 className="pend-title">To-Do</h1>
                <h1 className="pend-title">Pending</h1>
            </div>
            <div className="comp top-stat ov-cards">
                <h1 className="comp-num">{TodoDone}</h1>
                <hr className="op-sep"/>
                <h1 className="comp-title">To-Do</h1>
                <h1 className="comp-title">Completed</h1>
            </div>
            <div className="pend top-stat ov-cards">
                <h1 className="pend-num">{NotesProgress}</h1>
                <hr className="op-sep"/>
                <h1 className="comp-title">Notes</h1>
                <h1 className="pend-title">Pending</h1>
            </div>
            <div className="comp top-stat ov-cards">
                <h1 className="comp-num">{NotesDone}</h1>
                <hr className="op-sep"/>
                <h1 className="comp-title">Notes</h1>
                <h1 className="comp-title">Completed</h1>
        </div>
    </>
  )
}

export default To_No_Count;