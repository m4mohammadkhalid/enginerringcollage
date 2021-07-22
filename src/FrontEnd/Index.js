import React from 'react'
import AboutHome from './AboutHome'
import BasicModal from './Courses'
import Header from './Header'
import HomeSlider from './HomeSlider'
import MapHomePage from './MapHomePage'
import NoticeBoard from './NoticeBoard'
import NoticeHeader from './NoticeHeader'


const App = () => {
  return (
    <>
        <NoticeHeader />
        <Header />
        <HomeSlider />
        <AboutHome />    

        <NoticeBoard />   
        <BasicModal />  
        <MapHomePage />

    </>
  )
}

export default App
