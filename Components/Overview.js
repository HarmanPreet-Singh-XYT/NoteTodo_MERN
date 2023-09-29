import React,{useContext} from 'react'
import Calendar from './Calender'
import TodoGraph from './Output/TodoGraph'
import NotesGraph from './Output/NotesGraph'
import { TodoStatus } from './Output/TodoStatus'
import NotesStatus from './Output/NotesStatus'
import { Number_cont } from '@/Helpers/Numbers-Status'
import To_No_Count from './Overview/To-No-Count'
import Graphs from './Overview/Graphs'
const Overview = () => {
    // const time = new Date();
    const {TodoProgress,TodoDone,NotesDone,NotesProgress} = useContext(Number_cont);
  return (
    <>
    <div className='ov-nav'></div>
    <main className="ov-container">
        <div className="ov-insider o1 ov-box">
            {/* <div className='ov-time'>{time.getHours()}:{time.getMinutes()}</div> */}
            <Calendar/>
        </div>
        <div className="ov-insider o2 ov-box">

        </div>
        <div className="ov-insider o3 ov-box">

        </div>
        <div className="ov-insider o4 ov-box">
        <Graphs/>
        </div>
        <div className="ov-insider o5 ov-box">
            <To_No_Count/>
        </div>
    </main>
    </>
  )
}

export default Overview