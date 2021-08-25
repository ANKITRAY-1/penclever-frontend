import React from 'react';
/*import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';*/
import logo from '../img/logo1.png'

export const Topnav = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} style={{width:"300px",height:"60px",padding:"0px",}} />
        <div className="header-right"><a href="#.html">Contribute a article today!</a></div>

        <div className="topnavx" id="myTopnavx">
          <a className="activex" href="home.html">Home</a>

          <a href="Science.html">SCIENCE</a>
          <a href="Technology.html">TECHNOLOGY</a>
          <a href="Nature.html">NATURE</a>
          <a href="People.html">PEOPLE</a>
          <a href="History.html">HISTORY</a>
          <a href="Defence.html">DEFENCE</a>
          <a href="Politics.html">POLITICS</a>
          <a href="Sports.html">SPORTS</a>

          <div className="dropdownx">
            <button className="dropbtnx">MORE</button>
            <div className="dropdownx-contentx">
              <a href="Miscellaneous.html">MORE</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

        </div>

      </div>


      {/*<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav classNameName="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Form classNameName="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        classNameName="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
      </Nav>
    </Navbar.Collapse>
  </Container>
    </Navbar>*/}
    </div>
  )
}
