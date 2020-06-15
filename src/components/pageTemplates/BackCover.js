import React from 'react';
import styled from 'styled-components';
import logo from '../../static/pm.png';

// import { Grid } from '@material-ui/core';

const MyDiv = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 30vw;
  height: auto;
  margin: 0 auto;
`;

const Text = styled.h2`
  text-align: center;
  font-size: 1.4rem;
`;

function BackCover() {
  return (
    <MyDiv>
      <Text>Made with the Prepare Me Story Builder</Text>
      <Logo src={logo} />
    </MyDiv>
  );
}

export default BackCover;
