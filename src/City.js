import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./Styles/table.css";

const City = () => {
  return (
    <Container>
      <div>
        <Link to="/FormValidationCity">
          <Button id="add_click_btn" className="Add_btn" variant="success">
            Add+
          </Button>{" "}
        </Link>
      </div>

      {/* "/FormValidationCity" */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.no</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Coimbatore</td>
            <td>
              {" "}
              <Button variant="warning">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hosur</td>
            <td>
              {" "}
              <Button variant="warning">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Salem</td>
            <td>
              {" "}
              <Button variant="warning">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Chennai</td>
            <td>
              {" "}
              <Button variant="warning">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Bangalore</td>
            <td>
              {" "}
              <Button variant="warning">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default City;
