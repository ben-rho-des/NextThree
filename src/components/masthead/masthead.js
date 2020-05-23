import React from 'react';
import styled from 'styled-components';
import Nav from '../nav';
import {Header, Button, Menu} from 'grommet';

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
      <img src="./logo.svg" alt="BRD logo" />
    </div>
    {/* <Header background="brand">
      <Button icon={<div>hello</div>} hoverIndicator />
      <Menu label="account" items={[{ label: 'logout' }]} />
    </Header> */}
    <Nav />
  </StyledMasthead>
);

export default Masthead;
