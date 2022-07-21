import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

import seacrIcon from '../../assests/svg/search.svg'
const Header = () => {
    return (
        <div>
          


     
      <Navbar className="bg-background" >
        <Container>
          <Navbar.Brand href="#home" className="logo">LOGO</Navbar.Brand>
          <Nav className="">
      <div className='searchArea'>
    <div className="">
    {/* <Form>
      <Form.Group className="searchBox" controlId="exampleForm.ControlInput1">
     
        <Form.Control type="text" placeholder="name@example.com" />
      </Form.Group>
     
    </Form> */}
    <input className="searchBox" type="text" placeholder='Search by Title or Brand' />
    {/* <img src={seacrIcon} alt="" /> */}
    </div>
    <div>
        <Button className="buttonStyle">Add Product</Button>
    </div>
      </div>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
  
        </div>
    );
};

export default Header;