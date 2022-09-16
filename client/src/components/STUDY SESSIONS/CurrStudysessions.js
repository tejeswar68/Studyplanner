import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StudySession from './StudySession';
import {Row,Col} from 'react-bootstrap';
import moment from 'moment';
function CurStudysessions() {

  const [sess, setSess] = useState();
  const [flag, setFlag] = useState(false);
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/api/course")
      .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  const reloadStories = (flag) => {
    setFlag(flag);
  }
  //CURRENT DATE AND TIME
  var date = new Date().toDateString();
  date = moment(date).format('YYYY-MM-DD');
 console.log(date)
 var time = new Date().toUTCString();
 time = moment(time).format('HH:mm');
 console.log(time)

  
  useEffect(() => {
    sendRequest().then(data => setSess(data.courses.filter((obj)=>{
      if(obj.startDate === date && obj.endDate === date )
      {
        return obj.startTime<=time && obj.endTime >=time;
      }
      if(obj.startDate === date  )
      {
        return obj.startTime<=time;
      }
      if(obj.endDate === date)
      {
        return obj.endTime >=time;
      }
      return obj.startDate<date && obj.endDate> date ;
     })));
  }, [date,time])
  console.log(sess);



 


 
  return (
    <div>
      
      
    <h1 className='text-center mt-5' style={{color:'#324e8f'}}>CURRENT-SESSIONS</h1>
    <hr className='w-50 d-block mx-auto mb-5' style={{color:'#324e8f'}} />
    <Row className='flex' xs={1} md={3}>
    
    { sess && sess.map((session,index)=>( <Col>   <StudySession key={index} title={session.title} subject={session.subject} startDate={session.startDate} startTime={session.startTime} endDate={session.startDate} endTime={session.endTime} capacity={session.capacity} isCreator={localStorage.getItem("userId")===session.creator} id={session._id} users={session.users} flag= {flag}reloadStories={reloadStories}/></Col>
   

  ))
  }
   </Row> 
    </div>
  )
}

export default CurStudysessions;