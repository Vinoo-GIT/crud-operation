import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Styles/table.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import { useContext } from "react";

const Tags = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);

  return (
    <Container>
      <div>
        <Link to="/FormValidationTag">
          <Button id="click_btn" className="Add_btn" variant="success">
            Add+
          </Button>{" "}
        </Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Link to={`/EditTag/${user.id}`}>
                  <Button className="edit-tag-btn" variant="warning">
                    Edit
                  </Button>
                </Link>
                <Link to="">
                  <Button onClick={() => removeUser(user.id)} variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Tags;
