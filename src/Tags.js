import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import './Styles/table.css';
import { Link } from 'react-router-dom';

const Tags = () =>{
    return<Container>
    <div>
      <Link to="/FormValidationTag">
      <Button id ="add_click_btn" className = "Add_btn" variant="success">Add+</Button>
      {' '}
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
      <tbody>
        <tr>
          <td>1</td>
          <td>Kia</td>
          <td> <Button variant="warning">Edit</Button>{' '}
      <Button variant="danger">Delete</Button></td>
         
        </tr>
        <tr>
          <td>2</td>
          <td>Ford</td>
          <td> <Button variant="warning">Edit</Button>{' '}
      <Button variant="danger">Delete</Button></td>
          
        </tr>
        <tr>
          <td>3</td>
          <td>Honda</td>
          <td> <Button variant="warning">Edit</Button>{' '}
      <Button variant="danger">Delete</Button></td>
          
        </tr>
        <tr>
          <td>4</td>
          <td>Hyndai</td>
          <td> <Button variant="warning">Edit</Button>{' '}
      <Button variant="danger">Delete</Button></td>
          
        </tr>
        <tr>
          <td>5</td>
          <td>Tata</td>
          <td> <Button variant="warning">Edit</Button>{' '}
      <Button variant="danger">Delete</Button></td>
          
        </tr>
      </tbody>
    </Table>
    </Container>
    
    };

  
  export default Tags;