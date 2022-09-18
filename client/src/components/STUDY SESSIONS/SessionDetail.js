import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import detailpng from "../images/detailpng.jpeg"
// import { Row, Col } from 'react-bootstrap'

function SessionDetail() {
  const id = useParams().id;
  console.log(id);
  const [course, setCourse] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`https://studyplanner68.herokuapp.com/api/course/${id}`)
      .catch(err => console.log(err))
    const data = res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then(data => setCourse(data.course));
  })
  console.log(course);
  return (
    <div className='display-6' style={{ color: "#324e8f" }}>
      <img src={detailpng} alt="" className='w-100' />
      {/* <p className='text-center'>{course.title}</p> */}
      <hr />
      {/* <Row>
        <Col xs={12} md={6}></Col>
        <Col xs={12} md={6}>
          <p className='m-5'> CAPACITY : {course.capacity}</p>
          <p className='m-5' >SUBJECT : {course.subject}</p>
          <p className='m-5'>START DATE-TIME :{course.startDate}  {course.startTime}</p>
          <p className='m-5'>END DATE-TIME :{course.endDate}  {course.endTime}</p>
        </Col>
      </Row> */}
      <h1>hi</h1>

    </div>
  )
}

export default SessionDetail