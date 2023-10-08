import FormSPT from '@/Components/Support/FormSPT'
import { ShowCard_Cont } from '@/Helpers/ShowCard'
import React, { useContext } from 'react'
import Sent from './Support/Sent';
const Support = () => {
    const {show_SupportCardSuccess} = useContext(ShowCard_Cont);
    const {showLoading} = useContext(ShowCard_Cont);
    const condition1 = showLoading && !show_SupportCardSuccess;
    const condition2 = show_SupportCardSuccess && !showLoading;
    const condition3 = !show_SupportCardSuccess && !showLoading;
  return (
    <div className='spt-body'>
        <main className="spt-container">
            <div className="spt-window">
                <div className="spt-content">
                {(condition1) &&<div className='loading'>
                <div className="blobs">
                    <div className="blob-center"></div>
                    <div className="blob"></div>
                    <div className="blob"></div>
                    <div className="blob"></div>
                    <div className="blob"></div>
                    <div className="blob"></div>
                    <div className="blob"></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                </svg>
                    </div>}
                    {(condition2) && <Sent/>}
                    {condition3 && <FormSPT/>}
                </div>
            </div>
        </main>
    </div>
  )
}

export default Support