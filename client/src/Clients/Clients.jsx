import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Nav } from '../_components/Nav/Nav';
import { Footer } from '../_components/Footer'
import { userActions } from '../_actions';

import {
    Card,
    CardHeader,
    CardBody,
    Table,
    Row,
    FormGroup,
    Label,
    Input,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";

class Clients extends React.Component {
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

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


    render() {
        const { user, users } = this.props;
        return (

            

            <Col Col md="12">
            <Row>
            
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Row>
                <Row>
                    <Col md="12">
                    <Card>
                        <CardHeader>
                        <Row className="justify-content-between">
                            <Col sm = "12" md="4" lg="3">
                                <FormGroup>
                                    <Label for="exampleSelect">Select</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option className="text-primary">All Clients</option>
                                        <option className="text-primary">Active Clients</option>
                                        <option className="text-primary">Past Clients</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm = "12" md="5" lg="4">
                                <FormGroup>
                                    <Label for="searchFunction">Search</Label>
                                    <Input type="text" className="input" onChange={this.handleSearch} />
                                </FormGroup>
                            </Col>
                        </Row>
                        </CardHeader>
                        <CardBody>
                        <Table className="tablesorter" hover responsive>
                            <thead className="text-primary">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th className="text-center">Value</th>
                                <th className="text-center">Active</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="clickable-tr" style={{cursor: 'pointer'}} onClick={(e) => this.handleClick(1234, e)}>
                                <td>Dakota Rice</td>
                                <td>rice@hotmail.com</td>
                                <td>619-223-5553</td>
                                <td className="text-center">$36,738</td>
                                <td className="text-center">Yes</td>
                            </tr>
                            <tr className="clickable-tr" style={{cursor: 'pointer'}} onClick={(e) => this.handleClick(1235, e)}>
                                <td>Minerva Hooper</td>
                                <td>minerva.hooper@gmail.com</td>
                                <td>858-778-3343</td>
                                <td className="text-center">$23,789</td>
                                <td className="text-center">No</td>
                            </tr>
                            </tbody>
                        </Table>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
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

const connectedClient = connect(mapStateToProps)(Clients);
export { connectedClient as Clients };