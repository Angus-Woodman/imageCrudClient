import React, { Component } from "react";
import ReactModal from "react-modal";
import AddImageModal from "./AddImageModal"

class AddImage extends Component {
    state = {
        showModal: false,
      };

    componentDidMount() {
        ReactModal.setAppElement('body');
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
      };

    handleCloseModal = () => {
        this.setState({ showModal: false });
        this.props.getInfo()
      };

    render() {
        return (
            <>
                <button onClick={this.handleOpenModal}>Add</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Add image modal"
                > <AddImageModal onClick={this.handleCloseModal.bind(this)} /> </ReactModal>
            </>

        );
    }
}

export default AddImage;