import React from 'react'
import LeftSidebar from '../component/LeftSidebar'
import RightSidebar from '../component/RightSidebar'
import HomeMainbar from '../component/HomeMainbar'
import '../App.css'

const Question = () => {
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <HomeMainbar />
                <RightSidebar />
            </div>
        </div>
    )
}

export default Question
