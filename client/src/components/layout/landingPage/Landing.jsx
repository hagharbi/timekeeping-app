import React, { Component } from "react";
import { Link } from "react-router-dom";
import Parallax from "./Parallax";
import "./imagesCode/global.css";


class Landing extends Component {
  render() {
    return (

      <div id="mainHomeCont"
           style= {{
              height: "100vh",
              width: "100vw",
              backgroundColor: "green"
            }} >
{/* -----  Inserted paralax code from LandingPageHEro.jsx below in the <paralax/>tag  ----- */}
      <Parallax /> 
{/* -----  Sets a secondary force absolute width for home page intro.  ----- */}
      <div className="homeBodyContainer" 
      style={{position: "absolute", zIndex: "9", height: "100vh", width: "100%", margin: "0 0 0 0"}} >
      <p style={{margin: "1vw 0 0 1vw"}}>
      <span>
      <i style={{width: "40px", height: "40px", color:"#999999", margin: "15px 20px 0 0"}} className="material-icons medium">av_timer </i> </span> 
      <span style={{fontSize: "35px", margin: "-10px 0 0 0", color:"white", float: "left"}}> sumit</span></p>

      <div style={{backgroundColor: "#fff", width: "100vw", height: "10px", position: "absolute", zIndex: "9", top:"0", left: "0", right:"0", margin: "0 0 0 0", position: "fixed"}} id="brdrTop">&nbsp;</div>
      <div style={{backgroundColor: "#fff", width: "99.2vw", height: "10px", position: "absolute", zIndex: "8", bottom: "0", left: "0", right:"0", margin: "0 0 0 0.4vw", position: "fixed"}} id="brdrBottom">&nbsp;</div>
      <div style={{backgroundColor: "#fff", width: "10px", height: "200vh", position: "absolute", zIndex: "7", top:"0", bottom: "0", right: "0", margin: "0 0 0 0" , position: "fixed"}} id="brdrRight">&nbsp;</div>
      <div style={{backgroundColor: "#fff", width: "10px", height: "200vh", position: "absolute", zIndex: "6", top:"0", bottom: "0", left: "0", margin: "0 0 0 0" , position: "fixed"}} id="brdrLeft">&nbsp;</div>
        <div className="row">
          <div style={{width: "1000vw"}}>
          {/* -------- container for intro text ------- */}
          <div style={{width: "20vw", textAlign: "right", margin: "20vh 0 0 0" }} className="herotext">
            <h4 style={{padding: "5px", color: "#efd387", textShadow:"2px 2px rgba(0,0,0,0.2)"}}>
              <span style={{fontWeight: "800"}}>Focus on your craft.</span><br/><span style={{color: "#efd387", opacity:"0.8", textShadow:"2px 2px rgba(0,0,0,0.2)"}}>We deliver the rest.</span>
            </h4>
            <span style={{textShadow:"2px 2px rgba(0,0,0,0.2)", position:"sticky"}} className="flow-text grey-text white-text">
              Sumit is an intuitive and simple time management system for independent contractors and freelancers
            </span>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    backgroundColor: "#777777",
                    fontWeight: "600",
                    color: "#000",
                    textShadow:"2px 2px rgba(0,0,0,0.2)",
                    margin: "0 0 0 0"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
              </Link><br/>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  marginLeft: "2rem",
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  fontWeight: "600",
                  backgroundColor: "rgb(199, 255, 255)",
                  textShadow:"1px 1px rgba(0,0,0,0.1)",
                  margin: "0 0 0 0"
                }}
                className="btn btn-large btn-flat waves-effect hoverable white black-text"
              >
                Log In
              </Link>
            </div>
            </div>
          </div>
        </div>

        </div>

      </div>
   
    );
  }
}

export default Landing;