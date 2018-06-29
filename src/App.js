import React from "react";
import Test from "./test";

const DISCORD_AUTH = `http://localhost:3000/auth/discord/?callback=${
  window.location.origin
}`;

class App extends React.Component {
  state = {
    auth: null
  };

  componentDidMount() {
    const receiveMessage = event => {
      if (event.data.apiToken) {
        this.setState({
          auth: event.data.apiToken
        });
        global.token = event.data.apiToken;
      }
    };

    window.addEventListener("message", receiveMessage, false);
  }

  loginWindow = e => {
    e.preventDefault();
    window.open(
      DISCORD_AUTH,
      "discordauth",
      "menubar=no,width=500,height=720,location=no,resizable=no,scrollbars=yes,status=no"
    );
  };

  render() {
    return (
      <div>
        {this.state.auth}
        <button onClick={this.loginWindow}>Login</button>
        {this.state.auth && <Test />}
      </div>
    );
  }
}

export default App;
