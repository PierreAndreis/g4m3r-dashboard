import React, { Component } from "react";
import { css } from "emotion";
import { Query, withApollo } from "react-apollo";
import Button from "../../../../components/Button";
import { Heading, SubHeader } from "../../../../components/Typography";
import gql from "graphql-tag";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";
import Card from "./Card";

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
          commands {
            category
            msgDelete
            name
            permission {
              disabled
              disabledChannels
              disabledRoles
              enabledChannels
              enabledRoles
            }
          }
        }
      }
    }
  }
`;

class CommandsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      category: "Basic",
      categories: [],
      commands: [],
    };
  }

  componentDidMount() {
    this.props.client
      .query({
        query: qClientBasic,
        variables: { clientId: process.env.REACT_APP_CLIENT_ID },
      })
      .then(result => {
        this.setState({
          categories: [
            ...new Set(
              result.data.client.commands
                .filter(c => !c.isMaintainer)
                .map(c => c.category)
            ),
          ],
        });
      });
  }

  changeCategory = category => e => {
    this.setState({
      category,
    });
  };



  render() {
    return (
      <React.Fragment>
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
          {this.state.categories.map(category => {
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
            <Editor query={qGuildBasic} mutation={mutationQuery}>
              <Editor.Mapper path="guild.settings.settings.commands">
                {value =>
                  this.state.category === value.category && (
                      <Card value={value} />
                  )
                }
              </Editor.Mapper>

              {/* this.state.commands
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
                }) */}
            </Editor>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withApollo(CommandsEditor);
