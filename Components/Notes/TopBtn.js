import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React,{useContext} from 'react'
import Catnav_buttons from './Catnav-buttons';
const TopBtn = () => {
    const {setShow_CreateCard} = useContext(ShowCard_Cont);
  return (
    <>
    <section className="selection">
                <div className="selective-btns">
                    <Catnav_buttons/>
                </div>
                <button onClick={()=>{setShow_CreateCard(true)}} className="add-task"><span className="plus"><i className="fa-solid fa-circle-plus"></i></span>Add new note</button>
    </section>
    </>
  )
}

export default TopBtn