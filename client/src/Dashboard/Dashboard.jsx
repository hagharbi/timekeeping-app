import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import {
    Badge,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Row,
    FormGroup,
    Label,
    Input,
    Col
  } from "reactstrap";

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    handleClick = (id, e) => {
        e.preventDefault();
        console.log(id);
        window.location = "http://localhost:3000/admin/user-profile"
    }

    handleSearch = (e) => {
        let currentList = ["Dakota", "Rice", "Minerva", "Hooper"];
            // Variable to hold the filtered list before putting into state
        let newList = [];

            // If the search bar isn't empty
        //if (e.target.value !== "") {
                // Assign the original list to currentList
        //currentList = this.props.items;

                // Use .filter() to determine which items should be displayed
                // based on the search terms
        newList = currentList.filter(item => {
                    // change current item to lowercase
            const lc = item.toLowerCase();
                    // change search term to lowercase
            const filter = e.target.value.toLowerCase();
                    // check to see if the current list item includes the search term
                    // If it does, it will be added to newList. Using lowercase eliminates
                    // issues with capitalization in search terms and search content
            console.log(lc)
            console.log(filter)
            console.log(lc.includes(filter))
            return lc.includes(filter);
        });
        //} else {
                // If the search bar is empty, set newList to original task list
        //newList = this.props.items;
        //}
            // Set the filtered state based on what our rules added to newList
        //this.setState({
        //filtered: newList
        //});
    }


    render() {
        const { user, users } = this.props;
        return (
            <Col>

            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>Welcome to your dashboard</p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <p>
                    <Link to="/clients">Clients</Link>
                </p>
                <p>
                    <Link to="/profile">Profile</Link>
                </p>
            </div>
        <div className = "container">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <Row className="justify-content-between">
                    <Col sm = "12" md="4" lg="3">
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option className="text-primary">Active Projects</option>
                                <option className="text-primary">All Projects</option>
                                <option className="text-primary">Completed Projects</option>
                                <option className="text-primary">Archived Projects</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col className = "col-md-3 col-lg-5"></Col>
                    <Col sm = "12" md="5" lg="4">
                        <FormGroup>
                            <Label for="searchFunction">Search</Label>
                            <Input type="text" className="input" onChange={this.handleSearch} />
                        </FormGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                  <Col sm = "12" md="6" lg="4">
                    <Card>
                        <CardHeader>
                            <Badge>Graphic Design</Badge>
                            <CardTitle tag="h3"><a href="http://www.npr.com">Create a new logo</a></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>Client: <a href="http://www.npr.com">Minerva Hooper</a></CardText>
                            <CardText>Description: Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <hr></hr>
                            <div><p>Insert progress bar</p></div>
                            <hr></hr>
                            <Row>
                                <Col sm = "12" md="6">
                                <CardText>Status: In Progress</CardText>
                                </Col>
                                <Col sm = "12" md="6">
                                <CardText>Due: 05/21/2019</CardText>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                  </Col>
                  <Col sm = "12" md="6" lg="4">
                    <Card>
                        <CardHeader>
                            <Badge>Web Development</Badge>
                            <CardTitle tag="h3"><a href="http://www.npr.com">Build a new home page</a></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>Client: <a href="http://www.npr.com">Minerva Hooper</a></CardText>
                            <CardText>Description: Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <hr></hr>
                            <div><p>Insert progress bar</p></div>
                            <hr></hr>
                            <Row>
                                <Col sm = "12" md="6">
                                <CardText>Status: Completed</CardText>
                                </Col>
                                <Col sm = "12" md="6">
                                <CardText>Due: 05/21/2019</CardText>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                  </Col>
                  <Col sm = "12" md="6" lg="4">
                    <Card body outline color="primary">
                        <CardHeader>
                            <Badge>Web Development</Badge>
                            <CardTitle tag="h3"><a href="http://www.npr.com">Build a new home page</a></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>Client: <a href="http://www.npr.com">Minerva Hooper</a></CardText>
                            <CardText>Description: Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <hr></hr>
                            <div><p>Insert progress bar</p></div>
                            <hr></hr>
                            <Row>
                                <Col sm = "12" md="6">
                                <CardText>Status: Completed</CardText>
                                </Col>
                                <Col sm = "12" md="6">
                                <CardText>Due: 05/21/2019</CardText>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
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

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };