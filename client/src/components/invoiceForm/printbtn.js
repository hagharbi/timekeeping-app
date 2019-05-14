
import React from "react";
// import ReactDOM from "react-dom";
import ReactToPrint from "react-to-print";
import "./styles.css";

class PrintBtn extends React.Component {
  
    render() { return (

        <div className="masterPrintBtn">
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
    )}}
      export default PrintBtn;