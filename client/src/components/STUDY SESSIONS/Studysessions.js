import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StudySession from './StudySession';
import {Row,Col} from 'react-bootstrap'
function Studysessions() {

  const [sess, setSess] = useState();
  const sendRequest = async () => {
    const res = await axios.get("http://studyplanner68.herokuapp.com/api/course")
      .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then(data => setSess(data.courses));
  }, [])
  console.log(sess);
  
  return (
    <div>
  
    <Row className='flex' xs={1} md={3}>
    
    { sess && sess.map((session,index)=>( <Col  >   <StudySession title={session.title} subject={session.subject} startDate={session.startDate} endDate={session.startDate} capacity={session.capacity} isCreator={localStorage.getItem("userId")===session.creator} id={session._id} /></Col>
   

   ))
  }
   </Row> 

  
        
        

    </div>
  )
}

export default Studysessions;