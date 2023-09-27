import React,{useEffect,useContext,useState} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Categories_Cont } from '@/Helpers/Categories';

ChartJS.register(ArcElement, Tooltip, Legend);
const NotesGraph = () => {
    const [label, setlabel] = useState([]);
    const {categories} = useContext(Categories_Cont);
    function labelcreate(setlabel,category){
        setlabel(prevlabel=>[...prevlabel,category])
    }
    useEffect(() => {
        categories.forEach((category)=>labelcreate(setlabel,category.cat))
    }, [])
    
    const data = {
        labels: label,
        datasets: [
          {
            data: [1, 1, 1],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
  return (
    <>
    <hr className='graph-sep'/>
        <div className="pend-graph graphs">
            <h1>Pending</h1>
            <Doughnut data={...data} />
        </div>
    <hr className='graph-sep'/>
        <div className="comp-graph graphs">
            <h1>Completed</h1>
            <Doughnut data={...data} />
        </div>
    </>
  )
}

export default NotesGraph