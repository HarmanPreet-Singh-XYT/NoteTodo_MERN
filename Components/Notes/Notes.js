import { Categories_Cont } from '@/Helpers/Categories';
import { Notes_Cont } from '@/Helpers/Notes';
import { Search_cont } from '@/Helpers/Search';
import { Selection_Cont } from '@/Helpers/Selection';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React,{useContext} from 'react'
const Notes = () => {
    const {selectionMode, setSelectionMode} = useContext(Selection_Cont);
    const {createTime,notes,setNotes} = useContext(Notes_Cont);
    const {setShow_FullCard,selectionUpdate, setSelectionUpdate} = useContext(ShowCard_Cont);
    const {selectedCategory, setSelectedCategory} = useContext(Categories_Cont);
    const {searchOpt,setSearchOpt,searchValue,setSearchValue} = useContext(Search_cont);
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
                {/* {!searchOpt && notes.map((note)=> note.category.includes(selectedCategory) &&
                <div id={note.id} onClick={()=>{add_selection(note.id,note.cls)}} key={note.id} className={note.cls}>
                    {note.priority && <div className="prior"><p className="priority-tag">Priority</p></div>}
                    <hr style={{backgroundColor:`${note.col}`}} className="color-line"/>
                    <p className="date">{note.date} {note.timeopt && note.time}</p>
                    <p className="title">{note.tit}</p>
                    <p className="content">{note.cont}</p>
                    {note.tag && <div className="prior below"><p style={{backgroundColor:note.col,color:"white"}} className="priority-tag tag">{note.tag}</p></div>}
                    <button onClick={()=>{setShow_FullCard(true)}} className="show-more">Show More</button>
                </div>)} */}
                {searchOpt && notes.map((note) => {
                const matchesSearch = (note.tit.includes(searchValue) || note.cont.includes(searchValue))&&note.category.includes(selectedCategory);

                return (
                    matchesSearch && (
                        <div style={{backgroundColor:`${note.completed ? "#e4f2ea" : "white"}`}}
                            id={note.id}
                            onClick={() => {
                                add_selection(note.id, note.cls);
                            }}
                            key={note.id}
                            className={note.cls}
                        >
                            {note.priority && <div className="prior"><p className="priority-tag">Priority</p></div>}
                            <hr style={{ backgroundColor: `${note.col}` }} className="color-line" />
                            <p className="date">{note.date} {note.timeopt && note.time}</p>
                            <p className="title">{note.tit}</p>
                            <p className="content">{note.cont}</p>
                            {note.tag && (
                                <div className="prior below">
                                    <p style={{ backgroundColor: note.col, color: "white" }} className="priority-tag tag">{note.tag}</p>
                                </div>
                            )}
                            <button onClick={() => { setShow_FullCard(true) }} className="show-more">Show More</button>
                        </div>
                    )
                );
            })}

            </section>
        <hr className="sep-bottom"/>
    </>
  )
}

export default Notes