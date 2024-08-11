import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AppSidebar from '../../components/Sidebar'
import LoggedInNavbar from '../../components/Navbar/LoggedInNavbar'
import UploadAPicture from './UploadAPicture'

const Dashboard = () => {
  return (
    <>
        <LoggedInNavbar/>
        {/* <UploadAPicture/> */}
        {/* <AppSidebar/> */}
      {/* <h1>This is the Dashboard of the application</h1> */}
    </>
  )
}

export default Dashboard
