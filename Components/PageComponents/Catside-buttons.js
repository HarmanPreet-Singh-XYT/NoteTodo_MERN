import React, { useContext } from 'react'
import { Categories_Cont } from '@/Helpers/Categories';

const Catside_buttons = () => {
    const {categories} = useContext(Categories_Cont);
    return (
        <section className="categories">
        {categories.map((category)=><button key={category.id} className="title-category"><span className="circle"></span>{category.cat}</button>)}
        </section>
    );
};

export default Catside_buttons;