import  {Navbar,Container}  from "react-bootstrap";

const Header = () => {
  return <div>
       <Navbar fixed="top" bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand className="navbar" href="">React CRUD</Navbar.Brand>
    </Container>
  </Navbar>
       
  </div>
};

export default Header;