import React from 'react';
import styled from 'styled-components';
import genericBackPage from '../../static/generic_backpage.svg';

const MyDiv = styled.div`
  height: 100%;
  width: 100%;
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
