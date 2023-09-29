import React, { useContext } from 'react';
import Todo_Graph from './Todo_Graph';
import Notes_Graph from './Notes_Graph';
const Graphs = () => {
  return (
    <>
    <div className='ov-graphs'>
        <Todo_Graph/>
        <Notes_Graph/>
    </div>
    </>
  )
}

export default Graphs