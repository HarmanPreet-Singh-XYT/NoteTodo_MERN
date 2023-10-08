
import { Account_cont } from '@/Helpers/Account-Info'
import React, { useContext } from 'react'

const Account = () => {
    const {AccountInfo,setAccountInfo} = useContext(Account_cont);
    function ProfileEdit(e){
        e.preventDefault();
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
                    </form>
                </div>
            </div>
        </main>
    </>
  )
}

export default Account