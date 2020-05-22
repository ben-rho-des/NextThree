import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    position: relative;
  }
  li {
    font-size: 14px;
    font-family: din exp;
    letter-spacing: 2px;
    display: inline-block;
    text-transform: uppercase;
    box-sizing: border-box;
    position: relative;
    padding: 30px 0;
    margin-left: -1px;
  }
  a {
    padding: 30px 20px;
    font-family: din exp;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    color: black;
    border: 1px solid white;
  }
  a:hover,
  a:focus {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.dark};
    mix-blend-mode: multiply;
  }
  a:active,
  a:focus:active,
  .is-active a,
  .is-active a:hover,
  .is-active a:active,
  .is-active a:focus {
    mix-blend-mode: multiply;
    background: ${props => props.theme.colors.dark};
    border-color: ${props => props.theme.colors.dark};
    color:white;
  }
  

`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li className="is-active"><a href="#">About</a></li>
      <li><a href="#">Get CV</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </StyledNav>
);

export default Nav;
