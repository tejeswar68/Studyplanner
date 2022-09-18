import axios from 'axios';
import React from 'react'
import {Row,Col,Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import addsession from '../images/addsession.jpg';
import useButtonLoader from '../useButtonLoader';


function AddStudySession() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[createButton,isLoading] = useButtonLoader("Create","Creating...")
    const onFormSubmit = (obj)=>
    {
        const sendRequest = async()=>
        {
            isLoading(true);
            const res = await axios.post("https://studyplanner68.herokuapp.com/api/course/create",
            {
                title:obj.title,
                subject:obj.subject,
                startDate:obj.startDate,
                startTime:obj.startTime,
                endDate:obj.endDate,
                endTime:obj.endTime,
                capacity:obj.capacity,
                creator:localStorage.getItem("userId")
            })
            .catch(err=>isLoading(false))
            const data = res.data;
            return data;
        }
        sendRequest()
        .then(()=>isLoading(false))
        .then(()=>navigate("/"));
    }
  return (
   
    <div>
    <Row>
        <Col sm={12} md={10} className='mx-auto mt-5 mb-4'>
        <form className=' bg-opacity-0 text-light rounded-3' style={{boxShadow:'10px 10x 10px orange',backgroundColor:'#a17ff5',border:"#a17ff5"}} onSubmit={handleSubmit(onFormSubmit)} >
                      <Row>
                      <Col xs={12} md={6}><img src={addsession} className='w-100' alt="" srcset="" /></Col>
                      <Col xs={12} md={6} className='p-4'>
                      <div>
                              <p className='display-6 text-center m-3'>CREATE-STUDYSESSION</p>
                          </div>
                          <hr />
                          {/* title */}
                          <div className="mb-3">
                              <label htmlFor="title" className='text-center mt-1 mb-1'>TITLE</label>
                              <input type="text" style={{ borderRadius: '15px' }} id="title" className="form-control  " {...register("title", { required: true })} />
                              {/* validation error msg for title */}
                              {errors.title?.type === 'required' && <p className='text-danger'>*Title is required</p>}
                          </div>
                          {/* subject */}
                          <div className="mb-3">
                              <label htmlFor="subject" className='mt-3 mb-1 d-block m-auto'>SUBJECT</label>
                              <input type="text" style={{ borderRadius: '15px' }} id="subject" className="form-control" {...register("subject", { required: true})} />
                              {/* validation error msg for subject */}
                              {errors.subject?.type === 'required' && <p className='text-danger'>*subject is required</p>}
                          </div>
                          <Row>
                            <Col>
                                  {/* startdate */}
                                <div className="mb-3">
                                    <label htmlFor="startDate" className='mt-1 mb-1 d-block m-auto'   placeholder="dd-mm-yyyy">START-DATE</label>
                                    <input type="date" style={{ borderRadius: '15px' }} id="startDate" className="form-control " {...register("startDate", { required: true})} />
                                    {/* validation error msg for startDate */}
                                    {errors.startDate?.type === 'required' && <p className='text-danger'>*startDate is required</p>}
                                 </div>
                          </Col>
                          <Col>
                                  {/* startTime */}
                                <div className="mb-3">
                                    <label htmlFor="startTime" className='mt-1 mb-1 d-block m-auto' >START-TIME</label>
                                    <input type="time" style={{ borderRadius: '15px' }} id="startTime"   className="form-control " {...register("startTime", { required: true})} />
                                    {/* validation error msg for startTime */}
                                    {errors.startTime?.type === 'required' && <p className='text-danger'>*startTime is required</p>}
                                 </div>
                          </Col>
                          </Row>
                        
                          <Row>
                            <Col>
                                  {/* enddate */}
                                <div className="mb-3">
                                    <label htmlFor="endDate" className='mt-1 mb-1 d-block m-auto'>END-DATE</label>
                                    <input type="date" style={{ borderRadius: '15px' }} id="endDate" className="form-control " {...register("endDate", { required: true})} />
                                    {/* validation error msg for endDate */}
                                    {errors.endDate?.type === 'required' && <p className='text-danger'>*endDate is required</p>}
                                 </div>
                          </Col>
                          <Col>
                                  {/* endTime */}
                                <div className="mb-3">
                                    <label htmlFor="endTime" className='mt-1 mb-1 d-block m-auto'>END-TIME</label>
                                    <input type="time" style={{ borderRadius: '15px' }} id="endTime" className="form-control " {...register("endTime", { required: true})} />
                                    {/* validation error msg for endTime */}
                                    {errors.endTime?.type === 'required' && <p className='text-danger'>*endTime is required</p>}
                                 </div>
                          </Col>
                          </Row>
                        
                          
                           {/* capacity */}
                           <div className="mb-3">
                              <label htmlFor="capacity" className='mt-1 mb-1 d-block m-auto'>Capacity</label>
                              <input type="number" style={{ borderRadius: '15px' }} id="capacity" className="form-control" {...register("capacity", { required: true})} />
                              {/* validation error msg for capacity */}
                              {errors.capacity?.type === 'required' && <p className='text-danger'>*capacity is required</p>}
                          </div>
                          {/* submit button */}
                          <div className='mb-1 text-center'>
                              <Button type='submit' ref={createButton} variant='primary' size="lg">Create</Button>
                          </div>

                         
                      </Col>
                      </Row>
                      </form>
        </Col>
    </Row>
  </div>
  )
}

export default AddStudySession