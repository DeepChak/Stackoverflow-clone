import React from 'react';
import './App.css';
import NavBars from './component/NavBars'
import Home from './component/Home/Home'
import Auth from './component/Auth/Auth'
import Question from './component/Question';
import AskQuesion from './component/AskQuestion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayQuestion from './component/DisplayQuestion'
import { fetchAllQuestions } from './actions/question';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/Users';
import Tags from './component/Tags/Tags'
import Users from './component/Users/Users';
import UserProfile from './component/UserProfile/UserProfile';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return <>
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Questions' element={<Question />} />
        <Route path='/AskQuestion' element={<AskQuesion />} />
        <Route path='/Questions/:id' element={<DisplayQuestion />} />
        <Route path='/Tags' element={<Tags/>}/>
        <Route path='Users' element={<Users/>}/>
        <Route path='Users/:id' element={<UserProfile/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;