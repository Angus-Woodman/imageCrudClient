import React, { Component } from "react";
import AddImage from "../Components/AddImage"
import '../styles/HomePage.css'

class HomePage extends Component {
    state = {imgData:[{avatar:''}]};

    componentDidMount() {
      this.getInfo()
    }

    getInfo = () => {
      let urlBackend = 'https://img-crud.herokuapp.com/user';
      //let urlBackend = "http://localhost:5000/user"

      fetch(urlBackend)
      .then((r) => r.json())
      .then(this.setInfo)
      .catch((err) => console.warn("Oh dear...", err))
    }

    setInfo = (item) => {
      this.setState({
        imgData: item
      })
    }

    handleDelete = (idx) => {
      let urlBackend = `https://img-crud.herokuapp.com/user/${idx}`;
      //let urlBackend = `http://localhost:5000/user/${idx}`
      fetch(urlBackend, {method:'DELETE'})
      .then(r => r.json())
      .then(this.getInfo)
      .catch(console.warn)
    }

    handleEmoji = (e, idx) => {
      let urlBackend = `https://img-crud.herokuapp.com/user/${this.state.imgData[idx]._id}`;
      //let urlBackend = `http://localhost:5000/user/${this.state.imgData[idx]._id}`   
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
      .then(this.getInfo)
      .catch(console.warn)

    }

    render() {
      return (
        <>
          <AddImage getInfo={this.getInfo.bind(this)}/>
          <div id='cardContainer'>
          {this.state.imgData.reverse().map((item,idx) => (
            <div key={idx} className="card">
              <div className='cardImage'>
                <img className='card-img-top' src={item.avatar} alt="Card image"/>
              </div>
              <div className="card-body">
                  <p className="card-text">name: {item.name}  </p>
                  <p className="card-text">Camera: {item.camera}  </p>
                  <p className="card-text">Lens: {item.lens}  </p>
              </div>
              <div className='emojiContainer'><a className='emoji1' onClick={(e) => this.handleEmoji(e, idx)}>😀</a> +{item.emoji1} <a className='emoji2' onClick={(e) => this.handleEmoji(e, idx)}>👍</a> +{item.emoji2} <a className='emoji3' onClick={(e) => this.handleEmoji(e, idx)}>💘</a>+{item.emoji3}</div>
              <button className='deleteButton' onClick={() => this.handleDelete(item._id)}>Delete</button>
                          
            </div>
          ))}
          </div>
        </>
      );
    }
  }
  

export default HomePage;