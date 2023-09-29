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
        <main className="op-container">
            <div className="op-todo">
                <h1>Tasks</h1>
                <TodoStatus/>
                <TodoGraph/>
            </div>
            <hr className="op-diff"/>
            <div className="op-notes">
                <h1>Notes</h1>
                <NotesStatus/>
                <NotesGraph/>
            </div>
        </main>
    </>
  )
}

export default Overview