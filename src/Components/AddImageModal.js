import React, { Component } from "react";

class AddImageModal extends Component {
    state = {
        loading: false,
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };

      handleFileChange = (e) => {
        const files = e.target.files
        this.setState({imgFiles:files[0]})
      }

      handleCloseModal(e) {
          e.preventDefault()

          this.setState({loading: true,})

          let urlBackend = 'https://img-crud.herokuapp.com/user';
        //  let urlBackend = 'http://localhost:5000/user'
          const parseData = new FormData()
          parseData.append('image', this.state.imgFiles)
          parseData.append('name', this.state.title)
          parseData.append('camera', this.state.camera)
          parseData.append('lens', this.state.lens)

          const options = {
            method: 'POST',
            body: parseData,
          };
        
          fetch(urlBackend, options)
          .then(r => r.json())
          .then(this.props.onClick)
          .catch(console.warn)
        }
    
    render() {
        return (
            <>
                {this.state.loading && <p id='modalLoading'>Loading...</p>}
                {!this.state.loading &&
                <div id='modalMain'>
                    <button onClick={this.props.onClick}>Close</button>

                    <form id="addPlayerForm" onSubmit={(e) => this.handleCloseModal(e)}>

                        <input
                            required
                            id="title"
                            name="title"
                            type="text"
                            maxLength="10"
                            placeholder="Untitled"
                            onChange={this.handleInput}
                        ></input>

                        <input
                            required
                            id="camera"
                            name="camera"
                            type="text"
                            maxLength="10"
                            placeholder="Camera type"
                            onChange={this.handleInput}
                        ></input>

                        <input
                            required
                            id="lens"
                            name="lens"
                            type="text"
                            maxLength="10"
                            placeholder="Lens"
                            onChange={this.handleInput}
                        ></input>

                        <label htmlFor="imageFile">Choose file:</label>
                        <input 
                            required 
                            type="file" 
                            id="imageFile" 
                            name="imageFile"
                            onChange={this.handleFileChange}
                        ></input>

                        <input id="submitPlayerButton" type="submit"></input>
                    </form>
                </div>
                }
            </>

        );
    }
}

export default AddImageModal;