import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const Text = styled.h2`
  text-align: center;
  font-size: 1.4rem;
`;
const MyDiv = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyLink = styled(Link)`
  color: #0eb5bb;
`;

function MissingPage() {
  return (
    <MyDiv>
      <Text>Woops, something went wrong with the page!</Text>
      <MyLink to="/">
        <Typography variant="h3" align="center">
          Click to go back
        </Typography>
      </MyLink>
    </MyDiv>
  );
}

export default MissingPage;
