import { FormData_cont } from '@/Helpers/CardCreationData';
import { Categories_Cont } from '@/Helpers/Categories';
import { NoteCreator } from '@/Helpers/CreateCard';
import { Notes_Cont } from '@/Helpers/Notes';
import { SelectedCardData_cont } from '@/Helpers/SelectedCardData';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React, { useContext } from 'react'
import { CirclePicker } from 'react-color'
const EditCard = () => {
    const {categories, setCategories} = useContext(Categories_Cont);
    const {notes,setNotes} = useContext(Notes_Cont);
    const {show_EditCard,setShow_EditCard} = useContext(ShowCard_Cont);
    const {title,content,categ,color,tag,months,setTitle,setContent,setDate,setCateg,setColor,setTag} = useContext(FormData_cont);
    const {create_note} = useContext(NoteCreator);
    // const {selTitle, setSelTitle,selContent, setSelContent,selCateg, setSelCateg,selColor, setSelColor,selTag, setSelTag,selDate, setSelDate} = useContext(SelectedCardData_cont);
    const {Titleref,Contentref,Categref,Colorref,Tagref,Dateref,Timetick} = useContext(SelectedCardData_cont);
    const date = new Date;
    function Edit(){
        setNotes((prevnotes)=>
        prevnotes.map((note)=>note.cls.includes("card-selected") ? {...note,tag,col:color,tit:title,cont:content,category:categ,cls:`block`} : note)
        )
        console.log(Timetick)
    }
    return (
    <>
        <div className="blur-background">
            <div className="create-window">
            <hr style={{backgroundColor:`${color}`}} className="color-line"/>
                    <form action="/note/create" className="create-note">
                        <label className="cre-title fir">Title</label>
                        <label className="cre-date fir">Date</label>
                        <label className='cre-time fir'>Include Time</label>
                        <input defaultValue={Titleref.current} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" name="title" type="text" className="round-border title-in sec" required/>
                        <input style={{fontSize:"20px"}} name='date' defaultValue={Dateref.current} readOnly type="text" className="round-border date-in sec"/>
                        <label className="cre-content third">Content</label>
                        <label className="cre-tag third">Tag</label>
                        <label className="cre-category third">Category</label>
                        <textarea defaultValue={Contentref.current} onChange={(e)=>setContent(e.target.value)} name="cre-content" placeholder="Content" className="textarea-span four" id="content" cols="20" rows="7"></textarea>
                        {Timetick.current ? <input type='checkbox' checked/> : <input type='checkbox' />}
                        <input defaultValue={Tagref.current} onChange={(e)=>setTag(e.target.value)} placeholder="Tag" name="tag" type="text" className="round-border tag-in four"/>
                        {/* <input defaultValue={Categref.current} onChange={(e)=>setCateg(e.target.value)} placeholder="Category" name="category" type="text" className="round-border category-in four"/> */}
                        <select defaultValue={Categref.current} onChange={(e)=>setCateg(e.target.value)} className='round-border category-in four' name="category">
                            {categories.map((category,key)=><option key={category.id} value={category.cat}>{category.cat}</option>)}
                        </select>
                        <label className="cre-color five">Colour</label>
                        <div className="cre-colours sixth">
                            <CirclePicker onChange={(color,event)=>setColor(color.hex)}/>
                        </div>
                    </form>
                <div className="create-buttons">
                    <button onClick={()=>{setShow_EditCard(false);setColor(Colorref.current)}} className="cancel">Cancel</button>
                    <button onClick={()=>{Edit();title.length > 0 && setShow_EditCard(false);}} type='submit' formAction='/note/create' className="submit">Edit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditCard