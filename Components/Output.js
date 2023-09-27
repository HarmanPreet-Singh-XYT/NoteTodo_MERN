import React from 'react'
import TodoGraph from './Output/TodoGraph'
import NotesGraph from './Output/NotesGraph'
import LoadData from './Output/LoadData'
import { TodoStatus } from './Output/TodoStatus'
import NotesStatus from './Output/NotesStatus'

const Overview = () => {
  return (
    <>
    <LoadData/>
        <main className="ov-container">
            <div className="ov-todo">
                <h1>Tasks</h1>
                <TodoStatus/>
                <TodoGraph/>
            </div>
            <hr className="ov-diff"/>
            <div className="ov-notes">
                <h1>Notes</h1>
                <NotesStatus/>
                <NotesGraph/>
            </div>
        </main>
    </>
  )
}

export default Overview