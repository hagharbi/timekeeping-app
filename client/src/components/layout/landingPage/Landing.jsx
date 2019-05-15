import React, { Component } from "react";
import { Link } from "react-router-dom";
import Parallax from "./Parallax";
import "./imagesCode/global.css";

class Landing extends Component {
  render() {
    return (

      <div id="mainHomeCont"
           style= {{
              height: "120vh",
              width: "100vw",
              backgroundColor: "green"
            }} >
{/* -----  Inserted paralax code from LandingPageHEro.jsx below in the <paralax/>tag  ----- */}
      <Parallax /> 
    
{/* -----  Sets a secondary force absolute width for home page intro.  ----- */}
      <div className="homeBodyContainer" 
      style={{position: "absolute", zIndex: "9", height: "100vh", width: "100%", margin: "0 0 0 0"}} >
      <p style={{margin: "1vw 0 0 1vw"}}>
  
      <span style={{fontSize: "35px", margin: "-10px 0 0 0", color:"white", float: "left"}}> sumit</span></p>


        <div className="row">
          <div style={{width: "1000vw"}}>
          {/* -------- container for intro text ------- */}
          <div style={{width: "40vw", textAlign: "left", margin: "20vh 0 0 60px" }} className="herotext">
            <h4 style={{padding: "5px", color: "#efd387", textShadow:"2px 2px rgba(0,0,0,0.2)"}}>
              <span style={{fontWeight: "800", top: "0", left: "0",  margin: " 20vh 0 0 90px ", position: "absolute", textShadow: "2px 2px rgba(0, 0, 0, 0.1)"}}>Focus on your craft.</span><br/><span style={{color: "#efd387", opacity:"0.99", textShadow:"2px 2px rgba(0,0,0,0.1)", top: "0", left: "0", position: "absolute",  margin: " 25vh 0 0 90px"}}>We deliver the rest.</span>
            </h4>
            <span style={{textShadow:"2px 2px rgba(0,0,0,0.1)", position:"absolute", top:"0", left: "0", width: "400px", margin: "32vh 0 0 90px"}} className="flow-text grey-text white-text">
              Sumit is an intuitive and simple time management system for independent contractors and freelancers
            </span>
            <br />
            <div className="col s6" id="ReBtn">
              <Link
                to="/register"
                  style={{
                    width: "14vw",
                    letterSpacing: "1.5px",

                    fontWeight: "600",
                    color: "#000",
                    position: "absolute",
                    margin: "56vh 0 0 90px",
                    left: "0",
                    top: "0"

                  }}
                  className="btn btn-med waves-effect waves-light black hoverable accent-3 teal-text"
                >
                  Register
              </Link><br/>
            </div>
            <div className="col s6" id="liBtn">
              <Link
                to="/login"
                style={{
                  marginLeft: "2rem",
                  width: "14vw",
                  letterSpacing: "1.5px",
                  fontWeight: "600",
                  position: "absolute",
                  backgroundColor: "rgb(199, 255, 255)",
                  margin: "50vh 0 0 90px",
                  left: "0",
                  top: "0",
                  backgroundColor: "#33aeae"
                }}
                className="btn btn-med waves-effect waves-light  hoverable teal black-text"
              >
                Log In
              </Link>
            </div>
            </div>
          </div>
        </div>

        <img src={ require('./imagesCode/cardOne.png') } style={{margin: "40vw 0 0 10vw", position: "absolute", zIndex: "99"}} alt="CardOne"/>
        <img src={ require('./imagesCode/cardTwo.png')} style={{margin: "40vw 0 0 40vw", position: "absolute", zIndex: "99"}} alt="CardTwo" />
        <img src={ require ('./imagesCode/CardThree.png')} style={{margin: "40vw 0 0 70vw", position: "absolute", zIndex: "99"}} alt="CardTwo" />



        </div>


      </div>
   
    );
  }
}

export default Landing;