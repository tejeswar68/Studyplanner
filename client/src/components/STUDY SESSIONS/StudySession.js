import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';


function StudySession({ key, title, subject, startDate, startTime, endDate, endTime, capacity, isCreator, id, users, flag, reloadStories }) {
  const navigate = useNavigate();
  const handleopen = () => {
    navigate(`/studysessions/${id}`);
  }
  const handleEnroll = async (id) => {
    const res = await axios.put(`https://studyplanner68.herokuapp.com/api/course/join/${id}`, {
      userId: localStorage.getItem("userId")
    })

    const data = await res.data;
    console.log(data);
    await reloadStories(!flag);



  }

  // const isenrolled= ()=>
  // {

  // }
  var date = new Date().toDateString();
  date = moment(date).format('YYYY-MM-DD');
 console.log(date)
 var time = new Date().toUTCString();
 time = moment(time).format('HH:mm');
 console.log(time)
  const capdisabled = () => {
    if (users.length === capacity)
      return true;
  return false;
  }
  const futdisabled = () =>
  {
    if  (startDate>date)
    return true;

    return false;

  }
  const isEnrolled = ()=>
  {
    if(users.some(enrolled_id => enrolled_id === localStorage.getItem("userId")))
      return true;
      return false;
  }


  return (
    <Card className=" m-3 text-light" style={{ backgroundColor: "#a17ff5" }}>
      <Card.Header >
        <Row >
          <Col xs={12} md={12}> <h4>{subject}</h4></Col>
          <hr/>
        </Row>
        <Row className='flex'>
        <Col xs={3} >{isCreator  && <Badge pill bg="warning" text="dark" className=' d-block mx-auto'>Creator</Badge>}</Col>
          <Col xs={3} >{!isCreator&& isEnrolled  && <Badge pill bg="warning" text="dark" className=' d-block mx-auto'>Member</Badge>}</Col>
          <Col xs={3} >{!isEnrolled() && capdisabled() &&<Badge pill bg="warning" text="dark" className=' d-block mx-auto'>Full</Badge>}</Col>
          <Col xs={3} >{isEnrolled() && futdisabled() &&<Badge pill bg="warning" text="dark" className=' d-block mx-auto'>Upcmg</Badge>}</Col>
          <Col xs={12} >{!isEnrolled() && !futdisabled() && !capdisabled()&&<Badge pill bg="warning" text="dark" className=' d-block mx-auto'>Not Eligible</Badge>}</Col>
        </Row>
      </Card.Header>

      <Card.Body>
        <Card.Title className='m-2' >{title}</Card.Title>
        <hr />
        <Card.Text>
          <Row>
            <Col className='text-center' >  <h5>Capacity : <Badge bg="secondary">{capacity}</Badge></h5>  </Col>
            <Col className='text-center'> <h5>Enrolled : <Badge bg="secondary">{users.length}</Badge></h5>  </Col>
           
          </Row>

        </Card.Text>

      
        {isCreator && <Button onClick={handleopen} variant="primary" className='d-grid w-50 m-auto' disabled={futdisabled()}>OPEN</Button>}
        {!isCreator && isEnrolled() && <Button onClick={handleopen} variant="primary" className='d-grid w-50 m-auto' disabled={futdisabled()}>OPEN</Button> }
        {!isCreator && !isEnrolled() &&<Button onClick={() => { handleEnroll(id); navigate(`/studysessions/${id}`); }} variant="primary" disabled={capdisabled()} className='d-grid w-50 m-auto'>ENROLL</Button>} 
     
      </Card.Body>
      <Card.Footer className="text-light">
        <Row>
          <Col xs={12} md={6}>START DATE : {startDate}</Col>
          <Col xs={12} md={6}>START TIME : {startTime} </Col>
          <Col xs={12} md={6}>END DATE : {endDate}</Col>
          <Col xs={12} md={6}>END TIME : {endTime}</Col>
          
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default StudySession


