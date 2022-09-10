import axios from 'axios';
import React from 'react'
import {Row,Col,Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function AddStudySession() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = (obj)=>
    {
        console.log(obj);
        const sendRequest = async()=>
        {
            const res = await axios.post("http://localhost:5000/api/course/create",
            {
                title:obj.title,
                subject:obj.subject,
                startDate:obj.startDate,
                endDate:obj.endDate,
                capacity:obj.capacity,
                creator:localStorage.getItem("userId")
            })
            .catch(err=>console.log(err))
            const data = res.data;
            return data;
        }
        sendRequest().then(()=>navigate("/studysessions"));
    }
  return (
   
    <div>
    <Row>
        <Col sm={12} md={10} className='mx-auto mt-5 mb-4'>
        <form className='border border-info p-4  bg-opacity-50 shadow rounded-3' style={{color:'skyblue'}} onSubmit={handleSubmit(onFormSubmit)} >
                      <Row>
                      <Col xs={12} md={6}></Col>
                      <Col xs={12} md={6}>
                      <div className='m-5'>
                              <p className='display-6 text-center'>CREATE STUDYSESSION</p>
                          </div>
                          <hr />
                          {/* title */}
                          <div className="mb-3">
                              <label htmlFor="title" className='text-center mt-3 mb-1'>Title</label>
                              <input type="text" style={{ borderRadius: '15px' }} id="title" className="form-control  " {...register("title", { required: true })} />
                              {/* validation error msg for title */}
                              {errors.title?.type === 'required' && <p className='text-danger'>*Title is required</p>}
                          </div>
                          {/* subject */}
                          <div className="mb-3">
                              <label htmlFor="subject" className='mt-3 mb-1 d-block m-auto'>subject</label>
                              <input type="text" style={{ borderRadius: '15px' }} id="subject" className="form-control" {...register("subject", { required: true})} />
                              {/* validation error msg for subject */}
                              {errors.subject?.type === 'required' && <p className='text-danger'>*subject is required</p>}
                          </div>
                          {/* startdata */}
                          <div className="mb-3">
                              <label htmlFor="startDate" className='mt-3 mb-1 d-block m-auto'>START DATE</label>
                              <input type="datetime-local" style={{ borderRadius: '15px' }} id="startDate" className="form-control " {...register("startDate", { required: true})} />
                              {/* validation error msg for startDate */}
                              {errors.startDate?.type === 'required' && <p className='text-danger'>*startDate is required</p>}
                          </div>
                          {/* enddate */}
                          <div className="mb-3">
                              <label htmlFor="endDate" className='mt-3 mb-1 d-block m-auto'>END DATE</label>
                              <input type="datetime-local" style={{ borderRadius: '15px' }} id="endDate" className="form-control " {...register("endDate", { required: true})} />
                              {/* validation error msg for endDate */}
                              {errors.endDate?.type === 'required' && <p className='text-danger'>*endDate is required</p>}
                          </div>
                          
                           {/* capacity */}
                           <div className="mb-3">
                              <label htmlFor="capacity" className='mt-3 mb-1 d-block m-auto'>Capacity</label>
                              <input type="number" style={{ borderRadius: '15px' }} id="capacity" className="form-control" {...register("capacity", { required: true})} />
                              {/* validation error msg for capacity */}
                              {errors.capacity?.type === 'required' && <p className='text-danger'>*capacity is required</p>}
                          </div>
                          {/* submit button */}
                          <div className='mb-1 text-center'>
                              <Button type='submit' variant='outline-info' size="lg">Create</Button>
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