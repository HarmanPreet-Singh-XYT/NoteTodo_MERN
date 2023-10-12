import { Account_cont } from '@/Helpers/Account-Info';
import { Categories_Cont } from '@/Helpers/Categories';
import { Notes_Cont } from '@/Helpers/Notes';
import { Number_cont } from '@/Helpers/Numbers-Status';
import React,{useEffect,useContext} from 'react'

const LocalStorage = () => {
    const {setNotes,setTodo,notes,Todo} = useContext(Notes_Cont);
    const {AccountInfo,AccountType,setAccountType,setAccountInfo} = useContext(Account_cont);
    const {categories,setCategories} = useContext(Categories_Cont);
    const {setTotalCreate,TotalCreate,setTotalEdit,TotalEdit,setTotalDelete,TotalDelete} = useContext(Number_cont);
    if(AccountType==='localregister'){
          useEffect(()=>{
            const data = {
              name:'user',
              bio:'',
              dob:'1/1/2000',
              User_id:Math.random()*100
            };
            const DefaultCategories=[{
              id:0,
              cat:"All",
              col:"yellow",
              User_id:data.User_id,
          },{id:Math.random()*100,
              cat:"Projects",
              col:"yellow",
              User_id:data.User_id,
          },{id:Math.random()*100,
              cat:"Business",
              col:"yellow",
              User_id:data.User_id,
          },{id:Math.random()*100,
              cat:"Finance",
              col:"yellow",
              User_id:data.User_id,}]
          const Total={
            create:0,
            edit:0,
            delete:0,
          }
            localStorage.setItem('account', JSON.stringify(data));
            localStorage.setItem('notes',JSON.stringify([]));
            localStorage.setItem('todos',JSON.stringify([]));
            localStorage.setItem('categories',JSON.stringify(DefaultCategories));
            localStorage.setItem('Total',JSON.stringify(Total));
            setAccountInfo(JSON.parse(localStorage.getItem('account')));
            setNotes(JSON.parse(localStorage.getItem('notes')));
            setTodo(JSON.parse(localStorage.getItem('todos')));
            setCategories(JSON.parse(localStorage.getItem('categories')));
          },[])
          useEffect(()=>{
            const Total={
              create:TotalCreate,
              edit:TotalEdit,
              delete:TotalDelete,
            }
            localStorage.setItem('account', JSON.stringify(AccountInfo));
            localStorage.setItem('notes', JSON.stringify(notes));
            localStorage.setItem('todos', JSON.stringify(Todo));
            localStorage.setItem('categories', JSON.stringify(categories));
            localStorage.setItem('Total',JSON.stringify(Total));
          },[AccountInfo,notes,Todo,categories])
        }else{
          useEffect(()=>{
            setAccountInfo(JSON.parse(localStorage.getItem('account')));
            setNotes(JSON.parse(localStorage.getItem('notes')));
            setTodo(JSON.parse(localStorage.getItem('todos')));
            setCategories(JSON.parse(localStorage.getItem('categories')));
            setTotalCreate(JSON.parse(localStorage.getItem('Total')).create);
            setTotalEdit(JSON.parse(localStorage.getItem('Total')).edit);
            setTotalDelete(JSON.parse(localStorage.getItem('Total')).delete);
          },[]);
          useEffect(()=>{
            const Total={
              create:TotalCreate,
              edit:TotalEdit,
              delete:TotalDelete,
            }
            localStorage.setItem('account', JSON.stringify(AccountInfo));
            localStorage.setItem('notes', JSON.stringify(notes));
            localStorage.setItem('todos', JSON.stringify(Todo));
            localStorage.setItem('categories', JSON.stringify(categories));
            localStorage.setItem('Total',JSON.stringify(Total));
          },[AccountInfo,notes,Todo,categories])
        }
  return (
    null
  )
}

export default LocalStorage