import React from 'react';
import styled from 'styled-components';
import genericBackPage from '../../static/generic_backpage.svg';

// import { Grid } from '@material-ui/core';

const MyDiv = styled.div`
  height: 100%;
  width: 100%100px;
`;

function BackCover() {
  return (
    <MyDiv>
      <img
        alt="This page was made with a prepareme.ie story builder."
        src={genericBackPage}
      />
    </MyDiv>
  );
}

export default BackCover;
