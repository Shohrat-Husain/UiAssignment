import React from "react";
import FirstProduct from "./FirstProduct";
import SecondProduct from "./SecondProduct";
import ThirdProduct from "./ThirdProduct";
import {Navbar, Container, Offcanvas, Nav, Form, FormControl, Button} from "react-bootstrap"

function Home() {
  return (
    <div className="home-mainContainer">
<Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#"><img style={{height: "50px"}} src='https://www.techasoft.com/uploads/ekart_logo.png' alt='logo'></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" style={{backgroundColor:"grey"}} />
  <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Ekart</Offcanvas.Title>
      </Offcanvas.Header>
      <hr/>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>



      <div>    
      <Form className="d-flex" style={{marginLeft:"10px", marginTop:"10px"}}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="warning" style={{marginRight:"10px"}}>Search</Button>
        </Form>
      </div>
      <FirstProduct name={"Querty Watch"} type={"Leather strap"} rate={" Rs. 12,000"}/>
      <hr/>
      <SecondProduct name={"Blue Yoga mat"} type={"Lorem ipsum"} rate={" Rs. 1000"}/>
      <hr/>
      <ThirdProduct name={"Anchor Bracelet"} type={"Lorem ipsum"} rate={" Rs. 500"}/>     
      <hr/> 
      <div className="footer">
        <h3>Subtotal Rs. 13,500</h3>
        
    </div>
     <div style={{display:"flex", justifyContent:"center", paddingBottom:"40px"}}> 
       <button className="buy-button">Proceed to buy (3 items)</button> 
     </div>
    </div>
  );
}

export default Home;
