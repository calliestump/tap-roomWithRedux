import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
  return (
    <React.Fragment>
      <div class="container">
        <h3>Epicodus Tap Room</h3>
        <h4>take a second to relax while you code <strong>after hours</strong>.</h4>
        <hr />
      </div>
    </React.Fragment>
  )
}

export default Header;