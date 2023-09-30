import { Categories_Cont } from '@/Helpers/Categories';
import React, { useContext } from 'react'
const SidebarOptions = () => {
  const {selectedButton,setSelectedButton} = useContext(Categories_Cont);
  return (
    <>
    <hr className="hrline"/>
    <section className="options">
                <button name='overview' onClick={()=>setSelectedButton("overview")} className={selectedButton==="overview" ? "overview bt side-selected-btn" : "overview bt"}><span name='overview' className="lg"><i name='overview' className="fa-solid fa-city"></i></span>Overview</button>
                <button name='task' onClick={()=>setSelectedButton("task")} className={selectedButton==="task" ? "task bt side-selected-btn" : "task bt"}><span name='task' className="lg"><i id='task' className="fa-solid fa-list"></i></span>Tasks</button>
                <button disabled name='document' onClick={()=>setSelectedButton("document")} className={selectedButton==="document" ? "document bt side-selected-btn" : "document bt"}><span className="lg"><i id='document' className="fa-solid fa-folder-open"></i></span>Documents</button>
                <button name='note' onClick={()=>setSelectedButton("note")} className={selectedButton==="note" ? "note bt side-selected-btn" : "note bt"}><span className="lg"><i id='note' className="fa-solid fa-pen-to-square"></i></span>Notes</button>
                <button name='output' onClick={()=>setSelectedButton("output")} className={selectedButton==="output" ? "output bt side-selected-btn" : "output bt"}><span className="lg"><i id='output' className="fa-solid fa-fire"></i></span>Output</button>
                <button name='support' onClick={()=>setSelectedButton("support")} className={selectedButton==="support" ? "support bt side-selected-btn" : "support bt"}><span className="lg"><i id='support' className="fa-solid fa-comments"></i></span>Support</button>
    </section>
    <hr className="hrline"/>
    </>
  )
}

export default SidebarOptions;