import React from "react";
import Header from "./Header";
// import KegList from "./KegList";
import KegControl from "./KegControl";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <React.Fragment>
      <div class="container">
          <Header />
          <KegControl />

      </div> 
      </React.Fragment>
  );
}

export default App;