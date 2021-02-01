import React, { Component } from "react";
import AddImage from "../Components/AddImage"

class HomePage extends Component {
    state = {imgData:[{avatar:''}]};

    componentDidMount() {
      let urlBackend = 'https://img-crud.herokuapp.com/user';
      // let urlBackend = "http://localhost:5000/user"

      fetch(urlBackend)
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
          <AddImage/>
        </>
      );
    }
  }
  

export default HomePage;