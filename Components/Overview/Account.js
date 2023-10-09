
import { Account_cont } from '@/Helpers/Account-Info'
import React, { useContext } from 'react'
import axios from 'axios';
const Account = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    const {AccountInfo,setAccountInfo} = useContext(Account_cont);
    function ProfileEdit(e){
        e.preventDefault();
        const data={
            name:e.target[0].value,
            bio:e.target[1].value,
            dob:e.target[2].value,
        }
        AccountInfo.User_id && axios.patch(`${url}/useraccount/account/edit`,data,
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API,User_id:AccountInfo.User_id}})
    }
    function ResetData(){
        AccountInfo.User_id && axios.patch(`${url}/useraccount/account/reset`,{},
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API,User_id:AccountInfo.User_id}})
    }
  return (
    <>
        <main className="ov-spt-container">
            <div className="ov-spt-window">
                <div className="ov-spt-content">
                    <form onSubmit={(e)=>ProfileEdit(e)} className="ov-spt-form" id="edit-form" action="/account/edit" method="post">
                        <label className="ov-spt-title">Name</label>
                        <input defaultValue={AccountInfo.name} name='name' placeholder="Name" type="text" className="ov-spt-in-title" />
                        <label className="ov-spt-title">Bio</label>
                        <textarea defaultValue={AccountInfo.bio} placeholder="Bio" name="bio" id="msg" cols="40" rows="2"></textarea>
                        <label className="ov-spt-title">Date of Birth</label>
                        <input defaultValue={AccountInfo.dob} name='dob' placeholder="DOB" type="date" className="ov-spt-in-title"/>
                        <button className="ov-sbt-btn" type="submit">Edit</button>
                        <div style={{gap:'10px'}}>
                        <button style={{width:'200px'}} className="ov-sbt-btn" type="button">Change Password</button>
                        <button style={{marginLeft:'15px',width:'150px'}} onClick={ResetData} className="ov-sbt-btn" type="button">Reset Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </>
  )
}

export default Account