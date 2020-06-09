import React from 'react';
import styled from 'styled-components';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  font-size: 2vh;
  width: 100%;
  height: 60%;
`;

const OurPic = styled.img`
  width: 100%;
  height: 40%;
`;

function Landscape1({ fields }) {
  return (
    <>
      <OurPic src={fields.pic1}></OurPic>
      <OurText>{fields.text1}</OurText>
    </>
  );
}
export default Landscape1;
