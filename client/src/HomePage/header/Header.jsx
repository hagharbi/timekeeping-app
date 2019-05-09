import React from 'react';
import '..style.css';


class Header extends React.Component {
  render() {
    return (
      <div className="Header" style={{
                                      position: "sticky",
                                      zIndex:"999",
                                      width: "100%",
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      height:"50px",
                                      backgroundColor:"#000000c1",
                                      boxShadow:"2px 2px 5px #00000022"
                                    }}>

<span style={{
              float: "left"
            }}>
    <ul>
        <li>sumit</li>
    </ul>
    </span>
    <span style={{
                  float: "right"
                }}>
    <ul>
    <li><a href="/login" id="loginHDRlink">Login</a></li>
    <li> | </li>
    <li><a href="/signup" id="loginFTRlink">Signup</a></li>
</ul>
</span>


      </div>
    );
  }
};



export { Header };