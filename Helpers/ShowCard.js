"use client"
import React, { createContext, useState } from 'react'
export const ShowCard_Cont = createContext();

const ShowCard = ({children}) => {
    const [show_CreateCard, setShow_CreateCard] = useState(false);
    const [show_EditCard, setShow_EditCard] = useState(false);
    const [card_selected, setCard_selected] = useState(false);
    return (
        <ShowCard_Cont.Provider value={{card_selected, setCard_selected,show_EditCard, setShow_EditCard,show_CreateCard, setShow_CreateCard}}>
            {children}
        </ShowCard_Cont.Provider>
    );
};

export default ShowCard