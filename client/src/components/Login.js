import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { authActions } from '../Store';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginpic from "./images/loginpic.png";
import useButtonLoader from './useButtonLoader';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginButton,isLoading] = useButtonLoader("Login","Logging In...");
  const onFormSubmit = (userCredObj) => {
    const sendRequest = async () => {
      isLoading(true);
      const res = await axios.post("https://studyplanner68.herokuapp.com/api/user/login",
        {
          email: userCredObj.email,
          password: userCredObj.password
        }).catch(err => {
          setCheck(true);
          isLoading(false);
        });

      const data = await res.data;
      // console.log(data);
      return data;

    }
    sendRequest()
      .then((data) => {
       
          localStorage.setItem("userId", data.user._id);
          setCheck(false);
          dispatch(authActions.login());
          isLoading(false);
          navigate("/");
          
      
      })




  }

  return (

    <div>
      <Row>
        <Col sm={12} md={6} className='mx-auto mt-5 mb-4'>
          <form className=' p-4  bg-opacity-50 border-success border shadow rounded-3' style={{ color: '#4c7464' }} onSubmit={handleSubmit(onFormSubmit)} >
            <Row>
              <Col xs={12} md={6}><img src={loginpic} alt='' className='d-block m-auto h-100' /></Col>
              <Col xs={12} md={6}>
                <div className='m-3'>
                  <p className='fs-3 text-center'>EXPERIENCE THE STUDY-PLANNER!</p>
                </div>
                <hr />
                {/* email */}
                <div className="mb-3">
                  <label htmlFor="email" className='text-center mt-3 mb-1'>Email</label>
                  <input type="email" style={{ borderRadius: '15px' }} id="email" className="form-control  " {...register("email", { required: true })} />
                  {/* validation error msg for email */}
                  {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                </div>
                {/* password */}
                <div className="mb-3">
                  <label htmlFor="password" className='mt-3 mb-1 d-block m-auto'>Password</label>
                  <input type="password" style={{ borderRadius: '15px' }} id="password" className="form-control" {...register("password", { required: true, maxLength: 28, minLength: 8 })} />
                  {/* validation error msg for password */}
                  {check &&  <p className='text-danger'>*Invalid Credentials</p>}
                  {errors.password?.type === 'required' && <p className='text-danger'>* Password required</p>}
                  {errors.password?.type === 'minLength' && <p className='text-danger'>* Min length should be 8</p>}
                  {errors.password?.type === 'maxLength' && <p className='text-danger'>* Max length should be 28</p>}
                  
                </div>
               
                {/* login button */}
                <div className='mb-1 text-center'>
                  {/* <button type="submit" className="btn  w-50 mb-1" style={{ borderRadius: '15px', backgroundColor: 'orange', color: '' }}>Login</button> */}
                  <Button type='submit' variant='outline-primary' ref={loginButton} size="lg">Login</Button>
                </div>
                <div className='row mt-4'>
                  <div className='col-6 text-end mt-2'>
                    <p>New User? </p>
                  </div>
                  <div className='col-6 text-start'>
                    {/* <Button href="signup" className='  border-warning border' style={{ borderRadius: '15px', color: 'black' ,backgroundColor:'yellow'}}>SIGNUP</Button> */}
                    <Button href="signup" variant='outline-primary'>Signup</Button>
                  </div>

                </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default Login