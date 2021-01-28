import React from "react";
import "./styles/App.css";
class App extends React.Component {
  state = {imgData:[{avatar:''}]};

  componentDidMount() {
    let urlBackend = 'https://img-crud.herokuapp.com/user';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    fetch(proxyurl + urlBackend)
    .then((r) => r.json())
    .then(this.getInfo)
    .catch((err) => console.warn("Oh dear...", err))
  }

  getInfo = (item) => {
    console.log(item)
    this.setState({
      imgData: item
    })
  }

  render() {
    return (
      <>
        <h1>Client side of Image Crud practice application</h1>
        {this.state.imgData.map(item => (<div key={item._id}>
          <img style={{width: 300}} src={item.avatar}></img>
          <button>Edit</button>
          <button>Delete</button>
          </div>
        ))}
        <button>Add</button>
        <label htmlFor="userfile">Choose file:</label>
        <input type="file" id="userfile" name="userfile"></input>
      </>
    );
  }
}
export default App;
