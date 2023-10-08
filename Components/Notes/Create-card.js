import { FormData_cont } from '@/Helpers/CardCreationData';
import { NoteCreator } from '@/Helpers/CreateCard';
import { Notes_Cont } from '@/Helpers/Notes';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React, { useContext } from 'react'
import { CirclePicker } from 'react-color'
import {Categories_Cont} from '@/Helpers/Categories';
import { Number_cont } from '@/Helpers/Numbers-Status';
import { Account_cont } from '@/Helpers/Account-Info';
const Create_card = () => {
    const {AccountInfo} = useContext(Account_cont);
    const {categories, setCategories} = useContext(Categories_Cont);
    const {TotalCreate, setTotalCreate} = useContext(Number_cont);
    const {notes,setNotes} = useContext(Notes_Cont);
    const {setShow_CreateCard} = useContext(ShowCard_Cont);
    const {title,content,categ,color,tag,months,setTitle,setContent,setDate,setCateg,setColor,setTag} = useContext(FormData_cont);
    const {createTime, setCreateTime,create_note} = useContext(NoteCreator);
    const date = new Date;
    // function create_note(color,tag,title,content,category){
    //     const date = new Date;
    //     const fulldate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    //     const random_id = Math.random()*100;
    //     const note = {id:random_id,date:fulldate,tag,col:color,tit:title,cont:content,category,cls:`block`,priority:false,completed:false}
    //     setNotes((prevnotes)=>[...prevnotes,note]);
    // }
    function check(e){
        e.target.checked ? setCreateTime(true) : setCreateTime(false);
    }
    async function creation(){
        create_note(color,tag,title,content,categ,setNotes,months,AccountInfo.User_id);
        setTotalCreate(TotalCreate+1);
    }
    return (
    <>
        <div className="blur-background">
            <div className="create-window">
                    <form id='createform' onSubmit={()=>{title.length > 0 && setShow_CreateCard(false);title.length > 0 && creation();}} action="/note/create" className="create-note">
                        <label className="cre-title fir">Title</label>
                        <label className="cre-date fir">Date</label>
                        <label className='cre-time fir'>Include Time</label>
                        <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" name="title" type="text" className="round-border title-in sec" required/>
                        <input style={{fontSize:"20px"}} onChange={(e)=>setDate(e.target.value)} name='date' value={`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`} readOnly type="text" className="round-border date-in sec"/>
                        <label className="cre-content third">Content</label>
                        <label className="cre-tag third">Tag</label>
                        <label className="cre-category third">Category</label>
                        <textarea onChange={(e)=>setContent(e.target.value)} name="cre-content" placeholder="Content" className="textarea-span four" id="content" cols="20" rows="7"></textarea>
                        <input onClick={(e)=>check(e)} type='checkbox'/>
                        <input onChange={(e)=>setTag(e.target.value)} placeholder="Tag" name="tag" type="text" className="round-border tag-in four"/>
                        {/* <input onChange={(e)=>setCateg(e.target.value)} placeholder="Category" name="category" type="text" className="round-border category-in four"/> */}
                        <select onClick={(e)=>setCateg(e.target.value)} id="category" className='round-border category-in four' name="category">
                            {categories.map((category,key)=><option key={category.id} value={category.cat}>{category.cat}</option>)}
                        </select>
                        <label className="cre-color five">Colour</label>
                        <div className="cre-colours sixth">
                            <CirclePicker onChange={(color,event)=>setColor(color.hex)}/>
                        </div>
                    </form>
                <div className="create-buttons">
                    <button onClick={()=>{setShow_CreateCard(false);}} className="cancel">Cancel</button>
                    <button type='submit' form="createform" className="submit">Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Create_card;