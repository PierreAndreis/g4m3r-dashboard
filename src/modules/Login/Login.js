import React from "react";
import { observer, inject } from "mobx-react";
import Button from "../../components/Button";
import { API_URL, AUTH_URL } from "../../global/constants";

@inject("authentication")
class Login extends React.Component {
  componentDidMount() {
    window.addEventListener("message", this.receiveMessage, true);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.receiveMessage);
  }

  receiveMessage = event => {
    if (event.origin !== API_URL) return;
    if (event.data.apiToken) {
      this.props.authentication.setToken(event.data.apiToken);
    }
  };

  loginWindow = e => {
    e.preventDefault();
    window.open(
      AUTH_URL,
      "discordauth",
      "menubar=no,width=500,height=720,location=no,resizable=no,scrollbars=yes,status=no"
    );
  };

  render() {
    return (
      <React.Fragment>
        <p>To access our dashboard, please login</p>
        <Button onClick={this.loginWindow} big>
          Login with Discord
        </Button>
        <br />
      </React.Fragment>
    );
  }
}

export default Login;
