"use client"
import React, { createContext, useContext,useState } from 'react'
export const NoteCreator = createContext();
const CreateCard = ({children}) => {
  const [createTime, setCreateTime] = useState(false);
    function create_note(color,tag,title,content,category,setNotes,months){
        const date = new Date;
        const fulldate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        const time = createTime && `${date.getHours()}:${date.getMinutes()}`;
        const timeopt = createTime ? true : false;
        const random_id = Math.random()*100;
        const categoryCheck = category ? category : "All";
        const note = {id:random_id,date:fulldate,tag,col:color,tit:title,time:time,cont:content,category:categoryCheck,cls:`block`,priority:false,completed:false,timeopt:timeopt}
        setNotes((prevnotes)=>[...prevnotes,note]);
        setCreateTime(false);
    }
  return (
    <NoteCreator.Provider value={{create_note,createTime,setCreateTime}}>
        {children}
    </NoteCreator.Provider>
  )
}

export default CreateCard