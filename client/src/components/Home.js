import React from 'react'
import homeimage2 from "./images/home2.jpg";
import {Row,Col,Button} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import homeimage1 from "./images/homeimage1.jpeg";
function Home() {
  
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (

    <div>
    
      <Row>
     <Col xs={12} lg ={6}>
     <div  className=' fs-6 ' style={{color:"#324e8f"}}>
     <h1  style={{fontSize:'8vw'}} className='m-5'>S<span className='stroke-text'>TUDY</span></h1>
     <h1  style={{fontSize:'8vw'}} className='m-5'><span className='stroke-text'>P</span>LANNER</h1>
     
     </div>
     </Col>
     <Col xs={12} lg={6}> <img src={homeimage2} alt=""  className='w-100'/></Col>
     </Row>  
     <h1 className='text-center m-5' style={{color:"#324e8f"}}> PLANNED STUDY SESSIONS MAKES YOU UNSTOPABBLE!</h1>
<h1 className='stroke-text text-center fs-1 mt-5'  >STUDY SESSIONS!</h1>
<hr size={10} className=' w-50 m-auto mb-5 ' style={{color : '#a17ff5',height:'10px',borderBottom:'2px'}} />
<Row> 
<Col xs={12} md={6}> <img src={homeimage1} className='mx-auto d-block w-100' alt="" /></Col>
<Col xs={12} md={6}>
<h3 className=' text-center mt-4  font-weight-bold fs-2' style={{color : '#a17ff5'}}>FEATURES</h3>
 <hr className='w-75 m-auto  ' />
 <div className='text-center m-3  fs-4'> 
 <p>NO RESTRICTION ON  COUNT OF SESSIONS.</p>
  <p>YOU CAN MENTION START-DATE AND END-DATE OF STUDY SESSIONS.</p>
  <p>YOU CAN ENROLL INTO SESSION IF CAPACITY IS NOT FULL.</p>
  <p>SORT THE SESSIONS ON THE BASIS OF UPCOMING DATES.</p>
  <p></p>
  {!isLoggedIn && <Button href='login'  style={{backgroundColor:'#a17ff5',borderColor:'white'}} size='lg' className=' m-3 w-50 mx-auto d-block'>CREATE SESSION</Button>}
  {isLoggedIn && <Button href='studysessions' style={{backgroundColor:'#a17ff5',borderColor:'white'}}  size='lg' className='m-3 w-50 mx-auto d-block'>SESSIONS</Button>}
 </div>
 </Col >
 </Row>

    </div>
  )
}

export default Home;