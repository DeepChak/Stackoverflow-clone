import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'

import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is function ?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "React", "python","java"],
  //   userPosted: "Mani",
  //   userId:1,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerbody:"Answer",
  //     suerAnswered:"Hari",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // },
  // {
  //   _id: 2,
  //   upVotes: 0,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is function ?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "python"],
  //   userPosted: "Michael",
  //   userId:2,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerbody:"Answer",
  //     suerAnswered:"Pandi",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // },
  // {
  //   _id: 3,
  //   upVotes: 2,
  //   downVotes: 2,
  //   noOfAnswers: 1,
  //   questionTitle: "What is function ?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "PHP", "python"],
  //   userPosted: "Peter",
  //   userId:1,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerbody:"Answer",
  //     suerAnswered:"Paul",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // },
  // ]

  const questionsList = useSelector((state) => state.questionsReducer);

  const location = useLocation()
  var navigate = useNavigate()
  const User = 1
  const handleClick =()=>{
    if (User===null) {
      alert("login or signup to ask a question") 
      navigate('/Auth')
    } else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={handleClick} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionsList.data.length} questions </p>
              <QuestionList questionsList={questionsList.data} />
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar