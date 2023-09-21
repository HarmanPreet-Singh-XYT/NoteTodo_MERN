import { Categories_Cont } from '@/Helpers/Categories';
import { SelectedCardData_cont } from '@/Helpers/SelectedCardData';
import { ShowCard_Cont } from '@/Helpers/ShowCard';
import React,{useContext} from 'react'
const ShowCard = () => {
    const {categories} = useContext(Categories_Cont);
    const {setShow_FullCard,setShow_EditCard} = useContext(ShowCard_Cont);
    const {Titleref,Contentref,Categref,Colorref,Tagref,Dateref,Timetick} = useContext(SelectedCardData_cont);
    return (
    <>
        <div className="blur-background">
            <div className="create-window">
                    <form action="/note/show" className="create-note">
                        <label className="cre-title fir">Title</label>
                        <label className="cre-date fir">Date</label>
                        <label className='cre-time fir'>Include Time</label>
                        <input readOnly defaultValue={Titleref.current} placeholder="Title" name="title" type="text" className="round-border title-in sec" required/>
                        <input style={{fontSize:"20px"}} name='date' value={Dateref.current} readOnly type="text" className="round-border date-in sec"/>
                        <label className="cre-content third">Content</label>
                        <label className="cre-tag third">Tag</label>
                        <label className="cre-category third">Category</label>
                        <textarea readOnly defaultValue={Contentref.current} name="cre-content" placeholder="Content" className="textarea-span four" id="content" cols="20" rows="7"></textarea>
                        {Timetick.current ? <input type='checkbox' checked/> : <input type='checkbox' />}
                        <input readOnly defaultValue={Tagref.current} placeholder="Tag" name="tag" type="text" className="round-border tag-in four"/>
                        {/* <input defaultValue={Categref.current} onChange={(e)=>setCateg(e.target.value)} placeholder="Category" name="category" type="text" className="round-border category-in four"/> */}
                        <select readOnly defaultValue={Categref.current} className='round-border category-in four' name="category">
                            {categories.map((category,key)=><option key={category.id} value={category.cat}>{category.cat}</option>)}
                        </select>
                        <label className="cre-color five">Colour</label>
                        <div className="cre-colours sixth">
                        <hr style={{backgroundColor:`${Colorref.current}`,height:'50px'}} className="color-line"/>
                        </div>
                    </form>
                <div className="create-buttons">
                    <button onClick={()=>{setShow_FullCard(false)}} className="cancel">Close</button>
                    <button style={{color:"white"}} onClick={()=>{setShow_FullCard(false);setShow_EditCard(true)}} type='submit' formAction='/note/show' className="submit">Edit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowCard