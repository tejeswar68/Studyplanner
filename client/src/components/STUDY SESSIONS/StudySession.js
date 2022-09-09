import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudySession({title,subject,startDate,endDate,capacity,isCreator,id}) {
    const navigate = useNavigate();
    const handleopen =()=>
    {
        navigate(`/studysessions/${id}`);
    }
    const handleEnroll = async (id)=>
    {
        const res = await axios.put(`http://studyplanner68.herokuapp.com/api/course/join/${id}`,{
            userId:localStorage.getItem("userId")
        })
        const data = res.data;
        console.log(data);
        return data;

        
    }

    return (
        <Card className=" m-3">
          <Card.Header>{subject}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            CAPACITY:{capacity  }
            </Card.Text>
           {isCreator && <Button onClick={handleopen}  variant="primary">OPEN</Button>}
           {!isCreator && <Button onClick={()=>{handleEnroll(id); navigate(`/studysessions/${id}`);}} variant="primary">ENROLL</Button>}
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


