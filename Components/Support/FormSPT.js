import { Account_cont } from '@/Helpers/Account-Info';
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import React, { useContext, useState } from 'react'
import axios from 'axios';
const Content = () => {
  const {setShow_SupportCardSuccess} = useContext(ShowCard_Cont);
  const {AccountInfo} = useContext(Account_cont);
  const [error, setError] = useState('');
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  async function support(e){
    e.preventDefault();
    const data={
      subject:e.target[0].value,
      message:e.target[1].value,
      User_id:AccountInfo.User_id,
    }
    await axios.post(`${url}/spt/support/send`,data,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
    .then((response)=>{
      switch (response.data.message) {
        case 'sent':
          setShow_SupportCardSuccess(true);
          break;
        case 'incorrect':
          setError('incorrect');
          break;
        case 'failed':
          setError('failed');
          break;
      
        default:
          break;
      }
    })
  }
  return (
    <>
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