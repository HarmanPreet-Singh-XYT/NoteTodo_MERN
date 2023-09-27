import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Number_cont } from '@/Helpers/Numbers-Status';

ChartJS.register(ArcElement, Tooltip, Legend);
const TodoGraph = () => {
    const {TodoOverall,TodoProgress,TodoDone} = useContext(Number_cont);
    const data = {
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
        <hr className='graph-sep'/>
        <Doughnut data={...data} />
        </>
    )
}

export default TodoGraph