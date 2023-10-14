import React, { useContext, useState } from 'react'
import { Categories_Cont } from '@/Helpers/Categories';
import { Account_cont } from '@/Helpers/Account-Info';
import { GithubPicker } from 'react-color'
const Catside_buttons = () => {
    const {categories,setCategories} = useContext(Categories_Cont);
    const {AccountInfo} = useContext(Account_cont);
    const [showEdit, setshowEdit] = useState(false);
    const [EditID, setEditID] = useState(1);
    const [color, setColor] = useState('');
    const [defaultname, setdefaultname] = useState('');
    async function addCat(name,color,User_id){
        const random = Math.random()*100;
        const cat = {id:random,cat:name,col:color,User_id};
        await setCategories((prevcat)=>[...prevcat,cat]);
    }
    function deleteCat(id){
        setCategories((prevcats)=>
        prevcats.filter((cat)=>cat.id!=id && cat)
        )
    }
    function edit(event){
        event.preventDefault();
        setCategories((prevcat)=>
        prevcat.map((cat)=>
        cat.id===EditID ? {...cat,cat:event.target[0].value,col:color} : cat));
    }
    return (
        <>
        <div style={{height:`${showEdit ? '200px' : '0'}`}} className='cat-edit'>
            <form onSubmit={(e)=>{edit(e);setshowEdit(false);}} className='cat-submit'>
            <input defaultValue={defaultname} placeholder='Edit Category Name' className='cat-edit-input'/>
            <div className='col-picker'>
            {showEdit && <GithubPicker onChange={(e)=>setColor(e.hex)}/>}
            </div>
            <button className='cat-btn' type='submit'>Apply</button>
            <button onClick={()=>setshowEdit(false)} className='cat-btn' type='button'>Cancel</button>
            </form>
        </div>
        <section className="categories">
        {categories.map((category)=>{return <button key={category.id} className="title-category"><span style={{backgroundColor:`${category.col}`}} className="circle"></span>{category.cat}{category.cat!="All" && <div><i onClick={()=>{setdefaultname(category.cat);setEditID(category.id);setColor(category.col);setshowEdit(true);}} className="fa-solid fa-pen"></i><i onClick={()=>{deleteCat(category.id)}} className="fa-solid fa-trash"></i></div>}</button>})}
        <button onClick={()=>addCat('New','red',AccountInfo.User_id)} className="title-category">Add New Category</button>
        </section>
        </>
    );
};

export default Catside_buttons;