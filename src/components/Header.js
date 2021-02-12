import React from "react";
import websiteheader from "./../img/websiteheader.png";

function Header(){
  return (
    <React.Fragment>
      <img src={websiteheader} />
      <br /><br />
      <h1 class="title"><i><strong>Epicodus Tap Room</strong></i></h1>
      <h4>take a second to relax while you code <strong><span class="afterHours">after hours</span></strong>.</h4>
      <p><span class="freeWifi">- free WiFi -</span></p>
      <hr />
    </React.Fragment>
  )
}

export default Header;