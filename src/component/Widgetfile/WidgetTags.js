import React from 'react'
import '../RightSidebar.css'

const WidgetTags = () => {
    const tages = ['c','css','express','firebase','html','java','javascript','Mern','Mysql','Mongodb','Next js','React','php','Node js','Moongose','Formik',] 
  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className='widget-tags-div'>
            {
                tages.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags