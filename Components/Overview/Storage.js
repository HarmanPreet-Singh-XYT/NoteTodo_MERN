import React,{useContext} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Number_cont } from '@/Helpers/Numbers-Status';

ChartJS.register(ArcElement, Tooltip, Legend);
const Storage = () => {
    const {TotalCreate,TotalEdit,TotalDelete} = useContext(Number_cont);
    const data = {
        labels: ['Created','Edited','Deleted'],
        datasets: [
          {
            data: [TotalCreate,TotalEdit,TotalDelete],
            backgroundColor: ['#ddf986','#4ec2ff','#ff544e'],
            hoverBackgroundColor: ['#c5f53b','#24a3e7','#d62929'],
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