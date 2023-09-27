import React from 'react'
import TodoGraph from './Output/TodoGraph'
import NotesGraph from './Output/NotesGraph'

const Overview = () => {
  return (
    <>
        <main className="ov-container">
            <div className="ov-todo">
                <h1>Tasks</h1>
                <div className="ov-top">
                    <div className="pend top-stat">
                        <h1 className="pend-num">5</h1>
                        <hr className="ov-sep"/>
                        <h1 className="pend-title">Pending</h1>
                    </div>
                    <div className="comp top-stat">
                        <h1 className="comp-num">8</h1>
                        <hr className="ov-sep"/>
                        <h1 className="comp-title">Completed</h1>
                    </div>
                </div>
                <TodoGraph/>
            </div>
            <hr className="ov-diff"/>
            <div className="ov-notes">
                <h1>Notes</h1>
                <div className="ov-top">
                    <div className="pend top-stat">
                        <h1 className="pend-num">5</h1>
                        <hr className="ov-sep"/>
                        <h1 className="pend-title">Pending</h1>
                    </div>
                    <div className="comp top-stat">
                        <h1 className="comp-num">8</h1>
                        <hr className="ov-sep"/>
                        <h1 className="comp-title">Completed</h1>
                    </div>
                </div>
                <NotesGraph/>
            </div>
        </main>
    </>
  )
}

export default Overview