import React, { Component, createContext } from "react";

export const { Provider, Consumer } = createContext();

class HelpModalProvier extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    console.log(this.state.isModalOpen);
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    return (
      <Provider
        value={{
          toggleModal: this.toggleModal,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { HelpModalProvier, Consumer as HelpModalConsumer };
