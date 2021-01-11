import React from "react";
import "./styles/App.css";
class App extends React.Component {
  state = {};

  componentDidMount() {
    let urlBackend = 'https://img-crud.herokuapp.com/user';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    fetch(proxyurl + urlBackend)
    .then((r) => r.json())
    .then(this.getInfo)
    .catch((err) => console.warn("Oh dear...", err))
  }

  getInfo = (item) => {
    console.log(item[0].avatar)
    this.setState({imageURL: item[0].avatar})
  }

  render() {
    return (
      <>
        <h1>Client side of Image Crud practice application</h1>
        <img src={this.state.imageURL}></img>
      </>
    );
  }
}
export default App;
