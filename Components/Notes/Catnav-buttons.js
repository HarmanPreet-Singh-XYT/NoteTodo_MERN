import React, { useContext } from 'react'
import { Categories_Cont } from '@/Helpers/Categories';

const Catnav_buttons = () => {
    const {categories,selectedCategory, setSelectedCategory,selectedID, setSelectedID} = useContext(Categories_Cont);
    return (
        categories.map((category)=>{return <button name={category.cat} onClick={(e)=>{setSelectedCategory(e.target.name);setSelectedID(category.id)}} key={category.id} className={category.id === selectedID ? "projects add-btn selected-btn" : "projects add-btn"}>{category.cat}</button>})
    )
}

export default Catnav_buttons