import React from "react";
import { css, keyframes } from "emotion";

import Util from "./../../global/Util";

const scaleIn = keyframes`
  to {
    transform: scale(1);
  }
`;

const container = css`
  width: 400px;
  height: 100px;
  ${Util.mq.large(css`
    height: 120px;
  `)}
  ${Util.mq.xLarge(css`
    height: 150px;
  `)}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = css`
  background-image: url("/images/logo.svg");
  background-size: 70%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  align-self: center;
  ${Util.mq.large(css`
    background-size: 80%;
     width: 120px;
    height: 120px;
  `)}
  ${Util.mq.xLarge(css`
    background-size: 80%;
    width: 150px;
    height: 150px;
  `)}
`;

const bg = css`
  position: absolute;
  z-index: -1;
  transform: scale(0);
  animation-name: ${scaleIn};
  animation-duration: 600ms;
  animation-timing-function: cubic-bezier(1, 0.005, 0.535, 1.005);
  animation-fill-mode: both;
`;

export default class LogoWithEffects extends React.Component {
  render() {
    return (
      <div className={container}>
        <svg className={bg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 431">
          <g fill="none" fillRule="evenodd" transform="translate(0 -15)">
            <ellipse
              cx="508.067627"
              cy="240.754822"
              fill="#7A69E6"
              opacity=".2"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#4386FB"
              d="M399.010927 232.240185c.61679 0 1.116796-.500184 1.116796-1.117193 0-.617008-.500006-1.117193-1.116796-1.117193-.616789 0-1.116795.500185-1.116795 1.117193 0 .617009.500006 1.117193 1.116795 1.117193z"
              opacity=".40000001"
            />
            <g fill="#F589CC" transform="translate(445.483 220.037)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="55.3503867"
              cy="98.3515789"
              stroke="#4386FB"
              strokeWidth="1.11999991"
              opacity=".40000001"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="433.022837"
              cy="300.005737"
              fill="#17EBD9"
              opacity=".2"
              rx="3.35038672"
              ry="3.35157895"
            />
            <g fill="#7A69E6" transform="translate(370.438 279.288)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="383.645174"
              cy="252.096872"
              fill="#7A69E6"
              opacity=".2"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#4386FB"
              d="M297.116796 273.234386c.616789 0 1.116795-.500184 1.116795-1.117193 0-.617009-.500006-1.117193-1.116795-1.117193-.61679 0-1.116796.500184-1.116796 1.117193 0 .617009.500006 1.117193 1.116796 1.117193z"
              opacity=".40000001"
            />
            <g fill="#F589CC" transform="translate(321.06 151.38)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="229.632417"
              cy="144.480072"
              stroke="#17EBD9"
              strokeWidth="1.11999991"
              opacity=".40000001"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="325.562445"
              cy="328.309847"
              fill="#F9955E"
              opacity=".2"
              rx="3.35038672"
              ry="3.35157895"
            />
            <g fill="#4386FB" transform="translate(246.016 290.63)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <g fill="#7A69E6" transform="matrix(1 0 0 -1 178.2 276.98)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="112.395176"
              cy="153.966462"
              stroke="#F99F5E"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 307.933)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="3.35038672"
              cy="156.351579"
              fill="#7A69E6"
              opacity=".2"
              transform="matrix(1 0 0 -1 0 312.703)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#4386FB"
              d="M82.3064441 230.085154c.6167892 0 1.1167956.500185 1.1167956 1.117193 0 .617009-.5000064 1.117193-1.1167956 1.117193-.6167891 0-1.1167956-.500184-1.1167956-1.117193 0-.617008.5000065-1.117193 1.1167956-1.117193z"
              opacity=".40000001"
            />
            <g fill="#F589CC" transform="matrix(1 0 0 -1 128.822 229.073)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="37.3503867"
              cy="213.217377"
              stroke="#17EBD9"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 426.435)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="243.350387"
              cy="442.351579"
              fill="#F9955E"
              opacity=".2"
              transform="matrix(1 0 0 -1 0 884.703)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <g fill="#4386FB" transform="matrix(1 0 0 -1 53.31 288.792)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="508.067627"
              cy="240.754822"
              fill="#7A69E6"
              opacity=".2"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#4386FB"
              d="M399.010927 232.240185c.61679 0 1.116796-.500184 1.116796-1.117193 0-.617008-.500006-1.117193-1.116796-1.117193-.616789 0-1.116795.500185-1.116795 1.117193 0 .617009.500006 1.117193 1.116795 1.117193z"
              opacity=".40000001"
            />
            <g fill="#F589CC" transform="translate(445.483 220.037)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="488.350387"
              cy="147.351579"
              stroke="#4386FB"
              strokeWidth="1.11999991"
              opacity=".40000001"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="433.022837"
              cy="300.005737"
              fill="#17EBD9"
              opacity=".2"
              rx="3.35038672"
              ry="3.35157895"
            />
            <g fill="#7A69E6" transform="translate(370.438 279.288)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="383.645174"
              cy="372.096872"
              fill="#7A69E6"
              opacity=".2"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#4386FB"
              d="M274.116796 426.234386c.616789 0 1.116795-.500184 1.116795-1.117193 0-.617009-.500006-1.117193-1.116795-1.117193-.61679 0-1.116796.500184-1.116796 1.117193 0 .617009.500006 1.117193 1.116796 1.117193z"
              opacity=".40000001"
            />
            <g fill="#F589CC" transform="translate(421.06 181.38)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="229.632417"
              cy="344.480072"
              stroke="#17EBD9"
              strokeWidth="1.11999991"
              opacity=".40000001"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="325.562445"
              cy="328.309847"
              fill="#F9955E"
              opacity=".2"
              rx="3.35038672"
              ry="3.35157895"
            />
            <g fill="#4386FB" transform="translate(246.016 290.63)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <g fill="#7A69E6" transform="matrix(1 0 0 -1 8.2 360.98)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.55839779" cy="4.55859649" rx="1" ry="1" />
            </g>
            <ellipse
              cx="112.395176"
              cy="153.966462"
              stroke="#F99F5E"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 307.933)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="175.350387"
              cy="349.351579"
              fill="#7A69E6"
              opacity=".2"
              transform="matrix(1 0 0 -1 0 698.703)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#4386FB"
              d="M82.3064441 230.085154c.6167892 0 1.1167956.500185 1.1167956 1.117193 0 .617009-.5000064 1.117193-1.1167956 1.117193-.6167891 0-1.1167956-.500184-1.1167956-1.117193 0-.617008.5000065-1.117193 1.1167956-1.117193z"
              opacity=".40000001"
            />
            <g fill="#F589CC" transform="matrix(1 0 0 -1 128.822 229.073)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="37.3503867"
              cy="213.217377"
              stroke="#17EBD9"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 426.435)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="109.350387"
              cy="325.351579"
              fill="#F9955E"
              opacity=".2"
              transform="matrix(1 0 0 -1 0 650.703)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <g fill="#4386FB" transform="matrix(1 0 0 -1 53.31 288.792)">
              <ellipse
                cx="4.4671823"
                cy="4.46877193"
                opacity=".14999999"
                rx="4.4671823"
                ry="4.46877193"
              />
              <ellipse cx="4.4671823" cy="4.46877193" rx="1" ry="1" />
            </g>
            <ellipse
              cx="344.31203"
              cy="68.5898101"
              stroke="#F589CC"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 137.18)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#7A69E6"
              d="M393.413589 88.1342911c.616789 0 1.116796.5001843 1.116796 1.117193 0 .6170086-.500007 1.1171929-1.116796 1.1171929-.616789 0-1.116795-.5001843-1.116795-1.1171929 0-.6170087.500006-1.117193 1.116795-1.117193z"
              opacity=".40000001"
            />
            <ellipse cx="360.462574" cy="141.617541" fill="#F589CC" rx="1" ry="1" />
            <ellipse
              cx="269.26724"
              cy="127.840725"
              stroke="#4386FB"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 255.68)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="219.889578"
              cy="79.9318595"
              stroke="#F99F5E"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 159.864)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#7A69E6"
              d="M268.991137 99.47634c.616789 0 1.116795.500184 1.116795 1.117193 0 .6170083-.500006 1.1171926-1.116795 1.1171926-.61679 0-1.116796-.5001843-1.116796-1.1171926 0-.617009.500006-1.117193 1.116796-1.117193z"
              opacity=".40000001"
            />
            <ellipse
              cx="246.350387"
              cy="19.3515789"
              stroke="#F589CC"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 38.703)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#7A69E6"
              d="M393.413589 88.1342911c.616789 0 1.116796.5001843 1.116796 1.117193 0 .6170086-.500007 1.1171929-1.116796 1.1171929-.616789 0-1.116795-.5001843-1.116795-1.1171929 0-.6170087.500006-1.117193 1.116795-1.117193z"
              opacity=".40000001"
            />
            <ellipse cx="360.462574" cy="141.617541" fill="#F589CC" rx="1" ry="1" />
            <ellipse
              cx="269.26724"
              cy="127.840725"
              stroke="#4386FB"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 255.68)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <ellipse
              cx="219.889578"
              cy="79.9318595"
              stroke="#F99F5E"
              strokeWidth="1.11999991"
              opacity=".40000001"
              transform="matrix(1 0 0 -1 0 159.864)"
              rx="3.35038672"
              ry="3.35157895"
            />
            <path
              fill="#7A69E6"
              d="M268.991137 99.47634c.616789 0 1.116795.500184 1.116795 1.117193 0 .6170083-.500006 1.1171926-1.116795 1.1171926-.61679 0-1.116796-.5001843-1.116796-1.1171926 0-.617009.500006-1.117193 1.116796-1.117193z"
              opacity=".40000001"
            />
            <ellipse
              cx="138.90685"
              cy="96.5900923"
              fill="#4386FB"
              opacity=".14999999"
              rx="4.4671823"
              ry="4.46877193"
            />
            <ellipse cx="139.526905" cy="96.6789333" fill="#4386FB" rx="1" ry="1" />
          </g>
        </svg>
        <div className={Logo} />
      </div>
    );
  }
}
