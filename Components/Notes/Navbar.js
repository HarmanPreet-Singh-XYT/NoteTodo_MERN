import { Search_cont } from '@/Helpers/Search';
import React,{useContext} from 'react'
const Navbar = () => {
  const {searchOpt,setSearchOpt,setSearchValue} = useContext(Search_cont);
  return (
    <>
        <nav className="search stats">
                <div className="search-bar-out">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input onChange={(e)=>setSearchValue(e.target.value)} placeholder="Search" type="text" className="search-bar"/>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="account-bar">
                    <img className="profile-logo" src="https://media.istockphoto.com/id/537373196/photo/trees-forming-a-heart.jpg?s=612x612&w=0&k=20&c=onZKNjkycICe4q2ZDnKi39z42Ax9tpZT7pph-2e5Seo=" alt="profile-picture"/>
                    <p className="profile-name">Hello, xyz!</p>
                    <i className="fa-regular fa-bell"></i>
                </div>
        </nav>
    </>
  )
}

export default Navbar;