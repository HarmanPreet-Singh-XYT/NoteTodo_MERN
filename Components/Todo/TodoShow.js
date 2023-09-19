import { Notes_Cont } from '@/Helpers/Notes';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { Useref_Update_cont } from '@/Helpers/Useref_Update';
import React, { useContext } from 'react'
import { CirclePicker } from 'react-color'
const TodoCreate = () => {
    const {title,content,colorr,tag} = useContext(Useref_Update_cont);
    const {setShow_TodoShowCard,setShow_TodoEditCard} = useContext(ShowCard_Cont);
    const date = new Date();
   return (
    <>
    <div className="blur-background">
            <div className="create-window">
                    <form id='createform' action="/note/show" className="create-note">
                        <label className="cre-title fir">Title</label>
                        <label className="cre-date fir">Date</label>
                        <input readOnly defaultValue={title.current} placeholder="Title" name="title" type="text" className="round-border title-in sec" required/>
                        <input style={{fontSize:"20px"}} name='date' value={`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`} readOnly type="text" className="round-border date-in sec"/>
                        <label className="cre-content third">Content</label>
                        <label className="cre-tag third">Tag</label>
                        <textarea readOnly defaultValue={content.current} name="cre-content" placeholder="Content" className="textarea-span four" id="content" cols="20" rows="7"></textarea>
                        <input readOnly defaultValue={tag.current} placeholder="Tag" name="tag" type="text" className="round-border tag-in four"/>
                        <label className="cre-color five">Colour</label>
                        <div className="cre-colours sixth">
                            <CirclePicker onChange={(color,event)=>colorr.current=color.hex}/>
                        </div>
                    </form>
                <div className="create-buttons">
                    <button onClick={()=>setShow_TodoShowCard(false)} className="cancel">Cancel</button>
                    <button type='submit' onClick={()=>{setShow_TodoShowCard(false);setShow_TodoEditCard(true);}} className="submit">Edit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoCreate;