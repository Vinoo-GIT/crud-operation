import { Col, Container, Row, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const FormValidationCity = () =>{
    return <div>
        <Container className="form_top">
            <Row className="form_header">
                <Col sm ={12}>
                    <h2>Add New City Name</h2>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col sm={12}>
                    <Form>
                        <Form.Group className="mb-3">
                        <Form.Label>City Name :</Form.Label>
                        <Form.Control type="text" placeholder="Enter New City Name " required isInvalid />
                        <Form.Control.Feedback type="invalid">Please Enter the City Name</Form.Control.Feedback>
    
  
                        </Form.Group>
                        
                        
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="form_button">
                <Link to="/city">
                      <Button variant="danger" type="submit">Cancel</Button> </Link>
                        <Button variant="success" type="submit">Save</Button>
                </Col>
            </Row>
        </Container>
    </div>
}

export default FormValidationCity;