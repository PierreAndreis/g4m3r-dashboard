import React from "react";
import { Link } from "react-router-dom";

import { Trail, animated } from "react-spring";

import { inject } from "mobx-react";
import { Query, Mutation } from "react-apollo";

import { css } from "emotion";
import AddCircleIcon from "mdi-react/PlusCircleOutlineIcon";
import LogoutIcon from "mdi-react/LogoutIcon";
import meQuery from "../../graphql/queries/user/me";
import reloadServers from "../../graphql/queries/mutations/reloadServers";

import Input from "./../../components/Input";

import { BoxBase } from "./../../components/Box";
import { SearchIcon, ReloadIcon } from "mdi-react";

const AnimatedLink = animated(Link);
// import { mq } from "../../util/breakpoints";

const container = css`
  ${BoxBase};
  width: 100%;
  height: auto;

  align-self: flex-start;
`;

const header = css`
  padding: 15px;
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

// Make a table component!
const table = css`
  width: 100%;

  padding: 15px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  overflow-y: auto;

  & > * {
    box-sizing: border-box;
    position: relative;
    display: flex;
    width: 100%;
    padding: 8px 0;
    padding-right: 8px;

    display: flex;
    align-items: center;

    animation: all 300ms;

    & > .fill {
      flex: 1;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -15px;
      right: -15px;
      height: 100%;
      pointer-events: none;
    }
    &:nth-child(even):before {
      background-color: rgba(14, 30, 37, 0.06);
    }
    &:hover:before {
      background-color: rgba(14, 30, 37, 0.1);
    }
  }

  .table-media {
    margin: 4px 24px 4px 0;
    width: 48px;
    height: 48px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media screen and (max-height: 600px) {
      width: 36px;
      height: 36px;
    }
  }

  h3 {
    margin: 0;
  }
  .meta {
    color: #5d5d5d;
  }
`;

const userDetails = css`
  color: #363f54;
  display: flex;
  align-items: center;
  padding-left: 15px;

  & > img {
    margin: 0 5px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
  }
`;

const logoutButton = css`
  fill: rgba(100, 100, 100, 0.6);
  cursor: pointer;
  transition: 300ms all;

  &:hover {
    fill: black;
  }
`;

const reloadButton = css`
  background-color: rgba(100, 100, 100, 0);
  padding: 0;
  border: 0;
  align-items: center;
  cursor: pointer;
`;

const reloadIcon = css`
  ${logoutButton}
  padding-top: 2px;
`;

const reloadIconLoading = css`
  ${logoutButton}
  padding-top: 2px;
  fill: rgba(255, 0, 0, 0.6);
`;

@inject("authentication")
class ServerList extends React.Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <Query query={meQuery}>
        {({ loading, error, data }) => {
          if (error) {
            this.props.authentication.setToken(null);
            return <p>Error! Please refresh the page. (temporary)</p>;
          }

          if (loading) {
            return (
              <div className={container}>
                <p>Loading...</p>
              </div>
            );
          }

          let me = data.me;
          let guilds = [
            // First those servers that we are the owner
            ...me.serverList.filter(g => g && g.ownerId === me.id),
            // Then those that we are just administrator
            ...me.serverList.filter(g => g && g.ownerId !== me.id),
          ];

          if (value)
            guilds = guilds.filter(
              g => g.name.toLowerCase().includes(value.toLowerCase()) || g.id === value
            );

          return (
            <div className={container}>
              <div className={header}>
                <div style={{ flex: 1, width: "100%" }}>
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Search for a guild"
                    value={this.state.value}
                    onChange={this.onChange}
                    icon={{ left: SearchIcon }}
                  />
                </div>
                <div className={userDetails}>
                  Hello, {me.tag}
                  <img src={me.displayAvatarURL} alt={me.tag} />
                  <LogoutIcon
                    size="21px"
                    className={logoutButton}
                    onClick={() => this.props.authentication.setToken(null)}
                  />
                  <Mutation
                    mutation={reloadServers}
                    onCompleted={(data) => this.props.authentication.setToken(data.reload.token)}
                  >
                    {(reloadServers, { loading }) => (
                      <button 
                      className={reloadButton}
                      disabled={loading}
                      onClick={() => reloadServers()}
                      >
                          <ReloadIcon
                          size="21px"
                          className={loading ? reloadIconLoading : reloadIcon}
                        />
                      </button>
                      )
                    }
                  </Mutation>
                </div>
              </div>

              <div className={table}>
                <a
                  href="http://invite.g4m3r.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="table-media">
                    <AddCircleIcon size={"100%"} color="grey" />
                  </div>
                  <div className="table-body fill">
                    <h3>Add an server</h3>
                    <div className="meta">Click here to invite G4M3R to a server</div>
                  </div>
                </a>
                <Trail
                  native
                  items={guilds}
                  keys={guild => guild.id}
                  duration={300}
                  from={{ opacity: 0, transform: "translate3d(-40px,0,0)" }}
                  to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
                >
                  {guild => style => (
                    <AnimatedLink to={`/g/${guild.id}`} style={style}>
                      <div className="table-media">
                        <img
                          src={
                            guild.icon ||
                            "https://cdn.g4m3r.xyz/img/backgrounds/discord.png"
                          }
                          alt={guild.name}
                        />
                      </div>
                      <div className="table-body fill">
                        <h3>{guild.name}</h3>
                        <div className="meta">{guild.memberCount} members </div>
                      </div>
                      <div className="table-body">
                        {guild.ownerId === me.id && (
                          <span style={{ color: "red" }}>Owner</span>
                        )}
                      </div>
                    </AnimatedLink>
                  )}
                </Trail>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ServerList;
