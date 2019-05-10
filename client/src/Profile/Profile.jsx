import React from "react";

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  CustomInput,
  Row,
  Col
} from "reactstrap";

class Profile extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }
    
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }

    render() {
        const { user, users } = this.props;
        return (



        <Col>
        <div className = "container">
          <Row>
            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <h5 className="title">Edit Profile</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>First Name</label>
                            <Input
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>Last Name</label>
                            <Input
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="4">
                        <FormGroup>
                            <label htmlFor="exampleInputEmail1">
                              Email Address
                            </label>
                            <Input placeholder="mike@email.com" type="email" />
                          </FormGroup>
                        </Col>
  
                        <Col className="pl-md-1" md="4">
                          <FormGroup>
                            <label htmlFor="exampleInputEmail2">
                              Alt Email
                            </label>
                            <Input placeholder="optional@email.com" type="email" />
                          </FormGroup>
                        </Col>
  
                        <Col className="px-md-1" md="4">
                          <FormGroup>
                            <label>Phone Number</label>
                            <Input
                              placeholder="###-###-####"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Address</label>
                            <Input
                              placeholder="123 Main Street"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="4">
                          <FormGroup>
                            <label>City</label>
                            <Input
                              placeholder="Sunnywood"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="4">
                          <FormGroup>
                            <label>State</label>
                            <Input
                              placeholder="CA"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="4">
                          <FormGroup>
                            <label>Postal Code</label>
                            <Input placeholder="ZIP Code" type="number" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Title</label>
                          <Input
                            placeholder="Graphic and Web Designer"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label for="exampleSelect">Time Zone</label>
                          <Input type="select" name="select" id="exampleSelect">
                            <option className="text-primary">Eastern</option>
                            <option className="text-primary">Central</option>
                            <option className="text-primary">Mountain</option>
                            <option className="text-primary">Pacific</option>
                          </Input>
                        </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="8">
                        <FormGroup>
                            <label for="exampleCustomFileBrowser">Photo</label>
                            <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" className="text-primary"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="8">
                        
                          <FormGroup>
                            <label>About Me</label>
                            <Input
                              cols="80"
                              placeholder="Here you can describe yourself professionally and personally."
                              rows="4"
                              type="textarea"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                      Save
                    </Button>
                    <Button className="btn float-right" type="submit">
                      Deactive Account
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Row>
          </div>
        </Col>         
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedProfile = connect(mapStateToProps)(Profile);
export { connectedProfile as Profile };