import React from 'react'

const Account = () => {
  return (
    <>
        <main className="ov-spt-container">
            <div className="ov-spt-window">
                <div className="ov-spt-content">
                    <form className="ov-spt-form" id="edit-form" action="/account/edit" method="post">
                        <label className="ov-spt-title">Name</label>
                        <input name='name' placeholder="Name" type="text" className="ov-spt-in-title" />
                        <label className="ov-spt-title">Bio</label>
                        <textarea placeholder="Bio" name="bio" id="msg" cols="40" rows="2"></textarea>
                        <label className="ov-spt-title">Date of Birth</label>
                        <input name='dob' placeholder="DOB" type="date" className="ov-spt-in-title"/>
                        <button className="ov-sbt-btn" type="submit">Edit</button>
                    </form>
                </div>
            </div>
        </main>
    </>
  )
}

export default Account