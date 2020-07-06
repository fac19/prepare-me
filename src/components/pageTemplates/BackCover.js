import React from 'react';
import styled from 'styled-components';
// import genericBackPage from '../../static/generic_backpage.svg';

// const OurDiv = styled.div`
//   height: 100%;
//   width: 100%;
// `;

const OurPic = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

function BackCover() {
  return (
    <>
      <OurPic
        alt="This page was made with a prepareme.ie story builder."
        // src={genericBackPage}
        src={
          'https://res.cloudinary.com/didur5psx/image/upload/v1593995254/starting_school/generic_backpage_mlbwlg.jpg'
        }
      ></OurPic>
    </>
  );
}

BackCover.fields = {};

export default BackCover;
