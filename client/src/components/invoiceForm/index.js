import React from "react";
// import ReactDOM from "react-dom";
import ReactToPrint from "react-to-print";
import "./style.css"
import Row from "./Row";

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
        <div style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          height: "100vh"
        }}>
          &nbsp;
        </div>

        <div className="wrapper">
          <div className="print-container">
            <ReactToPrint
              trigger={() => (
                <a
                  href="#top"
                  id="printbtn"
                  onClick={ReactToPrint}
                  alt="print button"
                  style={{
                    padding: "24px 10px 8px 16px",
                    position: "fixed",
                    top: "0px",
                    borderRadius: "0 5px 5px 0",
                  }}
                >
                  <svg id='PrintIcon'
                    width='30'
                    height='30'
                    viewBox='0 0 24 24' >
                    <path d='M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z' />
                    <path d='M0 0h24v24H0z'
                      fill='none' />
                  </svg>
                </a>
              )}
              content={() => this.componentRef}
            />
          </div>

          <div className="container" id="mainBodyInvoice" ref={el => (this.componentRef = el)}>
            <div className="text-container">
              <div className="text left" id="text-left" >
                <h4><strong>Invoice</strong></h4>
                <div className="company-info">
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="company"
                      label="Company"
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

                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="email"
                      name="email"
                      width="100%"
                      placeholder="your@email.com*"

                    />
                  </div>

                  <div className="company-input-container">
                    <input
                      type="text"
                      name="companyAddress"
                      width="100%"
                      placeholder="1234 the Addr."
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="city"
                      width="100%"
                      placeholder="City, State ZIP"

                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="country"
                      width="100%"
                      placeholder="Country"

                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      name="phone"
                      width="100%"
                      placeholder="555 867 5309"

                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="email"
                      name="email"
                      width="100%"
                      placeholder="Email Address*"

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
                      className="company-name"
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      width="100%"
                      name="clientName"
                      placeholder="Client's Name"
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      width="100%"
                      name="cleintAddress"
                      placeholder="Client's Address"
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      width="100%"
                      name="clientCity"
                      placeholder="City, State ZIP"
                    />
                  </div>
                  <div className="company-input-container">
                    <input
                      type="text"
                      width="100%"
                      name="clientCountry"
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>

              <div style={{ height: "50px" }}></div>
              {/* Right Starts here*/}
              <div className="text right" id="text-right" style={{ position: "absolute", margin: "98px 0 0 300px", padding: "0 0 0 0" }}>

                <div className="invoice-container">
                  <div className="invoice-num"  >
                    <input

                      className=""
                      type="text"
                      width="30%"
                      value="Invoice No:"
                      readonly
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
            <br />
            <div
              className="table-container"
              id="formMatrix"
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute;",

              }}
            >

              <table id="table_invoice">
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

      </div>
    );
  }
}

export default Invoices;
