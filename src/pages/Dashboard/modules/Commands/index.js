import React, { Component } from "react";
// import { css } from "emotion";
import Button from "../../../../components/Button";
import { Heading, SubHeader } from "../../../../components/Typography";
import Modal from "../../../../global/Modal";
// import Box from "../../../../components/Box";
// import Input from "../../../../components/Input";
// import Select from "../../../../components/Select";
// import gql from "graphql-tag";
// import { Query } from "react-apollo";
// import Checkbox from "../../../../components/Checkbox";

// const boxesHeader = css`
//   display: flex;
//   & > div {
//     margin-right: 20px;
//   }
// `;

class CommandsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          onClose={this.toggleModal}
          open={this.state.isOpenModal}
          render={() => {
            return (
              <div>
                <div>something</div>
              </div>
            );
          }}
        />
        <section>
          <Heading>Commands</Heading>
          <SubHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </SubHeader>
        </section>
        <section>
          <br />
          <br />
          <Button simple onClick={bA => bA.success()}>
            Button Simple
          </Button>
          <br />
          <br />
          <Button onClick={bA => bA.success()}>Button Normal</Button>
          <br />
          <br />
          <Button active onClick={bA => bA.success()}>
            Button Active
          </Button>
          <br />
          <br />
          <Button onClick={bA => bA.success()}>Button hover </Button>
          <br />
          <br />
          <Button big>Button big</Button>
          <br />
          <br />
          <Button small>Button small</Button>
          <br />
          <br />
          <Button rounded small>
            Button Small & Rounded
          </Button>
          <br />
          <br />
          <Button disabled>Button Disabled</Button>
          <br />
          <br />
          <Button loading>Button Loading</Button>
          <br />
          <br />
          <Button error>Button Error</Button>
          <br />
          <br />
          <Button success onClick={this.toggleModal}>
            Button Success
          </Button>
          <br />
          <br />
        </section>
      </React.Fragment>
    );
  }
}

export default CommandsEditor;
