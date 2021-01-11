import React from "react";
import "./styles/App.css";
class App extends React.Component {
  state = {};

  componentDidMount() {
    let urlBackend = 'https://img-crud.herokuapp.com/user';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    fetch(proxyurl + urlBackend)
    .then((r) => r.json())
    .then(console.log)
    .catch((err) => console.warn("Oh dear...", err))
  }

  render() {
    return (
      <>
        <h1>Client side of Image Crud practice application</h1>
      </>
    );
  }
}
export default App;
