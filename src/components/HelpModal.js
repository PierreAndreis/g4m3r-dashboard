import React from "react";
import Modal from "./Modal";
import { InfoOutlineIcon } from "mdi-react";

class HelpModal extends React.Component {
  state = {
    open: false,
  };

  toggleModal = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <React.Fragment>
        <div
          onClick={this.toggleModal}
          style={{ cursor: "pointer", marginTop: -2, marginLeft: 5 }}
        >
          <InfoOutlineIcon />
        </div>
        <Modal open={this.state.open} onClose={this.toggleModal} disablePropagation>
          {this.props.content}
        </Modal>
      </React.Fragment>
    );
  }
}

export default HelpModal;
