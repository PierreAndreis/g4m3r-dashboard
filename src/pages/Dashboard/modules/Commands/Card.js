
import React, { Component } from 'react'
import Modal from "../../../../global/Modal";
import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";

export default class Card extends Component {
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
    const { value } = this.props
    return (
     <Box padding>
      <Box.Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>{value && value.name.toUpperCase()}</div> &nbsp; &nbsp;
          {/* information icon */}
        <div style={{ ['margin-left']: 'auto', ['cursor']: 'pointer'  }} onClick={this.toggleModal}>
          <img style={{ width: '20px', height: '20px' }} src={'https://cdn.discordapp.com/emojis/443803045382324225.png?v=1'}></img>
        </div>
        </div>
      </Box.Title>
      <Box.Body>
        <div
          style={{
            display: "flex",
            marginBottom: "10px",
            justifyContent: "space-between",
          }}
        >
          <Editor.Checkbox
            propKey={"name"}
            propValue={value.name}
            isArray={true}
            mutate={`settings.settings.commands`}
            query={`permission.disabled`}
          >
            <div>Disabled</div>
          </Editor.Checkbox>
          <Editor.Checkbox
            propKey={"name"}
            propValue={value.name}
            isArray={true}
            mutate={`settings.settings.commands`}
            query={`msgDelete`}
          >
            <div>Trigger</div>
          </Editor.Checkbox>
        </div>
        {/*Exceptions
      <br />
      <br />
      <div>
        <Button rounded small>
          Roles
        </Button>
        <Button rounded small>
          Channels
        </Button>
      </div> */}
      </Box.Body>
      <Modal
          onClose={this.toggleModal}
          open={this.state.isOpenModal}
          render={() => {
            return (
              <div>
                <div>{value.name}</div>
              </div>
            );
          }}
        />
      </Box>
    )
  }
}


