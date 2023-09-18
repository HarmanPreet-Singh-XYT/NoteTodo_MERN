import React, { useContext } from 'react'
import { Categories_Cont } from '@/Helpers/Categories';

const Catnav_buttons = () => {
    const {categories,selectedCategory, setSelectedCategory} = useContext(Categories_Cont);
    return (
        categories.map((category)=><button name={category.cat} onClick={(e)=>setSelectedCategory(e.target.name)} key={category.id} className={category.cat === selectedCategory ? "projects add-btn selected-btn" : "projects add-btn"}>{category.cat}</button>)
    )
}

export default Catnav_buttons