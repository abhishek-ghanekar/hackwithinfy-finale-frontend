import React from 'react'
import UploadAPicture from '../Dashboard/UploadAPicture'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'

const ReportGarbage = () => {
  return (
    <div>
        <Navbar/>
      {/* here we make the page where the user can upload the pictures */}
      {/* if the user logs in then user can receive prizes based on the  */}
      <UploadAPicture/>
      <div className='bg-[#1f2937]'>

      <Footer/>

      </div>
    </div>
  )
}

export default ReportGarbage
