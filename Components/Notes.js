import { Notes_Cont } from '@/Helpers/Notes';
import { Selection_Cont } from '@/Helpers/Selection';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React,{useContext} from 'react'

const Notes = () => {
    const {selectionMode, setSelectionMode} = useContext(Selection_Cont);
    const {createTime,notes,setNotes} = useContext(Notes_Cont);
    function deselect(id,clas){
        setNotes((prevNotes)=>
        prevNotes.map((note)=>
        note.id === id ? {...note,cls:"block"} : note
        ))
    }
    function add_selection(id,clas){
        !selectionMode && setNotes((prevNotes)=>
        prevNotes.map((note)=>
        note.cls.includes("card-selected") ? {...note,cls:"block"} : note
        ));
        clas.includes("card-selected") ? 
        deselect(id,clas)
        :
        setNotes((prevNotes) =>
        prevNotes.map((note) =>
        note.id === id ? { ...note, cls:"block card-selected" } : note
      )
    );};
  return (
    <>
        <hr className="sep"/>
            <section className="main-content">
                {notes.map((note)=>
                <div id={note.id} onClick={()=>add_selection(note.id,note.cls)} key={note.id} className={note.cls}>
                    {note.priority && <div className="prior"><p className="priority-tag">Priority</p></div>}
                    <hr style={{backgroundColor:`${note.col}`}} className="color-line"/>
                    <p className="date">{note.date} {note.time}</p>
                    <p className="title">{note.tit}</p>
                    <p className="content">{note.cont}</p>
                    <button className="show-more">Show More</button>
                </div>)}
            </section>
        <hr className="sep-bottom"/>
    </>
  )
}

export default Notes