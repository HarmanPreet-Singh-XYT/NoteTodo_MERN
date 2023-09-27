"use client"
import React, { createContext, useState } from 'react'
export const Number_cont = createContext();
const Numbers_Status = ({children}) => {
    const [TodoProgress, setTodoProgress] = useState(0);
    const [TodoDone, setTodoDone] = useState(0);
    const [NotesProgress, setNotesProgress] = useState(0);
    const [NotesDone, setNotesDone] = useState(0);
    const [NotesPending, setNotesPending] = useState([]);
    const [NotesCompleted, setNotesCompleted] = useState([]);
    const [TodoOverall, setTodoOverall] = useState(0);
  return (
    <Number_cont.Provider value={{NotesProgress, setNotesProgress,NotesDone, setNotesDone,TodoOverall, setTodoOverall,TodoProgress, setTodoProgress,TodoDone, setTodoDone,NotesPending, setNotesPending,NotesCompleted, setNotesCompleted}}>
        {children}
    </Number_cont.Provider>
  )
}

export default Numbers_Status