import React,{useEffect,useContext,useState} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Categories_Cont } from '@/Helpers/Categories';
import { Number_cont } from '@/Helpers/Numbers-Status';

ChartJS.register(ArcElement, Tooltip, Legend);
const NotesGraph = () => {
    const [label, setlabel] = useState([]);
    const [percentCompleted, setPercentCompleted] = useState([]);
    const [percentPending, setPercentPending] = useState([]);
    const {NotesCompleted,NotesPending} = useContext(Number_cont);
    const {categories} = useContext(Categories_Cont);
    function labelcreate(setlabel,category){
        setlabel(prevlabel=>[...prevlabel,category])
    }
    useEffect(() => {
        categories.forEach((category)=>labelcreate(setlabel,category.cat));
        NotesCompleted.forEach((note)=>labelcreate(setPercentCompleted,note.count));
        NotesPending.forEach((note)=>labelcreate(setPercentPending,note.count));
    }, [])
    const dataCompleted = {
        labels: label,
        datasets: [
          {
            data: percentCompleted,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
      const dataPending = {
        labels: label,
        datasets: [
          {
            data: percentPending,
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
            <Doughnut data={...dataPending} />
        </div>
    <hr className='graph-sep'/>
        <div className="comp-graph graphs">
            <h1>Completed</h1>
            <Doughnut data={...dataCompleted} />
        </div>
    </>
  )
}

export default NotesGraph