import React, { Component } from "react";
import { css } from "emotion";
import mutationQuery from "../../../../graphql/queries/mutations/general";
import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import { Query } from "react-apollo";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import qTimezone from "../../../../graphql/queries/utils/timezone";
import Button from "../../../../components/Button";
import { generalPageToggles } from "../../../../constants/general";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const cleanUpTimezone = timezones =>
  timezones.map(timezone => ({
    key: timezone,
    value: timezone,
  }));

const makeGeneralPageToggle = props => {
  return (
    <div key={props.query}>
      <Editor.Checkbox query={props.query} mutate={props.mutate} children={props.title} />
    </div>
  );
};

class GeneralEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      category: "Basic",
      categories: ["Basic", "Feedback", "Events"],
    };
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
          <Heading>General</Heading>
          <SubHeader>
            Welcome to the G4M3R dashboard. Here you can edit any and all settings of your
            bot easily.
            <br />
            <br />
            This is the general settings page for your discord server. You can find other
            settings and features to edit on the other pages on the sidebar.
            <br />
            <br />
            Thank you for using G4M3R!
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
          {this.state.category === "Basic" ? (
            <section>
              <Heading2>Overview</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Prefix</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="prefix"
                      query="guild.settings.settings.prefix"
                    />
                  </Box.Body>
                  <Box.Title>Timezone</Box.Title>
                  <Box.Body>
                    <Query query={qTimezone}>
                      {({ loading, error, data }) => {
                        if (loading) return "Loading";
                        if (error) return "Error";
                        let values = cleanUpTimezone(data.listTimezones);

                        return (
                          <Editor.Select
                            values={values}
                            mutate="timezone"
                            query="guild.settings.settings.timezone"
                          />
                        );
                      }}
                    </Query>
                  </Box.Body>
                  <Box.Title>Menu Closing Time</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="menuTime"
                      query="guild.settings.settings.menuTime"
                    />
                  </Box.Body>
                  <Box.Title>Delete Notifications Delay</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="deleteNotificationTime"
                      query="guild.settings.settings.general.deleteNotificationTime"
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>General Settings</Box.Title>
                  <Box.Body>
                    {generalPageToggles.map((opt, index) => {
                      return makeGeneralPageToggle({
                        query: opt.query,
                        mutate: opt.mutate,
                        title: opt.title,
                        key: index,
                      });
                    })}
                  </Box.Body>
                </Box>
              </div>
            </section>
          ) : null}

          {this.state.category === "Feedback" ? (
            <section>
              <Heading2>Overview</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Feedback Channels</Box.Title>
                  <Box.Body>
                    Ideas Channel
                    <Editor.Select
                      propKey={"id"}
                      propFetch={"name"}
                      payloadProp={"guild.channels"}
                      type={"channel"}
                      mutate={"ideaChannel"}
                      query={"guild.settings.settings.feedback.idea.channel"}
                    />
                    <br />
                    Bugs Channel
                    <Editor.Select
                      propKey={"id"}
                      propFetch={"name"}
                      payloadProp={"guild.channels"}
                      type={"channel"}
                      mutate={"bugChannel"}
                      query={"guild.settings.settings.feedback.bug.channel"}
                    />
                  </Box.Body>
                  <Box.Title>Feedback Idea Color</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="ideaColor"
                      query="guild.settings.settings.feedback.idea.color"
                    />
                  </Box.Body>

                  <Box.Title>Feedback Bug Color</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="bugColor"
                      query="guild.settings.settings.feedback.bug.color"
                    />
                  </Box.Body>
                </Box>
                <Box padding>
                  <Box.Title>Feedback Idea Thumbs Up</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="ideaThumbsUp"
                      query="guild.settings.settings.feedback.idea.thumbsUp"
                    />
                  </Box.Body>

                  <Box.Title>Feedback Idea Thumbs Down</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="ideaThumbsDown"
                      query="guild.settings.settings.feedback.idea.thumbsDown"
                    />
                  </Box.Body>

                  <Box.Title>Feedback Bug Thumbs Up</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="bugThumbsUp"
                      query="guild.settings.settings.feedback.bug.thumbsUp"
                    />
                  </Box.Body>

                  <Box.Title>Feedback Bug Thumbs Down</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="bugThumbsDown"
                      query="guild.settings.settings.feedback.bug.thumbsDown"
                    />
                  </Box.Body>
                </Box>
              </div>
            </section>
          ) : null}

          {this.state.category === "Events" ? (
            <section>
              <Heading2>Event Settings</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Duration</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="eventDuration"
                      query="guild.settings.settings.events.duration"
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Max Attendees Allowed</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="maxAttendees"
                      query="guild.settings.settings.events.maxAttendees"
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Game</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="defaultEventGame"
                      query="guild.settings.settings.events.game"
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Reminder Time</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="defaultReminder"
                      query="guild.settings.settings.events.defaultReminder"
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Advertise Channels</Box.Title>
                  <Box.Body>
                    <Editor.Select
                      propKey={"id"}
                      propFetch={"name"}
                      payloadProp={"guild.channels"}
                      type={"channel"}
                      mutate={"advertiseChannel"}
                      query={"guild.settings.settings.events.advertiseChannel"}
                    />
                  </Box.Body>
                </Box>
              </div>
            </section>
          ) : null}
        </Editor>
      </React.Fragment>
    );
  }
}

export default GeneralEditor;
