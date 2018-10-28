import React, { Component } from "react";
import { css } from "emotion";
import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import mutationQuery from "../../../../graphql/queries/mutations/moderation";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import Button from "../../../../components/Button";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const validateNumber = value => {
  return !isNaN(value);
};

const channelOrRoleSelector = props => {
  return (
    <div>
      {props.type}
      <Editor.Select
        propKey={"id"}
        propFetch={"name"}
        payloadProp={`guild.${props.isChannel ? "channels" : "roles"}`}
        type={props.isChannel ? (props.needCategory ? "category" : "channel") : "role"}
        mutate={props.mutateString}
        query={props.query}
      />
      <br />
    </div>
  );
};

const makeInputSettings = props => {
  return (
    <div>
      <Box.Title>{props.title}</Box.Title>
      <Box.Body>
        <Editor.Input
          mutate={props.mutate}
          query={props.query}
          type={props.type}
          max={props.max}
          min={props.min}
        />
      </Box.Body>
    </div>
  );
};

class SpecialFeatureEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      category: "Vainglory",
      categories: ["Vainglory"],
    };
  }

  changeCategory = category => e => {
    this.setState({
      category,
    });
  };

  render() {
    let guildId = this.props.match.params.guildId;
    return (
      <React.Fragment>
        <section>
          <Heading>Special Features (VIP ONLY)</Heading>
          <SubHeader>
            Thank you for supporting G4M3R. As a VIP, you have unlocked all of the
            following features for your server.
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

        <Editor query={qGuildBasic} mutation={mutationQuery}>
          {this.state.category === "Vainglory" ? (
            <section>
              <Heading2>Vainglory Guild Features</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Activity Reports Channel</Box.Title>
                  <Box.Body>
                    {channelOrRoleSelector({
                      isChannel: true,
                      type: "Activity Report Channel",
                      mutateString: "vaingloryGuildActivityChannel",
                      query:
                        "guild.settings.settings.vip.vainglory.guildNotificationChannel",
                      guildId,
                    })}
                  </Box.Body>
                </Box>
                <Box padding>
                  {makeInputSettings({
                    title: "Max Inactivity Days Allowed",
                    query: "guild.settings.settings.vip.vainglory.maxInactiveTime",
                    mutate: "vaingloryGuildMaxInactiveTime",
                    validateFunction: validateNumber,
                    type: "number",
                  })}
                </Box>
              </div>
            </section>
          ) : null}
        </Editor>
      </React.Fragment>
    );
  }
}

export default SpecialFeatureEditor;
