import React from 'react'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import stockof from '../../assets/stack-overflow.svg'

import '../RightSidebar.css'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt='pen' width='18' />
                    <p>How terrifying is giving a conference talk?<br /> (Ep. 589)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt='pen' width='18' />
                    <p>The Overflow #186: Do large language models know what they’re talking about?</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='comment' width='18' />
                    <p>Starting the Prompt Design Site: A New Home in our Stack Exchange Neighborhood</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='comment' width='18'/>
                    <p>Colors update: A more detailed look like good wonder</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={stockof} alt='stockof' width='18' />
                    <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={stockof} alt='stockof' width='18' />
                    <p>Launching 2 new collectives: PHP and NLP</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={stockof} alt='stockof' width='18' />
                    <p>Conclusions from title-drafting and question-content assistance experiments...</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>4</p>
                    <p>PSA/Request: Please don't tell folks why you believe something is (or is not)...</p>
                </div>
            </div>
        </div>
    )
}

export default Widget