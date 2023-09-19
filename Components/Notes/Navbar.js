import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="search stats">
                <div className="search-bar-out">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input placeholder="Search" type="text" className="search-bar"/>
                </div>
                <div className="account-bar">
                    <img className="profile-logo" src="https://media.istockphoto.com/id/537373196/photo/trees-forming-a-heart.jpg?s=612x612&w=0&k=20&c=onZKNjkycICe4q2ZDnKi39z42Ax9tpZT7pph-2e5Seo=" alt="profile-picture"/>
                    <p className="profile-name">Hello, Rahul!</p>
                    <i className="fa-regular fa-bell"></i>
                </div>
        </nav>
    </>
  )
}

export default Navbar;