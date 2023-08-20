import React from 'react'
import Widget from './Widgetfile/Widget'
import WidgetTags from './Widgetfile/WidgetTags'
import './RightSidebar.css'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget/>
        <WidgetTags/>
    </aside>
  )
}

export default RightSidebar