"use client"
import React, { createContext, useState } from 'react'
import axios from 'axios';
const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/notes`
export const NoteCreator = createContext();
const CreateCard = ({children}) => {
  const [createTime, setCreateTime] = useState(false);
    function create_note(color,tag,title,content,category,setNotes,months,userid){
        const date = new Date;
        const fulldate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        const time = `${date.getHours()}:${date.getMinutes()}`;
        const timeopt = createTime ? true : false;
        const random_id = Math.random()*100;
        const categoryCheck = category ? `All ${category}` : "All";
        const note = {id:random_id,date:fulldate,tag,col:color,tit:title,time:time,cont:content,category:categoryCheck,cls:`block`,priority:false,completed:false,timeopt:timeopt}
        const data ={
            User_id:userid,
            id:random_id,
            date:fulldate,
            tag,
            color,
            title,
            time,
            content,
            category:categoryCheck,
            class:'block',
            priority:false,
            completed:false,
            timeopt:timeopt,
        }
        axios.post(`${url}/note/create`,data,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
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