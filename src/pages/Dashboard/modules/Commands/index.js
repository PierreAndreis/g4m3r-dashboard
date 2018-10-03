import React, { Component } from "react";
// import { css } from "emotion";
import Button from "../../../../components/Button";
import { Heading, SubHeader } from "../../../../components/Typography";
import Modal from "../../../../global/Modal";
// import Box from "../../../../components/Box";
// import Input from "../../../../components/Input";
// import Select from "../../../../components/Select";
import gql from "graphql-tag";
import Checkbox from "../../../../components/Checkbox";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";

const boxesHeader = css`
  display: flex;
  & > div {
    margin-right: 20px;
  }
`;

// todo: remove from here, put on graphql folder
const mutationQuery = gql`
  mutation editGuild($guildId: String!, $input: guildInput!) {
    set(id: $guildId, input: $input) {
      name
      id
      configs {
        settings {
          commands
        }
      }
    }
  }
`;

const commands = [
  {
    name: "Help",
    category: "basic",
  },
  {
    name: "Ping",
    category: "basic",
  },
  {
    name: "Invite",
    category: "basic",
  },
  {
    name: "Server",
    category: "basic",
  },
  {
    name: "User Settings",
    category: "basic",
  },
  {
    name: "Verify",
    category: "basic",
  },
  {
    name: "Delete",
    category: "admin",
  },
  {
    name: "Emoji",
    category: "admin",
  },
  {
    name: "Permisssion",
    category: "admin",
  },
  {
    name: "Pick",
    category: "admin",
  },
  {
    name: "Save Role",
    category: "admin",
  },
  {
    name: "Set Server Logo",
    category: "admin",
  },
  {
    name: "Guild Settings",
    category: "admin",
  },
  {
    name: "Accounts",
    category: "community",
  },
  {
    name: "Background",
    category: "community",
  },
  {
    name: "Events",
    category: "community",
  },
  {
    name: "Games",
    category: "community",
  },
  {
    name: "Giveaway",
    category: "community",
  },
  {
    name: "Profile",
    category: "community",
  },
  {
    name: "Kitten",
    category: "fun",
  },
  {
    name: "Meme",
    category: "fun",
  },
  {
    name: "Puppy",
    category: "fun",
  },
  {
    name: "Urban",
    category: "fun",
  },
  {
    name: "Arena Of Valor",
    category: "gaming",
  },
  {
    name: "Battlefield 1",
    category: "gaming",
  },
  {
    name: "CSGO",
    category: "gaming",
  },
  {
    name: "Overwatch",
    category: "gaming",
  },
  {
    name: "PUBG",
    category: "gaming",
  },
  {
    name: "Register",
    category: "gaming",
  },
  {
    name: "Siege",
    category: "gaming",
  },
  {
    name: "Vainglory",
    category: "gaming",
  },
  {
    name: "Ban",
    category: "moderation",
  },
  {
    name: "Kick",
    category: "moderation",
  },
  {
    name: "Mail",
    category: "moderation",
  },
  {
    name: "Mute",
    category: "moderation",
  },
  {
    name: "Nick",
    category: "moderation",
  },
  {
    name: "Nuke",
    category: "moderation",
  },
  {
    name: "Reason",
    category: "moderation",
  },
  {
    name: "Role Manager",
    category: "moderation",
  },
  {
    name: "Time Mute",
    category: "moderation",
  },
  {
    name: "Warn",
    category: "moderation",
  },
  {
    name: "Embed",
    category: "utility",
  },
  {
    name: "Feedback",
    category: "utility",
  },
  {
    name: "Imgur",
    category: "utility",
  },
  {
    name: "Role",
    category: "utility",
  },
  {
    name: "Shortcut",
    category: "utility",
  },
  {
    name: "Stories",
    category: "utility",
  },
  {
    name: "Tag",
    category: "utility",
  },
];

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
    const categories = [...new Set(commands.map(c => c.category))];

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
            This page will allow you to enable/disable or create exceptions for each and
            every command on the bot. As it is one of the most powerful features on the
            bot and can be very complicated we have a separate page just for setting up
            the best permissions system possible for you and your beloved discord servers.
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
