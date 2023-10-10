import React, { useContext } from 'react'
import { Categories_Cont } from '@/Helpers/Categories';
import { Account_cont } from '@/Helpers/Account-Info';

const Catside_buttons = () => {
    const {categories,setCategories} = useContext(Categories_Cont);
    const {AccountInfo} = useContext(Account_cont);
    function addCat(name,color,User_id){
        const random = Math.random()*100;
        const cat = {id:random,cat:name,col:color,User_id};
        setCategories((prevcat)=>[...prevcat,cat]);
    }
    function deleteCat(id){
        setCategories((prevcats)=>
        prevcats.filter((cat)=>cat.id!=id && cat)
        )
    }
    return (
        <section className="categories">
        {categories.map((category)=>{return <button key={category.id} className="title-category"><span style={{backgroundColor:`${category.col}`}} className="circle"></span>{category.cat}<i onClick={()=>{deleteCat(category.id)}} className="fa-solid fa-trash"></i></button>})}
        <button onClick={()=>addCat('New','red',AccountInfo.User_id)} className="title-category">Add New Category</button>
        </section>
    );
};

export default Catside_buttons;