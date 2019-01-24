import React from "react";
import { Form,  FormGroup, Col, FormControl, Button, ControlLabel  } from 'react-bootstrap';
import styled from 'styled-components';
import '../App.css';

/* Component */

const Input = styled(FormControl)`
    width: 600px;
`;


const Login = props => {
    return (
        
            <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Email
                </Col>
                <Col sm={10}>
                <Input type="email" placeholder="Email" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                Password
                </Col>
                <Col sm={10}>
                <Input type="password" placeholder="Password" />
                </Col>
            </FormGroup>


            <FormGroup>
                <Col smOffset={2} sm={10}>
                <Button type="submit">Sign in</Button>
                </Col>
            </FormGroup>
            </Form>
      
    );
  };
  
  export default Login;