import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    // function to fetch data from api
    const login = () => {
        console.warn(email,password)
        axios.post('https://textile.torcdeveloper.com/api/v1/login', {
            "email":email,
            "password":password
        })
        .then((response) => {
            localStorage.setItem("userData",JSON.stringify(response))
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("name",response.data.user.name)
            navigate("/dashboard")
            
        })
        .catch((err) => {
            console.log(err);
            alert('Check credentials')
        })
    }
  return (
    <div className='main'>
        <div>
     <Container className='mt-5  border' style={{backgroundColor:"#fff"}} >
      <Row className='ms-5 mt-5'>
      <Col className='mb-5 rounded' style={{backgroundColor:"#fff",  boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.4)',
         }} sm={4}>
      <h2 className='mt-3'>Login</h2>
       <div className='mb-4' style={{fontSize:"12px", color:"grey"}}>Doesent have an account<a className='ms-1' href='#' style={{fontSize:"13px"}}> Signup</a></div>
       <Form>
       <label>Email address</label>
        <input type="email" className='form-control mt-2' placeholder='email' required onChange={(e)=>setEmail(e.target.value)}/>
       
        <div className='d-flex justify-content-between'>Password<a href='#' style={{fontSize:"13px"}}>forgot password</a></div>
        <input type="password" className='form-control mt-2' placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
        <label style={{fontSize:"13px", color:"grey"}}>
            <input type="checkbox" /> 
            Remember me
        </label>
        <br />
        <Button variant="primary" size="s" className='form-control mb-3' onClick={login}>
          Log in
        </Button>
        </Form>
      </Col>
        <Col className='ms-2' style={{}} sm={7}>
            <img src="https://i.ibb.co/znp2kdR/icon.png" alt="employee" width="100%" />
        </Col>
      </Row>
      </Container>
      </div>
   
    </div>
  )
}

export default Login