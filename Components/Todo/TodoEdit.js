import { Notes_Cont } from '@/Helpers/Notes';
import { Number_cont } from '@/Helpers/Numbers-Status';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { Useref_Update_cont } from '@/Helpers/Useref_Update';
import React, { useContext } from 'react'
import { CirclePicker } from 'react-color'
import axios from 'axios';
import { Account_cont } from '@/Helpers/Account-Info';
const TodoEdit = () => {
    const {Todo,setTodo} = useContext(Notes_Cont);
    const {title,content,colorr,tag,status} = useContext(Useref_Update_cont);
    const {setShow_TodoEditCard} = useContext(ShowCard_Cont);
    const {TotalEdit, setTotalEdit} = useContext(Number_cont);
    const {AccountType} = useContext(Account_cont);
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    function Edit(e,setTodos){
        e.preventDefault();
        setTodos((prevnotes)=>
        prevnotes.map((note)=>note.cls.includes("card-selected") ? {...note,tag:tag.current,col:colorr.current,tit:title.current,cont:content.current} : note)
        )
        setTotalEdit(TotalEdit+1);
        Todo.map((td)=>td.cls.includes("card-selected") &&
        AccountType==='cloud' && axios.patch(`${url}/todos/todo/edit`,{
            id:td.id,
            tag:e.target[3].value,
            User_id:td.User_id,
            title:e.target[0].value,
            color:colorr.current,
            content:e.target[2].value,
            date:e.target[1].value,
        },
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}}));
    }
    function clearOutValues(){
        title.current = "";
        content.current = "";
        colorr.current = "";
        tag.current = "";
        status.current = "";
    }
    const date = new Date();
   return (
    <>
    <div className="blur-background">
            <div className="create-window">
                    <form id='createform' onSubmit={(e)=>{Edit(e,setTodo);setShow_TodoEditCard(false)}} action="/note/create" className="create-note">
                        <label className="cre-title fir">Title</label>
                        <label className="cre-date fir">Date</label>
                        <input defaultValue={title.current} onChange={(e)=>title.current=e.target.value} placeholder="Title" name="title" type="text" className="round-border title-in sec" required/>
                        <input style={{fontSize:"20px"}} name='date' value={`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`} readOnly type="text" className="round-border date-in sec"/>
                        <label className="cre-content third">Content</label>
                        <label className="cre-tag third">Tag</label>
                        <textarea defaultValue={content.current} onChange={(e)=>content.current=e.target.value} name="cre-content" placeholder="Content" className="textarea-span four" id="content" cols="20" rows="7"></textarea>
                        <input defaultValue={tag.current} onChange={(e)=>tag.current=e.target.value} placeholder="Tag" name="tag" type="text" className="round-border tag-in four"/>
                        <label className="cre-color five">Colour</label>
                        <div className="cre-colours sixth">
                            <CirclePicker onChange={(color,event)=>colorr.current=color.hex}/>
                        </div>
                    </form>
                <div className="create-buttons">
                    <button onClick={()=>setShow_TodoEditCard(false)} className="cancel">Cancel</button>
                    <button type='submit' form="createform" className="submit">Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoEdit;