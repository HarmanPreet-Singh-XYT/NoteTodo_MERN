"use client"
import { Notes_Cont } from '@/Helpers/Notes';
import { SelectedCardData_cont } from '@/Helpers/SelectedCardData';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import { Useref_Update_cont } from '@/Helpers/Useref_Update';
import React,{useContext} from 'react';

const SetCurrentValues = () => {
    const {notes} = useContext(Notes_Cont);
    const {show_EditCard,show_CreateCard,show_FullCard,selectionUpdate,setSelectionUpdate} = useContext(ShowCard_Cont);
    const {Titleref,Contentref,Categref,Colorref,Tagref,Dateref,Timetick} = useContext(SelectedCardData_cont);
    const {update} = useContext(Useref_Update_cont);
    notes.map((note)=>
    {if(note.cls.includes("card-selected")){
        Titleref.current = note.tit;
        Contentref.current = note.cont;
        Categref.current = note.category.slice(4);
        Colorref.current = note.col;
        Tagref.current = note.tag;
        Dateref.current = note.date;
        Timetick.current = note.timeopt;
        // setSelTitle(note.tit);
        // setSelContent(note.cont);
        // setSelCateg(note.category);
        // setSelColor(note.col);
        // setSelTag(note.tag);
        // setSelDate(note.date);
    }}
    );
    return (
    null
  )
}

export default SetCurrentValues