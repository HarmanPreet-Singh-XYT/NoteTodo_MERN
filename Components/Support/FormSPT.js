import { ShowCard_Cont } from '@/Helpers/ShowCard'
import React, { useContext } from 'react'
const Content = () => {
  const {setShow_SupportCardSuccess} = useContext(ShowCard_Cont);
  return (
    <>
        <form onSubmit={()=>setShow_SupportCardSuccess(true)} className="spt-form" id="support-form" action="/support/send" method="post">
                <label className="spt-title">Subject</label>
                <input name='subject' placeholder="Query..." type="text" className="spt-in-title" required/>
                <label className="spt-title">Message</label>
                <textarea placeholder="How to delete note...." name="message" id="msg" cols="50" rows="10" required></textarea>
                <button className="sbt-btn" type="submit">Send</button>
        </form>
    </>
  )
}

export default Content