import  {Navbar,Container}  from "react-bootstrap";

const Header = () => {
  return <div>
       <Navbar sticky="top" bg="dark" variant="dark">
         <Navbar.Collapse />
           <Navbar.Toggle />
    <Container fluid>
      <Navbar.Brand className="navbar" href="">React CRUD</Navbar.Brand>
    </Container>
  </Navbar>
       
  </div>
};

export default Header;