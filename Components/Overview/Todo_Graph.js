import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Number_cont } from '@/Helpers/Numbers-Status';
ChartJS.register(ArcElement, Tooltip, Legend);
const Todo_Graph = () => {
    const {TodoOverall,TodoProgress,TodoDone} = useContext(Number_cont);
    const data1 = {
        labels: ['In-Progress','All-Todo','Done'],
        datasets: [
          {
            data: [TodoProgress,TodoOverall, TodoDone],
            backgroundColor: ['#E1FAC9','#ebd098', '#8dc9bb'],
            hoverBackgroundColor: ['#E1FAC9','#ebd098', '#8dc9bb'],
          },
        ],
      };
  return (
    <>
    <div className='centralize'>
    <h1>To-Do</h1>
    <Doughnut data={...data1} />
    </div>
    </>
  )
}

export default Todo_Graph