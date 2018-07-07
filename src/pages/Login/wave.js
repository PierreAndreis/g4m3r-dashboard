import React, { Component } from "react";
import { keyframes } from "react-emotion";
import { css } from "emotion";

// I'm a beast for doing this.
// with love, 4ever.

const wave1 = keyframes`
from {
  d: path('M1010.1,64C1137.4,64,1350,0,1350,0H0C0,0,839.3,64,1010.1,64z');
}
to {
  d: path('M287,64C414.3,64,1350,0,1350,0H0C0,0,116.2,64,287,64z');
}
`;

const wave2 = keyframes`
from {
  d: path('M1076.6,118.4C1247.4,118.4,1350,0.2,1350,0.2H0C0,0.2,908.6,118.4,1076.6,118.4z');
}
to {
  d: path('M307.1,118.4C477.8,118.4,1350,0.2,1350,0.2H0C0,0.2,139.5,118.4,307.1,118.4z');
}
`;

const wave3 = keyframes`
from {
  d: path('M317.9,76C467,76,1350,0.2,1350,0.2H0C0,0.2,1,76,317.9,76z');
}
to {
  d: path('M954,76c149,0,396-75.8,396-75.8H0C0,0.2,637,76,954,76z');
}
`;

const wave4 = keyframes`
from {
  d: path('M474,67c168,0,876-66.8,876-66.8H0C0,0.2,168.1,67,474,67z');
}
to {
  d: path('M904,67c168,0,446-66.8,446-66.8H0C0,0.2,598.2,67,904,67z');
}
`;

const wave5 = keyframes`
from {
  d: path('M327,38C478.3,38,1350,0.1,1350,0.1H0C0,0.1,0,38,327,38z');
}
to {
  d: path('M857,38c151.3,0,493-37.9,493-37.9H0C0,0.1,530,38,857,38z');
}
`;

const wave6 = keyframes`
from {
  d: path('M1175,103c169,0,175-102.9,175-102.9H0C0,0.1,1007,103,1175,103z');
}
to {
  d: path('M688,103c169,0,662-102.9,662-102.9H0C0,0.1,520,103,688,103z');
}
`;

const waveContainer = css`
  -webkit-transition: all 2s ease;
  -o-transition: all 2s ease;
  transition: all 2s ease;
  background: white;
  & > svg {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    opacity: 0.3;
  }
  .wave-1 {
    opacity: 1;
    path {
      animation-name: ${wave1};
      animation-direction: alternate;
      animation-duration: 8000ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
    }
  }
  .wave-2 {
    opacity: 0.3;
    path {
      animation-direction: alternate-reverse;
      animation-name: ${wave2};
      animation-duration: 12000ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
    }
  }
  .wave-3 {
    opacity: 0.3;
    path {
      animation-name: ${wave3};
      animation-direction: alternate;
      animation-duration: 9000ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
    }
  }
  .wave-4 {
    opacity: 0.3;
    path {
      animation-name: ${wave4};
      animation-direction: alternate-reverse;
      animation-duration: 11000ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
    }
  }
  .wave-5 {
    opacity: 0.3;
    path {
      animation-name: ${wave5};
      animation-direction: alternate;
      animation-duration: 14000ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
    }
  }
  .wave-6 {
    opacity: 0.3;
    path {
      animation-name: ${wave6};
      animation-direction: alternate-reverse;
      animation-duration: 8000ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
    }
  }
`;

export class Wave extends Component {
  render() {
    return (
      <div className={waveContainer}>
        <svg className="wave-1" version="1.1" x="0px" y="0px" viewBox="0 0 1348 64">
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
          </linearGradient>

          <path
            fill="url(#grad1)"
            d="M304.41667432444626,64C431.7166743244462,64,1350,0,1350,0C1350,0,0,0,0,0C0,0,133.6166743244463,64,304.41667432444626,64C304.41667432444626,64,304.41667432444626,64,304.41667432444626,64"
          />
          <defs />
        </svg>

        <svg className="wave-2" version="1.1" x="0px" y="0px" viewBox="0 0 1350 120">
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
          </linearGradient>

          <path
            fill="url(#grad1)"
            d="M969.1539840603571,118.4C1139.9400209653681,118.4,1350,0.2,1350,0.2C1350,0.2,0,0.2,0,0.2C0,0.2,801.2098364403128,118.4,969.1539840603571,118.4C969.1539840603571,118.4,969.1539840603571,118.4,969.1539840603571,118.4"
          />
          <defs />
        </svg>

        <svg className="wave-3" version="1.1" x="0px" y="0px" viewBox="0 0 1350 76">
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
          </linearGradient>

          <path
            fill="url(#grad1)"
            d="M817.7391102213937,76C966.7605315214689,76,1350,0.20000000000000223,1350,0.20000000000000223C1350,0.20000000000000223,0,0.20000000000000223,0,0.20000000000000223C0,0.2,500.760531521469,76,817.7391102213937,76C817.7391102213937,76,817.7391102213937,76,817.7391102213937,76"
          />
          <defs />
        </svg>

        <svg className="wave-4" version="1.1" x="0px" y="0px" viewBox="0 0 1350 67">
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
          </linearGradient>

          <path
            fill="url(#grad1)"
            d="M599.5721746603626,67C767.5721746603626,67,1350,0.20000000000000284,1350,0.20000000000000284C1350,0.20000000000000284,0,0.20000000000000284,0,0.20000000000000284C0,0.2,293.70137749167895,67,599.5721746603626,67C599.5721746603626,67,599.5721746603626,67,599.5721746603626,67"
          />
          <defs />
        </svg>

        <svg className="wave-5" version="1.1" x="0px" y="0px" viewBox="0 0 1350 38">
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
          </linearGradient>

          <path
            fill="url(#grad1)"
            d="M333.82608636300034,38C485.1260863630003,38,1350,0.10000000000000002,1350,0.10000000000000002C1350,0.10000000000000002,0,0.10000000000000002,0,0.10000000000000002C0,0.1,6.82608636300037,38,333.82608636300034,38C333.82608636300034,38,333.82608636300034,38,333.82608636300034,38"
          />
          <defs />
        </svg>

        <svg className="wave-6" version="1.1" x="0px" y="0px" viewBox="0 0 1350 103">
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
          </linearGradient>

          <path
            fill="url(#grad1)"
            d="M699.7571157309708,103C868.7571157309708,103,1350,0.09999999999999432,1350,0.09999999999999432C1350,0.09999999999999432,0,0.09999999999999432,0,0.09999999999999432C0,0.1,531.7571157309708,103,699.7571157309708,103C699.7571157309708,103,699.7571157309708,103,699.7571157309708,103"
          />
          <defs />
        </svg>
      </div>
    );
  }
}

export default Wave;
