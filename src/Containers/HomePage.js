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
      this.setState({
        imgData: item
      })
    }

    render() {
      return (
        <>
          <h1>Client side of Image Crud practice application</h1>
          {this.state.imgData.map((item,idx) => (<div key={idx}>
            <img style={{width: 300}} src={item.avatar}></img>
            <p>name: {item.name}</p>
            <p>Camera: {item.camera}</p>
            <p>Lens: {item.lens}</p>
            <p>emojis: {item.emojis}</p>
            <p>comments: {item.comments}</p>
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