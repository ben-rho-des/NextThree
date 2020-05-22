import React from 'react';
import styled from 'styled-components';
import { blink, fadeIn } from '../keyframes';

const StyledSocial = styled.footer`
    animation-name: ${fadeIn};
    animation-duration: 2s;
    animation-timing-function:ease-in;

    ul {
      position: absolute;
      bottom: 250px;
      right: -170px;
      transform: rotate(270deg);
      mix-blend-mode: multiply;
    }
    li {
        font-size: 14px;
        font-family: din exp;
        letter-spacing: 2px;
        display: inline-block;
        text-transform: uppercase;
        overflow:hidden;
        padding: 30px 10px;
        box-sizing: border-box;
        position: relative;
        
        &:after {
            content: '_';
            position: absolute;
            right: 17px;
            opacity: 0;
        }
        &:hover {
            &:after {
                animation-name: ${blink};
                animation-duration: 0.6s;
                animation-iteration-count:infinite;
                animation-timing-function:ease-in-out;
                animation-delay: 350ms;
            }
        }
    }
    a {
        text-decoration: none;
        color: black;
        padding: 10px 20px;
        position: relative;
        
        &:before,
        &:after {
            background: ${props => props.theme.colors.primary};
            content: '';
            position: absolute;
            z-index: -1;
            transition-duration: 300ms;
            transition-property: left;
            left: -120%;
        }
        &:before {
            top: 0;
            height: 30%;
            transition-delay: 100ms;
            width: 95%;
        }
        &:after {
            bottom: 0;
            height: 70%;
            width: 100%;
            border-bottom: 2px solid rgba(0,0,0,0.1);
        }
        &:hover {
            &:before {
                left: 0;
            }
            &:after {
                left: 0;
            }
        }
    }
`;

const Social = () => (
  <StyledSocial>
    <ul>
      <li><a href="#">Github</a></li>
      <li><a href="#">Codepen</a></li>
      <li><a href="#">Twitter</a></li>
    </ul>
  </StyledSocial>
);

export default Social;
