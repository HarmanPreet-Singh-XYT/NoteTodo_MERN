import { Account_cont } from '@/Helpers/Account-Info';
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import React, { useContext, useState } from 'react'
import axios from 'axios';
const Content = () => {
  const {setShow_SupportCardSuccess} = useContext(ShowCard_Cont);
  const {AccountInfo,AccountType,Error, setError} = useContext(Account_cont);
  const {setShowLoading,showLoading} = useContext(ShowCard_Cont);
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  async function support(e){
    e.preventDefault();
    setShowLoading(true);
    const data={
      subject:e.target[0].value,
      message:e.target[1].value,
      User_id:AccountInfo.User_id,
    }
    AccountType==="cloud" ? await axios.post(`${url}/spt/support/send`,data,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
    .then((response)=>{
      switch (response.data.message) {
        case 'sent':
          setShow_SupportCardSuccess(true);
          setShowLoading(false);
          break;
        case 'incorrect':
          setShowLoading(false);
          setError('incorrect');
          break;
        case 'failed':
          setShowLoading(false);
          setError('failed');
          break;
      
        default:
          break;
      }
    }): setError('incorrect');
  }
  return (
    <>
    {Error==='failed' && <h1>Server Error,Please Try Again Lator</h1>}
    {Error==='incorrect' && <h3>Please Login To Use Support</h3>}
        <form onSubmit={(e)=>support(e)} className="spt-form" id="support-form" action="/support/send" method="post">
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