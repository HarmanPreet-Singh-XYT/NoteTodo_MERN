import { Notes_Cont } from '@/Helpers/Notes';
import { Number_cont } from '@/Helpers/Numbers-Status';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { Useref_Update_cont } from '@/Helpers/Useref_Update';
import React, { useContext,useEffect } from 'react'
import { CirclePicker } from 'react-color'
import axios from 'axios';
import { Account_cont } from '@/Helpers/Account-Info';
const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/todos`
const TodoCreate = () => {
    const {AccountInfo} = useContext(Account_cont);
    const {Todo, setTodo} = useContext(Notes_Cont);
    const {title,content,colorr,tag,status} = useContext(Useref_Update_cont);
    const {show_TodoCreateCard,setShow_TodoCreateCard} = useContext(ShowCard_Cont);
    const {TotalCreate, setTotalCreate} = useContext(Number_cont);
    function create_todo(color,tag,title,content,category,setTodos,progress){
        const date = new Date;
        let createTime = true;
        const fulldate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        const time = createTime && `${date.getHours()}:${date.getMinutes()}`;
        const timeopt = createTime ? true : false;
        const random_id = Math.random()*100;
        const categoryCheck = category ? `All ${category}` : "All";
        const note = {id:random_id,date:fulldate,tag,col:color,tit:title,time:time,cont:content,category:categoryCheck,cls:`inside-card`,priority:progress,completed:false,timeopt:timeopt}
        const DBData = {
            id: random_id,
            date: fulldate,
            tag: tag,
            color: color,
            title: title,
            time: time,
            content: content,
            category: categoryCheck,
            priority: progress,
            completed: false,
            timeopt: timeopt,
            class: `inside-card`,
            User_id: AccountInfo.User_id,
        }
        axios.post(`${url}/todo/create`,DBData,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
        .then((res)=>{
            res.data.message === "Success" &&
            setTodos((prevnotes)=>[...prevnotes,note])
            setTotalCreate(TotalCreate+1);
        })
        
    }
    function clearOutValues(){
        title.current = "";
        content.current = "";
        colorr.current = "";
        tag.current = "";
        status.current = "";
    }
    useEffect(() => {
      clearOutValues();
    }, [show_TodoCreateCard]);
    const date = new Date();
   return (
    <>
    <div className="blur-background">
            <div className="create-window">
                    <form id='createform' onSubmit={()=>{create_todo(colorr.current,tag.current,title.current,content.current,"",setTodo,false);setShow_TodoCreateCard(false)}} action="/note/create" className="create-note">
                        <label className="cre-title fir">Title</label>
                        <label className="cre-date fir">Date</label>
                        <input onChange={(e)=>title.current=e.target.value} placeholder="Title" name="title" type="text" className="round-border title-in sec" required/>
                        <input style={{fontSize:"20px"}} name='date' value={`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`} readOnly type="text" className="round-border date-in sec"/>
                        <label className="cre-content third">Content</label>
                        <label className="cre-tag third">Tag</label>
                        <textarea onChange={(e)=>content.current=e.target.value} name="cre-content" placeholder="Content" className="textarea-span four" id="content" cols="20" rows="7"></textarea>
                        <input onChange={(e)=>tag.current=e.target.value} placeholder="Tag" name="tag" type="text" className="round-border tag-in four"/>
                        <label className="cre-color five">Colour</label>
                        <div className="cre-colours sixth">
                            <CirclePicker onChange={(color,event)=>colorr.current=color.hex}/>
                        </div>
                    </form>
                <div className="create-buttons">
                    <button onClick={()=>setShow_TodoCreateCard(false)} className="cancel">Cancel</button>
                    <button type='submit' form="createform" className="submit">Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoCreate