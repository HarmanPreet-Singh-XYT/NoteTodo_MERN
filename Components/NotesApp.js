import React from 'react'
import Navbar from './Notes/Navbar';
import TopBtn from './Notes/TopBtn';
import Notes from './Notes/Notes';
import BottomBtns from './Notes/Bottom-Btns';

const NotesApp = () => {
  return (
    <>
    <Navbar/>
    <TopBtn/>
    <Notes/>
    <BottomBtns/>
    </>
  )
}

export default NotesApp;