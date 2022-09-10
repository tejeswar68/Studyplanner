import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home';
import React, { useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import {useSelector,useDispatch} from 'react-redux';
import {authActions} from "./Store/index.js";
import Studysessions from './components/STUDY SESSIONS/Studysessions';
import AddStudySession from './components/STUDY SESSIONS/AddStudySession';
import SessionDetail from './components/STUDY SESSIONS/SessionDetail';


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
        <Route path="/studysessions" element={<Studysessions/>} />
        <Route path="/studysessions/:id" element={<SessionDetail/>} />
        <Route path="/createsessions" element={<AddStudySession/>}/>
        </>
      )}
    
     </Routes>
    </div>
  );
}

export default App;
