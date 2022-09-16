import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home';
import React, { useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import {useSelector,useDispatch} from 'react-redux';
import {authActions} from "./Store/index.js";
import CurrStudySessions from "./components/STUDY SESSIONS/CurrStudysessions";
import AddStudySession from './components/STUDY SESSIONS/AddStudySession';
import SessionDetail from './components/STUDY SESSIONS/SessionDetail';
import UpcomStudySessions from './components/STUDY SESSIONS/UpcomStudySessions';
import PrevStudySessions from './components/STUDY SESSIONS/PrevStudySessions';


function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(()=>
  {
    if(localStorage.getItem("userId"))
    {
      dispatch(authActions.login());
    }
  },[dispatch]);

  return (
    <div className='container-fluid'>
     <Header/>
     <hr style={{color :'#fac264'}} className='fs-1' />
     <Routes>
      
      {!isLoggedIn?(<>  <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/></>):
      (
        <>
      <Route path="/" element={<Home/>}/>
        <Route path="/curstudysessions" element={<CurrStudySessions/>} />
        <Route path="/prevstudysessions" element={<PrevStudySessions/>} />
        <Route path="/studysessions/:id" element={<SessionDetail/>} />
        <Route path="/createsessions" element={<AddStudySession/>}/>
        <Route path="/upcomstudysessions" element={<UpcomStudySessions/>} />

        </>
      )}
    
     </Routes>
    </div>
  );
}

export default App;
