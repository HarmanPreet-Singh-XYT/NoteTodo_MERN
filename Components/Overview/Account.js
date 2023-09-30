import React from 'react'

const Account = () => {
  return (
    <>
        <main class="ov-spt-container">
            <div class="ov-spt-window">
                <div class="ov-spt-content">
                    <form class="ov-spt-form" id="edit-form" action="/account/edit" method="post">
                        <label class="ov-spt-title">Name</label>
                        <input name='name' placeholder="Name" type="text" class="ov-spt-in-title" />
                        <label class="ov-spt-title">Bio</label>
                        <textarea placeholder="Bio" name="bio" id="msg" cols="40" rows="2"></textarea>
                        <label class="ov-spt-title">Date of Birth</label>
                        <input name='dob' placeholder="DOB" type="date" class="ov-spt-in-title"/>
                        <button class="ov-sbt-btn" type="submit">Edit</button>
                    </form>
                </div>
            </div>
        </main>
    </>
  )
}

export default Account