import React, { Component } from "react";
import AddImage from "../Components/AddImage"
import '../styles/HomePage.css'

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

    handleDelete = (idx) => {
      let urlBackend = `https://img-crud.herokuapp.com/user/${idx}`;
      // let urlBackend = `http://localhost:5000/user/${idx}`
      fetch(urlBackend, {method:'DELETE'})
      .then(r => r.json())
      .catch(console.warn)
    }

    handleEmoji = (e, idx) => {
      let urlBackend = `https://img-crud.herokuapp.com/user/${this.state.imgData[idx]._id}`;
      // let urlBackend = `http://localhost:5000/user/${this.state.imgData[idx]._id}`   
      let emoji = e.target.className
      
      let value = parseInt(this.state.imgData[idx].[emoji])+1

      const parseData = new FormData()
      parseData.append(emoji, value.toString())
      console.log(value)
      console.log(emoji)

      let options = {
        method:'PUT',
        body:parseData
    }

      fetch(urlBackend, options)
      .then(r => r.json())
      .catch(console.warn)

    }

    render() {
      return (
        <>
          <h1>Client side of Image Crud practice application</h1>
          {this.state.imgData.map((item,idx) => (<div key={idx} className='card'>
            <img style={{width: 300}} src={item.avatar}></img>
            <p>name: {item.name}</p>
            <p>Camera: {item.camera}</p>
            <p>Lens: {item.lens}</p>
            <p>emojis: <button className='emoji1' onClick={(e) => this.handleEmoji(e, idx)}>😀</button> {item.emoji1} <button className='emoji2' onClick={(e) => this.handleEmoji(e, idx)}>👍</button> {item.emoji2} <button className='emoji3' onClick={(e) => this.handleEmoji(e, idx)}>💘</button>{item.emoji3}</p>
            <p>comments: {item.comments}</p>
            <button onClick={() => this.handleDelete(item._id)}>Delete</button>
            </div>
          ))}
          <AddImage/>
        </>
      );
    }
  }
  

export default HomePage;