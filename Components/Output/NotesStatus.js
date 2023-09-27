import { Number_cont } from '@/Helpers/Numbers-Status';
import React, { useContext } from 'react'

const NotesStatus = () => {
  const {NotesDone,NotesProgress} = useContext(Number_cont);
  return (
    <div className="ov-top">
        <div className="pend top-stat">
            <h1 className="pend-num">{NotesProgress}</h1>
            <hr className="ov-sep"/>
            <h1 className="pend-title">Pending</h1>
        </div>
        <div className="comp top-stat">
            <h1 className="comp-num">{NotesDone}</h1>
            <hr className="ov-sep"/>
            <h1 className="comp-title">Completed</h1>
        </div>
    </div>
  )
}

export default NotesStatus