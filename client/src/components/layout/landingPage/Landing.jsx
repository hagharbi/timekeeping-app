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
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#fff"
        }} >
        {/* -----  Inserted paralax code from LandingPageHEro.jsx below in the <paralax/>tag  ----- */}
        <Parallax />

        {/* -----  Sets a secondary force absolute width for home page intro.  ----- */}
        <div className="homeBodyContainer"
        // style={{
        //   position: "absolute",
        //   zIndex: "9",
        //   height: "100vh",
        //   width: "100vw",
        //   margin: "0 0 0 0"
        // }}
        >
          <img src={require('./imagesCode/sumit-logo.svg')} style={{
            fontSize: "35px",
            width: "9vw",
            margin: "2.4rem auto 0 3rem",
            float: "left"
          }}
            alt="CardOne"
            id="ctaElements"
          />
          {/* <p         style={{
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
              </p> */}


          <div className="row">
            <div style={{ top:"6rem", width: "1000vw", position: "absolute", zIndex: "100" }}>
              {/* -------- container for intro text ------- */}

              <h2 style={{
                padding: "5px", color: "#fbe887",
                //  textShadow: "2px 2px rgba(0,0,0,0.2)"
              }}>
                <span id="focus-on" style={{
                  fontWeight: "700",
                  top: "0",
                  left: "0",
                  margin: " 20vh 0 0 220px ",
                  position: "absolute",
                  // textShadow: "2px 2px rgba(0, 0, 0, 0.1)"
                }}
                >
                  Focus on your craft,
                    </span>

                <span id="we-deliver" style={{
                  fontWeight: "700",

                  // opacity: "1",
                  // textShadow: "2px 2px rgba(0,0,0,0.1)",
                  top: "0",
                  left: "0",
                  position: "absolute",
                  margin: " 26vh 0 0 220px"
                }}
                >
                  we deliver the rest.
                  </span>
              </h2>
              <span id="sumit-is" style={{
                // textShadow: "2px 2px rgba(0,0,0,0.1)",
                position: "absolute",
                top: "0",
                left: "0",
                fontWeight: "300",
                width: "440px",
                margin: "35vh 0 0 220px",
                lineHeight: 1.5,
              }}
                className="flow-text grey-text white-text"
              >
                Sumit is an intuitive time management system for independent contractors and freelancers.
            </span>
              <br />
              <div className="col s6" >
                <Link
                  to="/login"
                  style={{
                    marginLeft: "2rem",
                    minWidth: "120px",
                    // letterSpacing: "4px",
                    fontWeight: "500",
                    position: "absolute",
                    margin: "50vh 0 0 360px",
                    left: "0",
                    top: "0",
                    backgroundColor: "#fbe887",
                    color: "#2c327d"
                  }}
                  className="btn btn-medium waves-effect hoverable"
                  id="liBtn"
                >
                  Log In
              </Link>
              </div>
              <div className="col s6" >

                <Link
                  to="/register"
                  style={{
                    minWidth: "120px",
                    // letterSpacing: "4px",
                    fontWeight: "500",
                    position: "absolute",
                    margin: "50vh 0 0 220px",
                    left: "0",
                    top: "0",
                    backgroundColor: "#2c327d"
                  }}
                  className="btn btn-med waves-effect waves-dark hoverable"
                  id="ReBtn"
                >
                  Register
              </Link>
              </div>

            </div>
          </div>
          <div id="promoCopy">
            <img alt="perspective" src={require('./imagesCode/perspective.png')}
              style={{
                margin: "46vw 0 0 4vw",
                position: "absolute",
                zIndex: "99",
                width: "50vw",
                
                // backgroundColor: "white"
              }}
            />
            <h4
              style={{
                margin: "54vw 0 0 51vw",
                position: "absolute",
                zIndex: "99",
                width: "28vw",
                lineHeight: 1.2,

              }}
            >
              Keep track of your projects, tasks and time.
            </h4>
            <h5
              style={{
                margin: "60vw 0 0 51vw",
                position: "absolute",
                zIndex: "99",
                width: "32vw",
                fontWeight: 500,
                lineHeight: 1.5,
                color: '#adadad'
              }}
            >
              Spend your time wisely and focus on what matter the most. Make your clients happy!
            </h5>
            <h4
              style={{
                margin: "65vw 0 0 51vw",
                position: "absolute",
                zIndex: "99",
                width: "32vw",
                fontWeight: 500,
                lineHeight: 1.5,
                color: "#037F8C"
              }}
            >
              Register now!
            </h4>
            <Link
              to="/register"
              style={{
                minWidth: "120px",
                // letterSpacing: "4px",
                fontWeight: "500",
                position: "absolute",
                margin: "75vw 0 0 51vw",
                left: "0",
                top: "0",
                backgroundColor: "#2c327d"
              }}
              className="btn btn-med waves-effect waves-dark hoverable"
              id="ReBtn"
            >
              Here
            </Link>
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: "300px",
              margin: "90vw 0 0 13vw",
              zIndex: "999",
              position: "absolute",
            }}>
            <img src={require('./imagesCode/cardTwo.png')} style={{
              margin: "0 0 0 4vw",
              position: "absolute",
              zIndex: "99",
              width: "17vw"
            }}
              alt="CardTwo"
              id="ctaElements"
            />
            <img src={require('./imagesCode/CardThree.png')} style={{
              margin: "0 0 0 30vw",
              position: "absolute",
              zIndex: "99",
              width: "15vw"
            }}
              alt="CardThree"
              id="ctaElements"
            />
            <img src={require('./imagesCode/cardOne.png')} style={{
              margin: "0 0 0 54vw",
              position: "absolute",
              zIndex: "99",
              width: "16vw"
            }}
              alt="CardOne"
              id="ctaElements"
            />
          </div>
        </div>
        {/* <div
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: "0",
            margin: "0 0 0 0",
            backgroundColor: "#037F8C",
            width: "100vw",
          }}
        >
          <p
            style={{
              color: "white",
              fontWeight: 300,
            }}
          >
            © 2019 | SUMIT</p>
        </div> */}

        {/* <div id="promoCopy"
          style={{
            margin: "70vw 0 0 10vw",
            position: "absolute",
            zIndex: "99",
            width: "40vw",
            letterSpacing: "1px",
            backgroundColor: "#fff"
          }}
        >
          intuitive invoice management,  tracking, producing, reporting and
          client management matrix designed;  to gtive, you; the user,  the
          tools you need to get the job done in time and   on budget so you
          can spend more time doing what you want. Instead of spending time
          doing the things you dont.   sumit professional client management
          systems is...
            <div id="promo_display-container">
            <div id="promo_desktop2-MediaOne" alt="desktop monitor representation of site page" ></div>
            <div id="promo_desktop2-MediaTwo" alt="desktop monitor representation of site page" ></div>
            <div id="promo_desktop" alt="desktop monitor representation of site page" ></div>
            <div id="promo_laptop" alt="laptop-refference"                           ></div>
            <img id="promo_tablet" alt="tablet screen representation of site page" src={require('./imagesCode/publish-sample-demo-sumit-cta-hero-home.gif')} />
            <img id="promo_smartPhone" alt="smart phone screen representation of site page" src={require('./imagesCode/mobile-view-gif.gif')} />
            <br /> */}
        {/* <p id="cprt" style={{ textAlign: "center", position: "fixed", bottom: "0", left: "0", transform: "rotate(90deg)", margin: " 0 0 60px -50px", color: "silver" }}>© 2019 | sumit</p> */}
        {/* </div>
        </div> */}
      </div>
    );
  }
}

export default Landing;