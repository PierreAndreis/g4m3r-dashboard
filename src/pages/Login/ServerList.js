import React from "react";
import { Link } from "react-router-dom";

import { inject } from "mobx-react";
import { Query } from "react-apollo";

import { css } from "emotion";
import classNames from "classnames";
import AddCircleIcon from "mdi-react/PlusCircleOutlineIcon";
import LogoutIcon from "mdi-react/LogoutIcon";
import Swiper from "react-id-swiper";
import meQuery from "../../graphql/queries/user/me";

const container = css`
  width: 100%;
  position: relative;
  & h1 {
    font-size: 16px;
    margin: 0;
    color: #363f54;
    font-weight: 700;
  }
  padding-top: 30px;
`;

const userDetails = css`
  position: absolute;
  color: #363f54;
  top: 0;
  right: 0;
  height: 30px;
  display: flex;
  align-items: center;

  font-size: 13px;
  & > img {
    margin: 0 5px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
  }
`;

const logoutButton = css`
  fill: rgba(100, 100, 100, 0.3);
  cursor: pointer;
  transition: 300ms all;

  &:hover {
    fill: black;
  }
`;

const serverSpace = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
  padding: 10px;
  overflow: visible;
  & > * {
    width: 100%;
    height: 110px;
  }
  & .swiper-scrollbar {
    bottom: 0px;
  }
`;

const serverContainer = css`
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 4px;
  width: 90px;
  height: 90px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.1);
  }

  border: 2px solid rgba(100, 100, 100, 0.1);
  background: rgba(255, 255, 255, 0);

  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  & > b {
    font-size: 12px;
    margin-top: auto;
    width: 100%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const emptyContainer = css`
  background: transparent;
  border: 2px dashed rgba(100, 100, 100, 0.1);
  & svg {
    fill: rgba(255, 255, 255, 0.6);
  }
`;

const emptyDescription = css`
  font-size: 13px;
  margin-top: auto;
  color: rgba(255, 255, 255, 0.8);
`;

const Server = ({ image, name, href }) => (
  <Link to={href}>
    <div className={serverContainer}>
      <img src={image} alt={name} />
      <b>{name}</b>
    </div>
  </Link>
);

@inject("authentication")
class ServerList extends React.Component {
  render() {
    const params = {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      slidesPerView: 5,
      rebuildOnUpdate: true,
      spaceBetween: 5,
    };

    return (
      <Query query={meQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            this.props.authentication.setToken(null);
            {/* window.reload(); */}
            return <p>Error!</p>;
          }

          let me = data.me;
          let guilds = me.serverList;

          return (
            <div className={container}>
              <div className={userDetails}>
                Hello, {me.tag}
                <img src={me.displayAvatarURL} alt={me.tag} />
                <LogoutIcon
                  size="16px"
                  className={logoutButton}
                  onClick={() => this.props.authentication.setToken(null)}
                />
              </div>

              <div>
                <h1>My Servers</h1>
                <div className={serverSpace}>
                  <Swiper {...params}>
                    <a
                      href="http://invite.g4m3r.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={classNames(serverContainer, emptyContainer)}>
                        <div>
                          <AddCircleIcon size="36px" />
                        </div>
                        <div className={emptyDescription}>Add Server</div>
                      </div>
                    </a>

                    {guilds.map(guild => (
                      <div key={guild.id}>
                        <Server
                          name={guild.name}
                          image={guild.icon}
                          href={`/g/${guild.id}`}
                        />
                      </div>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ServerList;
