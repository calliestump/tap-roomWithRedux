import React from "react";
import Header from "./Header";
import KegList from "./KegList";

function App(){
  return(
    <React.Fragment>
      <div class="header">
        <Header />
        <KegList />
      </div>
    </React.Fragment>
  );
}

export default App;