import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';



const Dashboard = () => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name")
    const [list, setList] = useState([]);

    //function to fetch data from api
    const getData =  () => {
           axios.get('https://textile.torcdeveloper.com/api/v1/dashboard/data', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log(res);
            setList(res.data.data)
            console.log(list)
        })
        .catch((error) => {
            console.error(error);
        })
    }
    useEffect(()=>{
        getData()

      }, [])
  return ( 
    <div className='main'>
        <div className='mt-5'>
<h1 className='text-center' style={{color:"grey"}}>Welcome {name}</h1>



<Container className='mt-5  border' style={{backgroundColor:"#fff"}} >
      <Row className='ms-5 mt-5'>
      <Col className='mb-5 rounded' style={{backgroundColor:"#fff",  boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.4)',
         }} sm={4}>
      <h2 className='mt-3'>Job Card</h2>
      <h6>{list.role_display_name}</h6>
      
      <h6>Total Inventory - {list.total_inventory}</h6>
    <h6>Total Order -{list.total_order}</h6>
    <h6>Conformed Order -{list.confirmed_orders}</h6>
      </Col>
      
      </Row>
      </Container>


        </div>
    </div>
  )
}

export default Dashboard