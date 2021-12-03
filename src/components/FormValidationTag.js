import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../index.css";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

const FormValidationTag = () => {
  const [name, setName] = useState();
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };
  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="form_outline">
      <Container className="form_top">
        <Row className="form_header">
          <Col sm={12}>
            <h2>Add New Tag Name</h2>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm={12}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label className="City-name-text">Tag Name :</Form.Label>
                <input
                  value={name}
                  onChange={onChange}
                  className="city-validation-form-text-box"
                  {...register("tag", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.tag?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.tag?.type === "maxLength" && (
                  <p>Tag name cannot exceed 20 characters</p>
                )}
                {errors?.tag?.type === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}
              </Form.Group>
              <Row>
                <Col sm={12} className="form_button">
                  <Link to="/tag">
                    {" "}
                    <Button variant="danger" type="submit">
                      Cancel
                    </Button>{" "}
                  </Link>
                  <Button variant="success" type="submit">
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormValidationTag;
