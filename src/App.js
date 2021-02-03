import React from "react";
import "./styles/App.css";
import HomePage from "./Containers/HomePage"

class App extends React.Component {

  render() {
    return (
      <>
        <header>
            <h1 id="pageName">Fotographiq</h1>
            <h6>A community to share and discuss photography!</h6>
        </header>
        <main> 
          <HomePage/> 
        </main>
      </>
    );
  }
}
export default App;
