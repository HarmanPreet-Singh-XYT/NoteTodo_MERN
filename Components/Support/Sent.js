import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React,{useContext} from 'react'
const Sent = () => {
    const {setShow_SupportCardSuccess} = useContext(ShowCard_Cont);
  return (
    <>
        <h1 className="message">
            Sent Successfully,You will receive response mail on your linked Email
        </h1>
        <h2>
            Thank You
        </h2>
        <button onClick={()=>setShow_SupportCardSuccess(false)} className="sbt-btn">Back</button>
    </>
  )
}

export default Sent