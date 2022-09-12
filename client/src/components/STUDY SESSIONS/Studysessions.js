import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StudySession from './StudySession';
import {Row,Col} from 'react-bootstrap'
function Studysessions() {

  const [sess, setSess] = useState();
  const [flag, setFlag] = useState(false);
  const sendRequest = async () => {
    const res = await axios.get("https://studyplanner68.herokuapp.com/api/course")
      .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  const reloadStories = (flag) => {
    setFlag(flag);
  }
 
  
  useEffect(() => {
    sendRequest().then(data => setSess(data.courses));
  }, [flag])
  console.log(sess);
  
  return (
    <div>
  
    <Row className='flex' xs={1} md={3}>
    
    { sess && sess.map((session,index)=>( <Col  >   <StudySession key={index} title={session.title} subject={session.subject} startDate={session.startDate} startTime={session.startTime} endDate={session.startDate} endTime={session.endTime} capacity={session.capacity} isCreator={localStorage.getItem("userId")===session.creator} id={session._id} users={session.users} flag= {flag}reloadStories={reloadStories}/></Col>
   

   ))
  }
   </Row> 
    </div>
  )
}

export default Studysessions;