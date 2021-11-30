import { Col, Container, Row, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../index.css";

const FormValidationCity = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return <div className="form_outline">
        <Container className="form_top">
            <Row className="form_header">
                <Col sm={12}>
                    <h2>Add New City Name</h2>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col sm={12}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label className = "City-name-text">City Name :</Form.Label>
                            <input className ="city-validation-form-text-box"
                                {...register("city", {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-z]+$/i
                                })}
                            />
                            {errors?.city?.type === "required" && <p>This field is required</p>}
                            {errors?.city?.type === "maxLength" && (
                                <p>First name cannot exceed 20 characters</p>
                            )}
                            {errors?.city?.type === "pattern" && (
                                <p>Alphabetical characters only</p>
                            )}

                        </Form.Group>
                        <Col sm={12} className="form_button">
                            <Link to="/city">
                                <Button variant="danger" type="submit">Cancel</Button> </Link>
                            <Button variant="success" type="submit">Save</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>

        </Container>
    </div>
}



export default FormValidationCity;