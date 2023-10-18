"use client"
import React, { useContext, useEffect, useMemo } from 'react'
import { Notes_Cont } from '@/Helpers/Notes'
import axios from 'axios'
import { Account_cont } from '@/Helpers/Account-Info';
import { Categories_Cont } from '@/Helpers/Categories';
import { Number_cont } from '@/Helpers/Numbers-Status';
import Cookies from 'js-cookie';
const url = process.env.NEXT_PUBLIC_SERVER_URL;
const LoadDB = () => {
    const {setNotes,setTodo,notes,Todo} = useContext(Notes_Cont);
    const {AccountInfo,AccountType,setAccountType,setAccountInfo} = useContext(Account_cont);
    const {categories,setCategories} = useContext(Categories_Cont);
    const {setTotalCreate,TotalCreate,setTotalEdit,TotalEdit,setTotalDelete,TotalDelete} = useContext(Number_cont);
    
    if(AccountType==='cloud'){
      useEffect(()=>{
        DataRestore_Notes();
        DataRestore_Todos();
      },[])
      useMemo(()=>{
        const condition = categories[0].id==0 && categories.length > 0
        condition && axios.patch(`${url}/cat/category/update`,categories,
          {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API,user_id:AccountInfo.User_id}})
      },[categories])
      useMemo(()=>{
        const data = {
          Total:{
            create:TotalCreate,
            delete:TotalDelete,
            edit:TotalEdit,
          }
        }
        AccountInfo.User_id && axios.patch(`${url}/user/usertotal/update`,data,{headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API,User_id:AccountInfo.User_id}})
      },[TotalCreate,TotalEdit,TotalDelete])
    }else if(AccountType==='demo'){
      useEffect(()=>{
        SetupDemo();
      },[]);
    }
    function SetupDemo(){
      function setCat(name){
        const category = {id:Math.random()*100,cat:name,col:'yellow'}
        setCategories((prevdata)=>[...prevdata,category])
      }
      const data = ['All','Projects','Business','Finance'];
      data.map((each)=>setCat(each));
    }
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
            User_id:element.User_id,
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
              User_id:element.User_id,
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