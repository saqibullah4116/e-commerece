import React from 'react'
import {Button, Container, Form, Navbar} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  return (
    <>
    <Navbar bg='dark' variant='dark' style={{height:80}}>
        <Container>
        <Navbar.Brand href="#home">Inertia Store 🌀</Navbar.Brand>
          <h1>Hello</h1>
          <Form className="d-flex">
            <Form.Control
            style={{width:300}}
              type="search"
              placeholder="Search"
              className="m-auto "
              aria-label="Search"
            />
            <Button className='m-2' variant="outline-warning">Search</Button>
          </Form>
          <Button className='m-2' variant="outline-warning" onClick={()=>{navigate("/purchase");}}>Purchased Porduct</Button>
          <Button className='m-2' variant="outline-warning" onClick={()=>{navigate("/");}}>All Product</Button>
        </Container>
    </Navbar>
    </>
  )
}

export default Header