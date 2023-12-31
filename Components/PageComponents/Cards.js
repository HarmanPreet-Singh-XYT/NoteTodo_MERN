import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React,{ useContext } from 'react'
import TodoCreate from '../Todo/TodoCreate';
import ShowCard from '../Notes/ShowCard';
import Create_card from '../Notes/Create-card';
import EditCard from '../Notes/EditCard';
import TodoShow from '@/Components/Todo/TodoShow'
import TodoEdit from '../Todo/TodoEdit';
import SetCurrentValues from '../Notes/SetCurrentValues';
const Cards = () => {
    const {show_TodoShowCard,show_TodoCreateCard,show_TodoEditCard,show_FullCard,show_EditCard,show_CreateCard} = useContext(ShowCard_Cont);
    return (
    <>
        <SetCurrentValues/>
        {show_TodoShowCard && <TodoShow/>}
        {show_TodoEditCard && <TodoEdit/>}
        {show_TodoCreateCard && <TodoCreate/>}
        {show_FullCard && <ShowCard/>}
        {show_CreateCard && <Create_card/>}
        {show_EditCard && <EditCard/>}
    </>
  );
};

export default Cards;