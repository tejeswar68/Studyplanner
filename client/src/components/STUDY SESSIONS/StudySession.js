import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudySession({title,subject,startDate,endDate,capacity,isCreator,id,users,flag,reloadStories}) {
    const navigate = useNavigate();
    const handleopen =()=>
    {
        navigate(`/studysessions/${id}`);
    }
    const handleEnroll = async (id)=>
    {
        const res = await axios.put(`http://localhost:5000/api/course/join/${id}`,{
            userId:localStorage.getItem("userId")
        })
       
        const data =   await res.data;
        console.log(data);
         await reloadStories(!flag);
      

        
    }
    // const isenrolled= ()=>
    // {

    // }
    const disabled = ()=>
    {
      if(users.length === capacity)
      return true;

      return false;
    }

    return (
        <Card className=" m-3">
          <Card.Header className='fs-5'>{subject}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <Row>
                <Col>  Capacity : {capacity  } </Col>
                <Col>  Enrolled:{users.length}</Col>
              </Row>
          
            </Card.Text>
            
           {isCreator ?  (<Button onClick={handleopen}  variant="primary">OPEN</Button>) :
           ( (users.some(enrolled_id => enrolled_id === localStorage.getItem("userId")) ) ? (<Button onClick={handleopen} variant="primary">OPEN</Button>) :(<Button onClick={()=>{handleEnroll(id); navigate(`/studysessions/${id}`);}} variant="primary" disabled={disabled()}>ENROLL</Button>))}
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row>
                <Col>START DATE : {startDate}</Col>
                <Col>END DATE : {endDate}</Col>
            </Row>
          </Card.Footer>
        </Card>
      );
}

export default StudySession


