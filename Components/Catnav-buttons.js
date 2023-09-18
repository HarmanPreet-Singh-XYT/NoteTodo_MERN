import React, { useContext } from 'react'
import { Categories_Cont } from '@/Helpers/Categories';

const Catnav_buttons = () => {
    const {categories} = useContext(Categories_Cont);
    return (
        categories.map((category)=><button key={category.id} className="projects add-btn">{category.cat}</button>)
    )
}

export default Catnav_buttons