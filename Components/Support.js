import FormSPT from '@/Components/Support/FormSPT'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import React, { useContext } from 'react'
import Sent from './Support/Sent';
const Support = () => {
    const {show_SupportCardSuccess} = useContext(ShowCard_Cont);
  return (
    <div className='spt-body'>
        <main className="spt-container">
            <div className="spt-window">
                <div className="spt-content">
                    {show_SupportCardSuccess ? <Sent/> : <FormSPT/>}
                </div>
            </div>
        </main>
    </div>
  )
}

export default Support