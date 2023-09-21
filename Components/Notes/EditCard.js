import { FormData_cont } from '@/Helpers/CardCreationData';
import { Categories_Cont } from '@/Helpers/Categories';
import { NoteCreator } from '@/Helpers/CreateCard';
import { Notes_Cont } from '@/Helpers/Notes';
import { SelectedCardData_cont } from '@/Helpers/SelectedCardData';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React, { useContext, useEffect } from 'react'
import { CirclePicker } from 'react-color'
const EditCard = () => {
    const {categories} = useContext(Categories_Cont);
    const {setNotes} = useContext(Notes_Cont);
    const {setShow_EditCard} = useContext(ShowCard_Cont);
    const {title,content,categ,color,tag,months,setTitle,setContent,setDate,setCateg,setColor,setTag} = useContext(FormData_cont);
    // const {selTitle, setSelTitle,selContent, setSelContent,selCateg, setSelCateg,selColor, setSelColor,selTag, setSelTag,selDate, setSelDate} = useContext(SelectedCardData_cont);
    const {Titleref,Contentref,Categref,Colorref,Tagref,Dateref,Timetick} = useContext(SelectedCardData_cont);
    function Edit(){
        setNotes((prevnotes)=>
        prevnotes.map((note)=>note.cls.includes("card-selected") ? {...note,tag:tag,col:color,tit:title,cont:content,category:categ,cls:`block`,timeopt:Timetick.current} : note)
        )
    }
    return (
    <>
        <div className="blur-background">
            <div className="create-window">
            <hr style={{backgroundColor:`${color}`}} className="color-line"/>
                    <form onSubmit={()=>{Edit();setShow_EditCard(false);}} action="/note/edit" id='editnote' className="create-note">
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
                    <button onClick={()=>{setShow_EditCard(false);setColor(Colorref.current);console.log(Tagref.current)}} className="cancel">Cancel</button>
                    <button style={{color:"white"}} form='editnote' type='submit' formAction='/note/create' className="submit">Edit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditCard