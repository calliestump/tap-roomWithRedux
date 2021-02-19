import React from "react";
import websiteheader from "./../img/websiteheader.png";

function Header(){
  return (
    <React.Fragment>
      <img src={websiteheader} />
      <br /><br />
      <h1 className="title"><i><strong>Epicodus Tap Room</strong></i></h1>
      <h4>take a second to relax while you code <strong><span className="afterHours">after hours</span></strong>.</h4>
      <h4><span className="freeWifi">- free WiFi -</span></h4>
      <hr />
    </React.Fragment>
  )
}

export default Header;