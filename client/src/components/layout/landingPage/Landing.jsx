import React, { Component } from "react";
import { Link } from "react-router-dom";
import Parallax from "./Parallax";
import "./imagesCode/global.css";
import "./promo.css";
import "../../mediaQuieries/media650.css";
import "../../mediaQuieries/media750.css";
import "../../mediaQuieries/media1050.css";

class Landing extends Component {
  render() {
    return (

      <div id="mainHomeCont"
           style= {{
              height: "120vh",
              width: "100vw",
              backgroundColor: "#fff"
            }} >
{/* -----  Inserted paralax code from LandingPageHEro.jsx below in the <paralax/>tag  ----- */}
      <Parallax /> 
    
{/* -----  Sets a secondary force absolute width for home page intro.  ----- */}
      <div className="homeBodyContainer" 
                 style={{
                         position: "absolute", 
                         zIndex: "9", 
                         height: "100vh", 
                         width: "100vw", 
                         margin: "0 0 0 0"
                        }}
      >
      <p         style={{
                        margin: "1vw 0 0 1vw"
                      }}
      >
        <span  id="homeTitle"   style={{
                        fontSize: "35px",
                        margin: "-10px 0 0 0",
                        color:"white",
                        float: "left"
                      }}
        >
             sumit
            </span>
      </p>


        <div className="row">
          <div style={{width: "1000vw", position: "absolute", zIndex: "100"}}>
          {/* -------- container for intro text ------- */}

            <h4 style={{padding: "5px", color: "#fbe887", textShadow:"2px 2px rgba(0,0,0,0.2)"}}>
              <span id="focus-on" style={{
                                         fontWeight: "800",
                                         top: "0",
                                         left: "0",
                                         margin: " 20vh 0 0 90px ",
                                         position: "absolute",
                                         textShadow: "2px 2px rgba(0, 0, 0, 0.1)"
                                        }}
            >
                    Focus on your craft.
                    </span>
              <br/>
            <span id="we-deliver" style={{
                                         opacity:"0.99", 
                                         textShadow:"2px 2px rgba(0,0,0,0.1)", 
                                         top: "0", 
                                         left: "0", 
                                         position: "absolute",
                                         margin: " 25vh 0 0 90px"
                                        }}
            >
                  We deliver the rest.
                  </span>
            </h4>
            <span id="sumit-is"   style={{
                                        textShadow:"2px 2px rgba(0,0,0,0.1)",
                                        position:"absolute",
                                        top:"0",
                                        left: "0",
                                        width:
                                        "400px",
                                        margin: "32vh 0 0 90px"
                                        }} 
                                  className="flow-text grey-text white-text"
            >
              Sumit is an intuitive and simple time management system for independent contractors and freelancers
            </span>
            <br />
            <div className="col s6" >
              <Link
                to="/register"
                  style={{
                          minWidth: "220px",
                          letterSpacing: "4px",
                          fontWeight: "600",
                          position: "absolute",
                          margin: "56vh 0 0 90px",
                          left: "0",
                          top: "0"

                        }}
                  className="btn btn-med waves-effect waves-light black hoverable accent-3 teal-text" 
                  id="ReBtn"
                >
                  Register
              </Link><br/>
            </div>
            <div className="col s6" >
              <Link
                to="/login"
                style={{
                        marginLeft: "2rem",
                        minWidth: "220px",
                        letterSpacing: "4px",
                        fontWeight: "600",
                        position: "absolute",
                        margin: "50vh 0 0 90px",
                        left: "0",
                        top: "0",
                      }}
                className="btn btn-med waves-effect waves-light  hoverable teal black-text"
                id="liBtn"
              >
                Log In
              </Link>
            </div>
        
          </div>
        </div>
        <img src={ require ( './imagesCode/cardOne.png'   )} style={{ 
                                                                    margin: "50vw 0 0 10vw", 
                                                                    position: "absolute", 
                                                                    zIndex: "99", 
                                                                    width: "15vw" 
                                                                  }} 
                                                             alt="CardOne" 
                                                             id="ctaElements" 
        />
        <img src={ require ( './imagesCode/cardTwo.png'   )} style={{ 
                                                                    margin: "50vw 0 0 40vw", 
                                                                    position: "absolute", 
                                                                    zIndex: "99", 
                                                                    width: "15vw" 
                                                                   }} 
                                                             alt="CardTwo" 
                                                             id="ctaElements" 
        />

        <img src={ require ( './imagesCode/CardThree.png' )} style={{ 
                                                                    margin: "50vw 0 0 70vw", 
                                                                    position: "absolute", 
                                                                    zIndex: "99", 
                                                                    width: "15vw"
                                                                   }} 
                                                             alt="CardThree" 
                                                             id="ctaElements"
        />


        </div>
        <div id="promoCopy" style={{margin: "70vw 0 0 10vw", 
                     position: "absolute", 
                     zIndex: "99", 
                     width: "86vw", 
                    //  color: ", 
                     letterSpacing: "1px", 
                     backgroundColor: "#fff"
                  }}>
            intuitive invoice management,  tracking, producing, reporting and 
            client management matrix designed;  to gtive, you; the user,  the 
            tools you need to get the job done in time and   on budget so you 
            can spend more time doing what you want. Instead of spending time 
            doing the things you dont.   sumit professional client management 
            systems is...
            <div id="promo_display-container">
            <div id="promo_desktop2-MediaOne"    alt="desktop monitor representation of site page" ></div>
            <div id="promo_desktop2-MediaTwo"    alt="desktop monitor representation of site page" ></div>
      <div id="promo_desktop"    alt="desktop monitor representation of site page" ></div>
      <div id="promo_laptop"     alt="laptop-refference"                           ></div>
      <img id="promo_tablet"     alt="tablet screen representation of site page"      src={ require('./imagesCode/publish-sample-demo-sumit-cta-hero-home.gif') } />
      <img id="promo_smartPhone" alt="smart phone screen representation of site page" src={ require('./imagesCode/mobile-view-gif.gif') } />
      <br/>
      <p id="cprt" style={{textAlign: "center", position: "fixed", bottom: "0", left: "0", transform: "rotate(90deg)", margin: " 0 0 60px -50px", color: "silver"}}>© 2019 | sumit</p>
    </div>
        </div>


      </div>
   
    );
  }
}

export default Landing;