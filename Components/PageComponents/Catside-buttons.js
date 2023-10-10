import React, { useContext } from 'react'
import { Categories_Cont } from '@/Helpers/Categories';

const Catside_buttons = () => {
    const {categories,setCategories} = useContext(Categories_Cont);
    function addCat(name,color){
        setCategories((prevcat))
    }
    return (
        <section className="categories">
        {categories.map((category)=><button key={category.id} className="title-category"><span className="circle"></span>{category.cat}</button>)}
        <button className="title-category">Add New Category</button>
        </section>
    );
};

export default Catside_buttons;