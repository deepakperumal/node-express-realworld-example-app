import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Register extends Component {

constructor(props)
{
  super(props)
  this.state = {
    username: '',
    email: '',
    company: '',
    password: '',
    access: '1'
  }
this.handleChange = this.handleChange.bind(this)
this.handleForm   = this.handleForm.bind(this)
  
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
  
  
}

handleForm = (e) =>{
  e.preventDefault()
  fetch('http://localhost:8000/registration', {
  method: "POST",
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(this.state)
})
.then((response) => response.json())
.then((result) => {
  console.log(result)
})
  console.log(JSON.stringify(this.state))
}
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" name="username"  onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" name="email"  onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-building "></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Company Name" name="company"  onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>
                    <Button color="success" block onClick={this.handleForm}>Create Account</Button>
                  </Form>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
