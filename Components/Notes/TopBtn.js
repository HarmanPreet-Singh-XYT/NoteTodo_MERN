import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React,{useContext} from 'react'
import Catnav_buttons from './Catnav-buttons';
import { FormData_cont } from '@/Helpers/CardCreationData';
const TopBtn = () => {
    const {setShow_CreateCard} = useContext(ShowCard_Cont);
    const {setTitle,setContent,setDate,setCateg,setColor,setTag} = useContext(FormData_cont);
  function clearData(){
    setTitle("");
    setContent("");
    setDate("");
    setCateg("All");
    setColor("");
    setTag("");
  }
    return (
    <>
    <section className="selection">
                <div className="selective-btns">
                    <Catnav_buttons/>
                </div>
                <button onClick={()=>{setShow_CreateCard(true);clearData()}} className="add-task"><span className="plus"><i className="fa-solid fa-circle-plus"></i></span>Add new note</button>
    </section>
    </>
  )
}

export default TopBtn