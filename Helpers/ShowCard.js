"use client"
import React, { createContext, useState } from 'react'
export const ShowCard_Cont = createContext();

const ShowCard = ({children}) => {
    const [showCalendar, setshowCalendar] = useState(false);
    const [show_CreateCard, setShow_CreateCard] = useState(false);
    const [show_EditCard, setShow_EditCard] = useState(false);
    const [card_selected, setCard_selected] = useState(false);
    const [show_FullCard, setShow_FullCard] = useState(false);
    const [selectionUpdate, setSelectionUpdate] = useState(false);
    const [show_TodoCreateCard, setShow_TodoCreateCard] = useState(false);
    const [show_TodoEditCard, setShow_TodoEditCard] = useState(false);
    const [show_TodoShowCard, setShow_TodoShowCard] = useState(false);
    const [show_SupportCardSuccess, setShow_SupportCardSuccess] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    return (
        <ShowCard_Cont.Provider value={{showCalendar, setshowCalendar,showLoading,setShowLoading,showLogin,setShowLogin,show_SupportCardSuccess, setShow_SupportCardSuccess,show_TodoShowCard, setShow_TodoShowCard,show_TodoEditCard, setShow_TodoEditCard,show_TodoCreateCard, setShow_TodoCreateCard,selectionUpdate, setSelectionUpdate,show_FullCard, setShow_FullCard,card_selected, setCard_selected,show_EditCard, setShow_EditCard,show_CreateCard, setShow_CreateCard}}>
            {children}
        </ShowCard_Cont.Provider>
    );
};

export default ShowCard