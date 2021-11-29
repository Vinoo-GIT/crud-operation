import { Col, Container, Row, Form, Button } from "react-bootstrap"

const FormValidationTag = () =>{
    return <div>
        <Container className="form_top">
            <Row className="form_header">
                <Col sm ={12}>
                    <h2>Add New Tag Name</h2>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col sm={12}>
                    <Form>
                        <Form.Group className="mb-3">
                        <Form.Label>Tag Name :</Form.Label>
                        <Form.Control type="text" placeholder="Enter New Tag Name" required isInvalid />
                        <Form.Control.Feedback type="invalid">Please Enter the City Name</Form.Control.Feedback>
                        </Form.Group>
                        
                        
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="form_button">
                        <Button variant="danger" type="submit">Cancel</Button>
                        <Button variant="success" type="submit">Save</Button>
                </Col>
            </Row>
        </Container>
    </div>
}

export default FormValidationTag;