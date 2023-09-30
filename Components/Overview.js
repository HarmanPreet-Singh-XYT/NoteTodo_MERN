import React from 'react'
import Calendar from './Calender'
import To_No_Count from './Overview/To-No-Count'
import Graphs from './Overview/Graphs'
import Storage from './Overview/Storage'
import Account from './Overview/Account'
const Overview = () => {
  return (
    <>
    <div className='ov-nav'></div>
    <main className="ov-container">
        <div className="ov-insider o1 ov-box">
            <Calendar/>
        </div>
        <div className="ov-insider o2 ov-box">
          <Storage/>
        </div>
        <div className="ov-insider o3 ov-box">
          <Account/>
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