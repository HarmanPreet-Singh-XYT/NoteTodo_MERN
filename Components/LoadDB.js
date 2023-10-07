"use client"
import React, { useContext, useEffect } from 'react'
import { Notes_Cont } from '@/Helpers/Notes'
import axios from 'axios'
import { Account_cont } from '@/Helpers/Account-Info';
const url = process.env.NEXT_PUBLIC_SERVER_URL;
const LoadDB = () => {
    const {notes, setNotes,Todo, setTodo} = useContext(Notes_Cont);
    const {AccountInfo} = useContext(Account_cont);
    useEffect(()=>{
      DataRestore_Notes();
      DataRestore_Todos();
    },[])
    async function DataRestore_Notes(){
      const data = {
        User_id:AccountInfo.User_id,
      }
      await axios.post(`${url}/data/get/notes`,data,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
      .then((userdata)=>{
        userdata.data.message==="Found" && userdata.data.data.forEach(element => {
          const data = {
            mongoid:element._id,
            id:element.id,
            date:element.date,
            tag:element.tag,
            col:element.color,
            tit:element.title,
            time:element.time,
            cont:element.content,
            category:element.category,
            cls:element.class,
            priority:element.priority,
            completed:element.completed,
            timeopt:element.timeopt,
        }
          setNotes((prevnotes)=>[...prevnotes,data])
        });
      })
    }
    async function DataRestore_Todos(){
      const data = {
        User_id:AccountInfo.User_id,
      }
      await axios.post(`${url}/data/get/todos`,data,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}})
      .then((userdata)=>{
          userdata.data.message==="Found" && userdata.data.data.forEach(element => {
            const data = {
              id:element.id,
              date:element.date,
              tag:element.tag,
              col:element.color,
              tit:element.title,
              time:element.time,
              cont:element.content,
              category:element.category,
              cls:element.class,
              priority:element.priority,
              completed:element.completed,
              timeopt:element.timeopt,
          }
            setTodo((prevnotes)=>[...prevnotes,data])
          });
      })
    }
  return (
    null
  )
}

export default LoadDB