import { Categories_Cont } from '@/Helpers/Categories'
import { Notes_Cont } from '@/Helpers/Notes'
import { Number_cont } from '@/Helpers/Numbers-Status'
import React, { useContext, useEffect } from 'react'

const LoadData = () => {
    const {setNotesDone,setNotesProgress,setTodoProgress, setTodoDone, setTodoOverall,setNotesPending,setNotesCompleted} = useContext(Number_cont)
    const {Todo,notes} = useContext(Notes_Cont);
    const {selectedButton,categories} = useContext(Categories_Cont);
    function PushIn(setElement,cate,counter){
        const Obj = {id:Math.random()*100,category:cate,count:counter};
        setElement(prevElement=>[...prevElement,Obj])
    }
    let todo_comp = 0;
    let todo_pend = 0;
    let todo = 0;
    let notes_comp = 0;
    let notes_pend = 0;
    useEffect(()=>{
        Todo.forEach(element => {
            element.completed && todo_comp++;
            !element.completed && todo++;
            element.priority && todo_pend++;
        });
        setTodoDone(todo_comp);
        setTodoProgress(todo_pend);
        setTodoOverall(todo);

        notes.forEach(element => {
            element.completed && notes_comp++;
            !element.completed && notes_pend++;
        });
        setNotesDone(notes_comp);
        setNotesProgress(notes_pend);

        let counter = 0;
        let counter2 = 0;
        setNotesCompleted([]);
        setNotesPending([]);
        categories.forEach(categor=> {
            counter=0;
            notes.map((note)=>{
                const check = note.category.includes(categor.cat) && note.completed;
                check && counter++;
            })
            PushIn(setNotesCompleted,categor.cat,counter);
        })
        categories.forEach(categor=> {
            counter2=0;
            notes.map((note)=>{
                const check = note.category.includes(categor.cat) && !note.completed;
                check && counter2++;
            })
            PushIn(setNotesPending,categor.cat,counter2);
        })
    },[notes,Todo,selectedButton])
    return (
        null
    )
}

export default LoadData