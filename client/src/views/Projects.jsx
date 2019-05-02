import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Table,
  Row,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap";

class Tables extends React.Component {

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

    return (
      <>
        <div className="content">
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
                        <th>Title</th>
                        <th>Category</th>
                        <th>Client</th>
                        <th>Rate</th>
                        <th className="text-center">Time Worked</th>
                        <th className="text-center">Time Est</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="clickable-tr" style={{cursor: 'pointer'}} onClick={(e) => this.handleClick(1234, e)}>
                        <td>Create new logo</td>
                        <td>Graphic Design</td>
                        <td>Minerva Hooper</td>
                        <td>$60</td>
                        <td className="text-center">5</td>
                        <td className="text-center">10</td>
                      </tr>
                      <tr className="clickable-tr" style={{cursor: 'pointer'}} onClick={(e) => this.handleClick(1234, e)}>
                        <td>Make website homepage</td>
                        <td>Web Development</td>
                        <td>Minerva Hooper</td>
                        <td>$90</td>
                        <td className="text-center">7</td>
                        <td className="text-center">20</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
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
                                <option className="text-primary">Active Projects</option>
                                <option className="text-primary">All Projects</option>
                                <option className="text-primary">Completed Projects</option>
                                <option className="text-primary">Archived Projects</option>
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
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;