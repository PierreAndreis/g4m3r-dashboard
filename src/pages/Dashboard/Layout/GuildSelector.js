import React from "react";
import { Query } from "react-apollo";
import { css } from "emotion";
import guildBasic from "../../../graphql/queries/guild/guildBasic";

import { withRouter } from "react-router-dom";
import SwapIcon from "mdi-react/SwapHorizontalIcon";

import ServerList from "../../Login/ServerList";
import Modal from "../../../components/Modal";

const guildSelector = css`
  width: 200px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  display: flex;
  box-sizing: border-box;
  padding: 0px 20px;
  align-items: center;
  margin: 10px auto;

  transition: all 300ms;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  img {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 50%;
  }

  h3 {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    color: white;
    margin: 15px;
  }

  div {
    margin-left: auto;
    color: white;
    font-size: 15px;
  }
`;

class GuildSelector extends React.Component {
  state = {
    open: false,
  };

  toggleModal = () => {
    this.setState(({ open }) => ({
      open: !open,
    }));
  };

  render() {
    const guildId = this.props.match.params.guildId;
    return (
      <React.Fragment>
        <Query query={guildBasic} variables={{ guildId: guildId }}>
          {({ data }) => {
            const guild = data.guild;
            return (
              <div className={guildSelector} onClick={this.toggleModal}>
                <img src={guild.icon} alt={guild.name} />
                <h3>
                  {guild.name} {guild.name} {guild.name} {guild.name} {guild.name}
                </h3>
                <div>
                  <SwapIcon />
                </div>
              </div>
            );
          }}
        </Query>
        <Modal noBox open={this.state.open} onClose={this.toggleModal}>
          <ServerList onSelect={this.toggleModal} />
        </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(GuildSelector);
