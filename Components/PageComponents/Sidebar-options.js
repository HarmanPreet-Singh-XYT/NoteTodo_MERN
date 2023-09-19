import React from 'react'

const SidebarOptions = () => {
  return (
    <>
    <hr className="hrline"/>
    <section className="options">
                <button className="overview bt"><span className="lg"><i className="fa-solid fa-city"></i></span>Overview</button>
                <button className="task bt"><span className="lg"><i className="fa-solid fa-list"></i></span>Tasks</button>
                <button className="document bt"><span className="lg"><i className="fa-solid fa-folder-open"></i></span>Documents</button>
                <button className="note bt side-selected-btn"><span className="lg"><i className="fa-solid fa-pen-to-square"></i></span>Notes</button>
                <button className="output bt"><span className="lg"><i className="fa-solid fa-fire"></i></span>Output</button>
                <button className="support bt"><span className="lg"><i className="fa-solid fa-comments"></i></span>Support</button>
    </section>
    <hr className="hrline"/>
    </>
  )
}

export default SidebarOptions;