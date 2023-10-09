
import { Account_cont } from '@/Helpers/Account-Info'
import React, { useContext, useState } from 'react'
import axios from 'axios';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { Notify } from '../Notifcation';
const Account = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    const {AccountInfo,setAccountInfo} = useContext(Account_cont);
    const {showLoading, setShowLoading} = useContext(ShowCard_Cont);
    const [showPassword, setshowPassword] = useState(false);
    function ProfileEdit(e){
        e.preventDefault();
        setShowLoading(true);
        const data={
            name:e.target[0].value,
            bio:e.target[1].value,
            dob:e.target[2].value,
        }
        AccountInfo.User_id && axios.patch(`${url}/useraccount/account/edit`,data,
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API,User_id:AccountInfo.User_id}})
        .then((res)=>{
            setShowLoading(false);
            res.data.message==='Success' ? 
            Notify('Successful','success')
            :
            Notify('Error,Please Try again','error');
        })
    }
    function ResetData(){
        setShowLoading(true);
        AccountInfo.User_id && axios.patch(`${url}/useraccount/account/reset`,{},
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API,User_id:AccountInfo.User_id}})
        .then((res)=>{setShowLoading(false);
            res.data.message==='Success' ? 
            Notify('Successful,Reload Page for Changes to Reflect','success')
            :
            Notify('Error,Please Try again','error');
            });
    }
    function PasswordChange(e){
        e.preventDefault();
        setShowLoading(true);
        AccountInfo.User_id && axios.patch(`${url}/useraccount/account/password`,{
            password:e.target[0].value,
        },
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API,User_id:AccountInfo.User_id}})
        .then((res)=>{setShowLoading(false);
            res.data.message==='Success' ? 
            Notify('Successful','success')
            :
            Notify('Error,Please Try again','error');
            })
    }
    const condition1= (!showPassword && !showLoading);
    const condition2= (showPassword && !showLoading);
  return (
    <>
        <main className="ov-spt-container">
            <div className="ov-spt-window">
                <div className="ov-spt-content">
                {showLoading && <div className='loading'>
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
                    {condition1 && <form onSubmit={(e)=>ProfileEdit(e)} className="ov-spt-form" id="edit-form" action="/account/edit" method="post">
                        <label className="ov-spt-title">Name</label>
                        <input defaultValue={AccountInfo.name} name='name' placeholder="Name" type="text" className="ov-spt-in-title" required/>
                        <label className="ov-spt-title">Bio</label>
                        <textarea defaultValue={AccountInfo.bio} placeholder="Bio" name="bio" id="msg" cols="40" rows="2" required></textarea>
                        <label className="ov-spt-title">Date of Birth</label>
                        <input defaultValue={AccountInfo.dob} name='dob' placeholder="DOB" type="date" className="ov-spt-in-title" required/>
                        <button className="ov-sbt-btn" type="submit">Edit</button>
                        <div style={{gap:'10px'}}>
                        <button onClick={()=>setshowPassword(true)} style={{width:'200px'}} className="ov-sbt-btn" type="button">Change Password</button>
                        <button style={{marginLeft:'15px',width:'150px'}} onClick={ResetData} className="ov-sbt-btn" type="button">Reset Data</button>
                        </div>
                    </form>}
                    {condition2 && 
                    <form onSubmit={(e)=>PasswordChange(e)} className="ov-spt-form" id="edit-form" action="/account/edit" method="post">
                        <label className="ov-spt-title">Password</label>
                        <input name='password' placeholder="Password" type="password" className="ov-spt-in-title" required/>
                        <button onClick={()=>setshowPassword(false)} style={{width:'100px'}} className="ov-sbt-btn" type="button">Cancel</button>
                        <button style={{width:'100px'}} className="ov-sbt-btn" type="submit">Confirm</button>
                    </form>
                    }
                </div>
            </div>
        </main>
    </>
  )
}

export default Account