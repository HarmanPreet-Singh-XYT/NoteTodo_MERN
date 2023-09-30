import React,{useContext} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Number_cont } from '@/Helpers/Numbers-Status';

ChartJS.register(ArcElement, Tooltip, Legend);
const Storage = () => {
    const {TodoOverall,TodoProgress,TodoDone} = useContext(Number_cont);
    const data = {
        labels: ['Deleted','Created','Edited'],
        datasets: [
          {
            data: [5,6,7],
            backgroundColor: ['#ff544e','#ddf986','#4ec2ff'],
            hoverBackgroundColor: ['#d62929','#c5f53b','#24a3e7'],
          },
        ],
      };
  return (
    <>
    <div className='centralize storage'>
    <h1>Total Delete/Create/Edit</h1>
    <Doughnut data={...data} />
    </div>
    </>
  )
}

export default Storage