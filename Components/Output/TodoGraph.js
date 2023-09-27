import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const TodoGraph = () => {
    
    const data = {
        labels: ['In-Progress','Done'],
        datasets: [
          {
            data: [50, 20],
            backgroundColor: ['#ebd098', '#8dc9bb'],
            hoverBackgroundColor: ['#ebd098', '#8dc9bb'],
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