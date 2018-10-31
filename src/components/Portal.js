import React from "react";
import ReactDOM from "react-dom";

let portalContainer;

export default class Portal extends React.Component {
  constructor(props) {
    super(props);

    if (!portalContainer) {
      portalContainer = document.createElement("div");
      document.body.appendChild(portalContainer);
    }

    this.el = document.createElement("div");
  }

  componentDidMount() {
    portalContainer && this.el && portalContainer.appendChild(this.el);
  }

  componentWillUnmount() {
    portalContainer && this.el && portalContainer.removeChild(this.el);
  }

  render() {
    if (!this.el) return null;
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
