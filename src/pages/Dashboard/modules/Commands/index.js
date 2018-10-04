import React, { Component } from "react";
import { css } from "emotion";
import { Query, withApollo } from "react-apollo";
import Button from "../../../../components/Button";
import { Heading, SubHeader } from "../../../../components/Typography";
import Modal from "../../../../global/Modal";
import Box from "../../../../components/Box";
// import Input from "../../../../components/Input";
// import Select from "../../../../components/Select";
import gql from "graphql-tag";
import Checkbox from "../../../../components/Checkbox";
import Editor from "../../../../components/Editor";
import qCommands from "../../../../graphql/queries/guild/commands";
import qClientCommands from "../../../../graphql/queries/client/commands";

const boxesHeader = css`
  display: flex;
  & > div {
    margin-right: 20px;
  }
`;

// todo: remove from here, put on graphql folder
const mutationQuery = gql`
  mutation editGuildCommands($guildId: String!, $input: commandsInput!) {
    setCommands(id: $guildId, input: $input) {
      id
      settings {
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
    mutateName: "help",
    queryName: "help",
  },
  {
    name: "Ping",
    category: "basic",
    mutateName: "ping",
    queryName: "ping",
  },
  {
    name: "Invite",
    category: "basic",
    mutateName: "invite",
    queryName: "invite",
  },
  {
    name: "Server",
    category: "basic",
    mutateName: "server",
    queryName: "server",
  },
  {
    name: "User Settings",
    category: "basic",
    mutateName: "userSettings",
    queryName: "userSettings",
  },
  {
    name: "Verify",
    category: "basic",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Delete",
    category: "admin",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Emoji",
    category: "admin",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Permisssion",
    category: "admin",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Pick",
    category: "admin",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Save Role",
    category: "admin",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Set Server Logo",
    category: "admin",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Guild Settings",
    category: "admin",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Accounts",
    category: "community",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Background",
    category: "community",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Events",
    category: "community",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Games",
    category: "community",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Giveaway",
    category: "community",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Profile",
    category: "community",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Kitten",
    category: "fun",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Meme",
    category: "fun",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Puppy",
    category: "fun",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Urban",
    category: "fun",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Arena Of Valor",
    category: "gaming",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Battlefield 1",
    category: "gaming",
    mutateName: "",
    queryName: "",
  },
  {
    name: "CSGO",
    category: "gaming",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Overwatch",
    category: "gaming",
    mutateName: "",
    queryName: "",
  },
  {
    name: "PUBG",
    category: "gaming",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Register",
    category: "gaming",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Siege",
    category: "gaming",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Vainglory",
    category: "gaming",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Ban",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Kick",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Mail",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Mute",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Nick",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Nuke",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Reason",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Role Manager",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Time Mute",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Warn",
    category: "moderation",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Embed",
    category: "utility",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Feedback",
    category: "utility",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Imgur",
    category: "utility",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Role",
    category: "utility",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Shortcut",
    category: "utility",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Stories",
    category: "utility",
    mutateName: "",
    queryName: "",
  },
  {
    name: "Tag",
    category: "utility",
    mutateName: "",
    queryName: "",
  },
];

class CommandsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      category: "Basic",
      commands: [],
    };
  }

  componentDidMount() {
    this.props.client
      .query({
        query: qClientCommands,
        variables: { clientId: "287128811961843712" },
      })
      .then(result => {
        this.setState({
          commands: result.data.client.commands.map(c => ({
            ...c,
            mutateName: c.id,
            queryName: c.id,
          })),
        });
      });
  }
  changeCategory = category => e => {
    this.setState({
      category,
    });
  };

  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

  render() {
    const categories = [
      ...new Set(this.state.commands.filter(c => !c.isMaintainer).map(c => c.category)),
    ];

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
          {categories.map(category => {
            return (
              <Button
                key={category}
                onClick={this.changeCategory(category)}
                simple
                active={this.state.category === category}
              >
                {category}
              </Button>
            );
          })}
        </section>
        <section>
          <div className={boxesHeader} style={{ flexWrap: "wrap" }}>
            <Editor query={qCommands} mutation={mutationQuery}>
              {this.state.commands
                .filter(cmd => cmd.category === this.state.category)
                .map(cmd => {
                  return (
                    <Box padding key={cmd.id.toUpperCase()}>
                      <Box.Title>{cmd.id.toUpperCase()}</Box.Title>
                      <Box.Body>
                        <div
                          style={{
                            display: "flex",
                            marginBottom: "10px",
                            justifyContent: "space-between",
                          }}
                        >
                          <Editor.Checkbox mutate={`${cmd.mutateName}.enabled`}>
                            Enabled
                          </Editor.Checkbox>
                          <Editor.Checkbox mutate={`${cmd.mutateName}.msgDelete`}>
                            Trigger
                          </Editor.Checkbox>
                        </div>
                        Exceptions
                        <br />
                        <br />
                        <div>
                          <Button rounded small>
                            Roles
                          </Button>
                          <Button rounded small>
                            Channels
                          </Button>
                        </div>
                      </Box.Body>
                    </Box>
                  );
                })}
            </Editor>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withApollo(CommandsEditor);
