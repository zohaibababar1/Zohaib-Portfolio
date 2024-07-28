import React from 'react';
import styled from 'styled-components';

const SvgContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const TechnologyBackgroundAnimation = () => (
  <SvgContainer>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M150 150L650 150L650 450L150 450Z"
          stroke="url(#paint0_radial)"
        />
        <path
          d="M200 200L600 200L600 400L200 400Z"
          stroke="url(#paint1_radial)"
        />
        <path
          d="M250 250L550 250L550 350L250 350Z"
          stroke="url(#paint2_radial)"
        />
        <circle cx="100" cy="500" r="50" fill="#B8E3D2">
          <animate
            attributeName="r"
            values="50; 60; 50"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="700" cy="100" r="30" fill="#FFD3E0">
          <animate
            attributeName="r"
            values="30; 45; 30"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="300" cy="400" r="40" fill="#A3D9FF">
          <animate
            attributeName="r"
            values="40; 55; 40"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="150" cy="100" r="25" fill="#FFC0CB">
          <animate
            attributeName="cx"
            values="150; 200; 150"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="500" cy="200" r="20" fill="#C1C6E2">
          <animate
            attributeName="cy"
            values="200; 250; 200"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="350" cy="450" r="15" fill="#D4E6F1">
          <animate
            attributeName="cx"
            values="350; 400; 350"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <ellipse
        cx="400"
        cy="300"
        rx="1.5"
        ry="1.5"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M400 300L375 325"
        stroke="url(#paint3_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="200"
        cy="150"
        rx="1.5"
        ry="1.5"
        fill="#46737"
      >
        <animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_1" />
        </animateMotion>
      </ellipse>
      <path
        d="M200 150L175 175"
        stroke="url(#paint4_linear)"
      >
        <animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_1" />
        </animateMotion>
      </path>
      <ellipse
        cx="600"
        cy="450"
        rx="1.5"
        ry="1.5"
        fill="#13ADC7"
      >
        <animateMotion dur="12s" begin="2" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M600 450L575 475"
        stroke="url(#paint5_linear)"
      >
        <animateMotion dur="12s" begin="2" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_2" />
        </animateMotion>
      </path>
      <g>
        <circle cx="150" cy="50" r="30" fill="#fff">
          <animate
            attributeName="r"
            values="30; 35; 30"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        <rect x="350" y="50" width="50" height="50" fill="#fff">
          <animate
            attributeName="opacity"
            values="1; 0.5; 1"
            dur="8s"
            repeatCount="indefinite"
          />
        </rect>
        <path
          d="M550 50L600 100L550 150Z"
          fill="#fff"
        >
          <animate
            attributeName="transform"
            type="rotate"
            values="0 575 100; 360 575 100"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(400 300) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(400 300) scale(200)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(400 300) scale(100)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear"
          x1="400"
          y1="300"
          x2="375"
          y2="325"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="200"
          y1="150"
          x2="175"
          y2="175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#46737" />
          <stop offset="1" stopColor="#46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="600"
          y1="450"
          x2="575"
          y2="475"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </SvgContainer>
);

export default TechnologyBackgroundAnimation;
