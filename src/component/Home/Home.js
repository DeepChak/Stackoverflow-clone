import React from 'react'
import LeftSidebar from '../LeftSidebar'
import RightSidebar from '../RightSidebar'
import HomeMainbar from '../HomeMainbar'
import '../../App.css'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Home