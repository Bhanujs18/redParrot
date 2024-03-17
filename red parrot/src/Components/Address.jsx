import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

function Address({products , setPaid}) {

const navigate = useNavigate();
  const price = products.reduce((acc , cur)=>acc+cur.price , 0)

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

const orderplaced =  () => {

  try{
    axios.post("http://localhost:3000/api/v1/order/createOrder" , {
     items : products,
     price : price,
     status : "Pending"
  }).then(()=>navigate("/profile")).catch(()=>navigate("/orderNotPlaced"))
   }
catch(err){
  console.log(err)
}
}

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='address'>
      <div className='shippingcon'><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/ffffff/in-transit--v1.png" alt="in-transit--v1"/><p> &nbsp;Shipping Details</p> </div>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback style={{color:'white'}}>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback style={{color:'white'}}>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid" style={{color:'white'}}>
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid" style={{color:'white'}}>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid" style={{color:'white'}}>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid" style={{color:'white'}}>
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3"   style={{background:'white' , padding:'0.2rem' , borderRadius:'5px'}}>
        <Form.Check 
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        
        />
      </Form.Group>
      <Button type="submit" style={{border:'none',background:'#EEEEEE' , color:'#ce3345'}} onClick={()=>orderplaced()}>Pay $349</Button>
    </Form>
  );
}

export default Address;