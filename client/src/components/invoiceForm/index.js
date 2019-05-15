import React from "react";
// import ReactDOM from "react-dom";
import ReactToPrint from "react-to-print";

import Row from "./Row/index";


class Invoices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      headings: [
        { centered: false, id: "tHead1", text: "ID" },
        { centered: false, id: "tHead2", text: "Description" },
        { centered: true, id: "tHead3", text: "Hours" },
        { centered: false, id: "tHead4", text: "Rate" },
        { centered: false, id: "tHead5", text: "Total" }
      ],
      items: [],
      client: {
        companyLogo: null,
        company: "",
        fullName: "",
        website: "",
        companyAddress: "",
        city: "",
        country: "",
        phone: "",
        email: "",
        clientCompany: "",
        clientName: "",
        cleintAddress: "",
        clientCity: "",
        clientCountry: "",
        invoiceDate: undefined,
        invoiceDueDate: undefined,
        invoiceNum: ""
      }
    };
  }

  // handle file upload (logo)
  handleFileUpload = e => {
    const file = e.target.files[0];
    this.setState(prevState => ({
      text: {
        ...prevState.text,
        companyLogo: URL.createObjectURL(file)
      }
    }));
    //Or this
    // e.persist();
    // this.setState(prevState => ({
    //   text: {
    //     ...prevState.text,
    //     companyLogo: URL.createObjectURL(e.target.files[0])
    //   }
    // }));
  };

  //Add default Image
  addDefaultSrc = ev => {
    ev.target.src = "http://schutz/uploads/default-logo.png";
  };

  // Handle Invoice Date
  handleDayChange = day => {
    this.setState(prevState => ({
      text: {
        ...prevState.text,
        invoiceDate: day
      }
    }));
  };

  // Update Table Headings
  handleOnChange = e => {
    const { name: id, value: text } = e.target;
    this.setState(({ headings }) => ({
      headings: headings.map(heading =>
        heading.id === id ? { ...heading, text } : heading
      )
    }));
  };

  // Add new item to the Items list
  handleOnClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      items: [
        ...prevState.items,
        { id: this.state.count, description: "", hours: "", rate: "" }
      ]
    }));
  };

  // Update Item
  handleItemUpdate = (e, id) => {
    const { name, value } = e.target;
    const { items } = this.state;

    const findItem = items.find(item => item.id === id);

    this.setState(({ items }) => ({
      items: items.map(item =>
        item.id === findItem.id ? { ...item, [name]: value } : item
      )
    }));
  };

  // Remove item from Items list
  handleRemoveItem = id => {
    const { items } = this.state;
    const removeIndex = items.findIndex(item => item.id === id);
    const updatedItems = [
      ...items.slice(0, removeIndex),
      ...items.slice(removeIndex + 1)
    ];

    this.setState({ items: updatedItems, count: this.state.count - 1 });
  };

  //handle company and cliend info change
  handleOnChangeClientData = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      text: {
        ...prevState.text,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <div class="container" id="invoiceContainer">
        <div className="wrapper">
          <div className="print-container">
            <ReactToPrint
              trigger={() => (
                <a
                  href="#"
                  alt="print button"
                  className="print-btn"
                  id="print-btn"
                >
                  Print Invoice!
                </a>
              )}
              content={() => this.componentRef}
            />
          </div>
          <div className="logo-container">
          <br /> <br />
            Click to + logo
            <br />
              150px
       
          <input
            type="file"
            className="upload-button"
            onChange={this.handleFileUpload}
            accept="image/*"
          />
          <img
            src={this.state.client.companyLogo}
            crossOrigin="anonymous"
            alt=""
            onError={this.addDefaultSrc}
          />
        </div>
          <div className="container" id="mainBopdyInvoice" ref={el => (this.componentRef = el)}>
            <div className="text-container">
              <div className="text left" id="text-left">
                <h2 className="invoice-title" style={{ pointerEvents: "none", color: "#777777" }}>INVOICE
                </h2>
                <div className="company-info">
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="company"
                      width="100%"
                      placeholder="Your Company*"
                      value={this.state.client.title}
                      onChange={this.handleOnChangeClientData}
                      className="company-name"
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="fullName"
                      width="100%"
                      placeholder="Your First and Last Name*"
                      value={this.state.client.firstName}
                      onChange={this.handleOnChangeClientData}
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="email"
                      width="100%"
                      placeholder="your@email.com*"
                      value={this.state.client.email}
                      onChange={this.handleOnChangeClientData}
                    />
                  </div>

                  <div className="company-input-container">
                    <input
                      type="text"
                      name="companyAddress"
                      width="100%"
                      placeholder="1234 the Addr."
                      value={this.state.client.companyAddress}
                      onChange={this.handleOnChangeClientData}
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="city"
                      width="100%"
                      placeholder="City, State ZIP"
                      value={this.state.client.city}
                      onChange={this.handleOnChangeClientData}
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="country"
                      width="100%"
                      placeholder="Country"
                      value={this.state.client.country}
                      onChange={this.handleOnChangeClientData}
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="phone"
                      width="100%"
                      placeholder="555 867 5309"
                      value={this.state.client.phone}
                      onChange={this.handleOnChangeClientData}
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="email"
                      width="100%"
                      placeholder="Email Address*"
                      value={this.state.client.email}
                      onChange={this.handleOnChangeClientData}
                    />
                  </div>
                </div>
                {/*company-info-ends*/}
                <div
                  className="company-info"
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  <div className="company-input-container">
                    <input
                      type="text"
                      width="100%"
                      name="clientCompany"
                      placeholder="Client's Company"
                      value={this.state.client.clientCompany}
                      onChange={this.handleOnChangeUserXData}
                      className="company-name"
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      width="100%"
                      name="clientName"
                      placeholder="Client's Name"
                      value={this.state.client.clientName}
                      onChange={this.handleOnChangeUserXData}
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      width="100%"
                      name="cleintAddress"
                      placeholder="Client's Address"
                      value={this.state.client.clientAddress}
                      onChange={this.handleOnChangeUserXData}
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      width="100%"
                      name="clientCity"
                      placeholder="City, State ZIP"
                      value={this.state.client.clientCity}
                      onChange={this.handleOnChangeUserXData}
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      width="100%"
                      name="clientCountry"
                      placeholder="Country"
                      value={this.state.client.clientCountry}
                      onChange={this.handleOnChangeUserXData}
                    />
                  </div>
                </div>
              </div>
              {/* Right Starts here*/}
              <div className="text right" id="text-right">
            
                <div className="invoice-container">
                  <div className="invoice-num">
                    <input
                      className=""
                      type="text"
                      width="30%"
                      value="Invoice No:"
                    />
                    <input
                      type="text"
                      className=""
                      value={this.state.client.invoiceNum}
                    />
                  </div>
                  <div className="invoice-date">
                    <input className="" type="text" value="Invoice Date:" />
                    <div>
                    <input type="date"></input>
                    </div>
                  </div>
                  <div className="due-date">
                    <input className="" type="text" value="Due Date:" />
                    <div>
<input type="date"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="pagebreakDown">&nbsp;</div>
            <br/>
            <div
              className="table-container"
              id="formMatrix"
              style={{
                display: "flex",
                flexDirection: "column",
              
              }}
            >
              <table>
                <thead>
                  <tr>
                    {this.state.headings.map(heading => (
                      <th colSpan="1" key={heading.id}>
                        <div>
                          <input
                            type="text"
                            className="thInput"
                            name={heading.id}
                            value={heading.text}
                            placeholder={heading.text}
                            onChange={this.handleOnChange}
                          />
                        </div>
                      </th>
                    ))}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map(item => (
                    <Row
                      key={item.id}
                      item={item}
                      removeItem={this.handleRemoveItem}
                      updateItem={this.handleItemUpdate}
                    />
                  ))}
                </tbody>
              </table>
              <div
                id="invoiceDropdown"
                onClick={this.handleOnClick}
                className="add-more-btn"
              >
                <span>+ Add to Invoice</span>
              </div>
            </div>
          </div>
        </div>
        <div className="print-container2">
        <ReactToPrint
          trigger={() => (
            <a
              href="#"
              alt="print button"
              className="print-btn"
              id="print-btn2"
            >
              Print Invoice!
            </a>
          )}
          content={() => this.componentRef}
        />
      </div>
      </div>
    );
  }
}

export default Invoices;
