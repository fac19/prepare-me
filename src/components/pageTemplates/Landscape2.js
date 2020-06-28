import React from 'react';
import styled from 'styled-components';
import editHandler from './editHandler';
import SiteContext from '../../model/SiteContext';
import uploadImageHandler from './uploadImageHandler';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  width: 100%;
  height: 25%;
  resize: none;
  border: 0;
`;

const OurPic = styled.img`
  width: 100%;
  height: 25%;
  object-fit: contain;
`;

function Landscape2({ pageNumber, fields, active = true }) {
  const [, dispatch] = React.useContext(SiteContext);
  return (
    <>
      <OurPic
        src={fields.pic1}
        id="pic1"
        onClick={(e) => active && uploadImageHandler(e, pageNumber, dispatch)}
      ></OurPic>
      <OurText
        id="text1"
        data-cy="text1"
        value={fields.text1}
        onChange={(e) => editHandler(e, pageNumber, dispatch)}
        disabled={!active}
      ></OurText>
      <OurPic
        src={fields.pic2}
        id="pic2"
        onClick={(e) => active && uploadImageHandler(e, pageNumber, dispatch)}
      ></OurPic>
      <OurText
        id="text2"
        data-cy="text2"
        value={fields.text2}
        onChange={(e) => editHandler(e, pageNumber, dispatch)}
        disabled={!active}
      ></OurText>
    </>
  );
}

Landscape2.fields = {
  pic1:
    'https://res.cloudinary.com/didur5psx/image/upload/v1591714780/starting_school/yourpic_rjemqq.jpg',
  text1: 'Click to edit text',
  pic2:
    'https://res.cloudinary.com/didur5psx/image/upload/v1591714780/starting_school/yourpic_rjemqq.jpg',
  text2: 'Click to edit text',
};

export default Landscape2;
