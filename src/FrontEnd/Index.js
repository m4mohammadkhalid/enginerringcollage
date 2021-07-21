import React from 'react'
import AboutHome from './AboutHome'
import BasicModal from './Courses'
import Header from './Header'
import NoticeBoard from './NoticeBoard'
import NoticeHeader from './NoticeHeader'


const App = () => {
  return (
    <>
        <NoticeHeader />
        <Header />
        <NoticeBoard />   
        <BasicModal />  
        <AboutHome />    

    </>
  )
}

export default App
