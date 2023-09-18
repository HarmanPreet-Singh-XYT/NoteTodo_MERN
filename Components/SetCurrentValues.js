"use client"
import { Notes_Cont } from '@/Helpers/Notes';
import { SelectedCardData_cont } from '@/Helpers/SelectedCardData';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React,{useContext,useEffect,useRef} from 'react';
const SetCurrentValues = () => {
    const {notes,setNotes} = useContext(Notes_Cont);
    const {show_EditCard,show_CreateCard} = useContext(ShowCard_Cont);
    const {Titleref,Contentref,Categref,Colorref,Tagref,Dateref,Timetick} = useContext(SelectedCardData_cont);
    function SetValues(){
        notes.map((note)=>
        {if(note.cls.includes("card-selected")){
            Titleref.current = note.tit;
            Contentref.current = note.cont;
            Categref.current = note.category;
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
    };
    useEffect(()=>{
        SetValues();
    },[show_EditCard,notes,show_CreateCard]);
    return (
    null
  )
}

export default SetCurrentValues