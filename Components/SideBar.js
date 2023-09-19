import React from 'react'
import Status from './PageComponents/Status'
import SidebarOptions from './PageComponents/Sidebar-options'
import Catside_buttons from './PageComponents/Catside-buttons'
import Links from './PageComponents/Links'
import Footer from './PageComponents/Footer'
const SideBar = () => {
  return (
    <>
        <Status/>
        <SidebarOptions/>
        <Catside_buttons/>
        <Links/>
        <Footer/>
    </>
  )
}

export default SideBar