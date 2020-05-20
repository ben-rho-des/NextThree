import React from 'react';
import styled from 'styled-components';
import Nav from '../nav';

const StyledMasthead = styled.header`
  display: flex;
  width: 100%;
  .identity {    
      img {

          width: 120px;
          height: 120px;
      }
  }
  nav {
      flex-grow: 1;
      display: flex;
      justify-content: end;
  }
`;

const Masthead = () => (
  <StyledMasthead>
    <div className="identity">
      <img src="./static/logo.svg" alt="BRD logo" />
    </div>
    <Nav />
  </StyledMasthead>
);

export default Masthead;
