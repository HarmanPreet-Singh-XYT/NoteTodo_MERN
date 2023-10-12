import { FormData_cont } from '@/Helpers/CardCreationData';
import { Categories_Cont } from '@/Helpers/Categories';
import { NoteCreator } from '@/Helpers/CreateCard';
import { Notes_Cont } from '@/Helpers/Notes';
import { Number_cont } from '@/Helpers/Numbers-Status';
import { SelectedCardData_cont } from '@/Helpers/SelectedCardData';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React, { useContext, useEffect } from 'react'
import { CirclePicker } from 'react-color'
import axios from 'axios';
import { Account_cont } from '@/Helpers/Account-Info';
const EditCard = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    const {AccountType} = useContext(Account_cont);
    const {categories} = useContext(Categories_Cont);
    const {TotalCreate, setTotalCreate,TotalEdit, setTotalEdit,TotalDelete, setTotalDelete} = useContext(Number_cont);
    const {notes,setNotes} = useContext(Notes_Cont);
    const {setShow_EditCard} = useContext(ShowCard_Cont);
    const {date,title,content,categ,color,tag,months,setTitle,setContent,setDate,setCateg,setColor,setTag} = useContext(FormData_cont);
    // const {selTitle, setSelTitle,selContent, setSelContent,selCateg, setSelCateg,selColor, setSelColor,selTag, setSelTag,selDate, setSelDate} = useContext(SelectedCardData_cont);
    const {Idref,Userid_ref,Titleref,Contentref,Categref,Colorref,Tagref,Dateref,Timetick} = useContext(SelectedCardData_cont);
    async function Edit(e){
        e.preventDefault();
        await setNotes((prevnotes)=>
        prevnotes.map((note)=>note.cls.includes("card-selected") ? {...note,tag:e.target[4].value,col:color,tit:e.target[0].value,cont:e.target[2].value,category:`All ${e.target[5].value}`,cls:`block`,timeopt:Timetick.current} : note)
        )
        AccountType==='cloud' && axios.patch(`${url}/notes/note/edit`,{
            id:Idref.current,
            tag:e.target[4].value,
            User_id:Userid_ref.current,
            title:e.target[0].value,
            color:color,
            content:e.target[2].value,
            category:`All ${e.target[5].value}`,
            date:e.target[1].value,
            timeopt:Timetick.current,
        },
        {headers:{Authorization:process.env.NEXT_PUBLIC_ENCRYPT_API}});
    }
    return (
    <>
        <div className="blur-background">
            <div className="create-window">
            <hr style={{backgroundColor:`${color}`}} className="color-line"/>
                    <form onSubmit={(e)=>{Edit(e);setShow_EditCard(false);setTotalEdit(TotalEdit+1);}} action="/note/edit" id='editnote' className="create-note">
                        <label className="cre-title fir">Title</label>
                        <label className="cre-date fir">Date</label>
                        <label className='cre-time fir'>Include Time</label>
                        <input defaultValue={Titleref.current} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" name="title" type="text" className="round-border title-in sec" required/>
                        <input style={{fontSize:"20px"}} name='date' defaultValue={Dateref.current} readOnly type="text" className="round-border date-in sec"/>
                        <label className="cre-content third">Content</label>
                        <label className="cre-tag third">Tag</label>
                        <label className="cre-category third">Category</label>
                        <textarea defaultValue={Contentref.current} onChange={(e)=>setContent(e.target.value)} name="cre-content" placeholder="Content" className="textarea-span four" id="content" cols="20" rows="7"></textarea>
                        {Timetick.current ? <input onChange={(e)=>{Timetick.current=e.target.checked}} type='checkbox' defaultChecked/> : <input onChange={(e)=>{Timetick.current=e.target.checked}} type='checkbox' />}
                        <input defaultValue={Tagref.current} onChange={(e)=>setTag(e.target.value)} placeholder="Tag" name="tag" type="text" className="round-border tag-in four"/>
                        {/* <input defaultValue={Categref.current} onChange={(e)=>setCateg(e.target.value)} placeholder="Category" name="category" type="text" className="round-border category-in four"/> */}
                        <select defaultValue={Categref.current} onChange={(e)=>setCateg(`All ${e.target.value}`)} className='round-border category-in four' name="category">
                            {categories.map((category,key)=><option key={category.id} value={category.cat}>{category.cat}</option>)}
                        </select>
                        <label className="cre-color five">Colour</label>
                        <div className="cre-colours sixth">
                            <CirclePicker onChange={(color,event)=>setColor(color.hex)}/>
                        </div>
                    </form>
                <div className="create-buttons">
                    <button onClick={()=>{setShow_EditCard(false);setColor(Colorref.current);}} className="cancel">Cancel</button>
                    <button style={{color:"white"}} form='editnote' type='submit' formAction='/note/create' className="submit">Edit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditCard