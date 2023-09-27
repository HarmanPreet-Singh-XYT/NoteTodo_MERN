import { Number_cont } from '@/Helpers/Numbers-Status'
import React,{useContext} from 'react'
export const TodoStatus = () => {
    const {TodoProgress,TodoDone} = useContext(Number_cont);
  return (
    <div className="ov-top">
        <div className="pend top-stat">
            <h1 className="pend-num">{TodoProgress}</h1>
            <hr className="ov-sep"/>
            <h1 className="pend-title">Pending</h1>
        </div>
        <div className="comp top-stat">
            <h1 className="comp-num">{TodoDone}</h1>
            <hr className="ov-sep"/>
            <h1 className="comp-title">Completed</h1>
        </div>
    </div>
  )
}
