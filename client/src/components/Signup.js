import React from 'react'
import { useForm } from 'react-hook-form';
import {Row,Col,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import signuppic from "./images/signup.png";

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onFormSubmit=(userCredObj)=>
  {
    console.log(userCredObj);
    const sendRequest = async ()=>
    {
      const res = await axios.post("http://localhost:5000/api/user/signup",
      {
        name : userCredObj.name,
        email:userCredObj.email,
        password : userCredObj.password
      })
      const data = await res.data;
      return data;

    }
    sendRequest()
    .then(()=>navigate("/login"));
  }

  return (
   
    <div>
      <Row>
          <Col sm={12} md={10} className='mx-auto mt-5 mb-4'>
          <form className='border border-primary p-4  bg-opacity-50 shadow rounded-3' style={{color:'blue'}} onSubmit={handleSubmit(onFormSubmit)} >
                        <Row>
                        <Col xs={12} md={6}><img src={signuppic} alt="" className='h-100 w-100' /></Col>
                        <Col xs={12} md={6}>
                        <div className='m-5'>
                                <p className='fs-3 text-center'>ENROLL THE STUDYPLANNER!</p>
                            </div>
                            <hr />
                             {/* password */}
                             <div className="mb-3">
                                <label htmlFor="name" className='text-center mt-3 mb-1'>Name</label>
                                <input type="name" style={{ borderRadius: '15px' }} id="name" className="form-control  " {...register("name", { required: true })} />
                                {/* validation error msg for name */}
                                {errors.name?.type === 'required' && <p className='text-danger'>*Name required</p>}
                            </div>
                            {/* email */}
                            <div className="mb-3">
                                <label htmlFor="email" className='text-center mt-3 mb-1'>Email</label>
                                <input type="email" style={{ borderRadius: '15px' }} id="email" className="form-control  " {...register("email", { required: true })} />
                                {/* validation error msg for email */}
                                {errors.email?.type === 'required' && <p className='text-danger'>*Email required</p>}
                            </div>
                            {/* password */}
                            <div className="mb-3">
                                <label htmlFor="password" className='mt-3 mb-1 d-block m-auto'>Password</label>
                                <input type="password" style={{ borderRadius: '15px' }} id="password" className="form-control" {...register("password", { required: true, maxLength: 28, minLength: 8})} />
                                {/* validation error msg for password */}
                                {errors.password?.type === 'required' && <p className='text-danger'>*Password required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-danger'>*Min length should be 8</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-danger'>*Max length should be 28</p>}
                            </div>
                            {/* Signup button */}
                            <div className='mb-1 text-center'>
                                <Button type='submit' variant='outline-primary' size="lg">Signup</Button>
                            </div>
                           
                        </Col>
                        </Row>
                        </form>
          </Col>
      </Row>
    </div>
  )
}

export default Signup