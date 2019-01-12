import React from "react";
import Modal from "./Modal";
import InfoOutlineIcon from "mdi-react/InfoOutlineIcon";
import { HelpModalConsumer } from "../components/HelpModalContext";

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
      <HelpModalConsumer>
        {toggleModal => (
          <React.Fragment>
            <div
              onClick={toggleModal}
              style={{ cursor: "pointer", marginTop: -2, marginLeft: 5 }}
            >
              <InfoOutlineIcon />
            </div>
            <Modal open={this.state.open} onClose={this.toggleModal} disablePropagation>
              {this.props.content}
            </Modal>
          </React.Fragment>
        )}
      </HelpModalConsumer>
    );
  }
}

export default HelpModal;
