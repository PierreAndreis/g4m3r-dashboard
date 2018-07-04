import React from "react";
import { css } from "emotion";
import { Wave } from "./wave";
import Box from "../../components/Box";
import { API_URL, AUTH_URL } from "../../global/constants";

const style = {
  background: css`
    background-image: linear-gradient(90deg, #74ebd5 0%, #7aaeff 100%);

    height: 100%;
    display: flex;
    position: relative;
    z-index: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
};

const backgroundLogo = css`
  background-image: url("/images/gamer_logo_bg.png");
  background-repeat: no-repeat;
  background-position: center right;
  background-size: contain;

  position: absolute;
  right: 0;
  align-self: center;
  width: 60%;
  height: 60%;
  z-index: -1;
`;

const Logo = css`
  background-image: url("/images/logo.png");
  background-size: 70%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  align-self: center;
  margin-bottom: 20px;
`;

const BoxLogin = css`
  width: 500px;
  height: 200px;
  padding: 10px;
`;

class Login extends React.Component {
  state = {
    auth: "dev"
  };

  componentDidMount() {
    window.addEventListener("message", this.receiveMessage, true);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.receiveMessage);
  }

  receiveMessage = event => {
    if (event.origin !== API_URL) return;
    if (event.data.apiToken) {
      this.setState({
        auth: event.data.apiToken
      });
      global.token = event.data.apiToken;
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
      <div className={style.background}>
        <div className={backgroundLogo} />

        <div className={Logo} />

        <Box center className={BoxLogin}>
          {this.state.auth}
          <button onClick={this.loginWindow}>Login</button>
        </Box>
        <Wave />
      </div>
    );
  }
}

export default Login;
